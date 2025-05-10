# Portfolio de Gilles-Christ Hounkanrin

Un portfolio professionnel responsive avec mode clair/sombre pour présenter mes compétences, projets et informations de contact.

## Fonctionnalités

- Design responsive pour tous les appareils
- Mode clair et sombre (avec thème bleu ciel)
- Sections complètes : About, Skills, Projects, Contact
- Animations et transitions fluides
- Intégration GitHub
- Facilement personnalisable

## Comment utiliser ce projet

### Installation et démarrage

1. Clonez ce dépôt
2. Installez les dépendances:
   ```bash
   npm install
   ```
3. Lancez le serveur de développement:
   ```bash
   npm run dev
   ```
4. Pour construire pour la production:
   ```bash
   npm run build
   ```

## Personnalisation du portfolio

### Modifier les informations personnelles

Pour mettre à jour vos informations personnelles, modifiez le fichier `src/data/personalInfo.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Votre Nom',
  title: 'Votre Titre',
  email: 'votre.email@example.com',
  // ...autres informations
};
```

### Ajouter/Modifier des projets

Pour ajouter ou modifier des projets, modifiez le fichier `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'projet-id',
    title: 'Titre du Projet',
    description: 'Description du projet...',
    image: 'URL de l\'image',
    link: 'URL de démonstration',
    github: 'URL du dépôt GitHub',
    technologies: ['Tech1', 'Tech2', 'Tech3']
  },
  // Ajoutez d'autres projets ici
];
```

### Modifier les compétences

Pour mettre à jour vos compétences, modifiez le fichier `src/data/skills.ts`:

```typescript
export const skills: Skill[] = [
  { name: 'JavaScript', type: 'technical' },
  { name: 'React', type: 'technical' },
  // Ajoutez d'autres compétences techniques
  
  { name: 'Communication', type: 'general' },
  // Ajoutez d'autres compétences générales
];
```

### Modifier les expériences et l'éducation

Vous pouvez mettre à jour vos expériences et éducation dans les fichiers:
- `src/data/experience.ts`
- `src/data/education.ts`

### Personnaliser les couleurs et thèmes

Pour modifier les couleurs du thème, modifiez le fichier `tailwind.config.js`:

1. Changez les couleurs primaires pour personnaliser l'apparence principale:
   ```js
   primary: {
     50: '#f0f9ff',  // Couleur la plus claire
     // ...autres nuances
     900: '#0c4a6e', // Couleur la plus foncée
   }
   ```

2. Changez les couleurs du mode sombre:
   ```js
   dark: {
     // Différentes nuances pour le mode sombre
   }
   ```

## Déploiement

### Déployer sur Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Depuis le dashboard Netlify, cliquez sur "New site from Git"
3. Choisissez GitHub et sélectionnez votre dépôt
4. Pour les paramètres de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Cliquez sur "Deploy site"


## Structure du projet

```
portfolio/
├── public/             # Ressources statiques
├── src/
│   ├── components/     # Composants React
│   ├── context/        # Context pour le thème
│   ├── data/           # Données du portfolio (projets, skills, etc.)
│   ├── types/          # Définitions TypeScript
│   ├── App.tsx         # Composant principal
│   └── main.tsx        # Point d'entrée
├── index.html          # Template HTML
└── README.md           # Documentation
```

## Ajouter des animations avancées

Pour ajouter des animations plus avancées (comme des animations 3D avec Three.js), vous pouvez:

1. Installer Three.js:
   ```bash
   npm install three @react-three/fiber @react-three/drei
   ```

2. Créer un nouveau composant dans `src/components/ThreeAnimation.tsx`

3. Intégrer ce composant dans les cartes de projet ou d'autres sections appropriées

## Licence

Ce projet est sous licence MIT.

---

Créé avec ❤️ par Gilles-Christ Hounkanrin