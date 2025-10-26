/**
 * config.js
 * Configuración centralizada del sitio
 * EDITABLE FÁCILMENTE para cada cliente
 */

export const site = {
  // 🏢 Información del negocio
  business: {
    name: "Benjamin Mardones",
    tagline: "Servicios Digitales",
    description: "Soluciones digitales profesionales para negocios locales. Transformo ideas en experiencias web memorables.",
    phone: "+56 9 1234 5678",
    phoneDisplay: "+56 9 1234 5678",
    email: "contacto@benjamin-mardones.cl",
    whatsapp: "56912345678",
    address: {
      street: "Avenida Ejemplo 123",
      city: "Santiago",
      region: "Región Metropolitana",
      country: "Chile",
      postalCode: "8320000"
    },
    geo: {
      latitude: -33.4489,
      longitude: -70.6693
    },
    hours: {
      weekday: { open: "09:00", close: "18:00" },
      weekend: { open: "10:00", close: "14:00" }
    }
  },

  // 🎨 Hero Section
  hero: {
    badge: "🚀 Soluciones Digitales para Negocios Locales",
    title: "Impulsa tu negocio con",
    titleHighlight: "tecnología profesional",
    subtitle: "Diseño sitios web modernos, automatizo procesos y creo soluciones digitales que ayudan a pequeñas empresas a crecer en el mundo digital.",
    ctaPrimary: {
      text: "Ver Servicios",
      link: "/servicios"
    },
    ctaSecondary: {
      text: "Agendar Reunión",
      link: "/contacto"
    },
    stats: [
      { value: "50+", label: "Proyectos Completados" },
      { value: "100%", label: "Clientes Satisfechos" },
      { value: "24h", label: "Tiempo de Respuesta" }
    ],
    image: "/images/hero/workspace.svg",
    imageAlt: "Espacio de trabajo digital moderno con laptop y código",
    badge2: {
      text: "Disponible para proyectos",
      active: true
    }
  },

  // 🛠️ Servicios
  services: [
    {
      id: "diseno-web",
      title: "Diseño Web Profesional",
      description: "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
      icon: "web",
      link: "/diseno-web",
      featured: true,
      color: "blue"
    },
    {
      id: "automatizacion",
      title: "Automatización con n8n",
      description: "Crea flujos automáticos que ahorran horas de trabajo manual en tu negocio.",
      icon: "automation",
      link: "/automatizacion",
      featured: true,
      color: "amber"
    },
    {
      id: "desarrollo-digital",
      title: "Desarrollo Digital",
      description: "Soluciones a medida para llevar tu negocio al siguiente nivel digital.",
      icon: "development",
      link: "/desarrollo-digital",
      featured: true,
      color: "purple"
    }
  ],

  // 💬 Testimonios
  testimonials: [
    {
      id: 1,
      name: "María González",
      role: "Dueña de Café",
      city: "Temuco, Araucanía",
      text: "Increíble trabajo. En menos de 2 semanas tenía mi sitio funcionando y empecé a recibir pedidos online. ¡Totalmente recomendado!",
      image: "/images/testimonials/avatar-1.svg",
      rating: 5,
      company: "Café Aromático"
    },
    {
      id: 2,
      name: "Carlos Ramírez",
      role: "Abogado Independiente",
      city: "Valdivia, Los Ríos",
      text: "El sitio web que diseñó es exactamente lo que necesitaba. Profesional, moderno y muy fácil de administrar. Mis clientes quedan impresionados.",
      image: "/images/testimonials/avatar-2.svg",
      rating: 5,
      company: "Estudio Jurídico CR"
    },
    {
      id: 3,
      name: "Andrea Silva",
      role: "Emprendedora",
      city: "Puerto Montt, Los Lagos",
      text: "La automatización que implementó nos ahorra más de 15 horas semanales. Ahora podemos enfocarnos en hacer crecer el negocio.",
      image: "/images/testimonials/avatar-3.svg",
      rating: 5,
      company: "Silva Consultores"
    }
  ],

  // 💼 Planes (opcional)
  plans: [
    {
      id: "basico",
      name: "Básico",
      price: "$299.990",
      period: "pago único",
      description: "Ideal para emprendedores y pequeños negocios",
      features: [
        "Landing page de 1 página",
        "Diseño responsive",
        "Formulario de contacto",
        "Optimización SEO básica",
        "Dominio .cl incluido (1 año)",
        "Hosting 12 meses"
      ],
      cta: "Comenzar",
      link: "/contacto?plan=basico",
      popular: false
    },
    {
      id: "profesional",
      name: "Profesional",
      price: "$499.990",
      period: "pago único",
      description: "Para negocios establecidos que buscan crecer",
      features: [
        "Sitio web hasta 5 páginas",
        "Diseño 100% personalizado",
        "Blog integrado",
        "SEO avanzado",
        "Google Analytics",
        "Formularios múltiples",
        "Dominio + Hosting 12 meses",
        "Soporte 3 meses"
      ],
      cta: "Más Popular",
      link: "/contacto?plan=profesional",
      popular: true,
      featured: true
    },
    {
      id: "empresarial",
      name: "Empresarial",
      price: "$899.990",
      period: "pago único",
      description: "Solución completa para empresas",
      features: [
        "Sitio web hasta 10 páginas",
        "E-commerce básico",
        "Automatización de procesos",
        "Integraciones con CRM",
        "Chat en vivo",
        "Panel de administración",
        "SEO premium",
        "Dominio + Hosting 12 meses",
        "Soporte 6 meses"
      ],
      cta: "Contactar",
      link: "/contacto?plan=empresarial",
      popular: false
    }
  ],

  // 📞 CTA Final
  cta: {
    title: "¿Listo para transformar tu negocio?",
    subtitle: "Agenda una reunión sin compromiso y conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales",
    buttonPrimary: {
      text: "Contactar Ahora",
      link: "/contacto"
    },
    buttonSecondary: {
      text: "Ver Portfolio",
      link: "/servicios"
    },
    badge: {
      text: "Respuesta en menos de 24 horas",
      icon: "⚡"
    }
  },

  // 🔗 Redes Sociales
  social: {
    github: {
      url: "https://github.com/BenjaminAliagaMardones",
      username: "@BenjaminAliagaMardones"
    },
    linkedin: {
      url: "https://linkedin.com/in/benjamin-mardones",
      username: "benjamin-mardones"
    },
    instagram: {
      url: "https://instagram.com/benjamin.dev",
      username: "@benjamin.dev"
    },
    twitter: {
      url: "https://twitter.com/benjamin_dev",
      username: "@benjamin_dev"
    }
  },

  // 🧭 Navegación
  navigation: {
    main: [
      { text: "Inicio", href: "/", active: true },
      { text: "Servicios", href: "/servicios" },
      { text: "Nosotros", href: "/nosotros" },
      { text: "Contacto", href: "/contacto" }
    ],
    footer: {
      quickLinks: [
        { text: "Inicio", href: "/" },
        { text: "Servicios", href: "/servicios" },
        { text: "Nosotros", href: "/nosotros" },
        { text: "Contacto", href: "/contacto" }
      ],
      services: [
        { text: "Diseño Web", href: "/diseno-web" },
        { text: "Automatización", href: "/automatizacion" },
        { text: "Desarrollo Digital", href: "/desarrollo-digital" }
      ],
      legal: [
        { text: "Política de Privacidad", href: "/privacidad" },
        { text: "Términos de Uso", href: "/terminos" }
      ]
    }
  },

  // 🎨 Colores y estilos (para Tailwind)
  theme: {
    colors: {
      brand: "#2563EB",      // Azul principal
      brandDark: "#1E40AF",  // Azul oscuro
      accent: "#F59E0B",     // Naranja/amarillo para CTAs
      accentDark: "#D97706"  // Naranja oscuro
    },
    fonts: {
      sans: "Inter, system-ui, sans-serif",
      heading: "Inter, system-ui, sans-serif"
    }
  },

  // 🔍 SEO
  seo: {
    defaultTitle: "Servicios Digitales para Negocios | Benjamin Mardones",
    titleTemplate: "%s | Benjamin Mardones",
    defaultDescription: "Diseño web, automatización y desarrollo digital para PYMEs locales. Soluciones profesionales que generan resultados reales.",
    keywords: "diseño web, automatización, desarrollo digital, negocios locales, pymes, freelance, santiago, chile",
    ogImage: "/og-image.svg",
    twitterCard: "summary_large_image",
    locale: "es_CL",
    type: "website"
  }
};

// 📍 Datos estructurados Schema.org (LocalBusiness)
export const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://benjamin-mardones.cl#localbusiness",
  "name": site.business.name + " - " + site.business.tagline,
  "description": site.business.description,
  "url": "https://benjamin-mardones.cl",
  "telephone": site.business.phone,
  "email": site.business.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": site.business.address.street,
    "addressLocality": site.business.address.city,
    "addressRegion": site.business.address.region,
    "postalCode": site.business.address.postalCode,
    "addressCountry": site.business.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": site.business.geo.latitude,
    "longitude": site.business.geo.longitude
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": site.business.hours.weekday.open,
      "closes": site.business.hours.weekday.close
    }
  ],
  "priceRange": "$$",
  "sameAs": [
    site.social.github.url,
    site.social.linkedin.url,
    site.social.instagram.url
  ],
  "founder": {
    "@type": "Person",
    "name": site.business.name
  }
};
