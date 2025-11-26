import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Pizzas e Hambúrgueres
            <br />
            <span className="text-muted-foreground">Artesanais</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Ingredientes selecionados, receitas tradicionais e muito sabor. Peça
            agora e receba em casa!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={scrollToProducts} className="text-base">
              Ver Cardápio
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#sobre" className="text-base">
                Sobre Nós
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-8xl opacity-5 pointer-events-none">
        🍕
      </div>
      <div className="absolute bottom-20 left-10 text-8xl opacity-5 pointer-events-none">
        🍔
      </div>
    </section>
  );
};
