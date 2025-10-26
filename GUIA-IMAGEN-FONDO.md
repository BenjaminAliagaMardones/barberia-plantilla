# 🖼️ Guía: Cómo Cambiar la Imagen de Fondo

## 📸 ¿Qué es esto?

Esta plantilla permite mostrar una **foto real del local** (barbería, café, gimnasio, etc.) como imagen de fondo en la página principal. Esto hace que el sitio se vea más profesional y personalizado.

---

## 🎯 Configuración en 3 Pasos

### Paso 1: Preparar la Imagen

**¿Qué foto usar?**
- ✅ Foto del exterior o interior del local
- ✅ Resolución mínima: 1920x1080px (Full HD)
- ✅ Formato: `.jpg`, `.webp`, o `.png`
- ✅ Buena iluminación
- ✅ Enfoque en la identidad del negocio

**Ejemplos de buenas fotos:**
- 📸 Fachada del local con letrero visible
- 📸 Interior con sillas de barbero / mesas de café / equipamiento
- 📸 Vista panorámica del espacio principal
- 📸 Detalle de productos o herramientas características

**❌ Evitar:**
- Fotos borrosas o pixeladas
- Imágenes muy oscuras
- Fotos con demasiadas personas (privacidad)
- Logos de marcas sin permiso

---

### Paso 2: Subir la Imagen

**Ubicación:** Coloca tu imagen en la carpeta:
```
/public/images/hero/
```

**Ejemplo:**
```bash
/public/images/hero/mi-barberia.jpg
/public/images/hero/mi-cafe.webp
/public/images/hero/fondo-local.png
```

**💡 Tip:** Usa nombres descriptivos como `barberia-frente.jpg` o `cafe-interior.webp`

---

### Paso 3: Configurar en `site.config.ts`

Abre el archivo: `src/config/site.config.ts`

**Busca la sección `background`:**(línea ~80)

```typescript
// 🖼️ Imagen de Fondo Personalizable
background: {
  // Ruta de la imagen (coloca tu foto en /public/images/)
  image: '/images/hero/barberia-bg.webp', // 👈 CAMBIAR AQUÍ
  
  // Opacidad de la imagen (0.1 = muy transparente, 1 = opaca)
  opacity: 0.35, // 👈 AJUSTAR SI NECESITAS
  
  // Posición de la imagen: 'center' | 'top' | 'bottom' | 'left' | 'right'
  position: 'center',
  
  // Tamaño: 'cover' (llenar todo) | 'contain' (imagen completa visible)
  size: 'cover',
  
  // Blur/desenfoque (opcional, en px. 0 = sin blur)
  blur: 0,
  
  // Overlay oscuro adicional (0 = sin overlay, 1 = completamente oscuro)
  overlay: 0.5,
},
```

---

## 🎨 Ejemplos de Configuración

### Ejemplo 1: Barbería Clásica
```typescript
background: {
  image: '/images/hero/barberia-interior.jpg',
  opacity: 0.35,    // Imagen suave de fondo
  position: 'center',
  size: 'cover',
  blur: 0,          // Sin desenfoque
  overlay: 0.5,     // Overlay medio para legibilidad
},
```

**Resultado:** Imagen visible pero no distrae del texto

---

### Ejemplo 2: Café Acogedor
```typescript
background: {
  image: '/images/hero/cafe-mesasysillas.jpg',
  opacity: 0.25,    // Más transparente
  position: 'center',
  size: 'cover',
  blur: 2,          // Leve desenfoque para efecto artístico
  overlay: 0.6,     // Overlay más oscuro
},
```

**Resultado:** Ambiente cálido, texto muy legible

---

### Ejemplo 3: Gimnasio Intenso
```typescript
background: {
  image: '/images/hero/gym-equipamiento.jpg',
  opacity: 0.45,    // Más visible
  position: 'center',
  size: 'cover',
  blur: 0,
  overlay: 0.4,     // Menos overlay para mostrar energía
},
```

**Resultado:** Imagen impactante, transmite intensidad

