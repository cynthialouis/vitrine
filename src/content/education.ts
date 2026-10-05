import type { IsoDate, IsoMonth } from '../lib/format-date'

export type Module = {
  title: string
  topics: readonly string[]
}

export type Education = {
  id: string
  degree: string
  school: string
  location?: string
  start: IsoDate
  end: IsoDate
  modules?: readonly Module[]
}

export type Certification = {
  id: string
  name: string
  issuer: string
  issuedOn: IsoMonth
}

export const education: readonly Education[] = [
  {
    id: 'eni-concepteur-developpeur',
    degree: 'Concepteur Développeur Informatique, titre RNCP niveau II',
    school: 'ENI Ecole Informatique',
    start: '2016',
    end: '2017',
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
    degree: 'Développeur Logiciel, titre RNCP niveau III',
    school: 'ENI Ecole Informatique',
    start: '2015',
    end: '2016',
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
    degree: 'Licence 3 LLCE Anglais',
    school: 'Université Rennes 2',
    start: '2008',
    end: '2008',
  },
]

export const certifications: readonly Certification[] = [
  {
    id: 'certification-1',
    name: 'Lorem ipsum dolor sit amet',
    issuer: 'Consectetur',
    issuedOn: '2024-04',
  },
  {
    id: 'certification-2',
    name: 'Adipiscing elit sed do',
    issuer: 'Eiusmod',
    issuedOn: '2022-05',
  },
  {
    id: 'certification-3',
    name: 'Tempor incididunt ut labore',
    issuer: 'Aliqua',
    issuedOn: '2021-11',
  },
]
