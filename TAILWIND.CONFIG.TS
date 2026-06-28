// 📁 D:\PREMIUM-PORTFOLIO\TAILWIND.CONFIG.TS
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',  // ← Added styles folder
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        secondary: '#111111',
        accent: '#00E5FF',
        highlight: '#8B5CF6',
        muted: '#A0A0A0',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70%' },
          '50%': { borderRadius: '30% 60% 70% 40%' },
          '100%': { borderRadius: '60% 40% 30% 70%' },
        },
      },
    },
  },
  plugins: [],
}

export default config