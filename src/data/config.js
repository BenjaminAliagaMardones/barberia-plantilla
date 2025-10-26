/**
 * config.js
 * Configuración centralizada del sitio - Barbería Premium Temuco
 * EDITABLE FÁCILMENTE para cada cliente
 */

export const site = {
  // 🏢 Información del negocio
  business: {
    name: "Barbería Premium Temuco",
    tagline: "Cortes modernos. Estilo clásico.",
    description: "Barbería profesional en Temuco con más de 5 años de experiencia. Ofrecemos servicios de corte, barba y cuidado masculino con atención personalizada.",
    phone: "+56 9 8765 4321",
    phoneDisplay: "+56 9 8765 4321",
    email: "contacto@barberiatemuco.cl",
    whatsapp: "56987654321",
    address: {
      street: "Av. Alemania 685",
      city: "Temuco",
      region: "La Araucanía",
      country: "Chile",
      postalCode: "4780000"
    },
    geo: {
      latitude: -38.7359,
      longitude: -72.5904
    },
    hours: {
      weekday: { open: "10:00", close: "20:00" },
      weekend: { open: "10:00", close: "18:00" }
    }
  },

  // 🎨 Hero Section
  hero: {
    badge: "� Barbería Premium en Temuco",
    title: "Cortes modernos.",
    titleHighlight: "Estilo clásico.",
    subtitle: "Barbería profesional en Temuco. Reserva tu hora y vive la experiencia de un servicio premium con atención personalizada.",
    ctaPrimary: {
      text: "Agendar Cita",
      link: "https://wa.me/56987654321?text=Hola,%20quiero%20agendar%20una%20hora"
    },
    ctaSecondary: {
      text: "Ver Servicios",
      link: "#servicios"
    },
    stats: [
      { value: "5+", label: "Años de experiencia" },
      { value: "100+", label: "Clientes satisfechos" },
      { value: "⭐ 4.9", label: "Calificación promedio" }
    ],
    image: "/images/hero/barberia.svg",
    imageAlt: "Barbería Premium Temuco - Cortes profesionales",
    badge2: {
      text: "Atendiendo en Temuco",
      active: true
    }
  },

  // 🛠️ Servicios
  services: [
    {
      id: "corte-clasico",
      title: "Corte Clásico",
      description: "Para quienes buscan elegancia atemporal y precisión en cada detalle.",
      icon: "scissors",
      link: "#servicios",
      featured: true,
      color: "gold"
    },
    {
      id: "degradado",
      title: "Degradado Moderno",
      description: "Precisión y estilo actual con degradado profesional.",
      icon: "fade",
      link: "#servicios",
      featured: true,
      color: "gold"
    },
    {
      id: "barba",
      title: "Barba & Afeitado",
      description: "Cuidado completo y detalle perfecto para tu barba.",
      icon: "beard",
      link: "#servicios",
      featured: true,
      color: "gold"
    }
  ],

  // 💬 Testimonios
  testimonials: [
    {
      id: 1,
      name: "Juan Pablo G.",
      role: "Cliente frecuente",
      city: "Temuco",
      text: "Excelente atención, muy profesional. El mejor corte que me han hecho en años. Totalmente recomendado.",
      image: "/images/testimonials/avatar-1.svg",
      rating: 5,
      company: ""
    },
    {
      id: 2,
      name: "Carlos Muñoz",
      role: "Cliente nuevo",
      city: "Temuco",
      text: "El mejor corte que me han hecho. El barbero es muy detallista y profesional. El ambiente es excelente.",
      image: "/images/testimonials/avatar-2.svg",
      rating: 5,
      company: ""
    },
    {
      id: 3,
      name: "Felipe Andrade",
      role: "Cliente regular",
      city: "Temuco",
      text: "Ambiente agradable y resultados perfectos. Siempre salgo satisfecho. La atención es de primera.",
      image: "/images/testimonials/avatar-3.svg",
      rating: 5,
      company: ""
    }
  ],

  // 💼 Planes (opcional)
  plans: [
    {
      id: "corte-clasico",
      name: "Corte Clásico",
      price: "$8.000",
      period: "por servicio",
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
      period: "por servicio",
      description: "Ideal para el mantenimiento regular",
      features: [
        "Corte a tijera o máquina",
        "Lavado incluido",
        "Peinado y acabado"
      ],
      cta: "Agendar",
      link: "https://wa.me/56987654321?text=Quiero%20agendar%20un%20corte%20clásico",
      popular: false
    },
    {
      id: "degradado",
      name: "Degradado Moderno",
      price: "$10.000",
      period: "por servicio",
      description: "Estilo y precisión actual",
      features: [
        "Degradado high/mid/low fade",
        "Diseño de líneas",
        "Acabado premium"
      ],
      cta: "Más Popular",
      link: "https://wa.me/56987654321?text=Quiero%20agendar%20un%20degradado",
      popular: true,
      featured: true
    },
    {
      id: "paquete-premium",
      name: "Paquete Premium",
      price: "$15.000",
      period: "por servicio",
      description: "Experiencia completa",
      features: [
        "Corte completo",
        "Barba y afeitado",
        "Lavado y tratamiento",
        "Productos premium"
      ],
      cta: "Agendar",
      link: "https://wa.me/56987654321?text=Quiero%20agendar%20el%20paquete%20premium",
      popular: false
    }
  ],

  // 📞 CTA Final
  cta: {
    title: "¿Listo para renovar tu estilo?",
    subtitle: "Agenda tu hora por WhatsApp y vive la experiencia de un servicio premium con atención personalizada",
    buttonPrimary: {
      text: "Agendar Hora",
      link: "https://wa.me/56987654321?text=Hola,%20quiero%20agendar%20una%20hora"
    },
    buttonSecondary: {
      text: "Ver Precios",
      link: "#servicios"
    },
    badge: {
      text: "Respuesta inmediata por WhatsApp",
      icon: "✂️"
    }
  },

  // 🔗 Redes Sociales
  social: {
    github: {
      url: "",
      username: ""
    },
    linkedin: {
      url: "",
      username: ""
    },
    instagram: {
      url: "https://instagram.com/barberiatemuco",
      username: "@barberiatemuco"
    },
    twitter: {
      url: "",
      username: ""
    },
    facebook: {
      url: "https://facebook.com/barberiatemuco",
      username: "barberiatemuco"
    }
  },

  // 🧭 Navegación
  navigation: {
    main: [
      { text: "Inicio", href: "/", active: true },
      { text: "Servicios", href: "#servicios" },
      { text: "Nosotros", href: "#nosotros" },
      { text: "Contacto", href: "#contacto" }
    ],
    footer: {
      quickLinks: [
        { text: "Inicio", href: "/" },
        { text: "Servicios", href: "#servicios" },
        { text: "Nosotros", href: "#nosotros" },
        { text: "Contacto", href: "#contacto" }
      ],
      services: [
        { text: "Corte Clásico", href: "#servicios" },
        { text: "Degradado", href: "#servicios" },
        { text: "Barba & Afeitado", href: "#servicios" }
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
      brand: "#1A1A1A",      // Negro elegante
      brandDark: "#0a0a0a",  // Negro profundo
      accent: "#D4AF37",     // Dorado premium
      accentDark: "#c09a2a"  // Dorado oscuro
    },
    fonts: {
      sans: "Inter, system-ui, sans-serif",
      heading: "Poppins, Inter, system-ui, sans-serif"
    }
  },

  // 🔍 SEO
  seo: {
    defaultTitle: "Barbería Premium Temuco | Cortes modernos y estilo clásico",
    titleTemplate: "%s | Barbería Premium Temuco",
    defaultDescription: "Barbería profesional en Temuco. Cortes, barbas y estilo moderno con atención personalizada. Más de 5 años de experiencia. ¡Agenda tu hora!",
    keywords: "barbería temuco, barbería premium, corte de pelo temuco, barba temuco, peluquería hombre, degradado fade, barbero profesional",
    ogImage: "/og-barberia.jpg",
    twitterCard: "summary_large_image",
    locale: "es_CL",
    type: "website"
  }
};

// 📍 Datos estructurados Schema.org (HairSalon)
export const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://barberiatemuco.cl#hairsalon",
  "name": site.business.name,
  "description": site.business.description,
  "url": "https://barberiatemuco.cl",
  "telephone": site.business.phone,
  "email": site.business.email,
  "priceRange": "$$",
  "image": "https://barberiatemuco.cl/og-barberia.jpg",
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
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": site.business.hours.weekend.open,
      "closes": site.business.hours.weekend.close
    }
  ],
  "sameAs": [
    site.social.instagram.url,
    site.social.linkedin.url,
    site.social.instagram.url
  ],
  "founder": {
    "@type": "Person",
    "name": site.business.name
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "100",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Juan Pablo G."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excelente atención, muy profesional. El mejor corte que me han hecho en años. Totalmente recomendado."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Carlos Muñoz"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "El mejor corte que me han hecho. El barbero es muy detallista y profesional. El ambiente es excelente."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Felipe Andrade"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Ambiente agradable y resultados perfectos. Siempre salgo satisfecho. La atención es de primera."
    }
  ]
};
