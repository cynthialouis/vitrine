# Site vitrine

[![CI](https://github.com/cynthialouis/vitrine/actions/workflows/ci.yml/badge.svg)](https://github.com/cynthialouis/vitrine/actions/workflows/ci.yml)

Site vitrine de développeuse front-end freelance.

**En ligne : https://deft-naiad-02e743.netlify.app**

## Stack

- Vite + React 19 + TypeScript (strict)
- Tailwind CSS v4
- React Router
- Zod (validation du formulaire de contact)
- Zustand (brouillon du formulaire de contact)
- Vitest + Testing Library

## Scripts

| Commande            | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Serveur de développement           |
| `npm run build`     | Vérification des types + build     |
| `npm run preview`   | Prévisualisation du build          |
| `npm run lint`      | Lint (oxlint)                      |
| `npm run typecheck` | Vérification des types (TS strict) |
| `npm test`          | Tests en mode watch                |
| `npm run test:run`  | Exécution unique des tests         |

## Déploiement

- **Intégration continue** : GitHub Actions lance lint, vérification des types, tests et build à chaque push sur `main` et sur chaque pull request.
- **Hébergement** : Netlify, configuré par `netlify.toml`. Chaque push sur `main` est déployé, chaque pull request obtient une URL de prévisualisation.
