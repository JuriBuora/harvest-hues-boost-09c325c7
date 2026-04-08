import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/+393667701214"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contattaci su WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
