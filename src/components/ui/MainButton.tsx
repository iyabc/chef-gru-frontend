import type { FC } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  [
    'w-fit h-fit border-[3px] py-2 px-8 rounded-full hover:scale-95 duration-300 ease-in-out cursor-pointer',
  ],
  {
    variants: {
      variant: {
        'primary-outlined': 'bg-primary border-black text-white',
        'primary-white-outlined':
          'bg-primary border-background text-background',
        'secondary-outlined': 'bg-secondary border-primary text-primary',
      },
    },
  }
);

type ButtonProps = {
  text: string;
  variant: string;
} & VariantProps<typeof buttonVariants>;

const MainButton: FC<ButtonProps> = ({ text, variant }) => {
  return (
    <div className={buttonVariants({ variant })}>
      <p className="capitalize font-bold text-sm md:text-base lg:text-lg">
        {text}
      </p>
    </div>
  );
};

export default MainButton;
