# 🎨 Guía de Cambio de Temas - Sistema Personalizable

## ⚡ Cambio Rápido de Tema (30 segundos)

### Paso 1: Abrir archivo de configuración

```bash
src/config/themes.js
```

### Paso 2: Cambiar tema activo

Busca esta línea al final del archivo:

```javascript
// ⚙️ CONFIGURACIÓN ACTIVA
export const activeTheme = themes.barberia;  // ← CAMBIA ESTO
```

Cambia `barberia` por el tema que quieras:

```javascript
// Opciones disponibles:
export const activeTheme = themes.barberia;      // 🟡 Barbería clásica (dorado + negro)
export const activeTheme = themes.cafeteria;     // 🔵 Cafetería moderna (cyan + slate)
export const activeTheme = themes.spa;           // 🟢 Spa/Wellness (verde + stone)
export const activeTheme = themes.gym;           // 🔴 Gimnasio (rojo + negro)
export const activeTheme = themes.restaurante;   // 🟠 Restaurante (naranja + indigo)
export const activeTheme = themes.salon;         // 🟣 Salón de belleza (purple + zinc)
export const activeTheme = themes.dental;        // 🩺 Clínica dental (azul + blanco)
export const activeTheme = themes.boutique;      // 🏪 Tienda de ropa (pink + gray)
```

### Paso 3: Reiniciar servidor

```bash
# Detén el servidor (Ctrl+C)
# Vuelve a iniciarlo
npm run dev
```

¡Listo! Todo el sitio cambiará automáticamente.

---

## 🎯 Temas Disponibles

