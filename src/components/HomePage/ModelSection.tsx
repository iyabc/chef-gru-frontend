import React, { useState } from 'react';
import type { MultiValue } from 'react-select';

import type { NERType } from 'lib/types/nerType';

import IngredientsDropdownMenu from '@/components/ui/IngredientsDropdownMenu';
import MainButton from '@/components/ui/MainButton';

const ModelSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [selectedNERs, setSelectedNERs] = useState<NERType[]>([]);

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
      <div className="text-center">
        <h2 className="font-rightGroteskCompactBlack text-4xl xsm:text-5xl sm:text-6xl lg:text-8xl mb-4">
          Give it a try!
        </h2>
        <p className="text-sm md:text-lg">
          Just select your ingredients and CHEF L-BERT will try and generate a
          recipe, just for you.
        </p>
      </div>
      <div className="w-full my-10 md:my-20">
        <IngredientsDropdownMenu
          selectedValues={selectedNERs}
          onValuesChange={handleIngredientsChange}
        />
      </div>
      <MainButton
        text="Generate"
        variant="secondary-outlined"
        handleOnClick={handleGenerateButtonOnClick}
      />
    </section>
  );
});

ModelSection.displayName = 'ModelSection';

export default ModelSection;
