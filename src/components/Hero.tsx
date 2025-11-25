import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Pizzas e Hambúrgueres
            <br />
            <span className="text-muted-foreground">Artesanais</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
