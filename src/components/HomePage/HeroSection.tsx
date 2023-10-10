import React from 'react';
import Image from 'next/image';

import BERTLogo from 'public/images/BERT Logo.png';

import MainButton from '@/components/ui/MainButton';

type HeroSectionProps = {
  handleExploreButtonClick: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  handleExploreButtonClick,
}) => {
  return (
    <section className="container py-10 flex flex-col lg:flex-row justify-center items-center lg:grid-cols-2 h-screen text-center lg:text-start">
      <div className="order-last lg:order-firs w-fit">
        <div>
          <h1 className="font-rightGroteskCompactBlack mb-4 mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Don&apos;t know what to cook?
          </h1>
          <p className="text-sm sm:text-base">
            Let <span className="font-bold">CHEF L-BERT</span> do the thinking!
            Just input your ingredients and we&apos;ll try and provide you with
            a recipe to follow.
          </p>
        </div>
        <div className="mt-5 sm:mt-10 flex justify-center lg:justify-start">
          <MainButton
            text="Explore"
            variant="secondary-outlined"
            handleOnClick={handleExploreButtonClick}
          />
        </div>
      </div>
      <div className="relative h-1/2 w-full lg:h-4/5 order-first lg:order-last">
        <Image
          src={BERTLogo}
          alt="BERTLogo"
          className="object-contain w-full h-full absolute top-0 left-0"
          draggable={false}
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default HeroSection;
