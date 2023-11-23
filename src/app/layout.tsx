'use client';

// import type { Metadata } from 'next';

import * as Toast from '@radix-ui/react-toast';

import '@/styles/globals.css';

import { InputOutputProvider } from '@/contexts/InputOutputContext';
import { RecipeProvider } from '@/contexts/RecipeContext';
import { inter, rightGroteskCompactBlack } from '@/styles/fonts';

// export const metadata: Metadata = {
//   title: 'Chef GRU',
//   description:
//     'CHEF GRU is a recipe generation model that combines Seq2Seq BiGRU Model and Byte-level BPE tokenizer to generate novel food recipes from ingredients selected by the user.',
// };

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
        <Toast.Provider swipeDirection="right">
          <RecipeProvider>
            <InputOutputProvider>{children}</InputOutputProvider>
          </RecipeProvider>
        </Toast.Provider>
      </body>
    </html>
  );
}
