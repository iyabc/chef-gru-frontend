import type { FC } from 'react';

type ButtonProps = {
  text: string;
};

const MainButton: FC<ButtonProps> = ({ text }) => {
  return (
    <div className="bg-orange-500 py-2 px-8 rounded-full hover:scale-95 duration-300 ease-in-out cursor-pointer">
      <p className="text-xl capitalize font-bold">{text}</p>
    </div>
  );
};

export default MainButton;
