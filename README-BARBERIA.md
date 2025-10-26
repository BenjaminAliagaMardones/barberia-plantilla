# 💈 Barbería Premium Temuco - Landing Page

Landing page profesional para Barbería Premium en Temuco, Chile. Diseño moderno, elegante y optimizado para conversión local.

## ✨ Características

- 🎨 **Diseño Premium**: Paleta negra (#1A1A1A) y dorada (#D4AF37) elegante y masculina
- 📱 **100% Responsive**: Optimizado para móviles, tablets y desktop
- ⚡ **Performance**: Lighthouse score > 90
- 🎯 **SEO Optimizado**: Meta tags, Schema.org (HairSalon) y keywords locales
- 💬 **WhatsApp Integrado**: Botón flotante y enlaces directos
- 🗺️ **Google Maps**: Integración con mapa embebido
- 🎬 **Animaciones**: AOS (Animate On Scroll) suaves y profesionales
- ♿ **Accesibilidad**: WCAG AA compliant

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) 
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones**: AOS (Animate On Scroll)
- **Icons**: SVG inline optimizados

## 📂 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   ├── og-barberia.jpg          # Open Graph image
│   └── images/
├── src/
│   ├── components/
│   │   ├── AboutSection.astro   # Sección "Sobre Nosotros"
│   │   ├── ContactSection.astro # Sección de contacto con mapa
│   │   ├── Footer.astro          # Footer con año dinámico
│   │   ├── Navbar.astro          # Navegación principal
│   │   └── WhatsAppButton.astro  # Botón flotante de WhatsApp
│   ├── data/
│   │   ├── barberia.js           # 📝 Datos centralizados (EDITABLE)
│   │   └── config.js             # Configuración del sitio
│   ├── layouts/
│   │   └── BaseLayout.astro      # Layout base con SEO
│   ├── pages/
│   │   └── index.astro           # Página principal
│   └── config/
│       └── site.config.ts        # Configuración TypeScript
├── tailwind.config.cjs            # Configuración de Tailwind
└── astro.config.mjs
```

## 🚀 Inicio Rápido

### 1. Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 2. Iniciar servidor de desarrollo

\`\`\`bash
npm run dev
\`\`\`

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### 3. Build para producción

\`\`\`bash
npm run build
\`\`\`

Los archivos optimizados estarán en `/dist`.

### 4. Preview del build

\`\`\`bash
npm run preview
\`\`\`

## 🎨 Personalización

### Datos del Negocio

Edita `src/data/barberia.js` para personalizar:

- 📱 Teléfono y WhatsApp
- 📧 Email
- 📍 Dirección y coordenadas
- 🕐 Horarios de atención
- 💈 Servicios y precios
- 💬 Testimonios
- 📱 Redes sociales

```javascript
export const barberia = {
  business: {
    name: "Barbería Premium Temuco",
    phone: "+56 9 8765 4321",
    whatsapp: "56987654321",
    email: "contacto@barberiatemuco.cl",
    // ... más configuraciones
  }
}
```

### Colores

Los colores se configuran en `tailwind.config.cjs`:

```javascript
colors: {
  brand: '#1A1A1A',   // Negro elegante
  accent: '#D4AF37',  // Dorado premium
}
```

### SEO

Edita los meta tags en `src/data/barberia.js`:

```javascript
seo: {
  title: "Barbería Premium Temuco | Cortes modernos y estilo clásico",
  description: "...",
  keywords: ["barbería temuco", "corte de pelo", ...]
}
```

## 📱 Integración WhatsApp

El botón de WhatsApp está configurado con mensaje prellenado:

```
https://wa.me/56987654321?text=Hola,%20quiero%20agendar%20una%20hora
```

Personaliza el mensaje en `src/data/barberia.js`.

## 🗺️ Google Maps

Actualiza las coordenadas en `src/data/barberia.js`:

```javascript
geo: {
  latitude: -38.7359,
  longitude: -72.5904
}
```

Para el mapa embebido, obtén tu URL en [Google Maps](https://www.google.com/maps/) y actualiza `contact.mapEmbed`.

## 🎯 SEO y Performance

### Schema.org

El sitio incluye datos estructurados para HairSalon:

```json
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Barbería Premium Temuco",
  ...
}
```

### Open Graph

Configura la imagen OG en `public/og-barberia.jpg` (1200x630px).

## 🚢 Deploy

### Vercel (Recomendado)

1. Haz push a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Deploy automático ✨

### GitHub Pages

```bash
npm run build
# Sube la carpeta /dist a GitHub Pages
```

### Netlify

```bash
npm run build
# Conecta tu repo en Netlify
```

## 📝 Comandos Disponibles

| Comando                | Acción                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Instala dependencias                             |
| `npm run dev`          | Inicia servidor local en `localhost:4321`        |
| `npm run build`        | Build de producción en `./dist/`                 |
| `npm run preview`      | Preview del build localmente antes de deploy     |
| `npm run astro ...`    | Ejecuta comandos de Astro CLI                    |

## 🎨 Paleta de Colores

```css
Negro Principal: #1A1A1A
Dorado Acento:   #D4AF37
Dorado Oscuro:   #c09a2a
Blanco:          #ffffff
Gris Neutro:     #737373
```

## 📞 Soporte

Para dudas o consultas sobre la plantilla, contacta a:
- Email: contacto@tudominio.cl
- GitHub: [BenjaminAliagaMardones](https://github.com/BenjaminAliagaMardones)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ usando Astro + Tailwind CSS**

💈 **¡Listo para lanzar tu barbería al mundo digital!**
