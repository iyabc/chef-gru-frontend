import React, { useRef } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'framer-motion';

import {
  firstQuickHorizontalFromLeftFadeInVariants,
  firstQuickVerticalFromRightFadeInVariants,
  firstSlowFadeInVariants,
} from '@/animations/fadeIn';

const dividerVariants = cva(['w-full flex justify-center items-center'], {
  variants: {
    color: {
      Yellow: 'bg-primary',
      Black: 'bg-black',
    },
  },
});

type DividerProps = {
  color: string;
  text: string;
  title: string;
} & VariantProps<typeof dividerVariants>;

const Divider: React.FC<DividerProps> = ({ title, text, color }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className={dividerVariants({ color })}>
      <div className="container grid grid-cols-1 md:grid-cols-2 text-white py-[4rem] md:py-[4rem] lg:py-[4.19rem] gap-2">
        <motion.h1
          variants={firstQuickHorizontalFromLeftFadeInVariants}
          initial="initial"
          animate={inView && 'animate'}
          className="my-auto uppercase font-rightGroteskCompactBlack font-black md:text-left text-[1.5rem] md:text-[2rem] md:w-[20rem] lg:w-[24rem]"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={firstQuickVerticalFromRightFadeInVariants}
          initial="initial"
          animate={inView && 'animate'}
          className="my-auto font-light text-white text-[1.125rem] md:w-auto lg:w-auto md:text-justify justify-self-end"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
};

export default Divider;
