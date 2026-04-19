import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageSEO from "@/components/PageSEO";

const LAST_UPDATED = "19 aprile 2026";

const PrivacyPolicy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Privacy Policy"
        description="Informativa sul trattamento dei dati personali della Società Agricola Farina 2.0 ai sensi del Regolamento UE 2016/679 (GDPR)."
        path="/privacy-policy"
      />
      <Navbar />

      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-stone max-w-none text-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Ultimo aggiornamento: {LAST_UPDATED}
            </p>

            <h2 className="font-serif text-2xl font-semibold">Titolare del Trattamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Società Agricola Farina 2.0</strong><br />
              Via Rangona, 54/A — 44015 Bando di Argenta (FE)<br />
              P.IVA 02179460387<br />
              Email: <a href="mailto:soc.agr.farina@gmail.com" className="text-primary hover:underline">soc.agr.farina@gmail.com</a><br />
              Telefono: <a href="tel:+390532814411" className="text-primary hover:underline">+39 0532 814411</a>
            </p>

            <h2 className="font-serif text-2xl font-semibold">Tipologie di Dati Raccolti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il sito <strong className="text-foreground">cucurbitacee.com</strong> raccoglie esclusivamente i dati che l'utente
              fornisce volontariamente compilando il modulo di contatto: nome e cognome, indirizzo email,
              numero di telefono (facoltativo) e contenuto del messaggio. Il sito non utilizza strumenti di
              analytics, profilazione o tracciamento pubblicitario.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Alcune pagine possono incorporare contenuti di terze parti (ad es. <strong className="text-foreground">Google Maps</strong>
              nella pagina Contatti e, su richiesta dell'utente, il plugin <strong className="text-foreground">Facebook</strong> nella pagina Galleria).
              In questi casi, i fornitori terzi possono ricevere dati tecnici di navigazione (es. indirizzo IP, user agent)
              necessari a fornire il servizio incorporato.
            </p>

            <h2 className="font-serif text-2xl font-semibold">Finalità e Base Giuridica</h2>
            <p className="text-muted-foreground leading-relaxed">
              I dati raccolti tramite il modulo di contatto vengono utilizzati esclusivamente per rispondere
              alle richieste di informazioni e gestire eventuali rapporti commerciali (es. preventivi per legna
              da ardere o forniture all'ingrosso di prodotti ortofrutticoli). La base giuridica del trattamento
              è il consenso dell'interessato e l'esecuzione di misure precontrattuali su richiesta dello stesso
              (art. 6, par. 1, lett. a) e b) GDPR).
            </p>

            <h2 className="font-serif text-2xl font-semibold">Modalità di Invio</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il modulo di contatto apre il client di posta predefinito dell'utente per inviare il messaggio
              all'indirizzo aziendale. Non vi è alcuna trasmissione automatica dei dati del modulo a server di terze parti
              tramite il sito (fatta salva la presenza di contenuti incorporati di terze parti, come indicato sotto).
            </p>

            <h2 className="font-serif text-2xl font-semibold">Conservazione dei Dati</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le email ricevute vengono conservate per il tempo strettamente necessario a evadere la richiesta
              e, in caso di rapporto commerciale, per il tempo previsto dalle normative civilistiche e fiscali.
            </p>

            <h2 className="font-serif text-2xl font-semibold">Diritti dell'Interessato</h2>
            <p className="text-muted-foreground leading-relaxed">
              In qualsiasi momento l'interessato può esercitare i diritti previsti dagli artt. 15-22 del GDPR
              (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione) scrivendo a
              <a href="mailto:soc.agr.farina@gmail.com" className="text-primary hover:underline"> soc.agr.farina@gmail.com</a>.
              È inoltre possibile proporre reclamo al Garante per la Protezione dei Dati Personali
              (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>).
            </p>

            <h2 className="font-serif text-2xl font-semibold">Servizi di Terze Parti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il sito incorpora una mappa di Google Maps nella pagina Contatti. La consultazione della mappa
              comporta l'invio dell'indirizzo IP dell'utente ai server di Google secondo la
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> privacy policy di Google</a>.
              La pagina Galleria può inoltre incorporare, su richiesta dell'utente, contenuti della pagina Facebook tramite plugin ufficiale di Meta
              (con possibili trattamenti secondo la
              <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> privacy policy di Meta/Facebook</a>).
              Il sito non utilizza Google Analytics, pixel di Meta, né altri strumenti di tracciamento pubblicitario.
            </p>

            <h2 className="font-serif text-2xl font-semibold">Modifiche</h2>
            <p className="text-muted-foreground leading-relaxed">
              La presente informativa può essere aggiornata in qualsiasi momento. Le modifiche saranno
              pubblicate su questa pagina con la relativa data di aggiornamento.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;
