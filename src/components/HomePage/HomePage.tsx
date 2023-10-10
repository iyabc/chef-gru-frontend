'use client';

import { useRef } from 'react';

import HeroSection from '@/components/HomePage/HeroSection';
import MainButton from '@/components/ui/MainButton';
import NavigationBar from '@/components/ui/NavigationBar';

const HomePage = () => {
  const sectionsRef = useRef(null);

  return (
    <div className="w-full">
      <HeroSection />
      <div>
        <NavigationBar sectionRef={sectionsRef} />
        <div ref={sectionsRef}>
          {/* insert sections here */}
          <section className="bg-primary h-screen flex justify-center items-center flex-col space-y-2">
            Buttons
            <MainButton text="Generate" variant="secondary-outlined" />
            <MainButton text="Generate" variant="primary-outlined" />
            <MainButton text="Generate" variant="primary-white-outlined" />
          </section>
          <section className="bg-accent h-screen">Section</section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
