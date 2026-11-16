// Génère une feuille de style Tailwind par page : assets/tw/<page>.css
// Usage : cd outils/tailwind && npm install (une fois) && node build.cjs [--verifier] [page.html ...]
//   --verifier : ne modifie rien, signale les pages dont la feuille n'est plus à jour (code de sortie 1)
// Une page est concernée si elle contient le lien <link ... data-tw ...> (ou encore l'ancien script cdn.tailwindcss.com).
// Ses réglages restent dans la page : « tailwind.config = { … } ».
// Classes fabriquées par le code (ex. 'bg-' + couleur + '-500') : les écrire en entier dans la page,
// dans un commentaire  /* tw-safelist: bg-red-500 bg-blue-500 */  pour qu'elles soient générées.
const fs = require('fs'), path = require('path');
const postcss = require('postcss'), tailwind = require('tailwindcss'), autoprefixer = require('autoprefixer'), cssnano = require('cssnano');
const ROOT = path.resolve(__dirname, '..', '..');
const args = process.argv.slice(2);
const CHECK = args.includes('--verifier');
const only = args.filter(a => !a.startsWith('--')).map(a => a.normalize('NFC'));

function pages() {
  const out = [];
  const dirs = ['', 'fiches'].concat(fs.readdirSync(ROOT).filter(d => /^CEB /.test(d) && fs.statSync(path.join(ROOT, d)).isDirectory()));
  for (const dir of dirs) {
    for (const f of fs.readdirSync(path.join(ROOT, dir))) {
      if (!f.endsWith('.html')) continue;
      const rel = dir ? dir + '/' + f : f;
      const s = fs.readFileSync(path.join(ROOT, rel), 'utf8');
      if (/<link[^>]*data-tw[^>]*>/.test(s) || s.includes('cdn.tailwindcss.com') || /<script src="tailwind\.min\.js">/.test(s)) out.push(rel);
    }
  }
  return out.sort();
}
function configOf(s, rel) {
  const i = s.search(/tailwind\.config\s*=\s*\{/);
  if (i < 0) return {};
  let j = s.indexOf('{', i), depth = 0, k = j, str = null;
  for (; k < s.length; k++) {
    const c = s[k];
    if (str) { if (c === '\\') k++; else if (c === str) str = null; continue; }
    if (c === '"' || c === "'" || c === '`') str = c;
    else if (c === '{') depth++;
    else if (c === '}' && --depth === 0) break;
  }
  try { return new Function('return (' + s.slice(j, k + 1) + ')')(); }
  catch (e) { throw new Error('Réglages Tailwind illisibles dans ' + rel + ' : ' + e.message); }
}
function localScripts(s, rel) {
  const out = [], re = /<script[^>]*\ssrc="([^"]+)"|\.src\s*=\s*['"]([^'"]+\.js)['"]/g; let m;
  while ((m = re.exec(s))) {
    const src = (m[1] || m[2]).split('?')[0];
    if (/^(https?:)?\/\//.test(src) || /\.min\.js$/.test(src)) continue;
    const p = path.join(ROOT, path.dirname(rel), decodeURIComponent(src));
    if (fs.existsSync(p)) out.push(p);
  }
  return out;
}
// Les pages des dossiers « CEB … » ont leur feuille dans assets/tw/ceb/ (pas d'accent ni de « : » dans l'adresse)
const cssName = rel => 'assets/tw/' + (/^CEB /.test(rel) ? 'ceb/' + path.basename(rel) : rel).replace(/\.html$/, '.css');

(async () => {
  let stale = 0, n = 0;
  for (const rel of pages()) {
    if (only.length && !only.includes(rel.normalize('NFC'))) continue;
    const s = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    const cfg = configOf(s, rel);
    const content = [{ raw: s, extension: 'html' }];
    for (const p of localScripts(s, rel)) content.push({ raw: fs.readFileSync(p, 'utf8'), extension: 'html' });
    const res = await postcss([tailwind({ ...cfg, content }), autoprefixer({ remove: false }), cssnano({ preset: ['default', { discardComments: { removeAll: true }, minifyGradients: false }] })])
      .process('@tailwind base;@tailwind components;@tailwind utilities;', { from: undefined });
    const css = '/* Généré par outils/tailwind/build.cjs à partir de ' + rel + ' — ne pas modifier à la main */\n' + res.css + '\n';
    const out = path.join(ROOT, cssName(rel));
    const old = fs.existsSync(out) ? fs.readFileSync(out, 'utf8') : null;
    n++;
    if (old === css) continue;
    stale++;
    if (CHECK) { console.log('PAS À JOUR : ' + rel); continue; }
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, css);
    console.log((old === null ? 'créé    ' : 'mis à jour ') + cssName(rel) + '  ' + Math.round(css.length / 1024) + ' Ko');
  }
  console.log(n + ' page(s) contrôlée(s), ' + stale + (CHECK ? ' pas à jour' : ' feuille(s) écrite(s)'));
  if (CHECK && stale) process.exit(1);
})().catch(e => { console.error(e.message); process.exit(2); });
