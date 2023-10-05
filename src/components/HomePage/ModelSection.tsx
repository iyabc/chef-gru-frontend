'use client';

import React, { useState } from 'react';
import type { MultiValue } from 'react-select';

import type { NERType } from 'lib/types/nerType';

import IngredientsDropdownMenu from '@/components/HomePage/IngredientsDropdownMenu';
const ModelSection = () => {
  const [selectedNERs, setSelectedNERs] = useState<NERType[]>([]);

  const handleValuesChange = (selectedValues: MultiValue<NERType>) => {
    setSelectedNERs(selectedValues as NERType[]);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      Ingredients Dropdown Menu
      <div className="w-fit">
        <IngredientsDropdownMenu
          selectedValues={selectedNERs}
          onValuesChange={handleValuesChange}
        />
        SelectedNERs:
        {selectedNERs.map((ner: NERType, index: number) => {
          return <div key={index}>{ner.label}</div>;
        })}
      </div>
    </div>
  );
};

export default ModelSection;
