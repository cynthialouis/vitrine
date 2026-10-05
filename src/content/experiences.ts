import type { IsoMonth } from '../lib/format-date'

export type Mission = string | { title: string; items: readonly string[] }

export type Experience = {
  id: string
  role: string
  company?: string
  location?: string
  start: IsoMonth
  end: IsoMonth | null
  missions?: readonly Mission[]
  stack?: readonly string[]
}

export const experiences: readonly Experience[] = [
  {
    id: 'freelance-front-end',
    role: 'Développeuse front-end freelance',
    start: '2026-10',
    end: null,
  },
  {
    id: 'independent-web-developer',
    role: 'Développeuse web indépendante\u00a0· SEO, IA et automatisation',
    start: '2025-02',
    end: '2026-09',
    missions: [
      'Création de sites de contenus conçus pour se positionner sur Google et être monétisés, en développement assisté par IA avec Cursor',
      'Montée en compétence sur le développement assisté par IA : Cursor, puis Claude Code',
      'Automatisation de workflows avec n8n',
      'Montée en compétence sur React 19 et TypeScript avec Claude Code',
    ],
    stack: ['Claude Code', 'Cursor', 'n8n', 'SEO', 'Copywriting'],
  },
  {
    id: 'jellysmack',
    role: 'Front End Software Engineer',
    company: 'Jellysmack',
    location: 'Paris',
    start: '2022-08',
    end: '2025-02',
    missions: [
      'Développement front et maintenance des applications Jellysmack Services, à destination des créateurs de contenus afin d’optimiser leur travail et accroître leur visibilité',
      'Conception technique',
      'Gestion des mises en production',
      'Création de documentation : process de déploiement, setup pour les nouveaux arrivants',
    ],
    stack: ['Vue.js 2 et 3 (Options API)', 'Tailwind CSS'],
  },
  {
    id: 'son-video',
    role: 'Développeuse web fullstack',
    company: 'Son-Video.com',
    location: 'Nantes et périphérie',
    start: '2018-02',
    end: '2022-07',
    missions: [
      {
        title: 'Refonte de l’ERP',
        items: [
          'Développement d’un WMS (gestion des stocks, emplacements…)',
          'Nouvelles interfaces (fiche prospect 360, gestion des fonds de caisse magasin…)',
          'Création de fiches utilitaires (profil utilisateur, suivi d’expédition…)',
          'Refonte du système de devis',
        ],
      },
      'Évolutions et maintenance du CMS',
      'Évolutions du site vitrine son-video.com',
    ],
    stack: ['Vue.js', 'PHP / Symfony', 'Tailwind CSS', 'Cypress'],
  },
  {
    id: 'apside',
    role: 'Conceptrice développeuse',
    company: 'Apside',
    start: '2017-09',
    end: '2018-01',
  },
  {
    id: 'ucaya',
    role: 'Développeuse logiciels',
    company: 'UCAYA',
    location: 'Saint-Herblain (44)',
    start: '2016-03',
    end: '2017-05',
    missions: [
      'Développement d’une application de solutions et conseils financiers',
      'Développement d’une solution logicielle de gestion pour un projet sur le numérique éducatif',
      'Développement d’un Power-Up Trello',
      'Développement du site web d’un produit interne',
    ],
    stack: ['HTML', 'CSS', 'JavaScript (ES6)', 'AngularJS', 'C#', 'ASP.NET MVC', 'SQL Server'],
  },
]
