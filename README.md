# 📱 Plantilla Web Profesional para Negocios Locales

> Plantilla moderna, rápida y profesional construida con Astro + TailwindCSS. Lista para personalizar y vender a tus clientes.

---

## 🎯 ¿Qué incluye esta plantilla?

✅ **Diseño moderno y profesional** con animaciones suaves (AOS.js)  
✅ **100% Responsive** - Se adapta perfectamente a móviles, tablets y desktop  
✅ **SEO Optimizado** - Meta tags, Open Graph, Schema.org LocalBusiness  
✅ **Performance A+** - Lighthouse 95+ en todas las métricas  
✅ **Fácil de personalizar** - Todo centralizado en `src/data/config.js`  
✅ **Componentes reutilizables** - Hero, Servicios, Testimonios, Pricing, Footer  
✅ **Animaciones profesionales** - Fade-up, zoom-in, hover effects, pulse  
✅ **Sistema de colores personalizable** - Variables en TailwindCSS  

---

## 🚀 Inicio Rápido

### 1️⃣ Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]
cd plantilla-tailwind-local

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en: **http://localhost:4321/**

### 2️⃣ Comandos disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa del sitio construido localmente |

---

## 🎨 Personalización para tu Cliente

### ✏️ **1. Información del Negocio** (¡LO MÁS IMPORTANTE!)

Abre el archivo **`src/data/config.js`** y edita:

```javascript
export const site = {
  business: {
    name: "Nombre del Negocio de tu Cliente",
    phone: "+56 9 1234 5678",
    email: "contacto@negocio.cl",
    address: {
      street: "Av. Principal 123",
      city: "Temuco",
      region: "La Araucanía",
      country: "Chile"
    },
    // Importante para SEO local
    geo: {
      latitude: -38.7359,  // 👈 Buscar en Google Maps
      longitude: -72.5904
    },
    hours: "Lunes a Viernes 9:00 - 18:00"
  },
  // ... más configuraciones
}
```

### 🎨 **2. Colores de la Marca**

En **`src/data/config.js`** encontrarás:

```javascript
theme: {
  colors: {
    brand: "#2563EB",      // 🎯 Color principal (Azul)
    brandDark: "#1E40AF",
    accent: "#F59E0B",     // 🎯 Color de acento (Naranja)
    accentDark: "#D97706"
  }
}
```

**Cambiar colores globalmente:**
1. Reemplaza `#2563EB` por el color principal del cliente
2. Reemplaza `#F59E0B` por su color secundario/acento
3. Los colores oscuros se ajustan automáticamente en `tailwind.config.cjs`

### 🦸 **3. Contenido del Hero (Portada)**

```javascript
hero: {
  badge: "🚀 Soluciones Digitales",
  title: "Transformamos tu negocio",
  titleHighlight: "en experiencia digital",
  subtitle: "Diseño web, automatización y estrategias digitales...",
  ctaPrimary: {
    text: "Cotizar Proyecto",
    link: "/contacto"
  },
  stats: [
    { number: "50+", label: "Proyectos" },
    { number: "100%", label: "Satisfacción" },
    { number: "3 años", label: "Experiencia" }
  ]
}
```

### 💼 **4. Servicios**

```javascript
services: [
  {
    id: "web-design",
    title: "Diseño Web Profesional",
    description: "Sitios web modernos...",
    icon: "web",  // web, automation, development, seo
    link: "/servicios/web",
    featured: true,  // Aparece en homepage
    color: "brand"
  }
]
```

### 💬 **5. Testimonios**

```javascript
testimonials: [
  {
    name: "María González",
    role: "Dueña de Café",
    city: "Temuco, Araucanía",  // 👈 Da credibilidad local
    text: "Increíble trabajo...",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    company: "Café Aromático"
  }
]
```

**💡 Tip:** Cambia las imágenes por fotos reales del cliente para mayor credibilidad.

### 💰 **6. Planes de Precios**

```javascript
plans: [
  {
    name: "Básico",
    price: "$299.990",
    period: "pago único",
    description: "Ideal para emprendedores...",
    features: [
      "Landing page de 1 página",
      "Diseño responsive",
      "Formulario de contacto"
    ],
    popular: false  // 👈 Cambiar a true para destacar
  }
]
```

### 🌐 **7. Redes Sociales**

```javascript
social: {
  github: {
    url: "https://github.com/tunombre",
    username: "@tunombre"
  },
  linkedin: {
    url: "https://linkedin.com/in/tunombre",
    username: "Tu Nombre"
  }
  // instagram, twitter...
}
```

### 🔗 **8. Navegación**

```javascript
navigation: {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Contacto', href: '/contacto' }
  ]
}
```

---

## 🎬 Animaciones y Efectos

### AOS (Animate On Scroll)

Ya está configurado globalmente. Usa estos atributos en cualquier elemento:

