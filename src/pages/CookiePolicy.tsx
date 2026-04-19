import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageSEO from "@/components/PageSEO";

const CookiePolicy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Cookie Policy"
        description="Informativa sull'uso dei cookie sul sito cucurbitacee.com della Società Agricola Farina 2.0."
        path="/cookie-policy"
      />
      <Navbar />

      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Informativa sull'uso dei cookie sul sito cucurbitacee.com.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="font-serif text-2xl font-semibold">Cosa sono i cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              I cookie sono piccoli file di testo che i siti web possono salvare sul dispositivo dell'utente
              per memorizzare informazioni o preferenze.
            </p>

            <h2 className="font-serif text-2xl font-semibold">Cookie utilizzati su questo sito</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il sito <strong className="text-foreground">cucurbitacee.com</strong> non utilizza cookie di
              profilazione, cookie pubblicitari o strumenti di analytics (es. Google Analytics, Meta Pixel).
              Per questo motivo non viene mostrato alcun banner di consenso ai cookie.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Possono essere presenti esclusivamente <strong className="text-foreground">cookie tecnici</strong> strettamente
              necessari al funzionamento del sito, per i quali, ai sensi della normativa vigente
              (Provvedimento del Garante Privacy del 10 giugno 2021), non è richiesto il consenso preventivo.
            </p>

            <h2 className="font-serif text-2xl font-semibold">Cookie di terze parti</h2>
            <p className="text-muted-foreground leading-relaxed">
              La pagina Contatti incorpora una mappa di <strong className="text-foreground">Google Maps</strong>.
              La visualizzazione della mappa può comportare il rilascio di cookie da parte di Google. Per
              maggiori informazioni si rimanda alla
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              > {" "}cookie policy di Google</a>.
            </p>

            <h2 className="font-serif text-2xl font-semibold">Come gestire i cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'utente può disabilitare i cookie direttamente dalle impostazioni del proprio browser. Le modalità
              variano in base al browser utilizzato (Chrome, Firefox, Safari, Edge, ecc.).
            </p>

            <h2 className="font-serif text-2xl font-semibold">Contatti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Per qualsiasi richiesta relativa ai cookie o al trattamento dei dati è possibile scrivere a
              <a href="mailto:soc.agr.farina@gmail.com" className="text-primary hover:underline"> soc.agr.farina@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default CookiePolicy;
