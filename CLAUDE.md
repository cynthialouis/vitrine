# CLAUDE.md

Site vitrine de mon activité freelance : une page d'accueil et une page de contact.
Le code doit être exemplaire : lisible, typé de bout en bout, accessible, testé, sans dette.

## Commandes

```bash
npm run dev        # serveur de développement
npm run typecheck  # tsc -b (TS strict)
npm run lint       # oxlint
npm run test:run   # tests (une passe) — `npm test` en watch
npm run build      # typecheck + build de production
```

Avant chaque commit, **les quatre doivent passer** : `typecheck`, `lint`, `test:run`, `build`.

## Workflow

- Travail **pas à pas** : pour chaque step, proposer le plan (fichiers touchés, dépendances, commits prévus) et **attendre la validation** avant d'implémenter.
- **Jamais de commit sans validation manuelle** : une fois l'implémentation terminée et vérifiée, présenter les changements (fichiers modifiés, message de commit proposé) et attendre l'accord explicite avant de lancer `git commit`. Idem pour toute réécriture d'historique (amend, rebase).
- Commits atomiques, [Conventional Commits](https://www.conventionalcommits.org/), en anglais, à l'impératif (`feat: add contact form schema`). Pas de trailer `Co-Authored-By`.
- Une dépendance s'installe **dans le step qui l'utilise**, jamais par anticipation. Toute nouvelle dépendance doit être justifiée ; préférer la plateforme (Web APIs, React) à une lib.
- Langue : code, noms, commentaires et commits en **anglais** ; contenu affiché à l'utilisateur et README en **français**.

## Stack

Vite 8 · React 19 · TypeScript 6 (strict) · Tailwind CSS v4 · React Router · Zod · Zustand · Vitest 5 + Testing Library · oxlint.

## Architecture

```
src/
  app/             # router, layout racine, providers
  pages/           # une page = une route (HomePage, ContactPage, NotFoundPage)
  features/
    contact/       # schema.ts, action.ts, draft-store.ts, components/
  components/ui/   # composants génériques réutilisables, sans logique métier
  lib/             # utilitaires purs
  test/            # setup Vitest et helpers de test
```

- Organisation par feature : ce qui n'est utilisé que par une feature reste dans son dossier.
- Tests colocalisés : `Component.tsx` → `Component.test.tsx`.
- Fichiers de composants en `PascalCase.tsx`, le reste en `kebab-case.ts`.
- **Exports nommés** partout (sauf contrainte d'outil, ex. config).

## TypeScript

- `any` interdit (règle lint en `error`). Utiliser `unknown` puis affiner.
- Pas d'assertion `as` ni de non-null `!` sauf cas justifié et commenté ; préférer le narrowing et `satisfies`.
- Laisser l'inférence travailler ; typer explicitement les API publiques (props, retours de fonctions exportées).
- Types dérivés de la source de vérité : `z.infer<typeof schema>` plutôt qu'un type dupliqué.
- `import type` pour les imports de types (`verbatimModuleSyntax` actif).
- Unions discriminées pour modéliser les états (`{ status: 'idle' } | { status: 'error'; errors: … }`), pas de booléens combinés.

## React 19

- Composants fonctions, props typées via `type Props = {…}` ; pas de `React.FC`.
- `ref` est une prop : pas de `forwardRef`.
- Pas de `useEffect` pour dériver un état ou réagir à un événement ; le réserver à la synchronisation avec un système externe.
- Pas de `useMemo`/`useCallback` préventifs : uniquement sur besoin mesuré.
- Métadonnées de page (`<title>`, `<meta name="description">`) rendues directement dans la page (support natif React 19).
- Composants petits et à responsabilité unique ; extraire la logique dans des hooks ou fonctions pures testables.

## Formulaire de contact

- `<form action={formAction}>` + `useActionState` ; état de soumission via `useFormStatus` dans le bouton.
- Le schéma Zod (`schema.ts`) est l'unique source de vérité : validation, types et messages d'erreur (en français).
- L'action valide avec `safeParse` et retourne un état discriminé typé ; aucune exception ne remonte à l'UI.
- Erreurs par champ reliées au champ (`aria-invalid`, `aria-describedby`), résumé annoncé (`role="alert"`), focus déplacé sur le premier champ invalide.
- Validation HTML native conservée en complément (`required`, `type="email"`, `maxLength`).

## Zustand (usage volontairement minimal)

- **Uniquement** pour persister le brouillon du formulaire de contact (middleware `persist`), afin de ne pas perdre la saisie en cas de navigation ou de rechargement.
- Le store ne contient que les valeurs des champs et leurs setters ; pas d'état de soumission ni d'erreurs (qui appartiennent à `useActionState`).
- Brouillon vidé après un envoi réussi. Toujours lire via des sélecteurs atomiques.
- Aucun autre état global : l'état local React suffit partout ailleurs.

## Routing

- React Router en mode data (`createBrowserRouter`), routes déclarées dans `src/app/`.
- Layout commun (header, `<main>`, footer) via `<Outlet />`, route 404, liens avec `NavLink` (état actif exposé via `aria-current`).
- Pages chargées en lazy si le gain est réel.

## Styles (Tailwind v4)

- Configuration CSS-first : design tokens (couleurs, typo, espacements spécifiques) dans `@theme` de `src/index.css`.
- Pas de valeurs arbitraires (`w-[37px]`) quand un token existe ; pas de `style` inline ; pas de CSS hors Tailwind sauf base globale.
- Mobile-first, responsive vérifié de 320px au desktop.
- Variantes de composants regroupées dans un objet typé.
- Respecter `prefers-reduced-motion` et `prefers-color-scheme` si un thème sombre est ajouté.

## Accessibilité (WCAG 2.2 AA)

- HTML sémantique d'abord : landmarks (`header`, `nav`, `main`, `footer`), un seul `h1` par page, hiérarchie de titres sans saut.
- Lien d'évitement « Aller au contenu », focus visible sur tout élément interactif, navigation complète au clavier.
- Chaque champ a un `<label>` associé ; images avec `alt` pertinent (vide si décoratives).
- Contrastes AA minimum ; aucune information transmise par la couleur seule.

## Tests

- Tester le **comportement**, pas l'implémentation : ce que l'utilisateur voit et fait.
- Requêtes par priorité Testing Library : `getByRole` > `getByLabelText` > `getByText` ; `data-testid` en dernier recours.
- Interactions avec `@testing-library/user-event` (pas `fireEvent`).
- Couverture attendue : schéma Zod (tests unitaires des cas limites), action, store de brouillon, parcours complet du formulaire, navigation entre pages, page 404.
- Pas de snapshots. Noms de tests en anglais, descriptifs (`it('shows an error when the email is invalid')`).

## Interdits

- `console.log`, `TODO` laissés dans un commit.
- Désactiver une règle lint ou TS (`// eslint-disable`, `@ts-ignore`, `@ts-expect-error`) sans justification.
- Ajouter une dépendance, une abstraction ou une fonctionnalité non demandée dans le step en cours.
