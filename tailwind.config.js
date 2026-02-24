/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gofun: '#f5f0e8',
        sumi: '#2a2a2a',
        wakatake: '#2d4a3e',
        sakura: '#e8a0b4',
        beni: '#c53d43',
        kincha: '#c48a2a',
        washi: '#f0e6d3',
        nibi: '#656765',
      },
      fontFamily: {
        sans: ['"Noto Serif JP"', '"Noto Sans JP"', 'serif'],
        serif: ['"Noto Serif JP"', 'serif'],
        brush: ['"Zen Antique"', 'serif'],
      },
      animation: {
        'sakura-fall': 'sakuraFall 6s ease-in-out infinite',
        'stamp-press': 'stampPress 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        sakuraFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        stampPress: {
          '0%': { transform: 'scale(2) rotate(-15deg)', opacity: '0' },
          '60%': { transform: 'scale(0.9) rotate(3deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
