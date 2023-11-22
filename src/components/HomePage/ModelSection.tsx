import React, { useRef, useState } from 'react';
import type { MultiValue } from 'react-select';
import { checkTargetForNewValues, m, motion, useInView } from 'framer-motion';
import type { NERType } from 'lib/types/nerType';
import ResultsModal from '@/components/ui/ResultsModal';
import IngredientsDropdownMenu from '@/components/ui/IngredientsDropdownMenu';
import MainButton from '@/components/ui/MainButton';
import { firstSlowFadeInVariants } from '@/animations/fadeIn';
import { getPrediction } from '@/utils/apiUtils';
import { extract_sections } from '@/utils/textUtils';
import { useRecipe } from '@/contexts/RecipeContext';
import { useInputOutput } from '@/contexts/InputOutputContext';
import { InputOutputType } from 'lib/types/inputOutputType';

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

const formatInput = (inputString: string) => {
  const match = inputString.match(/\[START\](.*?)\[END\]/);
  let items: string = '';

  if (match) {
    const content = match[1];

    items = content
      .split(/\[NER_NEXT\]/)
      .map((item) => item.trim())
      .toString();
  }

  return items;
};

const ModelSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [selectedNERs, setSelectedNERs] = useState<NERType[]>([]);
  const { output, changeOutput } = useRecipe();
  const { inputOutput, changeInputOutput } = useInputOutput();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const buttonRef = useRef(null);
  const titleRef = useRef(null);
  const isButtonInView = useInView(buttonRef);
  const isTitleInView = useInView(titleRef);

  const handleIngredientsChange = (selectedValues: MultiValue<NERType>) => {
    setSelectedNERs(selectedValues as NERType[]);
  };

  const handleGenerateButtonOnClick: any = async () => {
    let nerString = '[START]';
    selectedNERs.map((ner: NERType, index: number) => {
      if (index === selectedNERs.length - 1) {
        nerString += ` ${ner.value} [END]`;
      } else {
        nerString += ` ${ner.value} [NER_NEXT]`;
      }
    });

    setIsLoading(true);

    const result = await getPrediction(nerString);

    if (result.prediction || result.ok) {
      const cleanOutput = extract_sections(result.prediction);
      console.log('result: ', result);
      console.log('cleanOutput: ', cleanOutput);

      const cleanOutputString = JSON.stringify(cleanOutput);

      const inputOutputData: InputOutputType = {
        input: formatInput(nerString),
        output: cleanOutputString,
      };

      console.log('inputOutput: ', inputOutputData);

      changeOutput(cleanOutput);
      changeInputOutput(inputOutputData);

      console.log('after change inputOutput: ', inputOutput);
      setError(false);
    } else {
      setError(true);
    }

    setIsLoading(false);
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
          <span className="font-bold">Chef GRU</span> will try and generate a
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
        <ResultsModal
          onClose={handleCloseModal}
          title={output?.title}
          ingredients={output?.ingredients}
          instructions={output?.instructions}
          isError={isError}
          loading={isLoading}
        >
          <MainButton
            text="Generate"
            variant="secondary-outlined"
            isDisabled={selectedNERs.length < 3}
            isButton={true}
            handleOnClick={handleGenerateButtonOnClick}
          />
        </ResultsModal>
      </motion.div>
    </section>
  );
});

ModelSection.displayName = 'ModelSection';

export default ModelSection;
