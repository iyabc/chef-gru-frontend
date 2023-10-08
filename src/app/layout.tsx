import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });
import { RightGroteskCompactBlack } from '@/styles/fonts';
export const metadata: Metadata = {
  title: 'Chef L-BERT',
  description:
    'Chef L-BERT is a recipe generation model that combines BLSTM and BERT to generate novel food recipes from ingredients selected by the user.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${RightGroteskCompactBlack.variable} font-sans`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
