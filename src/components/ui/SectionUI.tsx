import type { FC } from 'react';
import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

type SectionUIProps = {
  background: string;
  children: React.ReactNode;
} & VariantProps<typeof sectionUIVariants>;

const sectionUIVariants = cva(
  ['h-screen flex justify-center items-center lg:py-32'],
  {
    variants: {
      background: {
        black: 'bg-black',
        background: 'bg-background',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
      },
    },
  }
);

const SectionUI: FC<SectionUIProps> = ({ background, children }) => {
  return (
    <section className={sectionUIVariants({ background })}>{children}</section>
  );
};

export default SectionUI;
