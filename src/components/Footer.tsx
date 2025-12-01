import { Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-black py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍕</span>
            <span className="font-bold text-white">Bella Massa</span>
          </div>

          <p className="text-sm text-gray-400 text-center">
            © 2024 Bella Massa. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
