import React, { useRef, useState } from 'react';
import type { MultiValue } from 'react-select';

import { motion, useInView } from 'framer-motion';
import type { NERType } from 'lib/types/nerType';

import IngredientsDropdownMenu from '@/components/ui/IngredientsDropdownMenu';
import MainButton from '@/components/ui/MainButton';
import { firstSlowFadeInVariants } from '@/animations/fadeIn';

const buttonVariant = {
  bounce: {
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      duration: 1,
    },
  },
  initial: {
    y: 0,
  },
};

const ModelSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [selectedNERs, setSelectedNERs] = useState<NERType[]>([]);

  const buttonRef = useRef(null);
  const titleRef = useRef(null);
  const isButtonInView = useInView(buttonRef);
  const isTitleInView = useInView(titleRef);

  const handleIngredientsChange = (selectedValues: MultiValue<NERType>) => {
    setSelectedNERs(selectedValues as NERType[]);
  };

  const handleGenerateButtonOnClick = () => {
    // handle selectedNERs here
  };

  return (
    <section
      className="container h-screen flex flex-col justify-center items-center"
      ref={ref}
    >
      <motion.div
        variants={firstSlowFadeInVariants}
        initial="initial"
        animate={isTitleInView && 'animate'}
        className="text-center"
        ref={titleRef}
      >
        <h2 className="font-rightGroteskCompactBlack text-4xl xsm:text-5xl sm:text-6xl lg:text-8xl mb-4">
          Give it a try!
        </h2>
        <p className="text-sm md:text-lg">
          Just select your ingredients and{' '}
          <span className="font-bold">CHEF L-BERT</span> will try and generate a
          recipe, just for you.
        </p>
      </motion.div>
      <div className="w-full my-10 md:my-20">
        <IngredientsDropdownMenu
          selectedValues={selectedNERs}
          onValuesChange={handleIngredientsChange}
        />
      </div>
      <motion.div
        ref={buttonRef}
        initial="initial"
        animate={isButtonInView ? 'bounce' : 'initial'}
        variants={buttonVariant}
      >
        <MainButton
          text="Generate"
          variant="secondary-outlined"
          isButton={true}
          handleOnClick={handleGenerateButtonOnClick}
        />
      </motion.div>
    </section>
  );
});

ModelSection.displayName = 'ModelSection';

export default ModelSection;
