import type { Product } from "@/types/product";

export const productData: Product[] = [
  // -------- BUSINESS LINE --------
  {
    id: "b1",
    name: "Playera Polo",
    category: ["Business", "Playeras"],
    description:
      "Playera polo clásica de manga corta, ideal para uniformes empresariales informales.",
    images: ["/images/BusinessImg/1.svg", "/images/BusinessImg/2.svg", "/images/BusinessImg/4.svg"],
    colors: [
      // heredado de tu Camisa Polo Empresarial (id=5)
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Negro", hex: "#000000" },
      { name: "Azul Royal", hex: "#4169E1" },
      { name: "Rojo", hex: "#FF0000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "100% algodón piqué",
      "Cuello y puños acanalados",
      "Abertura lateral",
      "Botones reforzados",
      "Ideal para bordado o estampado",
    ],
  },
  {
    id: "b2",
    name: "Playera Polo Corte V",
    category: ["Business", "Playeras"],
    description:
      "Playera polo con cuello en V, elegante y cómoda para uniformes informales.",
    images: ["/images/BusinessImg/3.svg"],
    colors: [
      // TODO: adapta según BusinessModal / Catalogue.jsx
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Azul Celeste", hex: "#6190E6" },
      { name: "Gris", hex: "#808080" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      // TODO: extrae las características exactas de tu catálogo
      "100% poliéster",
      "Cuello en V reforzado",
      "Tela transpirable",
    ],
  },
  {
    id: "b3",
    name: "Playera Polo Sin Botones",
    category: ["Business", "Playeras"],
    description:
      "Playera tipo polo sin botonadura frontal, para un look minimalista y moderno.",
    images: ["/images/BusinessImg/5.svg"],
    colors: [
      // TODO: adapta según BusinessModal
      { name: "Negro", hex: "#000000" },
      { name: "Azul Marino", hex: "#000080" },
      { name: "Caqui", hex: "#C3B091" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "65% poliéster, 35% algodón",
      "Sin botonadura frontal",
      "Costuras reforzadas",
    ],
  },
  {
    id: "b4",
    name: "Camisa Oxford",
    category: ["Business", "Camisas"],  
    description:
      "Camisa Oxford de manga larga y botón clásico, perfecta para ambientes corporativos.",
    images: ["/images/BusinessImg/6.svg", "/images/BusinessImg/7.svg", "/images/BusinessImg/8.svg"],
    colors: [
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Azul Claro", hex: "#ADD8E6" },
      { name: "Gris", hex: "#808080" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "65% algodón, 35% poliéster",
      "Resistente a arrugas",
      "Fácil de planchar",
      "Bolsillo en el pecho",
    ],
  },

  // -------- OFFICE LINE --------
   {
    id: "o1",
    name: "Sudadera Cuello Redondo",
    category: ["Office", "Sudaderas"],
    description:
      "Sudadera clásica con cuello redondo, cómoda y versátil para ambientes de oficina.",
    images: ["/images/OfficeImg/1.1.svg", "/images/OfficeImg/2.2.svg"],
    colors: [
      { name: "Jaspe", hex: "#00000000" },      // placeholder para textura Jaspe
      { name: "Negro", hex: "#000000" },
      { name: "Azul Royal", hex: "#1634AC" },
      { name: "Azul Marino", hex: "#00112E" },
      { name: "Blanco", hex: "#FFFFFF" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [
      // TODO: extrae características precisas
    ],
  },
  {
    id: "o2",
    name: "Sudadera con Cangurera y Capucha",
    category: ["Office", "Sudaderas"],
    description:
      "Sudadera con bolsillo canguro y capucha ajustable, ideal para clima fresco en la oficina.",
    images: ["/images/OfficeImg/3.3.svg"],
    colors: [
      { name: "Jaspe", hex: "#00000000" },
      { name: "Negro", hex: "#000000" },
      { name: "Azul Royal", hex: "#1634AC" },
      { name: "Azul Marino", hex: "#00112E" },
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Arena", hex: "#F5F1E6" },
      { name: "Lavanda", hex: "#8279B0" },
      { name: "Rosa Pastel", hex: "#F5BDD6" },
      { name: "Jaspe Negro", hex: "#00000000" },
      { name: "Verde Bosque", hex: "#2C4635" },
      { name: "Marrón", hex: "#6E2C3A" },
      { name: "Rojo", hex: "#C30618" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [],
  },
  {
    id: "o3",
    name: "Sudadera con Cierre y Capucha",
    category: ["Office", "Sudaderas"],
    description:
      "Sudadera con cierre frontal completo y capucha, práctica para capas en oficina.",
    images: ["/images/OfficeImg/4.4.svg", "/images/OfficeImg/5.5.svg"],
    colors: [
      { name: "Jaspe", hex: "#00000000" },
      { name: "Negro", hex: "#000000" },
      { name: "Azul Royal", hex: "#1634AC" },
      { name: "Azul Marino", hex: "#00112E" },
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Jaspe Negro", hex: "#00000000" },
      { name: "Rojo", hex: "#C30618" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [],
  },
  {
    id: "o4",
    name: "Playera Polo 50% Algodón 50% Poliéster",
    category: ["Office", "Playeras"],
    description:
      "Playera tipo polo mixto (50/50), combinando suavidad y durabilidad.",
    images: ["/images/OfficeImg/6.6.svg"],
    colors: [
      { name: "Jaspe", hex: "#00000000" },
      { name: "Negro", hex: "#000000" },
      { name: "Azul Royal", hex: "#1634AC" },
      { name: "Azul Marino", hex: "#00112E" },
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Lima", hex: "#A0DC7E" },
      { name: "Jade", hex: "#23AC82" },
      { name: "Fucsia", hex: "#DB0583" },
      { name: "Turquesa", hex: "#44AADB" },
      { name: "Naranja", hex: "#F14A15" },
      { name: "Marrón", hex: "#6E2C3A" },
      { name: "Rojo", hex: "#C30618" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [],
  },
  {
    id: "o5",
    name: "Playera Polo 100% Poliéster",
    category: ["Office", "Playeras"],
    description:
      "Playera polo totalmente de poliéster, de secado rápido y fácil cuidado.",
    images: ["/images/OfficeImg/7.7.svg"],
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Azul Royal", hex: "#1634AC" },
      { name: "Azul Marino", hex: "#00112E" },
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Gris", hex: "#808080" },
      { name: "Rojo", hex: "#C30618" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [],
  },
  {
    id: "o6",
    name: "Camisa de Mezclilla Manga Larga",
    category: ["Office", "Camisas"],
    description:
      "Camisa de mezclilla de manga larga (100% algodón), resistente y estilosa.",
    images: ["/images/OfficeImg/8.8.svg"],
    colors: [
      { name: "Indigo Claro", hex: "#004178" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [],
  },
  {
    id: "o7",
    name: "Camisa Oxford Manga Larga",
    category: ["Office", "Camisas"],
    description:
      "Camisa Oxford de manga larga, tela suave y look profesional.",
    images: ["/images/OfficeImg/9.9.svg", "/images/OfficeImg/10.10.svg"],
    colors: [
      { name: "Rosa", hex: "#E9D9D8" },
      { name: "Cobalto", hex: "#879BC4" },
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Gris", hex: "#45484D" },
      { name: "Azul Cielo", hex: "#A1B0CF" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [],
  },
  {
    id: "o8",
    name: "Camisa de Gabardina (50% Algodón, 50% Poliéster)",
    category: ["Office", "Camisas"],
    description:
      "Camisa de tela gabardina mixta, duradera y de fácil cuidado.",
    images: ["/images/OfficeImg/11.11.svg"],
    colors: [
      { name: "Azul Francia", hex: "#648CC8" },
      { name: "Gris", hex: "#46494E" },
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Vino", hex: "#5F1013" },
      { name: "Negro", hex: "#000000" },
      { name: "Azul Marino", hex: "#041734" },
      { name: "Rojo", hex: "#C30718" },
      { name: "Beige", hex: "#AEA88E" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [],
  },
  {
    id: "o9",
    name: "Camisa Rayada (100% Algodón)",
    category: ["Office", "Camisas"],
    description: "Camisa con rayas clásicas, 100% algodón, look formal.",
    images: ["/images/OfficeImg/12.12.svg", "/images/OfficeImg/13.13.svg", "/images/OfficeImg/14.14.svg"],
    colors: [
      { name: "Azul Cielo", hex: "#A1B0CF" },
      { name: "Verde", hex: "#007000" },
      { name: "Azul Marino", hex: "#00112E" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [],
  },
  {
    id: "o10",
    name: "Pantalón Mezclilla (100% Algodón)",
    category: ["Office", "Pantalones"],
    description:
      "Pantalón de mezclilla resistente, 100% algodón, estilo casual-office.",
    images: ["/images/OfficeImg/15.15.svg", "/images/OfficeImg/16.16.svg"],
    colors: [
      { name: "Azul Cielo", hex: "#A1B0CF" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38", "40", "42"],
    features: [],
  },
  {
    id: "o11",
    name: "Pantalón Gabardina",
    category: ["Office", "Pantalones"],
    description:
      "Pantalón de gabardina, mezcla de algodón y poliéster, corte recto.",
    images: ["/images/OfficeImg/17.17.svg", "/images/OfficeImg/18.18.svg"],
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Kaki", hex: "#F0E68C" },
      { name: "Azul Marino", hex: "#000080" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38", "40", "42"],
    features: [],
  },
];
