'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

import type { OutputType } from 'lib/types/outputType';

type RecipeProviderProps = {
  children: ReactNode;
};

type RecipeContextType = {
  changeOutput: (newOutput: OutputType) => void;
  output: OutputType;
};

const defaultOutput: OutputType = {
  title: '',
  ingredients: [''],
  instructions: [''],
  ner_tags: [''],
};

const RecipeContext = createContext<RecipeContextType>({
  output: defaultOutput,
  changeOutput: () => {},
});

export const useRecipe = () => {
  return useContext(RecipeContext);
};

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [output, setOutput] = useState(defaultOutput);

  const changeOutput = (newOutput: OutputType) => {
    setOutput(newOutput);
  };

  const contextValue: RecipeContextType = {
    output,
    changeOutput,
  };

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
};
