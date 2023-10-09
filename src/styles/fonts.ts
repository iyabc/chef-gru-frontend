import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const rightGroteskCompactBlack = localFont({
  src: '../../public/fonts/RightGrotesk-CompactBlack.otf',
  variable: '--font-rightGroteskCompactBlack',
});
