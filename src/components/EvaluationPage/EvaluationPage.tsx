import React from 'react';

import type { PassingOutputType } from 'lib/types/passingOutputType';

import RecipeSection from '@/components/EvaluationPage/RecipeSection';
import EvaluationSection from '@/components/HomePage/EvaluationSection';

const EvaluationPage: React.FC<PassingOutputType> = ({
  output,
  inputOutput,
}) => {
  return (
    <>
      <RecipeSection output={output} />
      <EvaluationSection output={output} inputOutput={inputOutput} />
    </>
  );
};

export default EvaluationPage;
