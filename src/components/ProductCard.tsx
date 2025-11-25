"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { ProductModal } from "./ProductModal";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayPrice = product.sizes
    ? `R$ ${product.sizes.pequena.toFixed(2)}`
    : `R$ ${product.basePrice.toFixed(2)}`;

  return (
    <>
      <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <CardHeader className="p-0">
          <div className="aspect-square bg-muted flex items-center justify-center text-6xl">
            {product.category.includes("pizza") ? "🍕" : "🍔"}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {product.description}
          </CardDescription>
          <p className="text-lg font-bold mt-3">
            {product.sizes ? `A partir de ${displayPrice}` : displayPrice}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full" onClick={() => setIsModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Adicionar
          </Button>
        </CardFooter>
      </Card>

      <ProductModal
        product={product}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};
