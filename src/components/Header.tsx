import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";

interface HeaderProps {
  onOpenCart: () => void;
}

export const Header = ({ onOpenCart }: HeaderProps) => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-14 sm:h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">🍕</span>
          <h1 className="text-lg sm:text-xl font-bold">Bella Massa</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#produtos"
            className="text-sm font-medium text-foreground hover:text-primary transition-all duration-200 relative group"
          >
            Cardápio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#sobre"
            className="text-sm font-medium text-foreground hover:text-primary transition-all duration-200 relative group"
          >
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-foreground hover:text-primary transition-all duration-200 relative group"
          >
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </a>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="relative"
          onClick={onOpenCart}
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {totalItems}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};
