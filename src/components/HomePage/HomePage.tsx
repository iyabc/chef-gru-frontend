'use client';

import { useRef } from 'react';

import HeroSection from '@/components/HomePage/HeroSection';
import ModelSection from '@/components/HomePage/ModelSection';
import NavigationBar from '@/components/ui/NavigationBar';

const HomePage = () => {
  const sectionsRef = useRef(null);

  return (
    <div className="w-full">
      <HeroSection />
      <div>
        <NavigationBar sectionRef={sectionsRef} />
        <div ref={sectionsRef}>
          <ModelSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