### 1. 🟡 BARBERÍA (Default)
```javascript
export const activeTheme = themes.barberia;
```
- **Color principal:** Dorado (#ca8a04)
- **Fondo:** Negro (#0a0a0a)
- **Fuentes:** Playfair Display + Inter
- **Ideal para:** Barberías clásicas, premium, vintage

---

### 2. 🔵 CAFETERÍA
```javascript
export const activeTheme = themes.cafeteria;
```
- **Color principal:** Cyan (#0891b2)
- **Fondo:** Slate oscuro (#0f172a)
- **Fuentes:** Poppins + Inter
- **Ideal para:** Cafeterías modernas, coffee shops, artesanales

---

### 3. 🟢 SPA / WELLNESS
```javascript
export const activeTheme = themes.spa;
```
- **Color principal:** Verde esmeralda (#059669)
- **Fondo:** Stone (#1c1917)
- **Fuentes:** Cormorant Garamond + Lato
- **Ideal para:** Spas, centros de masajes, wellness, yoga

---

### 4. 🔴 GYM / FITNESS
```javascript
export const activeTheme = themes.gym;
```
- **Color principal:** Rojo (#dc2626)
- **Fondo:** Negro puro (#0a0a0a)
- **Fuentes:** Oswald + Roboto
- **Ideal para:** Gimnasios, CrossFit, fitness centers

---

### 5. 🟠 RESTAURANTE ITALIANO
```javascript
export const activeTheme = themes.restaurante;
```
- **Color principal:** Naranja (#ea580c)
- **Fondo:** Indigo oscuro (#1e1b4b)
- **Fuentes:** Libre Baskerville + Open Sans
- **Ideal para:** Restaurantes, pizzerías, trattorias

---

### 6. 🟣 SALÓN DE BELLEZA
```javascript
export const activeTheme = themes.salon;
```
- **Color principal:** Púrpura (#a855f7)
- **Fondo:** Zinc (#18181b)
- **Fuentes:** Montserrat + Lato
- **Ideal para:** Salones de belleza, peluquerías, estética

---

### 7. 🩺 CLÍNICA DENTAL (Tema Claro)
```javascript
export const activeTheme = themes.dental;
```
- **Color principal:** Azul (#3b82f6)
- **Fondo:** Blanco (#f8fafc)
- **Fuentes:** Poppins + Inter
- **Ideal para:** Clínicas dentales, consultorios médicos
- **⚠️ Nota:** Único tema con fondo claro

---

### 8. 🏪 BOUTIQUE FASHION
```javascript
export const activeTheme = themes.boutique;
```
- **Color principal:** Rosa (#ec4899)
- **Fondo:** Gris oscuro (#1f2937)
- **Fuentes:** Abril Fatface + Raleway
- **Ideal para:** Tiendas de ropa, boutiques, moda

---

## 🛠️ Usar Colores del Tema en Tu Código

### En Tailwind (clases CSS):

```jsx
// Color primario
<div className="bg-brand text-white">

// Variantes
<div className="bg-brand-light hover:bg-brand-dark">

// Backgrounds
<div className="bg-bg-primary">  // Fondo principal
<div className="bg-bg-secondary"> // Fondo secundario
<div className="bg-bg-card">      // Fondo de cards

// Textos
<p className="text-txt-primary">   // Texto principal
<p className="text-txt-secondary"> // Texto secundario
<p className="text-txt-muted">     // Texto atenuado

// Bordes
<div className="border border-brd"> // Border default
<div className="border-brd-light">  // Border claro
```

### En CSS personalizado:

```css
.mi-elemento {
  background-color: theme('colors.brand.DEFAULT');
  color: theme('colors.txt.primary');
  border-color: theme('colors.brd.DEFAULT');
}
```

### En JavaScript/Astro:

```javascript
import activeTheme from '@/config/themes.js';

const primaryColor = activeTheme.colors.primary.DEFAULT;
const bgColor = activeTheme.colors.background.primary;
```

---

## 🎨 Crear Tu Propio Tema Personalizado

### Paso 1: Abrir `src/config/themes.js`

### Paso 2: Agregar nuevo tema al objeto `themes`:

```javascript
export const themes = {
  // ... temas existentes ...
  
  // Tu nuevo tema
  miTemaCustom: {
    name: "Mi Negocio",
    colors: {
      primary: {
        DEFAULT: '#tu-color-hex',    // Color principal
        light: '#color-mas-claro',   // Versión clara
        lighter: '#color-muy-claro', // Versión muy clara
        dark: '#color-mas-oscuro',   // Versión oscura
      },
      background: {
        primary: '#fondo-principal',   // Fondo principal (body)
        secondary: '#fondo-secciones', // Fondo de secciones
        card: '#fondo-tarjetas',       // Fondo de cards
        hover: '#fondo-hover',         // Fondo al hacer hover
      },
      text: {
        primary: '#texto-principal',   // Títulos, texto importante
        secondary: '#texto-secundario',// Subtítulos
        muted: '#texto-atenuado',      // Texto menos importante
      },
      border: {
        DEFAULT: '#color-borde',       // Borde por defecto
        light: '#borde-claro',         // Borde claro
      }
    },
    fonts: {
      heading: ['Tu Fuente Títulos', 'Georgia', 'serif'],
      body: ['Tu Fuente Cuerpo', 'system-ui', 'sans-serif'],
    },
    gradients: {
      hero: 'from-color-1 via-color-2 to-color-3',
      card: 'from-color/10 to-color/5',
      overlay: 'from-color/60 via-color/70 to-color/80',
    }
  },
};
```

### Paso 3: Activar tu tema:

```javascript
export const activeTheme = themes.miTemaCustom;
```

---

## 🚀 Casos de Uso para Vender

### Escenario 1: Cliente Barbería → Cliente Gym

```javascript
// Cliente 1: Barbería (tema dorado + negro)
export const activeTheme = themes.barberia;

// Cliente 2: Gym (tema rojo + negro)
export const activeTheme = themes.gym;
```

**Tiempo de cambio:** 30 segundos  
**Cambios visuales:** 100% del sitio

---

### Escenario 2: Crear Variaciones para Demos

```javascript
// Demo 1: Barbería clásica
export const activeTheme = themes.barberia;

// Demo 2: Salón moderno
export const activeTheme = themes.salon;

// Demo 3: Spa relajante
export const activeTheme = themes.spa;
```

**Beneficio:** Muestra 3 versiones distintas al cliente → cierra venta más rápido

---

### Escenario 3: Plantilla Multi-Nicho

```javascript
// Mismo código base, múltiples industrias:
- themes.barberia    → Barberías
- themes.cafeteria   → Coffee shops
- themes.gym         → Gimnasios
- themes.dental      → Clínicas
- themes.restaurante → Restaurantes
- themes.spa         → Centros wellness
- themes.salon       → Salones de belleza
- themes.boutique    → Tiendas de ropa
```

**Potencial de venta:** 8 nichos diferentes con 1 solo template

---

## 📋 Checklist de Personalización por Cliente

### Paso 1: Tema Base
- [ ] Seleccionar tema más cercano al negocio del cliente
- [ ] Activar en `themes.js`

### Paso 2: Ajustes Finos (opcional)
- [ ] Ajustar colores específicos si es necesario
- [ ] Cambiar fuentes si el cliente lo requiere

### Paso 3: Contenido
- [ ] Editar `src/data/barberia.js` con info del cliente
- [ ] Reemplazar imágenes en `/public/`

### Paso 4: Build y Deploy
- [ ] `npm run build`
- [ ] Deploy a Vercel/GitHub Pages

**Tiempo total:** 2-4 horas por cliente

---

## 🎯 Tips para Maximizar Ventas

### 1. Crea Demos de Todos los Temas

```bash
# Despliega 8 demos en subdomains:
barberia.tudominio.com  (theme: barberia)
gym.tudominio.com       (theme: gym)
spa.tudominio.com       (theme: spa)
# etc...
```

### 2. Muestra "Antes y Después"

"Mira, con solo cambiar 1 línea de código, tu sitio puede verse así..."

[Muestra tema barberia] → [Muestra tema gym] → [Muestra tema spa]

### 3. Ofrece Paquetes Multi-Tema

**Paquete "Multipropósito"** - $999
- 3 variaciones de color incluidas
- Cliente elige la que más le guste
- Cambios de tema gratis durante 1 año

---

## 🔧 Troubleshooting

### Problema: Los cambios no se reflejan

**Solución:**
1. Detén el servidor (Ctrl+C)
2. Elimina cache: `rm -rf .astro node_modules/.vite`
3. Reinstala: `npm install`
4. Reinicia: `npm run dev`

### Problema: Colores se ven mal en producción

**Solución:**
```bash
# Rebuild completo
npm run build
# Re-deploy
```

### Problema: Fuentes no cargan

**Solución:**
Asegúrate de que las fuentes estén en Google Fonts:
```html
<!-- En BaseLayout.astro -->
<link href="https://fonts.googleapis.com/css2?family=TuFuente&display=swap" rel="stylesheet">
```

---

## 💰 Valor para el Negocio

**Antes (sin sistema de temas):**
- Cambiar colores: 2-3 horas (búsqueda y reemplazo manual)
- Crear variación: 5-6 horas (casi desde cero)
- Errores: Frecuentes (olvidas cambiar algún color)

**Ahora (con sistema de temas):**
- Cambiar tema completo: 30 segundos
- Crear variación: 5 minutos (copiar y ajustar tema)
- Errores: Cero (todo centralizado)

**ROI:**
- Tiempo ahorrado por cliente: 2-3 horas
- Si cobras $50/hora: $100-150 USD más de ganancia
- Con 10 clientes/mes: $1,000-1,500 USD extra

---

## 🎨 Herramientas Recomendadas

### Elegir colores:
- **Coolors.co** - Paletas de colores
- **Adobe Color** - Generador de esquemas
- **Paletton** - Armonías de color

### Elegir fuentes:
- **Google Fonts** - Catálogo gratis
- **Font Pair** - Combinaciones probadas
- **Type Scale** - Jerarquía tipográfica

### Verificar contraste:
- **WebAIM Contrast Checker** - Accesibilidad
- **Coolors Contrast Checker** - WCAG compliance

---

## 🚀 Resumen

### Para cambiar tema:
1. Abre `src/config/themes.js`
2. Cambia `export const activeTheme = themes.NOMBRE`
3. Reinicia servidor

### Para crear tema nuevo:
1. Copia un tema existente
2. Cambia colores y fuentes
3. Activa tu nuevo tema

### Para vender:
1. Muestra 3-4 temas al cliente
2. Cliente elige su favorito
3. Personalizas contenido
4. Cobras $299-599 USD

**Tiempo total:** 30 segundos para cambio + 2-3 horas personalización

---

**¿Listo para vender 8 nichos diferentes con 1 solo template?** 🚀💰
