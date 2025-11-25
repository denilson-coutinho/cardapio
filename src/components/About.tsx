import { Clock, CreditCard, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6 text-center space-y-2">
              <Clock className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Horário</h3>
              <p className="text-sm text-muted-foreground">
                Segunda a Domingo
                <br />
                18h00 - 23h30
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center space-y-2">
              <MapPin className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Endereço</h3>
              <p className="text-sm text-muted-foreground">
                Rua das Pizzas, 123
                <br />
                Centro - SP
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center space-y-2">
              <Phone className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Contato</h3>
              <p className="text-sm text-muted-foreground">
                (11) 99999-9999
                <br />
                contato@bellamassa.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center space-y-2">
              <CreditCard className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Pagamento</h3>
              <p className="text-sm text-muted-foreground">
                Dinheiro, PIX
                <br />
                Débito e Crédito
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
