"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductList } from "@/components/ProductsList";
import { Cart } from "@/components/Cart";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenCart={() => setIsCartOpen(true)} />

      <main className="flex-1 w-full">
        <Hero />

        <section id="produtos" className="py-8 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-8">
            <div className="space-y-6">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            <ProductList
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
            />
          </div>
        </section>

        <About />
      </main>

      <Footer />

      <Cart open={isCartOpen} onOpenChange={setIsCartOpen} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
