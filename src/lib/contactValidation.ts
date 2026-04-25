export interface ContactFormValues {
  nome: string;
  email: string;
  telefono: string;
  messaggio: string;
}

export const MIN_NAME_LENGTH = 2;
export const MIN_MESSAGE_LENGTH = 10;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+\d()\-./\s]{6,25}$/;
const suspiciousNamePattern = /(https?:\/\/|www\.|<|>|@)/i;

export function normalizeContactForm(values: ContactFormValues): ContactFormValues {
  return {
    nome: values.nome.replace(/\s+/g, " ").trim(),
    email: values.email.trim(),
    telefono: values.telefono.replace(/\s+/g, " ").trim(),
    messaggio: values.messaggio.trim(),
  };
}

export function validateContactForm(values: ContactFormValues): string | null {
  if (!values.nome || !values.email || !values.messaggio) {
    return "Compila tutti i campi obbligatori.";
  }

  if (values.nome.length < MIN_NAME_LENGTH) {
    return "Inserisci un nome valido.";
  }

  if (suspiciousNamePattern.test(values.nome)) {
    return "Il nome contiene caratteri non validi.";
  }

  if (!emailPattern.test(values.email)) {
    return "Inserisci un indirizzo email valido.";
  }

  if (values.telefono && !phonePattern.test(values.telefono)) {
    return "Inserisci un numero di telefono valido.";
  }

  if (values.messaggio.length < MIN_MESSAGE_LENGTH) {
    return `Il messaggio deve contenere almeno ${MIN_MESSAGE_LENGTH} caratteri.`;
  }

  return null;
}
