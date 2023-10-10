import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const dividerVariants = cva(['w-full h-fit flex justify-center items-center'], {
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
  return (
    <div className={dividerVariants({ color })}>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white pl-[2rem] pr-[2rem] py-[4rem] md:pl-[2.56rem] md:pr-[3.25rem] md:py-[4rem] lg:pl-[6.94rem] lg:pr-[4.25rem] lg:py-[4.19rem]  w-full gap-4 md:gap-[5.5rem] lg:gap-[14.25rem]">
        <h1 className="flex uppercase flex-wrap font-rightGroteskCompactBlack font-900 md:text-left text-[1.5rem] md:text-[2rem] md:w-[20rem] lg:w-[24rem]">
          {title}
        </h1>
        <p className="flex flex-wrap font-light text-[1.125rem] md:w-auto lg:w-auto md:text-justify justify-self-end">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Divider;