---

### Ejemplo 4: Spa Minimalista
```typescript
background: {
  image: '/images/hero/spa-zen.jpg',
  opacity: 0.20,    // Muy suave
  position: 'center',
  size: 'cover',
  blur: 3,          // Desenfoque notable para efecto relajante
  overlay: 0.7,     // Overlay alto para tranquilidad
},
```

**Resultado:** Ambiente sereno y relajante

---

## ⚙️ Parámetros Explicados

### 🎚️ **opacity** (Transparencia)
- `0.1` - Imagen casi invisible, solo se intuye
- `0.2-0.3` - Sutilmente presente (ideal para elegancia)
- `0.4-0.5` - Equilibrada (valor por defecto)
- `0.6-0.8` - Muy visible
- `0.9-1.0` - Totalmente opaca (⚠️ puede tapar texto)

**💡 Recomendado:** `0.3-0.4` para la mayoría de casos

---

### 📍 **position** (Posición)
- `center` - Centrada (recomendado para la mayoría)
- `top` - Alineada arriba (si lo importante está en la parte superior)
- `bottom` - Alineada abajo
- `left` - Alineada izquierda
- `right` - Alineada derecha

**💡 Tip:** Usa `center` salvo que tengas un elemento específico a destacar

---

### 📏 **size** (Tamaño)
- `cover` - Llena toda la pantalla (recomendado)
- `contain` - Muestra la imagen completa sin recortar

**💡 Recomendado:** `cover` para fondos profesionales

---

### 🌫️ **blur** (Desenfoque)
- `0` - Sin desenfoque, imagen nítida
- `2-3` - Desenfoque leve (elegante)
- `5-8` - Desenfoque medio (artístico)
- `10+` - Muy desenfocado (minimalista)

**💡 Tip:** Usa `0` para barbería/gym, `2-3` para spa/salón

---

### 🌑 **overlay** (Capa oscura)
- `0` - Sin capa oscura (⚠️ texto puede ser ilegible)
- `0.3-0.5` - Capa ligera (recomendado para fotos claras)
- `0.6-0.7` - Capa media (recomendado para la mayoría)
- `0.8+` - Capa fuerte (para fotos muy brillantes)

**💡 Recomendado:** `0.5-0.6` para buena legibilidad

---

## 🎨 Tabla de Combinaciones por Tipo de Negocio

| Negocio | Imagen | Opacity | Blur | Overlay | Efecto |
|---------|--------|---------|------|---------|--------|
| **Barbería Premium** | Interior/Sillas | 0.35 | 0 | 0.5 | Elegante, profesional |
| **Barbería Moderna** | Fachada | 0.40 | 0 | 0.4 | Impactante, urbano |
| **Cafetería Vintage** | Estantes/Café | 0.25 | 2 | 0.6 | Cálido, acogedor |
| **Café Minimalista** | Tazas/Mesa | 0.20 | 3 | 0.7 | Limpio, moderno |
| **Gimnasio CrossFit** | Equipos/Pesas | 0.45 | 0 | 0.4 | Intenso, energético |
| **Gym Boutique** | Área cardio | 0.30 | 1 | 0.5 | Motivacional, limpio |
| **Spa Wellness** | Piedras/Velas | 0.20 | 3 | 0.7 | Zen, relajante |
| **Salón de Belleza** | Espejos/Sillas | 0.30 | 1 | 0.5 | Glamuroso, elegante |
| **Restaurante** | Platos/Ambiente | 0.35 | 1 | 0.5 | Apetitoso, acogedor |
| **Clínica Dental** | Consultorio | 0.15 | 2 | 0.8 | Limpio, confiable |

---

## 🖼️ Optimización de Imágenes (Opcional pero Recomendado)

Para que tu sitio cargue rápido:

### Online (Gratis):
1. **TinyPNG** → https://tinypng.com/
   - Arrastra tu imagen
   - Descarga la versión optimizada
   - Puede reducir hasta 70% el peso sin perder calidad

