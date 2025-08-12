/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'in': 'fadeIn 0.5s ease-in-out',
        'slide-in-from-top-2': 'slideInFromTop 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-scale': 'fadeInScale 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      colors: {
        gray: {
          750: '#374151',
        },
        blue: {
          450: '#5B9BD5',
        },
        purple: {
          450: '#A78BFA',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      scale: {
        '98': '0.98',
        '102': '1.02',
      }
    },
  },
  plugins: [],
};