'use client';

import { useState } from 'react';
import type { MultiValue } from 'react-select';

import type { NERType } from 'lib/types/nerType';

import IngredientsDropdownMenu from '@/components/ui/IngredientsDropdownMenu';
import MainButton from '@/components/ui/MainButton';

const HomePage = () => {
  const [selectedNERs, setSelectedNERs] = useState<NERType[]>([]);

  const handleValuesChange = (selectedValues: MultiValue<NERType>) => {
    setSelectedNERs(selectedValues as NERType[]);
  };
  return (
    <div className="container h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-3xl font-bold">CHEF L-BERT</h1>
      </div>
      <IngredientsDropdownMenu
        selectedValues={selectedNERs}
        onValuesChange={handleValuesChange}
      />
      <MainButton text="Generate" />
    </div>
  );
};

export default HomePage;
