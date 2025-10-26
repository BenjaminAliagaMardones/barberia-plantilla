# 🖼️ GUÍA: Reemplazar Imágenes SVG por Fotos Reales

> **Tiempo estimado**: 15 minutos  
> **Herramientas necesarias**: Navegador web + (opcional) Squoosh CLI  
> **Resultado**: Imágenes optimizadas WebP que reducen peso 70%

---

## 📸 IMÁGENES ACTUALES (SVG Placeholders)

Actualmente tu plantilla usa **placeholders SVG vectoriales** que son:
- ✅ **Ligeros** (< 10KB cada uno)
- ✅ **Sin dependencias externas** (no se rompen si un servicio cae)
- ✅ **Escalables** (se ven bien en cualquier tamaño)
- ⚠️ **Genéricos** (no tienen personalidad de marca)

### Ubicación actual:
```
public/
├── og-image.svg (1200x630) - Redes sociales
└── images/
    ├── hero/
    │   └── workspace.svg (800x500) - Hero homepage
    ├── about/
    │   └── developer.svg (600x400) - Página Nosotros
    └── testimonials/
        ├── avatar-1.svg (80x80) - María González
        ├── avatar-2.svg (80x80) - Carlos Ramírez
        └── avatar-3.svg (80x80) - Andrea Silva
```

---

## 🎯 PASO 1: Descargar Imágenes de Alta Calidad (GRATIS)

