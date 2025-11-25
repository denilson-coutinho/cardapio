import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/cartStore";
import { Separator } from "@/components/ui/separator";

interface CartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Cart = ({ open, onOpenChange }: CartProps) => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } =
    useCartStore();

  const handleWhatsAppOrder = () => {
    const phoneNumber = "5511999999999";
    let message = "*Novo Pedido - Bella Massa*%0A%0A";

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`;
      if (item.size) message += `   Tamanho: ${item.size}%0A`;
      if (item.extras && item.extras.length > 0) {
        message += `   Adicionais: ${item.extras.join(", ")}%0A`;
      }
      message += `   Quantidade: ${item.quantity}x%0A`;
      message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(
        2
      )}%0A%0A`;
    });

    message += `*Total: R$ ${getTotalPrice().toFixed(2)}*`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    clearCart();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Seu Carrinho
          </SheetTitle>
          <SheetDescription>
            Revise seus itens antes de finalizar o pedido
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">Seu carrinho está vazio</p>
            <p className="text-sm text-muted-foreground mb-4">
              Adicione produtos deliciosos ao seu pedido
            </p>
            <Button onClick={() => onOpenChange(false)}>Ver Cardápio</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="space-y-3">
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.size && (
                        <p className="text-sm text-muted-foreground capitalize">
                          Tamanho: {item.size}
                        </p>
                      )}
                      {item.extras && item.extras.length > 0 && (
                        <p className="text-sm text-muted-foreground">
                          + {item.extras.join(", ")}
                        </p>
                      )}
                      <p className="text-sm font-bold">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total:</span>
                <span>R$ {getTotalPrice().toFixed(2)}</span>
              </div>
              <Button
                className="w-full"
                size="lg"
                onClick={handleWhatsAppOrder}
              >
                Finalizar Pedido no WhatsApp
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
