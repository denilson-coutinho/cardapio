export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category:
    | "pizza-tradicional"
    | "pizza-especial"
    | "pizza-doce"
    | "hamburguer"
    | "combo"
    | "promocao";
  image?: string;
  sizes?: {
    pequena: number;
    media: number;
    grande: number;
    familia: number;
  };
}

export const products: Product[] = [
  // Pizzas Tradicionais
  {
    id: "pizza-margherita",
    name: "Margherita",
    description: "Molho de tomate, mussarela, tomate e manjericão",
    basePrice: 35,
    category: "pizza-tradicional",
    sizes: {
      pequena: 35,
      media: 45,
      grande: 55,
      familia: 70,
    },
  },
  {
    id: "pizza-calabresa",
    name: "Calabresa",
    description: "Molho de tomate, mussarela, calabresa e cebola",
    basePrice: 38,
    category: "pizza-tradicional",
    sizes: {
      pequena: 38,
      media: 48,
      grande: 58,
      familia: 73,
    },
  },
  {
    id: "pizza-portuguesa",
    name: "Portuguesa",
    description: "Molho, mussarela, presunto, ovos, cebola e azeitona",
    basePrice: 42,
    category: "pizza-tradicional",
    sizes: {
      pequena: 42,
      media: 52,
      grande: 62,
      familia: 77,
    },
  },
  {
    id: "pizza-frango",
    name: "Frango com Catupiry",
    description: "Molho, mussarela, frango desfiado e catupiry",
    basePrice: 40,
    category: "pizza-tradicional",
    sizes: {
      pequena: 40,
      media: 50,
      grande: 60,
      familia: 75,
    },
  },

  // Pizzas Especiais
  {
    id: "pizza-quattro",
    name: "Quattro Formaggi",
    description: "Molho branco, mussarela, gorgonzola, parmesão e provolone",
    basePrice: 48,
    category: "pizza-especial",
    sizes: {
      pequena: 48,
      media: 58,
      grande: 68,
      familia: 83,
    },
  },
  {
    id: "pizza-lombo",
    name: "Lombo Canadense",
    description: "Molho, mussarela, lombo canadense, champignon e catupiry",
    basePrice: 50,
    category: "pizza-especial",
    sizes: {
      pequena: 50,
      media: 60,
      grande: 70,
      familia: 85,
    },
  },
  {
    id: "pizza-camarao",
    name: "Camarão",
    description: "Molho branco, mussarela, camarão, alho e catupiry",
    basePrice: 65,
    category: "pizza-especial",
    sizes: {
      pequena: 65,
      media: 75,
      grande: 85,
      familia: 100,
    },
  },

  // Pizzas Doces
  {
    id: "pizza-chocolate",
    name: "Chocolate",
    description: "Chocolate ao leite com granulado",
    basePrice: 38,
    category: "pizza-doce",
    sizes: {
      pequena: 38,
      media: 48,
      grande: 58,
      familia: 73,
    },
  },
  {
    id: "pizza-romeu",
    name: "Romeu e Julieta",
    description: "Queijo minas com goiabada",
    basePrice: 40,
    category: "pizza-doce",
    sizes: {
      pequena: 40,
      media: 50,
      grande: 60,
      familia: 75,
    },
  },

  // Hambúrgueres
  {
    id: "hamburguer-classico",
    name: "Hambúrguer Clássico",
    description:
      "Pão artesanal, hambúrguer 180g, queijo, alface, tomate e molho especial",
    basePrice: 28,
    category: "hamburguer",
  },
  {
    id: "hamburguer-bacon",
    name: "Bacon Burguer",
    description:
      "Pão artesanal, hambúrguer 180g, queijo, bacon crocante e molho barbecue",
    basePrice: 32,
    category: "hamburguer",
  },
  {
    id: "hamburguer-duplo",
    name: "Duplo Smash",
    description:
      "Pão, 2 hambúrgueres smash, queijo cheddar, cebola caramelizada e molho",
    basePrice: 38,
    category: "hamburguer",
  },
  {
    id: "hamburguer-frango",
    name: "Chicken Burguer",
    description:
      "Pão, filé de frango empanado, queijo, alface e maionese especial",
    basePrice: 26,
    category: "hamburguer",
  },

  // Combos
  {
    id: "combo-pizza-refri",
    name: "Combo Pizza + Refrigerante",
    description: "Pizza grande + Refrigerante 2L",
    basePrice: 65,
    category: "combo",
  },
  {
    id: "combo-burguer-batata",
    name: "Combo Burguer Completo",
    description: "Hambúrguer + Batata Frita + Refrigerante",
    basePrice: 42,
    category: "combo",
  },

  // Promoções
  {
    id: "promo-2pizzas",
    name: "2 Pizzas Grandes",
    description: "Escolha 2 pizzas grandes tradicionais",
    basePrice: 95,
    category: "promocao",
  },
];

export const categories = [
  { id: "todos", name: "Todos", icon: "🍽️" },
  { id: "pizza-tradicional", name: "Pizzas Tradicionais", icon: "🍕" },
  { id: "pizza-especial", name: "Pizzas Especiais", icon: "⭐" },
  { id: "pizza-doce", name: "Pizzas Doces", icon: "🍫" },
  { id: "hamburguer", name: "Hambúrgueres", icon: "🍔" },
  { id: "combo", name: "Combos", icon: "🎁" },
  { id: "promocao", name: "Promoções", icon: "🔥" },
];

export const extras = [
  { id: "borda-catupiry", name: "Borda Catupiry", price: 8 },
  { id: "borda-cheddar", name: "Borda Cheddar", price: 8 },
  { id: "borda-chocolate", name: "Borda Chocolate", price: 10 },
  { id: "bacon-extra", name: "Bacon Extra", price: 5 },
  { id: "queijo-extra", name: "Queijo Extra", price: 5 },
];
