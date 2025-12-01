import { Clock, CreditCard, MapPin, Phone } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre a Bella Massa
          </h2>
          <p className="text-lg text-muted-foreground">
            Há mais de 10 anos levando sabor e qualidade para sua casa. Nossos
            produtos são preparados com ingredientes selecionados e muito
            carinho, mantendo a tradição das receitas artesanais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-3 border rounded-lg p-6">
            <div className="flex justify-center">
              <Clock className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">Horário</h3>
            <p className="text-sm text-muted-foreground">
              Segunda a Domingo
              <br />
              18h00 - 23h30
            </p>
          </div>

          <div className="text-center space-y-3 border rounded-lg p-6">
            <div className="flex justify-center">
              <MapPin className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">Endereço</h3>
            <p className="text-sm text-muted-foreground">
              Rua das Pizzas, 123
              <br />
              Centro - SP
            </p>
          </div>

          <div className="text-center space-y-3 border rounded-lg p-6">
            <div className="flex justify-center">
              <Phone className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">Contato</h3>
            <p className="text-sm text-muted-foreground">
              (11) 99999-9999
              <br />
              contato@bellamassa.com
            </p>
          </div>

          <div className="text-center space-y-3 border rounded-lg p-6">
            <div className="flex justify-center">
              <CreditCard className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">Pagamento</h3>
            <p className="text-sm text-muted-foreground">
              Dinheiro, PIX
              <br />
              Débito e Crédito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
