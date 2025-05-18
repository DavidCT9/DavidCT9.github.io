# AZ Empresarial - Sitio Web Moderno

Este proyecto es una versión moderna y optimizada del sitio web de AZ Empresarial, un proveedor mexicano de uniformes empresariales.

## Características

- Diseño moderno y responsivo
- Optimización de imágenes con carga diferida
- Componentes interactivos con animaciones suaves
- Catálogo de productos con filtrado y búsqueda
- Visualización detallada de productos con zoom
- Formulario de contacto funcional

## Tecnologías Utilizadas

- React 18
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Radix UI

## Estructura del Proyecto

\`\`\`
a-zempresarial/
├── public/
│   └── images/
│       └── BusinessImg/  # Aquí van todas las imágenes de productos
│           ├── 1.svg
│           ├── 2.svg
│           └── ...
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes de UI reutilizables
│   │   ├── Footer.tsx
│   │   ├── ImageCarousel.tsx
│   │   ├── ImageMagnifier.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductDetail.tsx
│   ├── data/
│   │   └── products.ts  # Datos de productos
│   ├── lib/
│   │   └── utils.ts     # Utilidades
│   ├── pages/
│   │   ├── CatalogPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── HomePage.tsx
│   ├── types/
│   │   └── product.ts   # Tipos de datos
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.js
\`\`\`

## Instalación

1. Clona este repositorio:
   \`\`\`bash
   git clone https://github.com/tu-usuario/a-zempresarial.git
   cd a-zempresarial
   \`\`\`

2. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`

3. Coloca tus imágenes en la carpeta `public/images/BusinessImg/`

4. Inicia el servidor de desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

## Construcción para Producción

Para construir el proyecto para producción:

\`\`\`bash
npm run build
\`\`\`

Los archivos optimizados se generarán en la carpeta `dist/`.

## Despliegue

Este proyecto está optimizado para ser desplegado en Vercel:

1. Crea una cuenta en [Vercel](https://vercel.com) si aún no tienes una
2. Conecta tu repositorio de GitHub
3. Configura el proyecto y despliégalo

También puedes desplegarlo en cualquier otro servicio de hosting estático como Netlify, GitHub Pages, etc.

## Optimización de Imágenes

El sitio implementa varias técnicas para optimizar las imágenes:

- Carga diferida (lazy loading)
- Tamaños responsivos
- Componente de magnificación para detalles

## Personalización

Puedes personalizar los colores y estilos editando:

- `tailwind.config.js` para los temas y colores principales
- `src/index.css` para estilos globales