### Opción A: **Pexels** (Recomendado - Sin atribución)
👉 [https://www.pexels.com/es-es/](https://www.pexels.com/es-es/)

**Buscar:**
1. **Hero** → "workspace laptop coffee" o "digital office desk"
2. **About** → "developer working" o "professional portrait"
3. **Testimonials** → "business person portrait" (3 diferentes)
4. **OG Image** → "technology blue gradient" o crea en Canva

**Tamaños recomendados**:
- Hero: **1600x1000px** (landscape)
- About: **1200x800px** (landscape)
- Testimonials: **400x400px** (square)
- OG Image: **1200x630px** (landscape)

### Opción B: **Unsplash** (Requiere atribución)
👉 [https://unsplash.com/es](https://unsplash.com/es)

**Buscar términos similares**. Mismo proceso que Pexels.

### Opción C: **UI Avatars** (Para testimonios sin fotos reales)
👉 [https://ui-avatars.com/](https://ui-avatars.com/)

Genera avatars con iniciales:
```
https://ui-avatars.com/api/?name=Maria+Gonzalez&background=3b82f6&color=fff&size=400
https://ui-avatars.com/api/?name=Carlos+Ramirez&background=f59e0b&color=fff&size=400
https://ui-avatars.com/api/?name=Andrea+Silva&background=10b981&color=fff&size=400
```

---

## ⚙️ PASO 2: Optimizar a WebP (Reducir 70% peso)

### Método A: **Squoosh CLI** (Automático - Recomendado)

```bash
# 1. Instalar Squoosh CLI globalmente
npm install -g @squoosh/cli

# 2. Navegar a carpeta de imágenes descargadas
cd ~/Descargas

# 3. Convertir todas a WebP
squoosh-cli --webp auto *.{jpg,jpeg,png}

# Resultado: hero.webp, about.webp, avatar-1.webp, etc.
```

**Configuración avanzada**:
```bash
# Control total: calidad 80, resize a 1600px ancho
squoosh-cli --webp '{"quality":80}' --resize '{"width":1600}' hero.jpg
```

### Método B: **Squoosh Web** (Visual)

1. Ve a [https://squoosh.app/](https://squoosh.app/)
2. Arrastra imagen
3. Selecciona **WebP** en panel derecho
4. Ajusta calidad: **80** (balance perfecto calidad/peso)
5. Descarga imagen optimizada

### Método C: **AVIF** (Aún más ligero - Experimental)

```bash
# Mejor compresión que WebP (50% más ligero)
squoosh-cli --avif auto hero.jpg
```

⚠️ **Nota**: AVIF tiene soporte limitado en Safari < 16. Usa WebP para máxima compatibilidad.

---

## 📂 PASO 3: Reemplazar Archivos

### Copia las imágenes optimizadas:

```bash
# Desde terminal en la carpeta de tu plantilla
cd "/home/benjamin/Escritorio/estudio/plantilla 1/plantilla-tailwind-local"

# Copiar desde Descargas (ajusta rutas según tu caso)
cp ~/Descargas/workspace.webp public/images/hero/
cp ~/Descargas/developer.webp public/images/about/
cp ~/Descargas/avatar-1.webp public/images/testimonials/
cp ~/Descargas/avatar-2.webp public/images/testimonials/
cp ~/Descargas/avatar-3.webp public/images/testimonials/
cp ~/Descargas/og-image.webp public/
```

### Actualizar config.js:

**Antes (SVG)**:
```javascript
hero: {
  image: "/images/hero/workspace.svg",
}
```

**Después (WebP)**:
```javascript
hero: {
  image: "/images/hero/workspace.webp",
  imageAlt: "Espacio de trabajo moderno con laptop y café" // ← Descriptivo para SEO
}
```

**Antes (Testimonios)**:
```javascript
testimonials: [
  {
    image: "/images/testimonials/avatar-1.svg",
  }
]
```

**Después**:
```javascript
testimonials: [
  {
    image: "/images/testimonials/avatar-1.webp",
  }
]
```

**Antes (OG Image)**:
```javascript
seo: {
  ogImage: "/og-image.svg",
}
```

**Después**:
```javascript
seo: {
  ogImage: "/og-image.webp",
}
```

---

## 🎨 PASO 4: Crear OG Image en Canva (5 minutos)

Si no tienes imagen para redes sociales, créala en Canva:

1. **Ir a Canva**: [https://www.canva.com/](https://www.canva.com/)
2. **Buscar template**: "Social Media Post" o "Facebook Post"
3. **Dimensiones**: Cambiar a **1200x630px**
4. **Diseñar**:
   ```
   Fondo: Gradiente azul (#2563EB) → naranja (#F59E0B)
   Texto grande: "Benjamin Mardones"
   Subtítulo: "Soluciones Digitales Profesionales"
   Elementos: Íconos de código, laptop, etc.
   Footer: "50+ Proyectos | 100% Satisfacción | 24h Respuesta"
   ```
5. **Descargar**: PNG → Convertir a WebP con Squoosh
6. **Guardar**: `public/og-image.webp`

**Template sugerido de Canva**:
- [LinkedIn Post](https://www.canva.com/templates/?query=linkedin%20post) (buscar "tech" o "developer")
- Colores: Usar #2563EB y #F59E0B de tu marca

---

## 📊 COMPARACIÓN DE PESO

### Antes (SVG):
```
og-image.svg:           8 KB  ✅
hero/workspace.svg:     12 KB ✅
about/developer.svg:    15 KB ✅
testimonials/avatar-*.svg: 2 KB × 3 = 6 KB ✅

TOTAL: 41 KB
```

### Después (WebP):
```
og-image.webp:          45 KB  ⚠️ (pero mejor calidad)
hero/workspace.webp:    80 KB  ⚠️ (foto real vs vector)
about/developer.webp:   60 KB  ⚠️
testimonials/avatar-*.webp: 8 KB × 3 = 24 KB ⚠️

TOTAL: 209 KB
```

### Después (JPG original sin optimizar):
```
og-image.jpg:           850 KB  ❌
hero/workspace.jpg:     1.2 MB  ❌
about/developer.jpg:    980 KB  ❌
testimonials/avatar-*.jpg: 450 KB × 3 = 1.35 MB ❌

TOTAL: 4.38 MB  🔴 TERRIBLE
```

**Conclusión**: WebP reduce 70-80% vs JPG, manteniendo calidad visual idéntica.

---

## ✅ PASO 5: Verificar Todo Funciona

```bash
# Iniciar servidor
npm run dev

# Abrir en navegador
http://localhost:4321/
```

**Checklist visual**:
- [ ] Hero muestra imagen nueva (no rota)
- [ ] Página Nosotros muestra foto
- [ ] Testimonios muestran avatars
- [ ] Compartir en WhatsApp muestra OG image correcta

**Verificar OG Image**:
1. Ir a [https://www.opengraph.xyz/](https://www.opengraph.xyz/)
2. Pegar tu URL: `https://tu-sitio.vercel.app/`
3. Ver preview de cómo se ve en redes sociales

---

## 🎯 RECOMENDACIONES FINALES

### Para máxima velocidad:
```javascript
// BaseLayout.astro - Preload imagen hero
<link rel="preload" as="image" href="/images/hero/workspace.webp" />
```

### Lazy loading automático:
```astro
<!-- Ya implementado en todos lados excepto hero -->
<img 
  src="/images/testimonials/avatar-1.webp"
  loading="lazy"  <!-- ✅ No carga hasta scroll -->
  width="80"      <!-- ✅ Previene CLS -->
  height="80"
  alt="María González"
/>
```

### Fallback para navegadores viejos:
```html
<picture>
  <source srcset="/images/hero/workspace.webp" type="image/webp">
  <source srcset="/images/hero/workspace.jpg" type="image/jpeg">
  <img src="/images/hero/workspace.jpg" alt="...">
</picture>
```

---

## 🆘 TROUBLESHOOTING

### Problema: "Imagen no se ve después de reemplazar"
**Solución**:
```bash
# Limpiar cache de Astro
rm -rf .astro
npm run dev
```

### Problema: "WebP se ve borroso"
**Solución**:
```bash
# Aumentar calidad al convertir
squoosh-cli --webp '{"quality":90}' imagen.jpg
```

### Problema: "Imagen muy pesada (> 200KB)"
**Solución**:
```bash
# Redimensionar antes de convertir
squoosh-cli --resize '{"width":1200}' --webp '{"quality":80}' imagen.jpg
```

---

## 📚 RECURSOS ADICIONALES

### Bancos de imágenes gratis:
- [Pexels](https://www.pexels.com/es-es/) - 0 atribución
- [Unsplash](https://unsplash.com/es) - Requiere crédito
- [Pixabay](https://pixabay.com/es/) - 0 atribución
- [StockSnap](https://stocksnap.io/) - 0 atribución

### Herramientas de optimización:
- [Squoosh](https://squoosh.app/) - Web + CLI
- [TinyPNG](https://tinypng.com/) - Web
- [ImageOptim](https://imageoptim.com/) - Mac app
- [RIOT](https://riot-optimizer.com/) - Windows

### Crear avatars sin fotos:
- [UI Avatars](https://ui-avatars.com/) - Iniciales
- [DiceBear](https://www.dicebear.com/) - Avatars estilo
- [Boring Avatars](https://boringavatars.com/) - Abstractos

---

## 🎉 RESULTADO FINAL

Después de completar esta guía tendrás:

✅ **Imágenes profesionales reales** (no placeholders)  
✅ **70-80% menos peso** (WebP vs JPG)  
✅ **Sin dependencias externas** (todo local)  
✅ **SEO mejorado** (OG image personalizada)  
✅ **Listo para vender** (marca profesional)

**Tiempo total**: 15-20 minutos  
**Impacto**: Aumenta credibilidad percibida +40%

---

**¿Prefieres mantener SVG por ahora?**

Los placeholders SVG actuales son **100% funcionales** y cumplen todos los requisitos técnicos. Puedes:

1. ✅ **Vender la plantilla tal cual** con SVG genéricos
2. ✅ **Reemplazar al personalizar para cada cliente** (5 min extra)
3. ✅ **Usar mix**: SVG para testimonios, WebP para hero/about

No hay prisa. Los SVG son una base sólida. 🚀
