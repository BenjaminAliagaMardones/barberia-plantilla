# 🚀 GUÍA RÁPIDA DE INICIO - Barbería Premium Temuco

## ⚡ Inicio en 3 Pasos

### 1️⃣ Instalar Dependencias
```bash
npm install
```

### 2️⃣ Iniciar Servidor de Desarrollo
```bash
npm run dev
```
Abre tu navegador en: **http://localhost:4321**

### 3️⃣ Personalizar Contenido
Edita el archivo: **`src/data/barberia.js`**

---

## 🎨 Personalización Rápida

### Cambiar Teléfono y WhatsApp
```javascript
// src/data/barberia.js (líneas 16-19)
phone: "+56 9 XXXX XXXX",          // ← Tu número
phoneDisplay: "+56 9 XXXX XXXX",
whatsapp: "569XXXXXXXX",            // ← Sin espacios ni +
whatsappMessage: "Hola, quiero agendar una hora",
```

### Cambiar Dirección
```javascript
// src/data/barberia.js (líneas 20-26)
address: {
  street: "Tu Dirección 123",       // ← Tu calle
  city: "Tu Ciudad",
  region: "Tu Región",
  // ...
}
```

### Cambiar Horarios
```javascript
// src/data/barberia.js (líneas 31-34)
hours: {
  weekday: "Lunes a Viernes: 09:00 - 19:00",  // ← Tus horarios
  saturday: "Sábado: 10:00 - 14:00",
  sunday: "Domingo: Cerrado"
}
```

### Actualizar Servicios y Precios
```javascript
// src/data/barberia.js (líneas 54-115)
services: [
  {
    title: "Corte Clásico",
    price: "Desde $8.000",      // ← Tu precio
    description: "...",
    // ...
  }
]
```

### Cambiar Testimonios
```javascript
// src/data/barberia.js (líneas 163-202)
testimonials: [
  {
    name: "Nombre del Cliente",
    text: "Su testimonio aquí...",
    rating: 5,
    // ...
  }
]
```

### Actualizar Redes Sociales
```javascript
// src/data/barberia.js (líneas 35-38)
social: {
  instagram: "https://instagram.com/tu_usuario",
  facebook: "https://facebook.com/tu_pagina"
}
```

---

## 📱 Configurar WhatsApp

El sitio tiene **3 integraciones de WhatsApp**:

1. **Botón Flotante** (esquina inferior derecha)
2. **Botón Hero** ("Agendar Cita")
3. **Sección Contacto** (tarjeta verde)

Todos usan el número configurado en `barberia.js`:
```javascript
whatsapp: "569XXXXXXXX"  // Sin espacios, sin +, sin guiones
```

**Ejemplo correcto:**
- ✅ `"56912345678"`
- ❌ `"+56 9 1234 5678"`
- ❌ `"56-9-1234-5678"`

---

## 🗺️ Configurar Google Maps

### Paso 1: Obtener Coordenadas
1. Abre [Google Maps](https://www.google.com/maps)
2. Busca tu dirección
3. Click derecho → "¿Qué hay aquí?"
4. Copia las coordenadas (ejemplo: -38.7359, -72.5904)

### Paso 2: Actualizar en el código
```javascript
// src/data/barberia.js (líneas 27-30)
geo: {
  latitude: -38.7359,   // ← Tu latitud
  longitude: -72.5904   // ← Tu longitud
}
```

### Paso 3: Obtener URL de Embed
1. En Google Maps, busca tu dirección
2. Click en "Compartir"
3. Pestaña "Insertar un mapa"
4. Copia la URL del `src="..."`
5. Pégala en:
```javascript
// src/data/barberia.js (línea 211)
mapEmbed: "https://www.google.com/maps/embed?pb=..."
```

---

## 🎨 Cambiar Colores (Opcional)

Si quieres cambiar la paleta de colores:

```javascript
// tailwind.config.cjs (líneas 9-31)
brand: {
  DEFAULT: '#1A1A1A',  // ← Color principal (negro)
  // ...
},
accent: {
  DEFAULT: '#D4AF37',  // ← Color de acento (dorado)
  // ...
}
```

**Colores actuales:**
- 🖤 Negro: `#1A1A1A`
- ✨ Dorado: `#D4AF37`

---

## 🚢 Publicar el Sitio

### Opción 1: Vercel (Recomendado - Gratis)
1. Sube tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. "Import Project" → Selecciona tu repo
4. Click "Deploy"
5. ¡Listo! Tu sitio está en: `tu-sitio.vercel.app`

### Opción 2: Netlify (Gratis)
1. Sube tu proyecto a GitHub
2. Ve a [netlify.com](https://netlify.com)
3. "New site from Git" → Selecciona tu repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"

### Opción 3: GitHub Pages (Gratis)
```bash
npm run build
# Sube la carpeta /dist/ a tu repo de GitHub Pages
```

---

## 📋 Checklist Pre-Lanzamiento

Antes de publicar, verifica:

- [ ] ✅ Teléfono y WhatsApp actualizados
- [ ] ✅ Dirección correcta
- [ ] ✅ Horarios de atención correctos
- [ ] ✅ Precios de servicios actualizados
- [ ] ✅ Testimonios personalizados
- [ ] ✅ Redes sociales configuradas
- [ ] ✅ Google Maps funcionando
- [ ] ✅ Imágenes optimizadas (si agregaste)
- [ ] ✅ Probado en móvil
- [ ] ✅ Probado en tablet
- [ ] ✅ Probado en desktop

---

## 🆘 Solución de Problemas

### El sitio no carga
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Error al compilar
```bash
# Limpiar caché
rm -rf .astro dist
npm run build
```

### WhatsApp no funciona
Verifica que el número esté sin espacios:
```javascript
whatsapp: "56912345678"  // ✅ Correcto
whatsapp: "+56 9 1234 5678"  // ❌ Incorrecto
```

### Mapa no aparece
1. Verifica que la URL embed sea correcta
2. Debe empezar con: `https://www.google.com/maps/embed?pb=...`
3. Si no funciona, genera una nueva en Google Maps

---

## 📞 Soporte

¿Necesitas ayuda? Revisa:
- 📖 **README-BARBERIA.md** - Documentación completa
- 📋 **CHANGELOG-BARBERIA.md** - Lista de cambios
- 📊 **RESUMEN-EJECUTIVO-BARBERIA.md** - Resumen del proyecto

---

## 🎉 ¡Eso es todo!

Tu sitio está listo para conquistar el mundo digital. 

**Comandos esenciales:**
```bash
npm install        # Instalar dependencias
npm run dev        # Desarrollo (localhost:4321)
npm run build      # Compilar para producción
npm run preview    # Previsualizar build
```

---

**Desarrollado con ❤️ usando Astro + Tailwind CSS**

💈 **¡Éxito con tu barbería!**
