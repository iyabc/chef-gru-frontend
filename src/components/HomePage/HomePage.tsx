'use client';

import { useRef, useState } from 'react';
import type { MultiValue } from 'react-select';

import type { NERType } from 'lib/types/nerType';

import IngredientsDropdownMenu from '@/components/ui/IngredientsDropdownMenu';
import MainButton from '@/components/ui/MainButton';
import NavigationBar from '@/components/ui/NavigationBar';

const HomePage = () => {
  const sectionsRef = useRef(null);
  const [selectedNERs, setSelectedNERs] = useState<NERType[]>([]);

  const handleValuesChange = (selectedValues: MultiValue<NERType>) => {
    setSelectedNERs(selectedValues as NERType[]);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center space-y-8 h-screen">
        <h1 className="text-3xl font-bold">CHEF L-BERT</h1>
        <IngredientsDropdownMenu
          selectedValues={selectedNERs}
          onValuesChange={handleValuesChange}
        />
        <MainButton text="Generate" />
      </div>
      <div>
        <NavigationBar sectionRef={sectionsRef} />
        <div ref={sectionsRef}>
          {/* insert sections here */}
          <section className="bg-primary h-screen">Section</section>
          <section className="bg-accent h-screen">Section</section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
