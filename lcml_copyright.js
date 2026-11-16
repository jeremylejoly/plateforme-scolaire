/* © 2026 Jérémy Lejoly — LCML. Reproduction interdite sans autorisation.
 * Mention de droits d'auteur affichée en bas à droite de chaque page.
 * Pour changer le texte partout : modifier TEXTE ci-dessous (et incrémenter VERSION dans sw.js).
 * Dans la visionneuse du site (index.html), la page intégrée n'affiche rien :
 * c'est index.html qui affiche la mention, une seule fois. */
(function () {
  var TEXTE = '© 2026 Jérémy Lejoly — LCML. Reproduction interdite sans autorisation.';
  try {
    if (window.top !== window.self && window.top.document.getElementById('lcml-copyright')) return;
  } catch (e) { /* page intégrée ailleurs : on affiche */ }
  function poser() {
    if (document.getElementById('lcml-copyright') || !document.body) return;
    var d = document.createElement('div');
    d.id = 'lcml-copyright';
    d.textContent = TEXTE;
    d.setAttribute('aria-hidden', 'true');
    d.style.cssText = 'position:fixed;right:6px;bottom:4px;z-index:2147483000;pointer-events:none;' +
      'font:600 10px/1.3 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#555;' +
      'background:rgba(255,255,255,.7);padding:1px 6px;border-radius:6px;opacity:.75;' +
      'white-space:nowrap;max-width:calc(100vw - 12px);overflow:hidden;text-overflow:ellipsis;';
    document.body.appendChild(d);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', poser);
  else poser();
})();
