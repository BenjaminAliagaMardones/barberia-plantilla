# 🎨 Guía Visual de Personalización Rápida

> **Para clientes NO técnicos**: Cómo personalizar tu sitio web en 10 minutos

---

## 📍 Archivo Principal: `src/data/config.js`

**IMPORTANTE**: Solo necesitas editar UN archivo para personalizar TODO el sitio.

---

## 1️⃣ Información de tu Negocio (2 minutos)

### 📝 Dónde encontrarlo:
Abre `src/data/config.js` → Líneas 10-35

### ✏️ Qué cambiar:

```javascript
business: {
  name: "TU NOMBRE O NEGOCIO AQUÍ",           // ⬅️ Ej: "Café Don Pedro"
  phone: "+56 9 1234 5678",                    // ⬅️ Tu número de WhatsApp
  email: "contacto@tunegocio.cl",              // ⬅️ Tu email
  address: {
    street: "Av. Principal 123",               // ⬅️ Tu dirección
    city: "Temuco",                            // ⬅️ Tu ciudad
    region: "La Araucanía",                    // ⬅️ Tu región
    country: "Chile"
  },
  // 🗺️ IMPORTANTE: Busca tu negocio en Google Maps
  // Clic derecho → "¿Qué hay aquí?" → Copia las coordenadas
  geo: {
    latitude: -38.7359,     // ⬅️ Primera coordenada de Google Maps
    longitude: -72.5904     // ⬅️ Segunda coordenada de Google Maps
  },
  hours: "Lunes a Viernes 9:00 - 18:00"       // ⬅️ Tu horario
}
```

**🎯 Resultado**: Tu información aparece en toda la página automáticamente.

---

## 2️⃣ Colores de tu Marca (1 minuto)

### 📝 Dónde encontrarlo:
`src/data/config.js` → Líneas 230-240

### 🎨 Qué cambiar:

```javascript
theme: {
  colors: {
    brand: "#2563EB",      // ⬅️ COLOR PRINCIPAL (tu color favorito)
    brandDark: "#1E40AF",  // ⬅️ Versión más oscura
    accent: "#F59E0B",     // ⬅️ COLOR SECUNDARIO (para botones destacados)
    accentDark: "#D97706"  // ⬅️ Versión más oscura
  }
}
```

### 🌈 Cómo elegir colores:

1. **Opción A - Tienes logo con colores**:
   - Abre tu logo en https://imagecolorpicker.com/
   - Clic en el color principal → Copia el código HEX
   - Pégalo en `brand`

2. **Opción B - No tienes colores definidos**:
   - Ve a https://coolors.co/
   - Clic en "Generate" hasta encontrar una combinación bonita
   - Usa el color principal como `brand`
   - Usa el color secundario como `accent`

3. **Opción C - Usa estos presets**:
   ```javascript
   // 🔵 Azul Profesional (actual)
   brand: "#2563EB", accent: "#F59E0B"
   
   // 🟢 Verde Natural (restaurantes, eco)
   brand: "#10B981", accent: "#F59E0B"
   
   // 🟣 Morado Elegante (salones, spas)
   brand: "#8B5CF6", accent: "#EC4899"
   
   // 🔴 Rojo Energético (gym, deportes)
   brand: "#EF4444", accent: "#F59E0B"
   
   // ⚫ Negro Premium (lujo, moda)
   brand: "#18181B", accent: "#F59E0B"
   ```

**🎯 Resultado**: Todo el sitio cambia de color instantáneamente.

---

## 3️⃣ Contenido del Inicio / Hero (3 minutos)

### 📝 Dónde encontrarlo:
`src/data/config.js` → Líneas 40-80

### ✏️ Qué cambiar:

```javascript
hero: {
  badge: "🚀 Tu Frase Corta",                  // ⬅️ Ej: "💈 Barbería Profesional"
  title: "Tu Título Principal",                // ⬅️ Ej: "Cortes Modernos y Clásicos"
  titleHighlight: "en experiencia premium",    // ⬅️ Parte destacada en color
  subtitle: "Tu descripción breve aquí...",    // ⬅️ 1-2 líneas máximo
  
  ctaPrimary: {
    text: "Texto del Botón Principal",        // ⬅️ Ej: "Agendar Cita"
    link: "/contacto"                         // ⬅️ A dónde lleva el botón
  },
  
  ctaSecondary: {
    text: "Texto Botón Secundario",           // ⬅️ Ej: "Ver Servicios"
    link: "/servicios"
  },
  
  stats: [
    { number: "100+", label: "Clientes" },    // ⬅️ Tus estadísticas
    { number: "5★", label: "Calificación" },
    { number: "3 años", label: "Experiencia" }
  ]
}
```

**💡 Tips**:
- `title`: Máximo 6-8 palabras
- `subtitle`: Máximo 20 palabras
- `stats`: Cambia los números por TUS datos reales

---

## 4️⃣ Tus Servicios (2 minutos)

### 📝 Dónde encontrarlo:
`src/data/config.js` → Líneas 85-125

### ✏️ Ejemplo:

```javascript
services: [
  {
    id: "servicio-1",
    title: "Nombre del Servicio",              // ⬅️ Ej: "Corte Clásico"
    description: "Descripción corta...",       // ⬅️ 1-2 líneas
    icon: "web",                               // ⬅️ Opciones: web, automation, development, seo
    link: "/servicios/corte-clasico",
    featured: true,                            // ⬅️ true = aparece en inicio
    color: "brand"
  },
  // Copia y pega este bloque para agregar más servicios
]
```

**🎨 Iconos disponibles**:
- `web` → Globo (sitios web, diseño)
- `automation` → Rayo (velocidad, automatización)
- `development` → Código (desarrollo, tech)
- `seo` → Lupa (búsqueda, SEO)

