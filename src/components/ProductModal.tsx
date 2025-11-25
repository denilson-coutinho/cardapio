"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Product, extras } from "@/data/products";
import { useCartStore, ProductSize } from "@/store/cartStore";
import { toast } from "sonner";

interface ProductModalProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProductModal = ({
  product,
  open,
  onOpenChange,
}: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState<ProductSize>("media");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    const price = product.sizes
      ? product.sizes[selectedSize] +
        selectedExtras.reduce((sum, extraId) => {
          const extra = extras.find((e) => e.id === extraId);
          return sum + (extra?.price || 0);
        }, 0)
      : product.basePrice;

    const extraNames = selectedExtras.map(
      (id) => extras.find((e) => e.id === id)?.name || ""
    );

    addItem({
      id: `${product.id}-${selectedSize}-${selectedExtras.join("-")}`,
      name: product.name,
      price,
      size: product.sizes ? selectedSize : undefined,
      extras: extraNames,
      category: product.category,
    });

    toast.success("Produto adicionado ao carrinho!");
    onOpenChange(false);
    setSelectedExtras([]);
  };

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const currentPrice = product.sizes
    ? product.sizes[selectedSize] +
      selectedExtras.reduce((sum, extraId) => {
        const extra = extras.find((e) => e.id === extraId);
        return sum + (extra?.price || 0);
      }, 0)
    : product.basePrice;

  const isPizza = product.category.includes("pizza");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Size Selection for Pizzas */}
          {isPizza && product.sizes && (
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Escolha o tamanho
              </Label>
              <RadioGroup
                value={selectedSize}
                onValueChange={(value) => setSelectedSize(value as ProductSize)}
              >
                {Object.entries(product.sizes).map(([size, price]) => (
                  <div
                    key={size}
                    className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent transition-colors"
                  >
                    <RadioGroupItem value={size} id={size} />
                    <Label
                      htmlFor={size}
                      className="flex-1 cursor-pointer capitalize"
                    >
                      {size}
                    </Label>
                    <span className="font-semibold">R$ {price.toFixed(2)}</span>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Extras Selection for Pizzas */}
          {isPizza && (
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Adicionais (opcional)
              </Label>
              <div className="space-y-2">
                {extras.map((extra) => (
                  <div
                    key={extra.id}
                    className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent transition-colors"
                  >
                    <Checkbox
                      id={extra.id}
                      checked={selectedExtras.includes(extra.id)}
                      onCheckedChange={() => toggleExtra(extra.id)}
                    />
                    <Label htmlFor={extra.id} className="flex-1 cursor-pointer">
                      {extra.name}
                    </Label>
                    <span className="font-semibold">
                      + R$ {extra.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Price and Add Button */}
          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center justify-between text-xl font-bold">
              <span>Total:</span>
              <span>R$ {currentPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg" onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
