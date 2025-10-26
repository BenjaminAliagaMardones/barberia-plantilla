/**
 * 📝 Configuración Global del Sitio
 * 
 * ⚙️ Personaliza estos valores para adaptar la planti    'Degradado y Fade',
    'Barba y Afeitado Profesional',
    'Perfilado de Barba',
    'Paquetes Premium',
    'Tratamientos Capilares',
  },tu negocio
 * 
 * 🎯 INSTRUCCIONES:
 * 1. Cambia los valores según tu negocio
 * 2. Este archivo centraliza toda la información para fácil mantenimiento
 * 3. Los componentes importan automáticamente estos valores
 */

export const siteConfig = {
  // 🏢 Información del Negocio
  name: 'Barbería Premium Temuco',
  businessName: 'Barbería Premium',
  tagline: 'Cortes modernos. Estilo clásico.',
  description: 'Barbería profesional en Temuco con más de 5 años de experiencia. Servicios de corte, barba y cuidado masculino con atención personalizada y productos premium.',
  
  // 🌐 URLs y Dominios
  url: 'https://barberiatemuco.cl',
  author: 'Barbería Premium Temuco',
  
  // 📍 Localización (SEO Local)
  location: {
    city: 'Temuco',
    region: 'La Araucanía',
    country: 'Chile',
    countryCode: 'CL',
    regionCode: 'CL-AR',
    postalCode: '4780000',
    address: 'Av. Alemania 685, Temuco',
    coordinates: {
      latitude: -38.7359,
      longitude: -72.5904,
    },
  },
  
  // 📞 Información de Contacto
  contact: {
    phone: '+56 9 8765 4321',
    phoneRaw: '+56987654321',
    email: 'contacto@barberiatemuco.cl',
    whatsapp: '+56987654321',
    whatsappMessage: 'Hola, quiero agendar una hora en la barbería',
  },
  
  // 🕐 Horario de Atención
  businessHours: {
    weekdays: 'Lunes a Viernes: 10:00 - 20:00',
    weekend: 'Sábado: 10:00 - 18:00',
    closed: 'Domingo: Cerrado',
    timezone: 'America/Santiago',
  },
  
  // 🔗 Redes Sociales
  social: {
    github: '',
    linkedin: '',
    twitter: '',
    instagram: 'https://instagram.com/barberiatemuco',
    facebook: 'https://facebook.com/barberiatemuco',
  },
  
  // 🎨 Configuración de Marca
  brand: {
    primaryColor: '#1A1A1A', // Negro elegante
    accentColor: '#D4AF37',  // Dorado premium
    logo: '/logo.svg',
    ogImage: '/og-barberia.jpg',
  },

  // 🖼️ Imagen de Fondo Personalizable
  background: {
    // Ruta de la imagen (coloca tu foto en /public/images/)
    image: '/barberia-plantilla/images/hero/barberia-bg.jpg',
    
    // Opacidad de la imagen (0.1 = muy transparente, 1 = opaca)
    opacity: 0.35,
    
    // Posición de la imagen: 'center' | 'top' | 'bottom' | 'left' | 'right'
    position: 'center',
    
    // Tamaño: 'cover' (llenar todo) | 'contain' (imagen completa visible)
    size: 'cover',
    
    // Blur/desenfoque (opcional, en px. 0 = sin blur)
    blur: 0,
    
    // Overlay oscuro adicional (0 = sin overlay, 1 = completamente oscuro)
    overlay: 0.5,
  },
  
  // 📊 Analytics y Tracking
  analytics: {
    googleAnalyticsId: '',
    facebookPixelId: '',
    hotjarId: '',
  },
  
  // 📝 SEO
  seo: {
    keywords: [
      'barbería Temuco',
      'barbería premium',
      'corte de pelo Temuco',
      'barba Temuco',
      'peluquería hombre',
      'degradado fade',
      'afeitado navaja',
      'barbero profesional',
      'corte masculino',
      'barbería La Araucanía',
    ],
    locale: 'es_CL',
    twitterHandle: '@barberiatemuco',
  },
  
  // 🎯 Servicios Principales (para meta tags y schema)
  services: [
    'Corte de Pelo Profesional',
    'Degradado y Fade',
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
