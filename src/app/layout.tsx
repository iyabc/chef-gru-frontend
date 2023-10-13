import type { Metadata } from 'next';

import '@/styles/globals.css';

import { inter, rightGroteskCompactBlack } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Chef BLSTM',
  description:
    'CHEF BLSTM is a recipe generation model that combines BLSTM and BERT tokenizer to generate novel food recipes from ingredients selected by the user.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rightGroteskCompactBlack.variable}`}
    >
      <body className={`${inter.className} text-black bg-background`}>
        {children}
      </body>
    </html>
  );
}
