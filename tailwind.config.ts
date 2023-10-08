import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
  },
  plugins: [],
};
export default config;
