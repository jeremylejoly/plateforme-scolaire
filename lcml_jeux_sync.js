/* LCML — progression des jeux EN LIGNE, par élève (16/10/2026)
   Les tablettes de classe changent d'un jour à l'autre : une progression gardée seulement
   sur la tablette était perdue (une élève retombait au niveau 1 dans Flux connecté).
   Chaque jeu garde sa sauvegarde locale (clé « préfixe_classe_élève ») ; ce fichier la
   recopie dans Firebase (game_progress/classe/élève/jeu, via le site parent) et fusionne
   les deux en gardant toujours le plus avancé.

   Utilisation dans un jeu :
     var sync = LCMLSync.create({ game:'id_du_jeu', prefix:'cle_locale', merge: LCMLSync.levels,
                                  onChange: function(){ ...recharger depuis localStorage et réafficher... } });
     LCMLSync.key('cle_locale')  → clé localStorage de l'élève connecté (à utiliser à chaque lecture/écriture)
     sync.push()                 → à appeler juste après chaque enregistrement local
   La synchronisation se fait au chargement et à chaque retour sur l'écran du jeu (lcmlOnShow). */
(function(){
  function parentWin(){ try { var w = window.parent; return (w && w !== window) ? w : null; } catch(e) { return null; } }
  function student(){
    try { var p = parentWin(), st = p && p.state; if (st && st.student) return { name: st.student, cls: st.studentCls || '', online: st.role === 'student' }; } catch(e) {}
    return null;
  }
  function key(prefix){ var s = student(); return s ? prefix + '_' + s.cls + '_' + s.name : prefix; }
  function read(k){ try { var r = localStorage.getItem(k); return r == null ? null : JSON.parse(r); } catch(e) { return null; } }
  function write(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {} }
  function eq(a, b){ return JSON.stringify(a) === JSON.stringify(b); }
  function isNum(x){ return typeof x === 'number' && isFinite(x); }

  // Firebase renvoie parfois un objet {0:..,1:..} à la place d'un tableau (et inversement)
  function entries(o){ var out = {}; if (o && typeof o === 'object') Object.keys(o).forEach(function(k){ if (o[k] != null) out[k] = o[k]; }); return out; }

  var M = {
    // Nombre : le plus grand (meilleur score)
    max: function(a, b){ a = Number(a); b = Number(b); return isNum(a) && isNum(b) ? Math.max(a, b) : (isNum(a) ? a : b); },
    // Nombre : le plus petit (meilleur temps, moins d'essais)
    min: function(a, b){ a = Number(a); b = Number(b); return isNum(a) && isNum(b) ? Math.min(a, b) : (isNum(a) ? a : b); },
    // Liste : réunion sans doublon
    union: function(a, b){
      var out = [], seen = {};
      [].concat(Array.isArray(a) ? a : Object.values(entries(a)), Array.isArray(b) ? b : Object.values(entries(b))).forEach(function(x){
        var k = JSON.stringify(x); if (!seen[k]) { seen[k] = 1; out.push(x); }
      });
      return out;
    },
    // Objet : fusion clé par clé avec la règle donnée (ex. LCMLSync.perKey(LCMLSync.min))
    perKey: function(rule){
      return function(a, b){
        var A = entries(a), B = entries(b), out = {};
        Object.keys(A).concat(Object.keys(B)).forEach(function(k){
          out[k] = (k in A && k in B) ? rule(A[k], B[k]) : (k in A ? A[k] : B[k]);
        });
        return out;
      };
    },
    // Vrai l'emporte (niveau réussi)
    or: function(a, b){ return !!a || !!b; },
    // Progression à niveaux { unlocked: n, completed: [bool...] }
    levels: function(a, b){
      a = a || {}; b = b || {};
      var ca = entries(a.completed), cb = entries(b.completed), n = 0;
      Object.keys(ca).concat(Object.keys(cb)).forEach(function(k){ n = Math.max(n, Number(k) + 1); });
      var completed = []; for (var i = 0; i < n; i++) completed.push(!!ca[i] || !!cb[i]);
      var out = {}; Object.keys(a).forEach(function(k){ out[k] = a[k]; }); Object.keys(b).forEach(function(k){ if (!(k in out)) out[k] = b[k]; });
      out.unlocked = Math.max(Number(a.unlocked) || 0, Number(b.unlocked) || 0);
      out.completed = completed;
      return out;
    }
  };

  var syncs = [];
  function create(opt){
    // opt.key : fonction facultative qui donne la clé locale (jeux dont la clé n'a pas la forme « préfixe_classe_élève »)
    function k0(){ return opt.key ? opt.key() : key(opt.prefix); }
    var lastKey = k0();
    var s = {
      key: k0,
      push: function(){
        var st = student(), p = parentWin();
        if (!st || !st.online || !p || typeof p.FB_saveGameProgress !== 'function') return;
        var v = read(k0()); if (v != null) p.FB_saveGameProgress(opt.game, v);
      },
      pull: function(){
        var k = k0();
        if (k !== lastKey) { lastKey = k; try { opt.onChange && opt.onChange(); } catch(e) {} } // autre élève : recharger sa progression locale
        var st = student(), p = parentWin();
        if (!st || !st.online || !p || typeof p.FB_loadGameProgress !== 'function') return;
        Promise.resolve(p.FB_loadGameProgress(opt.game)).then(function(remote){
          if (k0() !== k) return; // l'élève a changé entre-temps
          var local = read(k);
          var merged = remote == null ? local : (local == null ? remote : opt.merge(local, remote));
          if (merged == null) return;
          if (!eq(merged, local)) { write(k, merged); try { opt.onChange && opt.onChange(); } catch(e) {} }
          if (!eq(merged, remote)) p.FB_saveGameProgress(opt.game, merged); // progrès faits hors ligne → envoyés
        }).catch(function(){});
      }
    };
    syncs.push(s);
    setTimeout(s.pull, 0);
    return s;
  }

  // Groupe de clés « préfixe…_classe_élève » (records par niveau, par grille…) synchronisées
  // ensemble sous un seul nœud en ligne. merge = règle pour UNE valeur (LCMLSync.min, max…).
  function encodeK(inner){ return 'k' + encodeURIComponent(inner).replace(/\./g, '%2E'); }
  function decodeK(fk){ try { return decodeURIComponent(fk.slice(1)); } catch(e) { return null; } }
  function createGroup(opt){
    function suffix(){ var st = student(); return st ? '_' + st.cls + '_' + st.name : null; }
    function collect(){
      var sf = suffix(), out = {}; if (!sf) return out;
      try {
        for (var i = 0; i < localStorage.length; i++) {
          var k = localStorage.key(i);
          if (k && k.length >= opt.prefix.length + sf.length && k.indexOf(opt.prefix) === 0 && k.slice(-sf.length) === sf) {
            var raw = localStorage.getItem(k), v;
            try { v = JSON.parse(raw); } catch(e) { v = raw; }
            if (v != null) out[encodeK(k.slice(opt.prefix.length, k.length - sf.length))] = v;
          }
        }
      } catch(e) {}
      return out;
    }
    var s = {
      key: function(){ return opt.prefix + '*' + (suffix() || ''); },
      push: function(){
        var st = student(), p = parentWin();
        if (!st || !st.online || !p || typeof p.FB_saveGameProgress !== 'function') return;
        var obj = collect(); if (Object.keys(obj).length) p.FB_saveGameProgress(opt.game, obj);
      },
      pull: function(){
        var st = student(), p = parentWin(), sf = suffix();
        if (!st || !st.online || !p || typeof p.FB_loadGameProgress !== 'function') return;
        Promise.resolve(p.FB_loadGameProgress(opt.game)).then(function(remote){
          if (suffix() !== sf) return;
          var local = collect(), R = entries(remote), changed = false, merged = {};
          Object.keys(local).concat(Object.keys(R)).forEach(function(fk){
            merged[fk] = (fk in local && fk in R) ? opt.merge(local[fk], R[fk]) : (fk in local ? local[fk] : R[fk]);
          });
          Object.keys(merged).forEach(function(fk){
            if (!eq(merged[fk], local[fk])) {
              var inner = decodeK(fk); if (inner == null) return;
              write(opt.prefix + inner + sf, merged[fk]); changed = true;
            }
          });
          if (changed) { try { opt.onChange && opt.onChange(); } catch(e) {} }
          if (!eq(merged, R)) p.FB_saveGameProgress(opt.game, merged);
        }).catch(function(){});
      }
    };
    syncs.push(s);
    setTimeout(s.pull, 0);
    return s;
  }

  // Retour sur l'écran du jeu (le site appelle lcmlOnShow) : resynchroniser.
  var previousOnShow = window.lcmlOnShow;
  window.lcmlOnShow = function(){
    syncs.forEach(function(s){ s.pull(); });
    if (typeof previousOnShow === 'function') { try { previousOnShow(); } catch(e) {} }
  };

  window.LCMLSync = { create: create, createGroup: createGroup, key: key, max: M.max, min: M.min, union: M.union, perKey: M.perKey, or: M.or, levels: M.levels };
})();
