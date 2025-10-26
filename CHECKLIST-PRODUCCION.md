# ✅ Checklist de Producción

## 📋 Pre-lanzamiento

### 🎨 Diseño y Contenido
- [ ] Logo personalizado en `public/logo.svg`
- [ ] Favicon personalizado en `public/favicon.svg`
- [ ] Imagen Open Graph (1200x630px) en `public/og-image.jpg`
- [ ] Todas las imágenes de Unsplash reemplazadas por imágenes reales
- [ ] Todas las imágenes optimizadas (TinyPNG)
- [ ] Textos revisados sin errores ortográficos
- [ ] Información de contacto correcta en todas las páginas

### ⚙️ Configuración
- [ ] `site.config.ts` completamente personalizado
- [ ] Colores de marca actualizados en `tailwind.config.cjs`
- [ ] Coordenadas GPS correctas
- [ ] Dirección física correcta
- [ ] Teléfono y WhatsApp verificados
- [ ] Email de contacto verificado
- [ ] Redes sociales actualizadas

### 📧 Formularios e Integraciones
- [ ] Form ID de Formspree agregado
- [ ] Formulario de contacto testeado (envía email)
- [ ] Botón de WhatsApp funciona correctamente
- [ ] Mensaje de WhatsApp personalizado

### 🔍 SEO
- [ ] Títulos únicos en cada página
- [ ] Meta descriptions únicas (150-160 caracteres)
- [ ] Keywords locales incluidas
- [ ] Schema.org LocalBusiness configurado
- [ ] URLs canónicas correctas
- [ ] Sitemap.xml generado (`/sitemap-index.xml`)
- [ ] robots.txt configurado

### ♿ Accesibilidad
- [ ] Todas las imágenes tienen alt text descriptivo
- [ ] Contraste de colores pasa AA (mínimo)
- [ ] Navegación por teclado funciona
- [ ] Formularios con labels apropiados
- [ ] ARIA labels en componentes interactivos

### 📱 Responsive
- [ ] Testeado en mobile (360px - 428px)
- [ ] Testeado en tablet (768px - 1024px)
- [ ] Testeado en desktop (1280px - 1920px)
- [ ] Menú hamburguesa funciona en mobile
- [ ] Imágenes se adaptan correctamente
- [ ] Texto legible en todos los tamaños

### ⚡ Performance
- [ ] Todas las imágenes tienen `loading="lazy"`
- [ ] Imágenes con width y height definidos
- [ ] Fuentes con `font-display: swap`
- [ ] Sin CSS/JS sin usar
- [ ] Build de producción sin errores

---

## 🚀 Deployment

### 🌐 Dominio y Hosting
- [ ] Dominio comprado y configurado
- [ ] DNS apuntando correctamente
- [ ] SSL/HTTPS habilitado
- [ ] WWW redirect configurado (www → non-www o viceversa)

### 📊 Analytics y Tracking
- [ ] Google Analytics 4 instalado
- [ ] Google Search Console configurado
- [ ] Propiedad verificada en Search Console
- [ ] Sitemap enviado a Search Console
- [ ] Bing Webmaster Tools (opcional)

### 🗺️ SEO Local
- [ ] Google My Business creado y verificado
- [ ] Información completa en GMB
- [ ] Fotos agregadas a GMB
- [ ] Horario de atención configurado
- [ ] Categorías correctas seleccionadas
- [ ] Primeras 3 reseñas solicitadas

### 🔒 Seguridad
- [ ] Variables de entorno protegidas
- [ ] API keys no expuestas en código
- [ ] HTTPS forzado
- [ ] Headers de seguridad configurados

---

## 🎯 Post-lanzamiento

### 📈 Monitoreo (Primera semana)
- [ ] Verificar que el sitio carga correctamente
- [ ] Testear formulario con email real
- [ ] Verificar botón de WhatsApp
- [ ] Revisar Google Analytics (tráfico registra)
- [ ] Verificar en Google Search Console (sin errores)

