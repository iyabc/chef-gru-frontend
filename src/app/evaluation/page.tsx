'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import type { OutputType } from 'lib/types/outputType';

import EvaluationPage from '@/components/EvaluationPage/EvaluationPage';
import { useRecipe } from '@/contexts/RecipeContext';
import { useInputOutput } from '@/contexts/InputOutputContext';

const defaultOutput: OutputType = {
  title: 'TAHINI DIP',
  ingredients: [
    '1 teaspoon vanilla extract',
    '1/2 cup chopped onion',
    '1/4 cup tahini',
  ],
  instructions: [
    'In a small bowl, mix together the vanilla, onion, and tahini.',
    'Add the tahini and mix well.',
    'Add the remaining ingredients and mix well.',
    'Serve immediately.',
  ],
  ner_tags: [''],
};

const page = () => {
  const { output } = useRecipe();
  const { inputOutput } = useInputOutput();
  const router = useRouter();

  console.log(inputOutput);

  useEffect(() => {
    if (
      output.title === '' &&
      inputOutput.input === '' &&
      inputOutput.output === ''
    ) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <EvaluationPage output={output} inputOutput={inputOutput} />
    </>
  );
};

export default page;
