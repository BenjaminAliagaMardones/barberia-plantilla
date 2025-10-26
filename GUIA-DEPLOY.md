# 🚀 GUÍA DE DEPLOY - Barbería Premium Temuco

## 📋 Pre-Deploy Checklist

### ✅ Verificaciones Obligatorias

#### 1. Build Local Exitoso
```bash
cd /home/benjamin/Escritorio/estudio/barberia-plantilla/barberia-plantilla
npm run build
```
**Resultado esperado:** ✓ Build completado sin errores

#### 2. Testing Visual Completo
- [ ] Revisar `CHECKLIST-VISUAL.md` completo
- [ ] Testing responsive (mobile, tablet, desktop)
- [ ] Validar todos los links
- [ ] Verificar animaciones AOS

#### 3. Contenido Final
- [ ] Reemplazar placeholder Hero (✂️) con foto real
- [ ] Reemplazar placeholder About (💈) con foto del local
- [ ] Actualizar datos reales en `src/data/barberia.js`:
  - Teléfono WhatsApp
  - Dirección exacta
  - Email
  - Horarios
  - Coordenadas GPS

#### 4. SEO Final
- [ ] Verificar Schema.org en https://validator.schema.org
- [ ] Revisar meta descriptions
- [ ] Confirmar keywords locales
- [ ] Validar robots.txt

---

## 🌐 Opciones de Hosting

### Opción 1: Netlify (Recomendado) ⭐

#### Ventajas:
- ✅ Gratis para sitios estáticos
- ✅ Deploy automático desde Git
- ✅ SSL gratuito
- ✅ CDN global
- ✅ Formularios integrados
- ✅ Redirects y headers fáciles

#### Pasos de Deploy:

1. **Preparar repositorio Git**
```bash
cd /home/benjamin/Escritorio/estudio/barberia-plantilla/barberia-plantilla
git init
git add .
git commit -m "feat: Landing page barbería premium v2.0 con mejoras profesionales"
```

2. **Crear repositorio en GitHub**
```bash
# Crear repo en github.com/new
gh repo create barberia-temuco-landing --public
git remote add origin https://github.com/TU_USUARIO/barberia-temuco-landing.git
git branch -M main
git push -u origin main
```

3. **Deploy en Netlify**
- Ir a https://app.netlify.com/
- Click "Add new site" → "Import existing project"
- Conectar con GitHub
- Seleccionar repositorio `barberia-temuco-landing`
- **Build settings:**
  ```
  Build command: npm run build
  Publish directory: dist
  ```
- Click "Deploy site"

4. **Configurar dominio personalizado (opcional)**
- En Netlify: Site settings → Domain management
- Agregar custom domain: `barberiatemuco.cl`
- Configurar DNS según instrucciones Netlify
- SSL se activa automáticamente

---

### Opción 2: Vercel (Alternativa)

#### Ventajas:
- ✅ Gratis para sitios estáticos
- ✅ Deploy ultra rápido
- ✅ SSL gratuito
- ✅ Analytics incluido

#### Pasos de Deploy:

1. **Instalar Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy directo**
```bash
cd /home/benjamin/Escritorio/estudio/barberia-plantilla/barberia-plantilla
vercel
```

3. **Seguir wizard interactivo:**
```
? Set up and deploy "~/barberia-plantilla"? Y
? Which scope do you want to deploy to? [Tu cuenta]
? Link to existing project? N
? What's your project's name? barberia-temuco
? In which directory is your code located? ./
? Want to override settings? N
```

4. **Deploy a producción**
```bash
vercel --prod
```

---

### Opción 3: GitHub Pages

#### Ventajas:
- ✅ Totalmente gratis
- ✅ Integrado con GitHub
- ✅ Ideal para portfolios

#### Configuración:

1. **Instalar gh-pages**
```bash
npm install -D gh-pages
```

2. **Agregar a `package.json`**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Configurar `astro.config.mjs`**
```javascript
export default defineConfig({
  site: 'https://TU_USUARIO.github.io',
  base: '/barberia-temuco-landing',
});
```

4. **Deploy**
```bash
npm run deploy
```

5. **Activar en GitHub**
- Repo → Settings → Pages
- Source: `gh-pages` branch
- URL: `https://TU_USUARIO.github.io/barberia-temuco-landing`

---

## 🔧 Configuración Post-Deploy

### 1. Google Analytics 4

**Archivo:** `src/layouts/BaseLayout.astro`

Agregar antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Eventos recomendados:**
- Click en WhatsApp flotante
- Click en WhatsApp en contacto
- Click en "Agendar Cita"
- Submit formulario contacto

---

### 2. Google Search Console

1. Ir a https://search.google.com/search-console
2. Agregar propiedad: `barberiatemuco.cl`
3. Verificar propiedad (método DNS o HTML)
4. Enviar sitemap: `https://barberiatemuco.cl/sitemap-index.xml`

**Archivo sitemap** (crear en `public/sitemap-index.xml`):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://barberiatemuco.cl/</loc>
    <lastmod>2024-01-15</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://barberiatemuco.cl/#servicios</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://barberiatemuco.cl/#nosotros</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://barberiatemuco.cl/#testimonios</loc>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://barberiatemuco.cl/#contacto</loc>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

