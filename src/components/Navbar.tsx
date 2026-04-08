import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-farina.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Prodotti", href: "/prodotti" },
  { label: "Galleria", href: "/galleria" },
  { label: "Legna", href: "/#legna" },
  { label: "Contatti", href: "/contatti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo Azienda Agricola Farina" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+390532814411" className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors">
          <Phone className="w-4 h-4" />
          0532 814411
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="tel:+390532814411" className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="w-4 h-4" /> 0532 814411
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
