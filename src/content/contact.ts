export type ContactContent = {
  intro: string
  emailLead: string
  requiredFieldsNote: string
  successMessage: string
}

export const contact: ContactContent = {
  intro: 'Un premier contact suffit pour démarrer.',
  emailLead: 'Vous préférez l’email ?',
  requiredFieldsNote: 'Tous les champs sont obligatoires, sauf mention contraire.',
  successMessage: 'Merci, votre message a bien été envoyé. Je reviens vers vous rapidement.',
}
