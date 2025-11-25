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
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍕</span>
          <h1 className="text-xl font-bold">Bella Massa</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#produtos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Cardápio
          </a>
          <a
            href="#sobre"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contato
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