---

## 5️⃣ Testimonios (2 minutos)

### 📝 Dónde encontrarlo:
`src/data/config.js` → Líneas 130-160

### ✏️ Ejemplo:

```javascript
testimonials: [
  {
    name: "Nombre del Cliente",                // ⬅️ Ej: "Juan Pérez"
    role: "Su Profesión/Negocio",              // ⬅️ Ej: "Dueño de Restaurante"
    city: "Ciudad, Región",                    // ⬅️ Ej: "Temuco, Araucanía"
    text: "El testimonio completo aquí...",    // ⬅️ 2-3 líneas máximo
    image: "https://i.pravatar.cc/150?img=12", // ⬅️ Ver abajo 👇
    rating: 5,                                 // ⬅️ 1 a 5 estrellas
    company: "Nombre de su Negocio"
  },
  // Copia y pega para agregar más testimonios
]
```

**📸 Fotos de testimonios**:

**Opción A - Usar fotos reales** (¡MEJOR!):
1. Pide foto al cliente (cuadrada, mínimo 300x300px)
2. Guarda en `public/images/testimonios/`
3. Cambia `image: "/images/testimonios/juan-perez.jpg"`

**Opción B - Usar avatares genéricos**:
- Hombre: `https://i.pravatar.cc/150?img=12` (cambia el número 12 por 1-70)
- Mujer: `https://i.pravatar.cc/150?img=32` (números 32-50)

---

## 6️⃣ Planes de Precios (1 minuto)

### 📝 Dónde encontrarlo:
`src/data/config.js` → Líneas 165-215

### ✏️ Ejemplo:

```javascript
plans: [
  {
    name: "Nombre del Plan",                   // ⬅️ Ej: "Plan Básico"
    price: "$99.990",                          // ⬅️ Tu precio
    period: "mensual",                         // ⬅️ mensual / anual / pago único
    description: "Para quién es este plan",   // ⬅️ 1 línea
    features: [
      "Característica 1",                      // ⬅️ Lista de incluye
      "Característica 2",
      "Característica 3"
    ],
    cta: "Texto del Botón",                   // ⬅️ Ej: "Comenzar"
    link: "/contacto?plan=basico",
    popular: false                             // ⬅️ true = aparece destacado con ⭐
  }
]
```

**💡 Tip**: Marca un plan con `popular: true` para destacarlo con badge "⭐ Más Popular"

---

## 7️⃣ Imágenes (5 minutos)

### 📸 Imagen principal del Hero:

**Ubicación**: `public/images/`

**Pasos**:
1. Busca una foto de TU negocio (exterior, interior, producto)
2. Tamaño ideal: 1200x800px (horizontal)
3. Guarda como `hero-image.jpg` en `public/images/`
4. En `config.js` línea 75:
   ```javascript
   image: "/images/hero-image.jpg",
   imageAlt: "Descripción de la imagen"       // ⬅️ Para SEO
   ```

### 📸 Logo:

1. Guarda tu logo en `public/images/logo.png`
2. Abre `src/components/Navbar.astro`
3. Reemplaza el texto por: `<img src="/images/logo.png" alt="Tu Negocio" class="h-10" />`

---

## 8️⃣ Redes Sociales (30 segundos)

### 📝 Dónde encontrarlo:
`src/data/config.js` → Líneas 180-195

### ✏️ Qué cambiar:

```javascript
social: {
  facebook: {
    url: "https://facebook.com/tupagina",     // ⬅️ Tu página de Facebook
    username: "@tupagina"
  },
  instagram: {
    url: "https://instagram.com/tuusuario",   // ⬅️ Tu Instagram
    username: "@tuusuario"
  },
  whatsapp: {
    number: "+56912345678",                    // ⬅️ Tu WhatsApp
    message: "Hola, me interesa..."
  }
}
```

**🗑️ Eliminar redes que no usas**:
- Simplemente borra las líneas de la red social que no tengas

---

## ✅ Checklist Final (antes de publicar)

Antes de mostrar el sitio al mundo, verifica:

- [ ] ✏️ Cambié TODOS los textos de ejemplo
- [ ] 🎨 Ajusté los colores a mi marca
- [ ] 📞 Mi teléfono y email son correctos
- [ ] 📍 Las coordenadas GPS apuntan a mi negocio
- [ ] 📸 Reemplacé las imágenes genéricas por las mías
- [ ] 💰 Los precios son los correctos
- [ ] 🌐 Las redes sociales están bien
- [ ] 📱 Probé en mi celular que se vea bien
- [ ] 🔍 Busqué mi negocio en Google para verificar

---

## 🆘 ¿Necesitas Ayuda?

### Errores comunes:

**❌ "El sitio no se ve"**
- Asegúrate de guardar el archivo `config.js`
- Presiona `Ctrl + C` en la terminal y luego `npm run dev`

**❌ "Los colores no cambian"**
- Verifica que el código de color empiece con `#`
- Debe ser 6 caracteres: `#2563EB` ✅ no `#256` ❌

**❌ "Una imagen no aparece"**
- Verifica que la ruta empiece con `/`: `/images/foto.jpg`
- Verifica que el archivo exista en `public/images/`

---

## 💰 Precio de Personalización

Si prefieres que yo lo personalice por ti:

| Servicio | Tiempo | Precio |
|----------|--------|--------|
| Cambio de textos y colores | 30 min | $29.990 |
| + Cambio de imágenes | 1 hora | $49.990 |
| Personalización completa | 2 horas | $99.990 |

**📞 Contacto**: [tu-email@ejemplo.cl] | WhatsApp: +56 9 XXXX XXXX

---

**🎉 ¡Listo! Con estos cambios tu sitio estará 100% personalizado**

*Guía creada para clientes - Versión 1.0*
