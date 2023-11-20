import type { FC } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  ['w-fit h-fit border-[3px] py-2 px-8 rounded-full'],
  {
    variants: {
      variant: {
        'primary-outlined': 'bg-primary border-black text-white',
        'black-white-outlined': 'bg-black border-background text-background',
        'primary-white-outlined':
          'bg-primary border-background text-background',
        'secondary-outlined': 'bg-secondary border-primary text-primary',
      },
      isButton: {
        true: 'hover:scale-95 duration-300 ease-in-out cursor-pointer',
        false: 'cursor-default uppercase',
      },
      isDisabled: {
        true: 'bg-primary grayscale',
      },
    },
  }
);

type ButtonProps = {
  isButton: boolean;
  text: string;
  variant: string;
  handleOnClick?: () => void;
  isDisabled?: boolean;
} & VariantProps<typeof buttonVariants>;

const MainButton: FC<ButtonProps> = ({
  text,
  variant,
  isButton,
  isDisabled,
  handleOnClick,
}) => {
  return (
    <button
      className={buttonVariants({ variant, isButton, isDisabled })}
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      <p className="font-black text-xs sm:text-sm md:text-base lg:text-lg">
        {text}
      </p>
    </button>
  );
};

export default MainButton;
