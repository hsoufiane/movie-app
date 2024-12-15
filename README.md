# Projet de Film App

## À propos du projet

Ce projet est une application web moderne développée à partir de zéro, utilisant les dernières technologies React et Next.js. L'application est conçue pour [brève description de l'objectif de l'application, par exemple : permettre aux utilisateurs de rechercher et d'explorer une vaste collection de films].

## Technologies utilisées

- **React 19.0.0** : La dernière version de la bibliothèque React pour la construction d'interfaces utilisateur.
- **Next.js 15.1.0** : Framework React pour la production, offrant des fonctionnalités comme le rendu côté serveur et la génération de sites statiques.
- **TypeScript** : Superset typé de JavaScript, améliorant la maintenabilité et la robustesse du code.
- **Tailwind CSS 3.3.2** : Framework CSS utilitaire pour un développement rapide et personnalisable.
- **Axios** : Client HTTP basé sur les promesses pour le navigateur et Node.js.
- **React Query** : Bibliothèque pour la gestion de l'état côté serveur dans React.
- **Cypress** : Framework de test end-to-end moderne et fiable.
- **Jest & React Testing Library** : Pour les tests unitaires et d'intégration.

## Architecture et design

- **Atomic Design** : L'architecture du projet suit les principes du design atomique, organisant les composants en atomes, molécules, organismes, templates et pages.
- **Middleware Fetcher** : Axios est utilisé comme middleware pour gérer les requêtes HTTP.
- **Gestion d'état** : React Query est utilisé pour gérer les états de succès, d'erreur et de chargement des requêtes.

## Configuration du projet

1. Cloner le dépôt :

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement Next.js.
- `npm run build` : Construit l'application pour la production.
- `npm start` : Démarre le serveur de production Next.js.
- `npm run lint` : Vérifie le code avec ESLint.
- `npm test` : Lance les tests unitaires avec Jest.
- `npm run test:watch` : Lance les tests en mode watch avec Jest.
- `npm run storybook` : Démarre Storybook sur le port 6006.
- `npm run build-storybook` : Construit Storybook pour la production.
- `npm run cypress:open` : Ouvre l'interface Cypress pour les tests E2E.
- `npm run cypress:run` : Exécute les tests Cypress en mode headless.

