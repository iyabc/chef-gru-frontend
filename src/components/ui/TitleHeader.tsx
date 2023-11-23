import React, { useRef } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'framer-motion';
import {
  firstQuickVerticalFadeInVariants,
  secondQuickVerticalFadeInVariants,
} from '@/animations/fadeIn';

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
  const titleButtonRef = useRef(null);
  const subtitleButtonRef = useRef(null);
  const titleButtonInView = useInView(titleButtonRef);
  const subtitleButtonInView = useInView(titleButtonRef);

  return (
    <div className={titleHeaderVariants({ textColor })}>
      <motion.div
        ref={titleButtonRef}
        variants={firstQuickVerticalFadeInVariants}
        initial="initial"
        animate={titleButtonInView && 'animate'}
        className="mb-3 lg:mb-6"
      >
        {children}
      </motion.div>
      <motion.p
        ref={subtitleButtonRef}
        variants={secondQuickVerticalFadeInVariants}
        initial="initial"
        animate={subtitleButtonInView && 'animate'}
        className="font-rightGroteskCompactBlack uppercase mb-5 text-2xl xsm:text-3xl lg:text-4xl"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default TitleHeader;