### 3. Meta Pixel (Facebook/Instagram Ads)

**Si se van a hacer ads en Meta:**

Agregar en `BaseLayout.astro` antes de `</head>`:
```html
<!-- Meta Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=TU_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
```

**Eventos personalizados:**
```javascript
// En WhatsApp button
onclick="fbq('track', 'Contact');"

// En servicios
onclick="fbq('track', 'ViewContent', {content_name: 'Servicios'});"
```

---

### 4. Configurar robots.txt

**Archivo:** `public/robots.txt` (ya existe, verificar)
```txt
User-agent: *
Allow: /

Sitemap: https://barberiatemuco.cl/sitemap-index.xml
```

---

## 🔒 SSL y Seguridad

### Netlify/Vercel
- ✅ SSL automático (Let's Encrypt)
- ✅ HTTPS forzado por defecto
- ✅ Headers de seguridad configurables

### Headers recomendados (Netlify)

**Archivo:** `public/_headers`
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;
```

---

## 📊 Monitoreo Post-Deploy

### 1. Uptime Monitoring

**UptimeRobot** (gratis):
- https://uptimerobot.com/
- Configurar check cada 5 minutos
- Email alert si el sitio cae

### 2. Performance Monitoring

**Lighthouse CI:**
```bash
npm install -g @lhci/cli
lhci autorun --collect.url=https://barberiatemuco.cl
```

**Métricas objetivo:**
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

### 3. Error Tracking (Opcional)

**Sentry** para errores JavaScript:
```bash
npm install @sentry/astro
```

---

## 🎯 Optimizaciones Post-Deploy

### 1. Imágenes Reales

**Comprimir antes de subir:**
```bash
# Instalar imageoptim-cli o usar https://squoosh.app/
npm install -g imageoptim-cli
imageoptim --imagealpha --quality=80 public/images/
```

**Formatos recomendados:**
- Hero: WebP 1200x1200 (max 200kb)
- About: WebP 800x800 (max 150kb)
- Thumbnails: WebP 400x400 (max 50kb)

### 2. Preload Critical Assets

En `BaseLayout.astro` `<head>`:
```html
<!-- Preload critical CSS -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

<!-- DNS prefetch -->
<link rel="dns-prefetch" href="https://www.google-analytics.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
```

---

## ✅ Checklist Final de Deploy

### Pre-Deploy
- [ ] Build local exitoso
- [ ] Testing responsive completo
- [ ] Links de WhatsApp validados
- [ ] Datos reales actualizados
- [ ] Imágenes comprimidas
- [ ] Schema.org validado

### Deploy
- [ ] Subido a hosting (Netlify/Vercel)
- [ ] SSL activo (HTTPS)
- [ ] Dominio personalizado configurado
- [ ] 301 redirects si aplica

### Post-Deploy
- [ ] Google Analytics configurado
- [ ] Google Search Console verificado
- [ ] Sitemap enviado
- [ ] robots.txt verificado
- [ ] Performance test (Lighthouse >90)
- [ ] Mobile test (real device)
- [ ] WhatsApp links funcionan
- [ ] Formularios envían (si aplica)

### Marketing
- [ ] Google My Business creado
- [ ] Instagram Bio link actualizado
- [ ] Facebook page link actualizado
- [ ] Tarjetas de visita con URL

---

## 🆘 Troubleshooting Común

### Build falla en Netlify
```bash
# Error: Node version
# Solución: Crear netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

### 404 en rutas
```bash
# Astro necesita trailing slashes
# En astro.config.mjs:
export default defineConfig({
  trailingSlash: 'always',
});
```

### WhatsApp no abre en iOS
```bash
# Verificar formato del link:
# ✅ Correcto: https://wa.me/56987654321
# ❌ Incorrecto: whatsapp://send?phone=56987654321
```

---

## 📞 Contacto Post-Deploy

**Sitio:** https://barberiatemuco.cl  
**Documentación:** Ver `MEJORAS-PROFESIONALES-IMPLEMENTADAS.md`  
**Testing:** Ver `CHECKLIST-VISUAL.md`  

**Stack:**
- Framework: Astro v4.16.19
- Styling: Tailwind CSS
- Hosting: Netlify/Vercel
- Analytics: Google Analytics 4

---

## 🎉 Deploy Checklist Rápido

```bash
# 1. Build local
npm run build

# 2. Verificar
npm run preview

# 3. Git commit
git add .
git commit -m "chore: deploy to production"
git push origin main

# 4. Deploy (si no es automático)
netlify deploy --prod
# o
vercel --prod

# 5. Verificar
curl -I https://barberiatemuco.cl
lighthouse https://barberiatemuco.cl --view

# 6. Testing
# - Abrir en móvil
# - Click en WhatsApp
# - Verificar Analytics

# ✅ DONE!
```

---

**🚀 READY TO LAUNCH 🚀**

Próximo paso: Ejecutar checklist → Deploy → Monitor → Optimizar
