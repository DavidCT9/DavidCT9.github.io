import type { Product } from "../types/product"

export const productData: Product[] = [
  {
    id: "1",
    name: "Camisa Empresarial Clásica",
    category: "Camisas",
    description:
      "Camisa formal de manga larga con cuello clásico, ideal para entornos corporativos. Fabricada con una mezcla de algodón y poliéster para mayor durabilidad y comodidad.",
    images: ["/images/BusinessImg/1.svg", "/images/BusinessImg/2.svg", "/images/BusinessImg/3.svg"],
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
      "Disponible con bordado personalizado",
    ],
  },
  {
    id: "2",
    name: "Pantalón Ejecutivo",
    category: "Pantalones",
    description:
      "Pantalón formal con corte recto, ideal para el entorno de oficina. Confeccionado con materiales de alta calidad que garantizan comodidad durante toda la jornada laboral.",
    images: ["/images/BusinessImg/4.svg", "/images/BusinessImg/5.svg"],
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Azul Marino", hex: "#000080" },
      { name: "Gris Oscuro", hex: "#404040" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38", "40", "42"],
    features: [
      "70% poliéster, 30% viscosa",
      "Cintura con ajuste interno",
      "Bolsillos frontales y traseros",
      "Resistente a manchas",
      "Lavable en máquina",
    ],
  },
  {
    id: "3",
    name: "Chaleco Corporativo",
    category: "Chalecos",
    description:
      "Chaleco elegante y funcional, perfecto para complementar el uniforme empresarial. Diseñado para proporcionar un aspecto profesional mientras mantiene la comodidad.",
    images: ["/images/BusinessImg/6.svg", "/images/BusinessImg/7.svg"],
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Azul Marino", hex: "#000080" },
      { name: "Gris", hex: "#808080" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "100% poliéster",
      "Forro interior satinado",
      "Ajuste en la espalda",
      "Bolsillos frontales",
      "Ideal para bordado corporativo",
    ],
  },
  {
    id: "4",
    name: "Bata Laboratorio Premium",
    category: "Batas",
    description:
      "Bata de laboratorio de alta calidad, diseñada para profesionales de la salud y científicos. Ofrece protección y comodidad durante largas jornadas de trabajo.",
    images: ["/images/BusinessImg/8.svg", "/images/BusinessImg/1.svg"],
    colors: [
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Azul Claro", hex: "#ADD8E6" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "65% poliéster, 35% algodón",
      "Resistente a manchas y productos químicos",
      "Manga larga con puños ajustables",
      "Múltiples bolsillos",
      "Cierre con botones a presión",
    ],
  },
  {
    id: "5",
    name: "Camisa Polo Empresarial",
    category: "Camisas",
    description:
      "Polo de manga corta ideal para uniformes casuales o de campo. Combina la formalidad de una camisa con la comodidad de una prenda deportiva.",
    images: ["/images/BusinessImg/2.svg", "/images/BusinessImg/3.svg"],
    colors: [
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
    id: "6",
    name: "Pantalón Chino Corporativo",
    category: "Pantalones",
    description:
      "Pantalón chino semi-formal, perfecto para entornos de trabajo casual o uniforme de campo. Combina estilo y funcionalidad.",
    images: ["/images/BusinessImg/5.svg", "/images/BusinessImg/4.svg"],
    colors: [
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Azul Marino", hex: "#000080" },
      { name: "Gris", hex: "#808080" },
      { name: "Negro", hex: "#000000" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38", "40", "42"],
    features: [
      "98% algodón, 2% elastano",
      "Corte recto",
      "Bolsillos frontales y traseros",
      "Pretina con pasadores para cinturón",
      "Resistente al desgaste",
    ],
  },
  {
    id: "7",
    name: "Chaleco Multibolsillos",
    category: "Chalecos",
    description:
      "Chaleco funcional con múltiples bolsillos, ideal para personal de logística, eventos o trabajo de campo. Combina practicidad y apariencia profesional.",
    images: ["/images/BusinessImg/7.svg", "/images/BusinessImg/6.svg"],
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Azul Marino", hex: "#000080" },
      { name: "Caqui", hex: "#C3B091" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [
      "65% poliéster, 35% algodón",
      "Múltiples bolsillos con cierre",
      "Cremallera frontal de alta resistencia",
      "Espalda en malla para ventilación",
      "Ajustes laterales con velcro",
    ],
  },
  {
    id: "8",
    name: "Bata Industrial",
    category: "Batas",
    description:
      "Bata industrial diseñada para entornos de manufactura y producción. Ofrece protección y durabilidad en condiciones de trabajo exigentes.",
    images: ["/images/BusinessImg/8.svg", "/images/BusinessImg/1.svg"],
    colors: [
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Azul", hex: "#0000FF" },
      { name: "Gris", hex: "#808080" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [
      "100% poliéster de alta resistencia",
      "Tratamiento antimanchas",
      "Bolsillos reforzados",
      "Cierre con botones a presión",
      "Puños elásticos",
    ],
  },
]
