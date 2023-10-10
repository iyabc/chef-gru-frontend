import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const titleHeaderVariants = cva(['text-center'], {
  variants: {
    textColor: {
      white: 'text-background',
      black: 'text-black',
    },
  },
});

type TitleHeaderProps = {
  children: React.ReactNode;
  text: string;
  textColor: string;
} & VariantProps<typeof titleHeaderVariants>;

const TitleHeader: React.FC<TitleHeaderProps> = ({
  text,
  textColor,
  children,
}) => {
  return (
    <div className={titleHeaderVariants({ textColor })}>
      <div className="mb-2 lg:mb-1">{children}</div>
      <p className="font-rightGroteskCompactBlack uppercase text-4xl xsm:text-5xl sm:text-6xl lg:text-8xl ">
        {text}
      </p>
    </div>
  );
};

export default TitleHeader;
