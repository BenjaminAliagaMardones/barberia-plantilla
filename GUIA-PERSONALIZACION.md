# 🎨 Guía de Personalización - Plantilla Profesional

> **Tiempo estimado:** 15-30 minutos  
> **Dificultad:** Fácil - No requiere conocimientos de programación

---

## 📋 Tabla de Contenidos

1. [Configuración Básica](#1-configuración-básica-5-min)
2. [Colores y Marca](#2-colores-y-marca-5-min)
3. [Contenido de Páginas](#3-contenido-de-páginas-10-min)
4. [Imágenes y Medios](#4-imágenes-y-medios-5-min)
5. [Formulario de Contacto](#5-formulario-de-contacto-3-min)
6. [Redes Sociales](#6-redes-sociales-2-min)
7. [SEO Local](#7-seo-local-5-min)

---

## 1. Configuración Básica (5 min)

### 📝 Archivo: `src/config/site.config.ts`

Este es el **archivo más importante**. Aquí cambias toda la información de tu negocio.

#### ✏️ Información del Negocio

```typescript
// ANTES
name: 'Benjamin Mardones',
businessName: 'Servicios Digitales',

// DESPUÉS (tu negocio)
name: 'Tu Nombre o Negocio',
businessName: 'Cafetería El Sabor',
```

#### 📍 Ubicación

```typescript
location: {
  city: 'Tu Ciudad',              // Ej: "Temuco"
  region: 'Tu Región',            // Ej: "La Araucanía"
  address: 'Tu Dirección Real',   // Ej: "Av. Alemania 0281"
  postalCode: '4780000',          // Tu código postal
  
  coordinates: {
    // 🗺️ Cómo obtener coordenadas:
    // 1. Ve a Google Maps
    // 2. Busca tu dirección
    // 3. Clic derecho > "¿Qué hay aquí?"
    // 4. Copia los números que aparecen
    
    latitude: -38.7359,   // Primer número
    longitude: -72.5904,  // Segundo número
  },
},
```

#### 📞 Contacto

```typescript
contact: {
  phone: '+56 9 1234 5678',      // Tu teléfono con formato
  phoneRaw: '+56912345678',       // Mismo número sin espacios
  email: 'contacto@tudominio.cl', // Tu email
  whatsapp: '+56912345678',       // Tu WhatsApp (igual que phone)
  whatsappMessage: 'Tu mensaje predeterminado', // Mensaje al abrir WhatsApp
},
```

**💡 Tip:** El número de WhatsApp debe incluir el código del país (+56 para Chile).

---

## 2. Colores y Marca (5 min)

### 🎨 Archivo: `tailwind.config.cjs`

Cambia los colores para que coincidan con tu marca.

#### Encontrar tu color principal

1. Ve a [Coolors.co](https://coolors.co/) o [HTML Color Codes](https://htmlcolorcodes.com/)
2. Elige tu color
3. Copia el código HEX (ej: `#2563eb`)

#### Editar colores

```javascript
colors: {
  // Color principal de tu marca
  brand: {
    600: '#2563eb',  // 👈 CAMBIAR ESTE
  },
  
  // Color de acento (botones destacados, CTAs)
  accent: {
    500: '#f97316',  // 👈 CAMBIAR ESTE
  },
}
```

**📌 Ejemplos de combinaciones:**

| Tipo de Negocio | Color Principal | Color Acento |
|-----------------|-----------------|--------------|
| Cafetería       | `#6B4423` (café) | `#F4A460` (dorado) |
| Barbería        | `#1F2937` (negro) | `#EF4444` (rojo) |
| Spa/Belleza     | `#EC4899` (rosa) | `#A855F7` (morado) |
| Abogado         | `#1E40AF` (azul) | `#D97706` (dorado) |
| Gimnasio        | `#DC2626` (rojo) | `#FBBF24` (amarillo) |

---

## 3. Contenido de Páginas (10 min)

### 🏠 Página Principal: `src/pages/index.astro`

#### Cambiar el título principal (Línea ~90)

```html
<h1 class="...">
  Impulsa tu negocio con
  <span class="text-brand-600 block mt-2">tu nuevo título aquí</span>
</h1>
```

#### Cambiar la descripción (Línea ~95)

```html
<p class="...">
  Tu nueva descripción del negocio aquí.
  Explica qué haces y cómo ayudas a tus clientes.
</p>
```

#### Modificar servicios destacados (Línea ~18)

```javascript
const featuredServices = [
  {
    title: 'Tu Servicio 1',
    description: 'Descripción corta del servicio',
    icon: 'web', // Opciones: web, automation, development, seo, ecommerce, consulting
    link: '/tu-pagina-servicio',
  },
  // Agregar más servicios...
];
```

#### Cambiar testimonios (Línea ~40)

```javascript
const testimonials = [
  {
    name: 'Nombre del Cliente',
    role: 'Su cargo o negocio',
    text: 'El testimonio completo aquí...',
    image: 'URL-de-foto',  // Puede ser de https://pravatar.cc o tu foto real
    rating: 5,              // De 1 a 5
  },
];
```

---

## 4. Imágenes y Medios (5 min)

### 📸 Tipos de imágenes necesarias

| Imagen | Tamaño Recomendado | Ubicación | Uso |
|--------|-------------------|-----------|-----|
| Logo | 200x200px (SVG mejor) | `public/logo.svg` | Navbar, Footer |
| Open Graph | 1200x630px | `public/og-image.jpg` | Redes sociales |
| Favicon | 32x32px | `public/favicon.svg` | Pestaña del navegador |
| Hero | 1920x1080px | URL en páginas | Imagen principal |

### 🖼️ Cambiar imágenes en páginas

Busca en cada página las URLs de Unsplash y reemplázalas:

```html
<!-- ANTES -->
<img src="https://images.unsplash.com/photo-..." alt="...">

<!-- DESPUÉS -->
<img src="/images/tu-foto.jpg" alt="Descripción de tu foto">
```

**💡 Dónde guardar tus imágenes:**
- Crea carpeta: `public/images/`
- Guarda ahí todas tus fotos
- Referéncialas como: `/images/nombre.jpg`

### 🎨 Optimizar imágenes

Antes de subir, optimiza tus imágenes:

1. Ve a [TinyPNG.com](https://tinypng.com/)
2. Sube tu imagen
3. Descarga la versión optimizada
4. Usa esa en tu sitio

**Resultado:** Sitio más rápido, mejor en Google.

---

## 5. Formulario de Contacto (3 min)

### 📧 Opción 1: Formspree (Gratis, recomendado)

1. **Crear cuenta:**
   - Ve a [Formspree.io](https://formspree.io/)
   - Regístrate gratis (permite 50 envíos/mes)

2. **Crear formulario:**
   - Click "New Form"
   - Copia tu Form ID (ej: `mqazwepq`)

3. **Agregar a tu sitio:**
   
   En `src/config/site.config.ts`:
   
   ```typescript
   forms: {
     formspreeId: 'TU-ID-AQUI',  // 👈 Pegar tu ID
   },
   ```

4. **Verificar:**
   - Ve a `/contacto` en tu sitio
   - Envía un mensaje de prueba
   - Debería llegar a tu email ✅

### 📱 Botón de WhatsApp

Ya configurado con tu número en `site.config.ts`. Aparece automáticamente flotando en la esquina.

**Personalizar mensaje:**
```typescript
whatsappMessage: '¡Hola! Necesito información sobre [tu servicio]',
```

---

## 6. Redes Sociales (2 min)

### 🔗 Archivo: `src/config/site.config.ts`

```typescript
social: {
  github: 'https://github.com/tu-usuario',       // GitHub
  linkedin: 'https://linkedin.com/in/tu-perfil', // LinkedIn
  twitter: 'https://twitter.com/tu-usuario',     // Twitter/X
  instagram: 'https://instagram.com/tu-usuario', // Instagram
  facebook: 'https://facebook.com/tu-pagina',    // Facebook
},
```

**💡 Tip:** Deja en blanco (`''`) las redes que no uses. No se mostrarán.

---

## 7. SEO Local (5 min)

### 🌍 Optimización para búsquedas locales

#### ✅ Checklist SEO

- [ ] **Cambiar ciudad/región** en `site.config.ts`
- [ ] **Actualizar coordenadas GPS** (importante!)
- [ ] **Mencionar tu ciudad** en todos los textos
- [ ] **Agregar keywords locales** en descriptions
- [ ] **Crear Google My Business**
- [ ] **Verificar en Google Search Console**

#### 📝 Keywords efectivas

Incluye tu ciudad en los textos. Ejemplos:

```
❌ "Cafetería con los mejores granos"
✅ "Cafetería en Temuco con los mejores granos de café"

❌ "Servicios de diseño web"
✅ "Diseño web en Temuco para negocios locales"
```

#### 🗺️ Google My Business

1. Ve a [Google My Business](https://business.google.com/)
2. Registra tu negocio
3. Verifica tu ubicación
4. Agrega fotos y horarios
5. Pide reseñas a clientes

**Resultado:** Aparecer en Google Maps y búsquedas locales 🎯

---

## 🚀 Deployment (Publicar tu sitio)

### Opción 1: Vercel (Recomendado)

**Gratis para siempre + dominio personalizado**

1. Crea cuenta en [Vercel.com](https://vercel.com/)
2. Click "New Project"
3. Conecta tu GitHub
4. Selecciona tu repositorio
5. Click "Deploy"

**🎉 ¡Listo! Tu sitio está en línea en 2 minutos.**

### Opción 2: Netlify

Similar a Vercel. Muy buena opción también.

### Opción 3: Dominio personalizado

Compra tu dominio (.cl, .com, etc.) y conéctalo:

1. Compra dominio en [NIC Chile](https://www.nic.cl/)
2. En Vercel/Netlify > Settings > Domains
3. Agrega tu dominio
4. Actualiza DNS según instrucciones

---

## 🎯 Checklist Final

Antes de publicar, verifica:

- [ ] Toda la información de contacto está correcta
- [ ] Todas las imágenes cargan bien
- [ ] Formulario de contacto funciona (envía email de prueba)
- [ ] WhatsApp abre correctamente
- [ ] Todos los enlaces funcionan
- [ ] Probado en mobile y desktop
- [ ] Textos sin errores ortográficos
- [ ] Favicon y logo cambiados

---

## ❓ ¿Necesitas Ayuda?

### 🐛 Problemas comunes

**"El formulario no funciona"**
- Verifica que pusiste el Form ID correcto en `site.config.ts`
- Revisa que el email en Formspree sea el correcto

**"WhatsApp no abre"**
- Asegúrate que el número incluya el código de país (+56)
- Formato correcto: `+56912345678` (sin espacios)

**"Los colores no cambian"**
- Limpia caché: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)
- Verifica que editaste `tailwind.config.cjs` correctamente

### 📧 Soporte

¿Necesitas ayuda personalizada?

**Email:** contacto@tudominio.cl  
**WhatsApp:** +56 9 1234 5678

---

## 🎉 ¡Felicidades!

Tu sitio profesional está listo para generar clientes 🚀

**Próximos pasos:**
1. Compartir en redes sociales
2. Agregar a tarjetas de presentación
3. Optimizar con feedback de usuarios
4. Medir resultados con Google Analytics

---

**📅 Versión:** 1.0  
**🔄 Última actualización:** Octubre 2025
