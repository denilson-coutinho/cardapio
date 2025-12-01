"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

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

  const content = (
    <>
      <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
        {/* Size Selection for Pizzas */}
        {isPizza && product.sizes && (
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-sm sm:text-base font-semibold">
              Escolha o tamanho
            </Label>
            <RadioGroup
              value={selectedSize}
              onValueChange={(value) => setSelectedSize(value as ProductSize)}
            >
              {Object.entries(product.sizes).map(([size, price]) => (
                <div
                  key={size}
                  className="flex items-center gap-2 sm:gap-3 border rounded-lg p-2.5 sm:p-3 hover:bg-accent transition-colors"
                >
                  <RadioGroupItem value={size} id={size} className="shrink-0" />
                  <Label
                    htmlFor={size}
                    className="flex-1 cursor-pointer capitalize text-sm sm:text-base"
                  >
                    {size}
                  </Label>
                  <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
                    R$ {price.toFixed(2)}
                  </span>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        {/* Extras Selection for Pizzas */}
        {isPizza && (
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-sm sm:text-base font-semibold">
              Adicionais (opcional)
            </Label>
            <div className="space-y-2">
              {extras.map((extra) => (
                <div
                  key={extra.id}
                  className="flex items-center gap-2 sm:gap-3 border rounded-lg p-2.5 sm:p-3 hover:bg-accent transition-colors"
                >
                  <Checkbox
                    id={extra.id}
                    checked={selectedExtras.includes(extra.id)}
                    onCheckedChange={() => toggleExtra(extra.id)}
                    className="shrink-0"
                  />
                  <Label
                    htmlFor={extra.id}
                    className="flex-1 cursor-pointer text-sm sm:text-base"
                  >
                    {extra.name}
                  </Label>
                  <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
                    + R$ {extra.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Price and Add Button */}
        <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t">
          <div className="flex items-center justify-between text-lg sm:text-xl font-bold">
            <span>Total:</span>
            <span className="text-primary">R$ {currentPrice.toFixed(2)}</span>
          </div>
          <Button
            className="w-full text-sm sm:text-base h-11 sm:h-12"
            size={isMobileOrTablet ? "default" : "lg"}
            onClick={handleAddToCart}
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </>
  );

  if (isMobileOrTablet) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="bottom"
          className="max-h-[95vh] overflow-y-auto rounded-t-2xl p-4 sm:p-6"
        >
          <SheetHeader className="pb-2 sm:pb-4">
            <SheetTitle className="text-xl sm:text-2xl leading-tight">
              {product.name}
            </SheetTitle>
            <SheetDescription className="text-sm sm:text-base">
              {product.description}
            </SheetDescription>
          </SheetHeader>
          {content}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="pb-2 sm:pb-4">
          <DialogTitle className="text-xl sm:text-2xl">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            {product.description}
          </DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};
