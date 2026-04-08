import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-farina.png";

const FooterSection = () => (
  <footer id="contatti" className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <img src={logo} alt="Logo Azienda Agricola Farina" className="h-16 w-auto mb-4 brightness-0 invert" />
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
            Coltiviamo con passione angurie, meloni e zucche dal 1975. 
            Vendita all'ingrosso e consegna legna da ardere a domicilio.
          </p>
          <div className="flex gap-3">
            <a href="https://facebook.com/Azienda-Agricola-Farina-Roberto-100057542707078" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/soc.agr.farina_2.0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://wa.me/+393667701214" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Contatti</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
              Via Rangona, 54/A - 44015 Portomaggiore (FE)
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-secondary" />
              <a href="tel:+390532814411" className="hover:text-primary-foreground transition-colors">+39 0532 814411</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-secondary" />
              <a href="tel:+393381571439" className="hover:text-primary-foreground transition-colors">+39 338 1571439</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0 text-secondary" />
              <a href="mailto:soc.agr.farina@gmail.com" className="hover:text-primary-foreground transition-colors">soc.agr.farina@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Orari di Apertura</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li className="flex justify-between"><span>Lunedì - Venerdì</span><span>08:30 – 12:00 / 13:30 – 18:00</span></li>
            <li className="flex justify-between"><span>Sabato</span><span>08:00 – 12:00</span></li>
            <li className="flex justify-between"><span>Domenica</span><span className="text-accent">Chiuso</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>P.I. 02179460387 · © {new Date().getFullYear()} Azienda Agricola Farina</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
