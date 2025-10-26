/**
 * themes.js
 * Sistema de temas personalizables para múltiples nichos
 * 
 * Cambia el tema activo para adaptar el sitio a diferentes tipos de negocio
 */

export const themes = {
  // 🟡 BARBERÍA CLÁSICA (Actual)
  barberia: {
    name: "Barbería Premium",
    colors: {
      primary: {
        DEFAULT: '#ca8a04',    // yellow-600
        light: '#eab308',      // yellow-500
        lighter: '#facc15',    // yellow-400
        dark: '#a16207',       // yellow-700
      },
      background: {
        primary: '#0a0a0a',    // neutral-950
        secondary: '#171717',  // neutral-900
        card: '#1e1e1e',       // neutral-850
        hover: '#262626',      // neutral-800
      },
      text: {
        primary: '#ffffff',    // white
        secondary: '#d1d5db',  // gray-300
        muted: '#9ca3af',      // gray-400
      },
      border: {
        DEFAULT: '#404040',    // neutral-700
        light: '#525252',      // neutral-600
      }
    },
    fonts: {
      heading: ['Playfair Display', 'Georgia', 'serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    gradients: {
      hero: 'from-neutral-900 via-black to-neutral-950',
      card: 'from-yellow-600/10 to-yellow-500/5',
      overlay: 'from-black/60 via-black/70 to-black/80',
    }
  },

  // 🔵 CAFETERÍA MODERNA
  cafeteria: {
    name: "Cafetería Artesanal",
    colors: {
      primary: {
        DEFAULT: '#0891b2',    // cyan-600
        light: '#06b6d4',      // cyan-500
        lighter: '#22d3ee',    // cyan-400
        dark: '#0e7490',       // cyan-700
      },
      background: {
        primary: '#0f172a',    // slate-900
        secondary: '#1e293b',  // slate-800
        card: '#334155',       // slate-700
        hover: '#475569',      // slate-600
      },
      text: {
        primary: '#f8fafc',    // slate-50
        secondary: '#cbd5e1',  // slate-300
        muted: '#94a3b8',      // slate-400
      },
      border: {
        DEFAULT: '#64748b',    // slate-500
        light: '#94a3b8',      // slate-400
      }
    },
    fonts: {
      heading: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    gradients: {
      hero: 'from-slate-900 via-slate-800 to-cyan-900',
      card: 'from-cyan-600/10 to-cyan-500/5',
      overlay: 'from-slate-900/60 via-slate-900/70 to-slate-900/80',
    }
  },

  // 🟢 SPA / WELLNESS
  spa: {
    name: "Spa & Wellness",
    colors: {
      primary: {
        DEFAULT: '#059669',    // emerald-600
        light: '#10b981',      // emerald-500
        lighter: '#34d399',    // emerald-400
        dark: '#047857',       // emerald-700
      },
      background: {
        primary: '#1c1917',    // stone-900
        secondary: '#292524',  // stone-800
        card: '#44403c',       // stone-700
        hover: '#57534e',      // stone-600
      },
      text: {
        primary: '#fafaf9',    // stone-50
        secondary: '#d6d3d1',  // stone-300
        muted: '#a8a29e',      // stone-400
      },
      border: {
        DEFAULT: '#78716c',    // stone-500
        light: '#a8a29e',      // stone-400
      }
    },
    fonts: {
      heading: ['Cormorant Garamond', 'Georgia', 'serif'],
      body: ['Lato', 'system-ui', 'sans-serif'],
    },
    gradients: {
      hero: 'from-stone-900 via-stone-800 to-emerald-950',
      card: 'from-emerald-600/10 to-emerald-500/5',
      overlay: 'from-stone-900/60 via-stone-900/70 to-stone-900/80',
    }
  },

  // 🔴 GYM / FITNESS
  gym: {
    name: "Gimnasio Premium",
    colors: {
      primary: {
        DEFAULT: '#dc2626',    // red-600
        light: '#ef4444',      // red-500
        lighter: '#f87171',    // red-400
        dark: '#b91c1c',       // red-700
      },
      background: {
        primary: '#0a0a0a',    // black
        secondary: '#1a1a1a',  // gray-950
        card: '#262626',       // neutral-800
        hover: '#404040',      // neutral-700
      },
      text: {
        primary: '#ffffff',    // white
        secondary: '#d4d4d4',  // neutral-300
        muted: '#a3a3a3',      // neutral-400
      },
      border: {
        DEFAULT: '#525252',    // neutral-600
        light: '#737373',      // neutral-500
      }
    },
    fonts: {
      heading: ['Oswald', 'system-ui', 'sans-serif'],
      body: ['Roboto', 'system-ui', 'sans-serif'],
    },
    gradients: {
      hero: 'from-black via-neutral-950 to-red-950',
      card: 'from-red-600/10 to-red-500/5',
      overlay: 'from-black/70 via-black/80 to-black/90',
    }
  },

  // 🟠 RESTAURANTE ITALIANO
  restaurante: {
    name: "Restaurante Italiano",
    colors: {
      primary: {
        DEFAULT: '#ea580c',    // orange-600
        light: '#f97316',      // orange-500
        lighter: '#fb923c',    // orange-400
        dark: '#c2410c',       // orange-700
      },
      background: {
        primary: '#1e1b4b',    // indigo-950
        secondary: '#312e81',  // indigo-900
        card: '#3730a3',       // indigo-800
        hover: '#4338ca',      // indigo-700
      },
      text: {
        primary: '#fef3c7',    // amber-100
        secondary: '#fde68a',  // amber-200
        muted: '#fcd34d',      // amber-300
      },
      border: {
        DEFAULT: '#6366f1',    // indigo-500
        light: '#818cf8',      // indigo-400
      }
    },
    fonts: {
      heading: ['Libre Baskerville', 'Georgia', 'serif'],
      body: ['Open Sans', 'system-ui', 'sans-serif'],
    },
    gradients: {
      hero: 'from-indigo-950 via-indigo-900 to-orange-950',
      card: 'from-orange-600/10 to-orange-500/5',
      overlay: 'from-indigo-950/60 via-indigo-950/70 to-indigo-950/80',
    }
  },

  // 🟣 SALÓN DE BELLEZA
  salon: {
    name: "Salón de Belleza",
    colors: {
      primary: {
        DEFAULT: '#a855f7',    // purple-500
        light: '#c084fc',      // purple-400
        lighter: '#d8b4fe',    // purple-300
        dark: '#9333ea',       // purple-600
      },
      background: {
        primary: '#18181b',    // zinc-900
        secondary: '#27272a',  // zinc-800
        card: '#3f3f46',       // zinc-700
        hover: '#52525b',      // zinc-600
      },
      text: {
        primary: '#fafafa',    // zinc-50
        secondary: '#e4e4e7',  // zinc-200
        muted: '#a1a1aa',      // zinc-400
      },
      border: {
        DEFAULT: '#71717a',    // zinc-500
        light: '#a1a1aa',      // zinc-400
      }
    },
    fonts: {
      heading: ['Montserrat', 'system-ui', 'sans-serif'],
      body: ['Lato', 'system-ui', 'sans-serif'],
    },
    gradients: {
      hero: 'from-zinc-900 via-zinc-800 to-purple-950',
      card: 'from-purple-600/10 to-purple-500/5',
      overlay: 'from-zinc-900/60 via-zinc-900/70 to-zinc-900/80',
    }
  },

  // 🩺 CLÍNICA DENTAL
  dental: {
    name: "Clínica Dental",
    colors: {
      primary: {
        DEFAULT: '#3b82f6',    // blue-500
        light: '#60a5fa',      // blue-400
        lighter: '#93c5fd',    // blue-300
        dark: '#2563eb',       // blue-600
      },
      background: {
        primary: '#f8fafc',    // slate-50 (claro para dental)
        secondary: '#f1f5f9',  // slate-100
        card: '#ffffff',       // white
        hover: '#e2e8f0',      // slate-200
      },
      text: {
        primary: '#0f172a',    // slate-900
        secondary: '#475569',  // slate-600
        muted: '#64748b',      // slate-500
      },
      border: {
        DEFAULT: '#cbd5e1',    // slate-300
        light: '#e2e8f0',      // slate-200
      }
    },
    fonts: {
      heading: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    gradients: {
      hero: 'from-blue-50 via-white to-slate-50',
      card: 'from-blue-500/5 to-blue-400/5',
      overlay: 'from-white/60 via-white/70 to-white/80',
    }
  },

  // 🏪 TIENDA DE ROPA
  boutique: {
    name: "Boutique Fashion",
    colors: {
      primary: {
        DEFAULT: '#ec4899',    // pink-500
        light: '#f472b6',      // pink-400
        lighter: '#f9a8d4',    // pink-300
        dark: '#db2777',       // pink-600
      },
      background: {
        primary: '#1f2937',    // gray-800
        secondary: '#374151',  // gray-700
        card: '#4b5563',       // gray-600
        hover: '#6b7280',      // gray-500
      },
      text: {
        primary: '#f9fafb',    // gray-50
        secondary: '#e5e7eb',  // gray-200
        muted: '#d1d5db',      // gray-300
      },
      border: {
        DEFAULT: '#9ca3af',    // gray-400
        light: '#d1d5db',      // gray-300
      }
    },
    fonts: {
      heading: ['Abril Fatface', 'Georgia', 'serif'],
      body: ['Raleway', 'system-ui', 'sans-serif'],
    },
    gradients: {
      hero: 'from-gray-800 via-gray-700 to-pink-950',
      card: 'from-pink-600/10 to-pink-500/5',
      overlay: 'from-gray-800/60 via-gray-800/70 to-gray-800/80',
    }
  },
};

// ⚙️ CONFIGURACIÓN ACTIVA
// Cambia esto para cambiar el tema de todo el sitio
export const activeTheme = themes.barberia;

// Función helper para obtener colores con opacidad
export function getColorWithOpacity(color, opacity) {
  return `${color}/${opacity}`;
}

// Exportar tema activo como default
export default activeTheme;
