
# Specialistati - Portafolio Personal

Portafolio profesional y blog de Christian, Ingeniero de Sistemas especializado en automatización, redes SD-WAN y soluciones tecnológicas innovadoras.

## 🎯 Características

- ✅ **Next.js 14** con App Router
- ✅ **TypeScript** para type safety
- ✅ **TailwindCSS** para estilos modernos
- ✅ **Blog MDX** con gray-matter
- ✅ **Animaciones** con Framer Motion
- ✅ **Componentes reutilizables**
- ✅ **Diseño responsive**
- ✅ **Colores personalizados** (#0f4c81 azul oscuro, #f7f8fa gris claro)

## 📂 Estructura del Proyecto

```
specialistati/
├── app/                      # Páginas y rutas (App Router)
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── globals.css          # Estilos globales
│   ├── about/               # Página "Acerca de"
│   ├── projects/            # Página de proyectos
│   ├── blog/                # Blog y posts individuales
│   └── contact/             # Página de contacto
├── components/              # Componentes reutilizables
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── project-card.tsx
│   ├── post-card.tsx
│   └── contact-form.tsx
├── content/
│   └── posts/               # Artículos en formato MDX
│       ├── bienvenida-al-blog.mdx
│       ├── lecciones-sdwan.mdx
│       └── automatizacion-n8n.mdx
├── data/
│   └── mock-data.ts         # Datos de proyectos demo
├── lib/
│   └── posts.ts             # Funciones para leer posts MDX
├── public/
│   └── images/              # Imágenes estáticas
├── package.json             # Dependencias
├── tailwind.config.ts       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── next.config.js           # Configuración de Next.js
```

## 🚀 Instalación y Ejecución

### Requisitos previos

- Node.js 18.x o superior
- npm, yarn o pnpm

### Pasos

1. **Clonar o descargar el proyecto**

```bash
cd specialistati/nextjs_space
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**

```
http://localhost:3000
```

## 🏗️ Compilación para Producción

```bash
# Construir
npm run build

# Iniciar servidor de producción
npm start
```

## 📝 Páginas Disponibles

- **/** - Página de inicio con hero, proyectos recientes y posts recientes
- **/about** - Información personal y enlaces a redes sociales
- **/projects** - Grilla con todos los proyectos
- **/blog** - Lista completa de artículos del blog
- **/blog/[slug]** - Página individual de cada artículo
- **/contact** - Formulario de contacto

## 🎨 Personalización

### Colores

Los colores principales se definen en `tailwind.config.ts` y `app/globals.css`:

- **Azul oscuro principal**: `#0f4c81`
- **Gris claro fondo**: `#f7f8fa`

### Datos de Proyectos

Edita `data/mock-data.ts` para agregar o modificar proyectos:

```typescript
export const projects: Project[] = [
  {
    id: 'mi-proyecto',
    title: 'Mi Proyecto',
    description: 'Descripción del proyecto...',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Project_%282019%E2%80%93present%29.svg/880px-Microsoft_Project_%282019%E2%80%93present%29.svg.png',
    tags: ['Tag1', 'Tag2'],
    link: 'https://d2ds8yldqp7gxv.cloudfront.net/Blog+Explanatory+Images/Project+Description+1.webp',
  },
]
```

### Artículos del Blog

Crea nuevos archivos `.mdx` en `content/posts/`:

```markdown
---
title: "Título del Artículo"
date: "2025-10-03"
excerpt: "Resumen breve del artículo"
---

# Contenido del artículo aquí...
```

### Enlaces de Redes Sociales

Actualiza los enlaces en:
- `app/about/page.tsx`
- `components/footer.tsx`

Cambia las URLs de LinkedIn y GitHub por tus perfiles reales:

```tsx
https://www.linkedin.com/in/christian-ingeniero/
https://github.com/christianspecialistati
```

### Imágenes

Reemplaza las imágenes placeholder:
- Foto personal en `/about`
- Imágenes de proyectos en `data/mock-data.ts`

## 📦 Dependencias Principales

```json
{
  "next": "14.2.28",
  "react": "18.2.0",
  "typescript": "5.2.2",
  "tailwindcss": "3.3.3",
  "@mdx-js/loader": "^3.1.1",
  "gray-matter": "^4.0.3",
  "framer-motion": "10.18.0",
  "lucide-react": "0.446.0"
}
```

## 🐛 Solución de Problemas

### Error: Module not found

```bash
rm -rf node_modules
npm install
```

### Error en build de MDX

Verifica que todos los archivos `.mdx` tengan frontmatter válido:

```markdown
---
title: "Título"
date: "YYYY-MM-DD"
excerpt: "Resumen"
---
```

### Estilos no se aplican

```bash
npm run dev
```

Asegúrate de que `tailwind.config.ts` incluya las rutas correctas en `content`.

## 📄 Licencia

Este proyecto es para uso personal. Puedes adaptarlo a tus necesidades.

## 📧 Contacto

**Christian** - Ingeniero de Sistemas  
- LinkedIn: [christian-ingeniero](https://www.linkedin.com/in/christian-ingeniero/)
- GitHub: [christianspecialistati](https://github.com/christianspecialistati)

---

**Desarrollado con ❤️ usando Next.js y TypeScript**
