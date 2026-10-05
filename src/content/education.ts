import type { IsoDate } from '../lib/format-date'

export type Module = {
  title: string
  topics: readonly string[]
}

export type Education = {
  id: string
  title: string
  organization: string
  location?: string
  period?: { start: IsoDate; end: IsoDate }
  modules?: readonly Module[]
}

export const education: readonly Education[] = [
  {
    id: 'eni-concepteur-developpeur',
    title: 'Concepteur Développeur Informatique, titre RNCP niveau II',
    organization: 'ENI Ecole Informatique',
    period: { start: '2016', end: '2017' },
    modules: [
      {
        title: 'Piloter un projet',
        topics: [
          'Introduction à la gestion de projet',
          'Démarrage du projet',
          'Création de l’équipe projet',
          'La mise en œuvre du projet',
          'Le rôle du système d’information',
          'Mise en œuvre avec MS-PROJECT',
          'Communication, Management et Qualité',
        ],
      },
      {
        title: 'Programmer avec des frameworks',
        topics: [
          'Hibernate',
          'JPA',
          'EJB 3.0',
          'Struts 2',
          'Ajax',
          'Paramétrage d’un serveur d’application',
        ],
      },
      {
        title: 'Développer une application mobile',
        topics: [
          'Développement d’une application mobile Android',
          'Technologie multi plateforme (Cross-platform : Xamarin)',
        ],
      },
    ],
  },
  {
    id: 'eni-developpeur-logiciel',
    title: 'Développeur Logiciel, titre RNCP niveau III',
    organization: 'ENI Ecole Informatique',
    period: { start: '2015', end: '2016' },
    modules: [
      {
        title: 'Développer une application objet',
        topics: [
          'Algorithme et pseudo-code',
          'Programmation orientée objet avec C#',
          'Le SQL avec SQL Server',
          'Triggers et procédures stockées avec Oracle - PL/SQL',
          'Développement sous Windows d’une application objet avec C#',
        ],
      },
      {
        title: 'Analyser et concevoir une application',
        topics: [
          'Projet informatique et concepts associés',
          'Présentation des processus projet',
          'Présentation des modèles d’analyse',
          'Zoom sur le modèle UML',
          'Analyse des données',
          'Scrum, l’émergence des méthodes agiles',
        ],
      },
      {
        title: 'Développer une application Web',
        topics: [
          'Développement WEB côté client (HTML, CSS, Javascript)',
          'Développement WEB côté serveur avec PHP et Symfony',
          'Développement d’une application sur la plateforme Java SE',
          'Développement WEB côté serveur avec Java EE',
          'Introduction au développement d’une application mobile Android',
        ],
      },
    ],
  },
  {
    id: 'rennes-2-llce',
    title: 'Licence 3 LLCE Anglais',
    organization: 'Université Rennes 2',
    period: { start: '2008', end: '2008' },
  },
  {
    id: 'livementor-copywriting',
    title: 'Générer des prospects grâce à une stratégie de rédaction de contenus digitaux - Copywriting',
    organization: 'LiveMentor',
    period: { start: '2026-02', end: '2026-02' },
  },
  {
    id: 'livementor-seo',
    title: 'Entreprendre et développer sa clientèle grâce au marketing digital - SEO',
    organization: 'LiveMentor',
    period: { start: '2025-07', end: '2025-07' },
  },
  {
    id: 'scrum-org-psm-1',
    title: 'Professional Scrum Master I (PSM I)',
    organization: 'Scrum.org',
    period: { start: '2021-11', end: '2021-11' },
  },
  {
    id: '26-academy-pspo-1',
    title: 'Agile Scrum Product Owner (PSPO I)',
    organization: '26 Academy',
  },
]
