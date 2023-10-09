import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      rightGroteskCompactBlack: ['var(--font-rightGroteskCompactBlack)'],
      inter: ['var(--font-inter)'],
    },
    colors: {
      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      fontFamily: {
        rightGroteskCompactBlack: ['var(--font-rightGroteskCompactBlack)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        Background: '#F7EBDE',
        Primary: '#F57E00',
        Secondary: '#F4E1CD',
        Accent: '#C87D2D',
        Black: '#0C0803',
        White: '#EFEFEF',
      },
    },
    screens: {
      xsm: '384px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [],
};
export default config;
