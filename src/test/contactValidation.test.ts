import { describe, expect, it } from "vitest";
import {
  MIN_MESSAGE_LENGTH,
  normalizeContactForm,
  validateContactForm,
} from "@/lib/contactValidation";

describe("contact form validation", () => {
  it("normalizes whitespace before submit", () => {
    expect(normalizeContactForm({
      nome: "  Mario   Rossi ",
      email: " mario@example.com ",
      telefono: "  +39   333 1234567 ",
      messaggio: "  Richiedo informazioni sulla legna.  ",
    })).toEqual({
      nome: "Mario Rossi",
      email: "mario@example.com",
      telefono: "+39 333 1234567",
      messaggio: "Richiedo informazioni sulla legna.",
    });
  });

  it("rejects malformed contact data", () => {
    expect(validateContactForm({
      nome: "A",
      email: "not-an-email",
      telefono: "abc",
      messaggio: "ciao",
    })).toBe("Inserisci un nome valido.");
  });

  it("rejects suspicious names", () => {
    expect(validateContactForm({
      nome: "https://spam.example",
      email: "user@example.com",
      telefono: "",
      messaggio: "Messaggio valido con abbastanza testo.",
    })).toBe("Il nome contiene caratteri non validi.");
  });

  it("requires a meaningful message", () => {
    expect(validateContactForm({
      nome: "Mario Rossi",
      email: "mario@example.com",
      telefono: "",
      messaggio: "x".repeat(MIN_MESSAGE_LENGTH - 1),
    })).toBe(`Il messaggio deve contenere almeno ${MIN_MESSAGE_LENGTH} caratteri.`);
  });

  it("accepts a valid payload", () => {
    expect(validateContactForm({
      nome: "Mario Rossi",
      email: "mario@example.com",
      telefono: "+39 333 1234567",
      messaggio: "Buongiorno, vorrei informazioni sulla disponibilita' della legna.",
    })).toBeNull();
  });
});
