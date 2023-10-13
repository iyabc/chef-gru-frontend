import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import BERTLogo from 'public/images/BERT Logo.png';

import {
  firstQuickVerticalFadeInVariants,
  secondQuickVerticalFadeInVariants,
  thirdQuickVerticalFadeInVariants,
} from '@/animations/fadeIn';
import MainButton from '@/components/ui/MainButton';

type HeroSectionProps = {
  handleExploreButtonClick: () => void;
};

const HeroSection: FC<HeroSectionProps> = ({ handleExploreButtonClick }) => {
  return (
    <div className="container text-center lg:text-start grid grid-cols-1 lg:grid-cols-2">
      <div className="order-last lg:order-first w-fit">
        <motion.div
          variants={firstQuickVerticalFadeInVariants}
          initial="initial"
          animate="animate"
        >
          <h1 className="font-rightGroteskCompactBlack mb-4 mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Don&apos;t know what to cook?
          </h1>
        </motion.div>
        <motion.div
          variants={secondQuickVerticalFadeInVariants}
          initial="initial"
          animate="animate"
        >
          <p className="text-sm sm:text-base">
            Let <span className="font-bold">CHEF L-BERT</span> do the thinking!
            Just input your ingredients and we&apos;ll try and provide you with
            a recipe to follow.
          </p>
        </motion.div>

        <motion.div
          variants={thirdQuickVerticalFadeInVariants}
          initial="initial"
          animate="animate"
          className="mt-5 sm:mt-10 flex justify-center lg:justify-start"
        >
          <MainButton
            text="Explore"
            variant="secondary-outlined"
            isButton={true}
            handleOnClick={handleExploreButtonClick}
          />
        </motion.div>
      </div>
      <motion.div
        variants={secondQuickVerticalFadeInVariants}
        initial="initial"
        animate="animate"
        className="relative h-full w-full order-first lg:order-last"
      >
        <Image
          src={BERTLogo}
          alt="BERTLogo"
          className="object-contain w-full h-full absolute"
          draggable={false}
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
