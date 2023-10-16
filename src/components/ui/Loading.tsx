import type { FC } from 'react';
import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type LoadingProps = {
  imageSrc: StaticImageData;
  text: string;
};

const Loading: FC<LoadingProps> = ({ text, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-semibold text-sm sm:text-base lg:text-lg">{text}</p>
      <div className="relative w-40 h-40">
        <Image
          src={imageSrc}
          alt="Pan Animation"
          className="object-contain w-full h-full"
          fill
        />
      </div>
    </div>
  );
};

export default Loading;