2. **Squoosh** → https://squoosh.app/
   - Más control sobre la compresión
   - Convierte a WebP (formato moderno, más ligero)

### Pesos Recomendados:
- ✅ **Ideal:** 200-500 KB
- ⚠️ **Aceptable:** 500 KB - 1 MB
- ❌ **Muy pesado:** +1 MB (optimizar antes de usar)

---

## 🔄 Cambiar Imagen en 30 Segundos

**Flujo rápido para cada cliente:**

1. **Cliente te envía foto** → Recíbela por WhatsApp/Email

2. **Optimizar** → Pasa por TinyPNG (10 segundos)

3. **Subir** → Copia a `/public/images/hero/cliente-foto.jpg` (5 segundos)

4. **Configurar** → Abre `site.config.ts`, cambia línea:
   ```typescript
   image: '/images/hero/cliente-foto.jpg',
   ```

5. **Ajustar opacidad** → Prueba valores entre `0.3-0.4` hasta que se vea bien

6. **Build** → `npm run build`

**¡Listo!** Cliente tiene su foto de fondo personalizada 🎉

---

## 🚀 Casos de Uso Avanzados

### Sin Imagen de Fondo
Si el cliente NO tiene foto o no quiere imagen:

```typescript
background: {
  image: '', // 👈 Dejar vacío
  opacity: 0,
  position: 'center',
  size: 'cover',
  blur: 0,
  overlay: 0,
},
```

Solo se verán los gradientes y elementos decorativos.

---

### Imagen Diferente por Sección
Si quieres una imagen de fondo distinta en otra parte del sitio:

En cualquier componente `.astro`:
```astro
<BackgroundImage 
  customImage="/images/otra-seccion.jpg"
  customOpacity={0.25}
/>
```

---

### Múltiples Variaciones (A/B Testing)
Prueba 2-3 fotos diferentes y pregunta al cliente cuál prefiere:

**Opción A:**
```typescript
image: '/images/hero/opcion-a.jpg',
opacity: 0.35,
```

**Opción B:**
```typescript
image: '/images/hero/opcion-b.jpg',
opacity: 0.40,
```

Build ambas versiones y muéstrale capturas de pantalla.

---

## ❓ Preguntas Frecuentes

### ¿La imagen de fondo aparece en todas las páginas?
No, solo en la página principal (hero section). Puedes agregarla a otras secciones importando el componente `<BackgroundImage />`.

### ¿Puedo usar imágenes de stock?
Sí, pero es mejor usar fotos reales del negocio para autenticidad. Sitios recomendados:
- Unsplash → https://unsplash.com/
- Pexels → https://pexels.com/

### ¿Qué pasa si la imagen es muy grande?
El sitio puede cargar lento. **Siempre optimiza** con TinyPNG antes de subir.

### ¿Cómo sé si la opacidad es correcta?
El texto debe ser **fácilmente legible**. Si tienes que esforzarte para leer, aumenta el `overlay` o reduce el `opacity`.

### ¿Puedo usar GIFs o videos?
No con este componente básico. Para eso necesitarías un componente más avanzado.

---

## 📚 Documentos Relacionados

- `site.config.ts` - Configuración central del sitio
- `BackgroundImage.astro` - Componente de imagen de fondo
- `GUIA-PERSONALIZACION-CLIENTE.md` - Guía completa de personalización

---

## 💼 Valor para Venta

**Para tus clientes:**
> "Te incluyo una foto profesional de tu local como fondo de la página. 
> Esto hace que tu sitio se vea único y transmite confianza desde el primer segundo.
> 
> Solo necesito que me envíes 2-3 fotos de tu negocio y yo me encargo de todo."

**Diferenciador:** La mayoría de plantillas genéricas no tienen esta personalización.

---

**Creado:** 26 de octubre de 2025  
**Propósito:** Hacer que cada sitio se vea único con la foto real del negocio del cliente  
**Tiempo de implementación:** 30 segundos por cliente  
**Impacto visual:** ⭐⭐⭐⭐⭐