### 🧪 Testing
- [ ] Lighthouse score > 90 en todas las categorías
- [ ] PageSpeed Insights revisado (mobile + desktop)
- [ ] Probar en diferentes navegadores:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Probar en diferentes dispositivos reales

### 📢 Marketing
- [ ] Compartir en redes sociales personales
- [ ] Actualizar perfiles de redes sociales con URL
- [ ] Agregar URL a firma de email
- [ ] Agregar URL a tarjetas de presentación
- [ ] Agregar URL a WhatsApp Business
- [ ] Informar a clientes actuales

### 📝 Mantenimiento
- [ ] Backup del código en GitHub/GitLab
- [ ] Documentación de cambios futuros
- [ ] Plan de actualización de contenido
- [ ] Calendario de revisión de testimonios
- [ ] Plan de creación de contenido (blog opcional)

---

## 🔧 Comandos Útiles

### Testing Local
```bash
# Desarrollo
npm run dev

# Build de producción local
npm run build

# Preview del build
npm run preview

# Verificar errores TypeScript
npm run check
```

### Performance Testing
```bash
# Lighthouse CI (opcional)
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:4321
```

### Deployment
```bash
# Vercel
vercel --prod

# Build y verificar tamaño
npm run build
du -sh dist/
```

---

## 📊 Métricas de Éxito

### 🎯 Objetivos Iniciales (Primer Mes)

| Métrica | Objetivo | Herramienta |
|---------|----------|-------------|
| Visitantes únicos | 100+ | Google Analytics |
| Tasa de rebote | < 60% | Google Analytics |
| Tiempo en sitio | > 2 min | Google Analytics |
| Conversiones (contacto) | 5+ | Formspree / Analytics |
| Lighthouse Performance | > 90 | PageSpeed Insights |
| Posición en Google | Top 10 local | Search Console |

### 📈 KPIs a monitorear
- **Tráfico orgánico** (de Google)
- **Conversiones** (formulario + WhatsApp)
- **Páginas más visitadas**
- **Dispositivos** (mobile vs desktop)
- **Ubicación geográfica** de visitantes
- **Tiempo de carga** promedio

---

## 🐛 Troubleshooting Común

### "El sitio no aparece en Google"
1. Verificar que no haya `noindex` en meta tags
2. Enviar sitemap en Search Console
3. Solicitar indexación manualmente
4. Esperar 2-4 semanas (es normal)

### "Formulario no envía"
1. Verificar Form ID de Formspree
2. Revisar consola del navegador (F12)
3. Verificar que email en Formspree sea correcto
4. Testear con otro navegador

### "WhatsApp no abre"
1. Verificar formato del número (+56...)
2. Probar en navegador mobile
3. Verificar que WhatsApp esté instalado

### "Lighthouse score bajo"
1. Optimizar imágenes (WebP, compresión)
2. Agregar loading="lazy" a todas las imágenes
3. Verificar que fuentes usen font-display: swap
4. Minificar CSS/JS (el build lo hace automático)

---

## 📞 Soporte Técnico

### 🆘 ¿Necesitas ayuda?

**Antes de contactar:**
1. Revisa esta checklist completa
2. Lee la `GUIA-PERSONALIZACION.md`
3. Revisa el `README.md`
4. Busca en la consola del navegador (F12)

**Contacto:**
- 📧 Email: contacto@tudominio.cl
- 💬 WhatsApp: +56 9 1234 5678
- 🐙 GitHub Issues: [tu-repo/issues](https://github.com)

---

## 🎉 ¡Todo listo!

Si completaste esta checklist:
- ✅ Tu sitio está optimizado profesionalmente
- ✅ SEO configurado correctamente
- ✅ Listo para generar clientes
- ✅ Preparado para crecer

### 🚀 Próximos pasos sugeridos:
1. **Semana 1-2:** Monitorear métricas y ajustar
2. **Mes 1:** Solicitar reseñas a primeros clientes
3. **Mes 2:** Agregar blog o casos de éxito
4. **Mes 3:** Optimizar según datos de Analytics

---

**📅 Fecha de lanzamiento:** _________  
**✍️ Responsable:** _________  
**🔄 Última revisión:** _________
