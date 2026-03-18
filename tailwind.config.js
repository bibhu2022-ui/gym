/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#b8975a',
          light: '#d4b07a',
          dark: '#8a6d38',
          muted: '#5a4a28',
        },
        ivory: {
          DEFAULT: '#f5f0e8',
          dim: '#c8c0b0',
          muted: '#8a8070',
        },
        obsidian: {
          DEFAULT: '#0a0a0a',
          2: '#111111',
          3: '#1a1a1a',
          4: '#222222',
          warm: '#16130d',
          gold: '#0e0c07',
        },
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scrollPulse: {
          '0%, 100%': { transform: 'scaleY(0)', transformOrigin: 'top', opacity: '0.3' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top', opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease forwards',
        shimmer: 'shimmer 4s linear infinite',
        scrollPulse: 'scrollPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
