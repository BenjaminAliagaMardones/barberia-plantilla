/**
 * barberia.js
 * Configuración centralizada de la Barbería Premium
 * EDITABLE FÁCILMENTE para personalización
 */

export const barberia = {
  // 🏢 Información del negocio
  business: {
    name: "Barbería Premium Temuco",
    tagline: "Cortes modernos. Estilo clásico.",
    description: "Barbería profesional en Temuco con más de 5 años de experiencia. Ofrecemos servicios de corte, barba y cuidado masculino con atención personalizada.",
    phone: "+56 9 8765 4321",
    phoneDisplay: "+56 9 8765 4321",
    email: "contacto@barberiatemuco.cl",
    whatsapp: "56987654321",
    whatsappMessage: "Hola, quiero agendar una hora en la barbería",
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
      weekday: "Lunes a Viernes: 10:00 - 20:00",
      saturday: "Sábado: 10:00 - 18:00",
      sunday: "Domingo: Cerrado"
    },
    social: {
      instagram: "https://instagram.com/barberiatemuco",
      facebook: "https://facebook.com/barberiatemuco"
    }
  },

  // 🎨 Hero Section
  hero: {
    badge: "💈 Barbería Premium en Temuco",
    title: "Cortes modernos.",
    titleHighlight: "Estilo clásico.",
    subtitle: "Barbería profesional en Temuco. Reserva tu hora y vive la experiencia de un servicio premium con atención personalizada.",
    ctaPrimary: {
      text: "Agendar Cita",
      link: "https://wa.me/56987654321?text=Hola,%20quiero%20agendar%20una%20hora%20en%20la%20barbería",
      icon: "✂️"
    },
    ctaSecondary: {
      text: "Ver Servicios",
      link: "#servicios",
      icon: "👇"
    },
    icons: [
      { icon: "✂️", label: "Cortes profesionales" },
      { icon: "💈", label: "Barba & Afeitado" },
      { icon: "💬", label: "Atención personalizada" }
    ],
    stats: [
      { value: "5+", label: "Años de experiencia" },
      { value: "100+", label: "Clientes satisfechos" },
      { value: "⭐ 4.9", label: "Calificación promedio" }
    ]
  },

  // 💈 Servicios
  services: [
    {
      id: "corte-clasico",
      title: "Corte Clásico",
      icon: "✂️",
      description: "Para quienes buscan elegancia atemporal y precisión en cada detalle.",
      price: "Desde $8.000",
      duration: "30-40 min",
      features: [
        "Corte a tijera o máquina",
        "Lavado incluido",
        "Peinado y acabado"
      ],
      featured: true
    },
    {
      id: "degradado-moderno",
      title: "Degradado Moderno",
      icon: "🔥",
      description: "Precisión y estilo actual con degradado profesional.",
      price: "Desde $10.000",
      duration: "40-50 min",
      features: [
        "Degradado high/mid/low fade",
        "Diseño de líneas",
        "Acabado premium"
      ],
      featured: true
    },
    {
      id: "barba-afeitado",
      title: "Barba & Afeitado",
      icon: "💈",
      description: "Cuidado completo y detalle perfecto para tu barba.",
      price: "Desde $6.000",
      duration: "25-35 min",
      features: [
        "Perfilado y diseño",
        "Navaja caliente",
        "Hidratación profesional"
      ],
      featured: true
    },
    {
      id: "paquete-premium",
      title: "Paquete Premium",
      icon: "⭐",
      description: "La experiencia completa: corte + barba + cuidado personalizado.",
      price: "Desde $15.000",
      duration: "60-70 min",
      features: [
        "Corte completo",
        "Barba y afeitado",
        "Lavado y tratamiento",
        "Productos premium"
      ],
      featured: true,
      highlight: true
    }
  ],

  // 🌟 Sobre Nosotros
  about: {
    title: "Sobre Nosotros",
    subtitle: "Más que un corte, una experiencia",
    description: "Somos una barbería con más de 5 años brindando servicios de corte, barba y cuidado masculino en Temuco. Nuestra misión es ofrecer una experiencia única, combinando técnica moderna y estilo clásico en un ambiente profesional y acogedor.",
    mission: "Transformar la visita a la barbería en una experiencia memorable, donde cada cliente recibe atención personalizada y resultados impecables.",
    benefits: [
      {
        icon: "⏱️",
        title: "Rápido y puntual",
        description: "Respetamos tu tiempo. Sistema de reservas online."
      },
      {
        icon: "💈",
        title: "Productos de calidad",
        description: "Usamos solo productos premium para el cuidado de tu cabello y barba."
      },
      {
        icon: "⭐",
        title: "100+ clientes satisfechos",
        description: "La confianza de nuestros clientes es nuestro mejor respaldo."
      }
    ],
    experience: [
      "5+ años de experiencia",
      "Barberos certificados",
      "Ambiente profesional",
      "Atención personalizada"
    ]
  },

  // 💬 Testimonios
  testimonials: [
    {
      id: 1,
      name: "Juan Pablo G.",
      role: "Cliente frecuente",
      city: "Temuco",
      text: "Excelente atención, muy profesional. El mejor corte que me han hecho en años. Totalmente recomendado.",
      rating: 5,
      image: "/images/testimonials/avatar-1.svg",
      date: "2024-10"
    },
    {
      id: 2,
      name: "Carlos Muñoz",
      role: "Cliente nuevo",
      city: "Temuco",
      text: "El mejor corte que me han hecho. El barbero es muy detallista y profesional. El ambiente es excelente.",
      rating: 5,
      image: "/images/testimonials/avatar-2.svg",
      date: "2024-09"
    },
    {
      id: 3,
      name: "Felipe Andrade",
      role: "Cliente regular",
      city: "Temuco",
      text: "Ambiente agradable y resultados perfectos. Siempre salgo satisfecho. La atención es de primera.",
      rating: 5,
      image: "/images/testimonials/avatar-3.svg",
      date: "2024-09"
    }
  ],

  // 📞 Sección de Contacto
  contact: {
    title: "Agenda tu hora",
    subtitle: "Renueva tu estilo hoy mismo",
    description: "Reserva tu cita por WhatsApp o completa el formulario. Te responderemos a la brevedad.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.7444179344314!2d-72.5926!3d-38.7359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ0JzA5LjIiUyA3MsKwMzUnMzMuNCJX!5e0!3m2!1ses!2scl!4v1234567890123",
    formFields: [
      { name: "nombre", type: "text", label: "Nombre completo", required: true },
      { name: "telefono", type: "tel", label: "Teléfono / WhatsApp", required: true },
      { name: "fecha", type: "date", label: "Fecha preferida", required: true },
      { name: "servicio", type: "select", label: "Servicio", required: true, options: [
        "Corte Clásico",
        "Degradado Moderno",
        "Barba & Afeitado",
        "Paquete Premium"
      ]},
      { name: "mensaje", type: "textarea", label: "Mensaje (opcional)", required: false }
    ]
  },

  // 🏷️ Precios (Lista completa)
  pricing: {
    title: "Lista de Precios",
    description: "Servicios profesionales a precios justos",
    categories: [
      {
        name: "Cortes",
        services: [
          { name: "Corte Clásico", price: "8.000" },
          { name: "Degradado (Fade)", price: "10.000" },
          { name: "Corte + Diseño", price: "12.000" },
          { name: "Corte Niño (hasta 12 años)", price: "6.000" }
        ]
      },
      {
        name: "Barba",
        services: [
          { name: "Perfilado de Barba", price: "6.000" },
          { name: "Afeitado Completo", price: "7.000" },
          { name: "Barba + Tratamiento", price: "8.000" }
        ]
      },
      {
        name: "Paquetes",
        services: [
          { name: "Corte + Barba", price: "13.000" },
          { name: "Paquete Premium", price: "15.000" },
          { name: "Paquete VIP (Corte + Barba + Tratamiento)", price: "18.000" }
        ]
      }
    ],
    note: "Los precios pueden variar según la complejidad del servicio."
  },

  // 🎯 SEO
  seo: {
    title: "Barbería Premium Temuco | Cortes modernos y estilo clásico",
    description: "Barbería profesional en Temuco. Cortes, barbas y estilo moderno con atención personalizada. Más de 5 años de experiencia. ¡Agenda tu hora!",
    keywords: [
      "barbería Temuco",
      "barbería premium",
      "corte de pelo Temuco",
      "barba Temuco",
      "peluquería hombre Temuco",
      "degradado Temuco",
      "fade Temuco",
      "barbero profesional",
      "corte masculino",
      "afeitado navaja"
    ],
    ogImage: "/og-barberia.jpg",
    twitterCard: "summary_large_image"
  }
};
