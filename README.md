# Portfolio — Ekko

Portfolio personnel codé en HTML, CSS et JavaScript purs (aucun framework, aucune étape de build),
prêt à être déployé sur **Cloudflare Pages** depuis un dépôt **GitHub**.

## Structure du projet

```
portfolio/
├── index.html          # Page unique : Accueil, À propos, Compétences, Projets, Contact
├── css/
│   └── style.css        # Tous les styles (variables, layout, responsive)
├── js/
│   └── script.js        # Menu mobile, scroll actif, animations, formulaire
├── images/
│   └── projets/          # Mets ici les visuels de tes projets
└── README.md
```

## À personnaliser en priorité

1. **`index.html`**
   - Remplace les 3 cartes projets par tes vrais projets (SAÉ, projets perso, stages).
   - Mets ton vrai email et tes liens GitHub / LinkedIn dans la section Contact.
   - Ajuste le texte de la section « À propos ».
2. **`css/style.css`** — les couleurs sont définies en haut du fichier dans `:root` (variables
   `--color-accent`, `--color-bg`, etc.) si tu veux changer la palette.
3. **Favicon** — remplace le favicon vide par une vraie icône si tu en as une.

## Tester en local

Pas besoin d'installer quoi que ce soit : ouvre simplement `index.html` dans ton navigateur.
Pour un rendu plus proche de la prod (rechargement à chaud, pas de soucis de CORS), tu peux
aussi utiliser l'extension VS Code **Live Server**.

## Déploiement — GitHub + Cloudflare Pages

### 1. Créer le dépôt sur GitHub

Sur [github.com](https://github.com), clique sur **New repository** :
- Nom : `portfolio` (ou ce que tu préfères)
- Public (recommandé, pour que ton code soit visible)
- Ne coche aucune case d'initialisation (pas de README/gitignore, on les a déjà)

### 2. Pousser le projet depuis ton ordinateur

Dans le dossier `portfolio/`, ouvre un terminal et exécute :

```bash
git init
git add .
git commit -m "Premier commit : structure du portfolio"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/portfolio.git
git push -u origin main
```

(Remplace `TON-PSEUDO` par ton pseudo GitHub et adapte l'URL si besoin.)

### 3. Connecter le dépôt à Cloudflare Pages

1. Va sur le [dashboard Cloudflare](https://dash.cloudflare.com/), section **Workers & Pages**.
2. Clique sur **Create application** → onglet **Pages** → **Connect to Git**.
3. Autorise Cloudflare à accéder à GitHub si ce n'est pas déjà fait, puis sélectionne le
   dépôt `portfolio`.
4. Configuration du build :
   - **Framework preset** : `None`
   - **Build command** : *(laisser vide)*
   - **Build output directory** : `/`
5. Clique sur **Save and Deploy**.

Cloudflare build et déploie le site en quelques secondes. Tu obtiens une URL du type
`https://portfolio-xxx.pages.dev`.

### 4. Redéploiements automatiques

À partir de maintenant, chaque `git push` sur la branche `main` déclenche automatiquement un
nouveau déploiement sur Cloudflare Pages — rien d'autre à faire.

### 5. (Optionnel) Nom de domaine personnalisé

Dans le projet Cloudflare Pages → onglet **Custom domains**, tu peux relier un nom de domaine
que tu possèdes (ou en acheter un via Cloudflare Registrar) et Cloudflare configure le DNS et
le certificat SSL automatiquement.

## Formulaire de contact

Le formulaire de la section Contact fonctionne côté client uniquement pour l'instant (il
affiche une confirmation mais n'envoie pas réellement d'email). Pour qu'il envoie vraiment des
messages une fois le site en ligne, deux options gratuites simples :

- **[Web3Forms](https://web3forms.com/)** ou **[Formspree](https://formspree.io/)** : tu crées
  un compte gratuit, tu récupères une URL, et tu changes juste l'attribut `action` du
  `<form>` dans `index.html`.
- **Cloudflare Pages Functions** : plus avancé, permet d'écrire une petite fonction serverless
  gratuite directement dans le projet (dossier `functions/`) pour traiter l'envoi.

## Idées d'amélioration

- Ajouter de vraies captures d'écran/GIF de tes projets dans `images/projets/`.
- Ajouter une section « Formation » avec une frise chronologique (BTS SIO, stages).
- Ajouter un mode clair/sombre (actuellement le site est en thème sombre par défaut).
- Ajouter un lien vers un CV téléchargeable (PDF).