```html
<!-- Fade up con delay -->
<div data-aos="fade-up" data-aos-delay="200">
  Contenido
</div>

<!-- Zoom in -->
<div data-aos="zoom-in" data-aos-delay="400">
  Botón CTA
</div>

<!-- Flip left -->
<div data-aos="flip-left">
  Tarjeta
</div>
```

**Animaciones disponibles:**
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`, `flip-up`
- `slide-up`, `slide-down`

### Clases CSS personalizadas

```html
<!-- Botón con pulse -->
<button class="animate-pulse-btn">Contactar</button>

<!-- Texto con gradiente -->
<h1 class="text-gradient">Título destacado</h1>

<!-- Glassmorphism -->
<div class="glass">Contenido</div>
```

---

## 📱 Responsividad

La plantilla usa breakpoints de TailwindCSS:

| Breakpoint | Tamaño | Uso |
|------------|--------|-----|
| `sm:` | ≥ 640px | Móvil grande |
| `md:` | ≥ 768px | Tablet |
| `lg:` | ≥ 1024px | Desktop |
| `xl:` | ≥ 1280px | Desktop grande |

**Ejemplo:**
```html
<div class="text-2xl md:text-4xl lg:text-5xl">
  <!-- 2xl en móvil, 4xl en tablet, 5xl en desktop -->
</div>
```

---

## 🔍 SEO y Performance

### Meta Tags (ya configurados)

- ✅ Title y Description personalizados por página
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Schema.org LocalBusiness (Google Maps, horarios)
- ✅ Geo-targeting para búsquedas locales

### Optimización de Imágenes

```html
<!-- Lazy loading automático -->
<img 
  src="/imagen.jpg" 
  alt="Descripción" 
  loading="lazy"
  width="800"
  height="600"
/>
```

**💡 Tip:** Convierte imágenes a WebP para mejor performance:
```bash
# Usando imagemagick
convert imagen.jpg -quality 85 imagen.webp
```

---

## 🎯 Entrega al Cliente

### Checklist antes de entregar:

- [ ] Cambiar todos los textos en `config.js`
- [ ] Actualizar colores de marca (`theme.colors`)
- [ ] Reemplazar imágenes placeholder
- [ ] Configurar coordenadas GPS correctas
- [ ] Actualizar información de contacto
- [ ] Probar formularios (si los hay)
- [ ] Verificar responsive en móvil real
- [ ] Ejecutar Lighthouse (target: 95+ en todas las métricas)
- [ ] Configurar dominio y hosting
- [ ] Agregar Google Analytics (opcional)

### Documentación para el cliente:

Crea un PDF simple con:
1. URL del sitio
2. Credenciales de acceso (hosting, dominio)
3. Cómo editar contenido básico (si tiene CMS)
4. Contacto para soporte técnico

---

## 🛠️ Estructura de Archivos

```
plantilla-tailwind-local/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   ├── TestimonialCard.astro
│   │   ├── PricingCard.astro
│   │   └── CTASection.astro
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base con SEO
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── data/
│   │   └── config.js        # 🎯 CONFIGURACIÓN CENTRAL
│   └── styles/
│       └── global.css
├── public/                  # Archivos estáticos
│   ├── favicon.svg
│   └── images/
├── tailwind.config.cjs      # Configuración de Tailwind
├── astro.config.mjs         # Configuración de Astro
└── package.json
```

---

## 🚀 Despliegue (Hosting)

### Opción 1: Vercel (Recomendado - GRATIS)

```bash
npm run build
npx vercel deploy
```

### Opción 2: Netlify

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

### Opción 3: Hosting tradicional

1. Ejecutar `npm run build`
2. Subir carpeta `dist/` al servidor vía FTP
3. Apuntar dominio a la carpeta

---

## 💡 Tips Profesionales

### 1. **Personalización por industria**

Crea variantes guardando diferentes `config.js`:
- `config-restaurant.js` (Restaurantes)
- `config-lawyer.js` (Abogados)
- `config-barber.js` (Barberías)

### 2. **Dominio .cl incluido**

Ofrece registrar el dominio por el cliente:
- NIC Chile: https://www.nic.cl/

### 3. **Hosting recomendado para Chile**

- **SiteGround** (Internacional, buen soporte)
- **Hostinger** (Económico)
- **Webempresa** (Español)

### 4. **Mantenimiento mensual**

Ofrece paquete de mantenimiento:
- Actualización de contenido
- Backup mensual
- Soporte técnico
- Monitoreo de uptime

---

## 📞 Soporte

¿Necesitas ayuda personalizando esta plantilla?

- 📧 Email: tu@email.cl
- 💬 WhatsApp: +56 9 XXXX XXXX
- 🌐 Web: https://tu-sitio.cl

---

## 📄 Licencia

Esta plantilla es de uso comercial. Puedes:
✅ Venderla a múltiples clientes
✅ Modificarla según necesites
✅ Usarla en proyectos personales o de clientes

---

**Hecho con ❤️ para emprendedores y freelancers chilenos**

*Última actualización: Octubre 2025*
