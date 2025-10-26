/** @type {import('tailwindcss').Config} */

// 🎨 Importar tema activo
const activeTheme = require('./src/config/themes.js').default;

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // � Colores dinámicos desde themes.js
        brand: {
          DEFAULT: activeTheme.colors.primary.DEFAULT,
          light: activeTheme.colors.primary.light,
          lighter: activeTheme.colors.primary.lighter,
          dark: activeTheme.colors.primary.dark,
          // Mantener escala completa para compatibilidad
          50: '#fdfbf5',
          100: '#faf6e8',
          200: '#f5edd1',
          300: '#eedca5',
          400: activeTheme.colors.primary.lighter,
          500: activeTheme.colors.primary.light,
          600: activeTheme.colors.primary.DEFAULT,
          700: activeTheme.colors.primary.dark,
          800: '#836821',
          900: '#6e561f',
        },
        // Alias: primary (mismo que brand)
        primary: {
          DEFAULT: activeTheme.colors.primary.DEFAULT,
          light: activeTheme.colors.primary.light,
          lighter: activeTheme.colors.primary.lighter,
          dark: activeTheme.colors.primary.dark,
        },
        // Alias: accent (mismo que brand) - para compatibilidad hacia atrás
        accent: {
          DEFAULT: activeTheme.colors.primary.DEFAULT,
          light: activeTheme.colors.primary.light,
          lighter: activeTheme.colors.primary.lighter,
          dark: activeTheme.colors.primary.dark,
          // Escala completa
          50: '#fdfbf5',
          100: '#faf6e8',
          200: '#f5edd1',
          300: '#eedca5',
          400: activeTheme.colors.primary.lighter,
          500: activeTheme.colors.primary.light,
          600: activeTheme.colors.primary.DEFAULT,
          700: activeTheme.colors.primary.dark,
          800: '#836821',
          900: '#6e561f',
        },
        // Backgrounds dinámicos
        bg: {
          primary: activeTheme.colors.background.primary,
          secondary: activeTheme.colors.background.secondary,
          card: activeTheme.colors.background.card,
          hover: activeTheme.colors.background.hover,
        },
        // Textos dinámicos
        txt: {
          primary: activeTheme.colors.text.primary,
          secondary: activeTheme.colors.text.secondary,
          muted: activeTheme.colors.text.muted,
        },
        // Borders dinámicos
        brd: {
          DEFAULT: activeTheme.colors.border.DEFAULT,
          light: activeTheme.colors.border.light,
        },
        // 🌑 Colores neutrales (mantener para compatibilidad)
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // 🎨 Colores semánticos adicionales
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        // 📝 Tipografía dinámica desde themes.js
        sans: activeTheme.fonts.body,
        heading: activeTheme.fonts.heading,
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        // 🎨 Gradientes personalizados
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-c': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'brand': '0 10px 40px rgba(26, 26, 26, 0.15)',
        'brand-lg': '0 20px 60px rgba(26, 26, 26, 0.20)',
        'accent': '0 10px 40px rgba(212, 175, 55, 0.15)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.25)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.4)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.5)',
      },
      animation: {
        // 🎬 Animaciones profesionales y suaves
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-down': 'fadeDown 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'zoom-in': 'zoomIn 0.4s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(37, 99, 235, 0.2), 0 0 10px rgba(37, 99, 235, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.4), 0 0 30px rgba(37, 99, 235, 0.3)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.800'),
            a: {
              color: theme('colors.brand.600'),
              '&:hover': {
                color: theme('colors.brand.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
