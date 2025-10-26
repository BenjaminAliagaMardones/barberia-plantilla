/**
 * 📝 Configuración Global del Sitio
 * 
 * ⚙️ Personaliza estos valores para adaptar la plantilla a tu negocio
 * 
 * 🎯 INSTRUCCIONES:
 * 1. Cambia los valores según tu negocio
 * 2. Este archivo centraliza toda la información para fácil mantenimiento
 * 3. Los componentes importan automáticamente estos valores
 */

export const siteConfig = {
  // 🏢 Información del Negocio
  name: 'Benjamin Mardones',
  businessName: 'Servicios Digitales',
  tagline: 'Soluciones Digitales para Negocios Locales',
  description: 'Diseño web, automatización y desarrollo digital para PYMEs locales. Soluciones profesionales que generan resultados reales.',
  
  // 🌐 URLs y Dominios
  url: 'https://tudominio.cl', // 👈 Cambiar por tu dominio real
  author: 'Benjamin Mardones',
  
  // 📍 Localización (SEO Local)
  location: {
    city: 'Temuco',
    region: 'La Araucanía',
    country: 'Chile',
    countryCode: 'CL',
    regionCode: 'CL-AR', // Código ISO 3166-2
    postalCode: '4780000',
    address: 'Avenida Ejemplo 123', // 👈 Cambiar por tu dirección real
    coordinates: {
      latitude: -38.7359,  // 👈 Cambiar por tu ubicación real
      longitude: -72.5904,
    },
  },
  
  // 📞 Información de Contacto
  contact: {
    phone: '+56 9 1234 5678', // 👈 Cambiar por tu número real
    phoneRaw: '+56912345678', // Sin espacios para enlaces
    email: 'contacto@tudominio.cl', // 👈 Cambiar por tu email real
    whatsapp: '+56912345678', // 👈 Cambiar por tu WhatsApp
    whatsappMessage: '¡Hola! Me interesa conocer más sobre sus servicios digitales.',
  },
  
  // 🕐 Horario de Atención
  businessHours: {
    weekdays: 'Lunes a Viernes: 9:00 - 18:00',
    weekend: 'Sábado: 10:00 - 14:00',
    closed: 'Domingo: Cerrado',
    timezone: 'America/Santiago',
  },
  
  // 🔗 Redes Sociales
  social: {
    github: 'https://github.com/BenjaminAliagaMardones', // 👈 Cambiar por tu perfil
    linkedin: 'https://linkedin.com/in/tuperfil', // 👈 Cambiar por tu perfil
    twitter: 'https://twitter.com/tuperfil', // 👈 Cambiar por tu perfil
    instagram: 'https://instagram.com/tuperfil', // 👈 Opcional
    facebook: 'https://facebook.com/tupagina', // 👈 Opcional
  },
  
  // 🎨 Configuración de Marca
  brand: {
    primaryColor: '#2563eb', // Azul corporativo
    accentColor: '#f97316',  // Naranja acento
    logo: '/logo.svg',
    ogImage: '/og-image.jpg', // Imagen para redes sociales (1200x630px)
  },
  
  // 📊 Analytics y Tracking
  analytics: {
    googleAnalyticsId: '', // 👈 Agregar tu ID de GA4 (ej: G-XXXXXXXXXX)
    facebookPixelId: '',   // 👈 Opcional
    hotjarId: '',          // 👈 Opcional
  },
  
  // 📝 SEO
  seo: {
    keywords: [
      'diseño web',
      'automatización',
      'desarrollo digital',
      'negocios locales',
      'pymes',
      'freelance',
      'temuco',
      'chile',
      'páginas web',
      'transformación digital',
    ],
    locale: 'es_CL',
    twitterHandle: '@tuperfil', // 👈 Cambiar por tu usuario
  },
  
  // 🎯 Servicios Principales (para meta tags y schema)
  services: [
    'Diseño Web Profesional',
    'Automatización con n8n',
    'Desarrollo Digital a Medida',
    'Optimización SEO Local',
    'E-commerce',
    'Consultoría Digital',
  ],
  
  // 💰 Configuración de Precios (opcional, para mostrar rangos)
  pricing: {
    currency: 'CLP',
    currencySymbol: '$',
    priceRange: '$$', // $ | $$ | $$$ para schema.org
  },
  
  // 📧 Integración de Formularios
  forms: {
    formspreeId: '', // 👈 Agregar tu ID de Formspree (ej: mqazwepq)
    emailjsServiceId: '', // 👈 Opcional si usas EmailJS
    emailjsTemplateId: '',
    emailjsPublicKey: '',
  },
  
  // 🚀 Features
  features: {
    newsletter: false, // ¿Mostrar suscripción a newsletter?
    blog: false,       // ¿Activar sección de blog?
    darkMode: false,   // ¿Permitir cambio de tema oscuro?
    multiLanguage: false, // ¿Soporte multi-idioma?
  },
};

// 🔗 Función helper para generar URL completa
export function getFullUrl(path: string = ''): string {
  return `${siteConfig.url}${path}`;
}

// 📱 Función helper para generar enlace de WhatsApp
export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || siteConfig.contact.whatsappMessage);
  return `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${message}`;
}

// 📞 Función helper para generar enlace de teléfono
export function getPhoneLink(): string {
  return `tel:${siteConfig.contact.phoneRaw}`;
}

// 📧 Función helper para generar enlace de email
export function getEmailLink(): string {
  return `mailto:${siteConfig.contact.email}`;
}

// 📍 Función helper para generar URL de Google Maps
export function getGoogleMapsLink(): string {
  const { latitude, longitude } = siteConfig.location.coordinates;
  return `https://www.google.com/maps?q=${latitude},${longitude}`;
}

// 🗺️ Función helper para iframe de Google Maps
export function getGoogleMapsEmbedUrl(): string {
  const { latitude, longitude } = siteConfig.location.coordinates;
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.${latitude}!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM4KwNDQnMDguMCJTIDcywrAzNScyNS40Ilc!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl`;
}

export default siteConfig;
