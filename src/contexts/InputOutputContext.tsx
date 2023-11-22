'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

import type { InputOutputType } from 'lib/types/inputOutputType';

type InputOutputProviderProps = {
  children: ReactNode;
};

type InputOutputContextType = {
  changeInputOutput: (newInputOutput: InputOutputType) => void;
  inputOutput: InputOutputType;
};

const defaultInputOutput: InputOutputType = {
  input: '',
  output: '',
};

const InputOutputContext = createContext<InputOutputContextType>({
  inputOutput: defaultInputOutput,
  changeInputOutput: () => {},
});

export const useInputOutput = () => {
  return useContext(InputOutputContext);
};

export const InputOutputProvider: React.FC<InputOutputProviderProps> = ({
  children,
}) => {
  const [inputOutput, setInputOutput] = useState(defaultInputOutput);

  const changeInputOutput = (newInputOutput: InputOutputType) => {
    setInputOutput(newInputOutput);
  };

  const contextValue: InputOutputContextType = {
    inputOutput,
    changeInputOutput,
  };

  return (
    <InputOutputContext.Provider value={contextValue}>
      {children}
    </InputOutputContext.Provider>
  );
};
