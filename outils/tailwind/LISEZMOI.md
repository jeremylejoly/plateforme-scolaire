# Feuilles de style Tailwind du site

Depuis le 16/11/2026, le site ne charge plus `cdn.tailwindcss.com` (un compilateur qui recréait
la mise en forme dans le navigateur à chaque ouverture de page). Chaque page a sa propre feuille
de style, générée une fois : `assets/tw/<page>.css` (`assets/tw/fiches/…`, `assets/tw/ceb/…`).

## Quand régénérer ?
Chaque fois qu'on modifie une page qui utilise Tailwind (dont `index.html`) ou un script qu'elle
charge (`livres.js`, `exercices_*.js`…). Sinon une classe nouvelle (ex. `bg-teal-300`) reste sans effet.

    cd outils/tailwind
    npm install        # une seule fois
    node build.cjs     # régénère seulement ce qui a changé (7 secondes)

`node build.cjs --verifier` ne modifie rien et signale les pages dont la feuille n'est plus à jour.
Le crochet git `pre-commit` (copie dans `outils/tailwind/pre-commit`) lance la régénération à chaque commit.

## Nouvelle page qui utilise Tailwind
Dans le `<head>` :

    <script>window.tailwind = { config: {} };</script>
    <script>tailwind.config = { … }</script>            (facultatif : réglages de la page)
    …
    <link rel="stylesheet" data-tw href="../assets/tw/fiches/ma-page.css">   (juste avant </head>)

Puis `node build.cjs`. Ne plus écrire `<script src="https://cdn.tailwindcss.com">`.

## Classes fabriquées par le code
Le générateur lit le texte de la page : une classe doit y être écrite en entier.
`'bg-' + couleur + '-500'` ne sera pas trouvée. Écrire les classes complètes, ou les lister dans
un commentaire de la page : `/* tw-safelist: bg-red-500 bg-blue-500 */`.
