'use client';

import { useRef } from 'react';

import HeroSection from '@/components/HomePage/HeroSection';
import ModelSection from '@/components/HomePage/ModelSection';
import NavigationBar from '@/components/ui/NavigationBar';
import TitleHeader from '../ui/TitleHeader';
import MainButton from '../ui/MainButton';

const HomePage = () => {
  const sectionsRef = useRef(null);
  const modelSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToModelSection = () => {
    modelSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <HeroSection handleExploreButtonClick={scrollToModelSection} />
      <div>
        <NavigationBar sectionRef={sectionsRef} />
        <div ref={sectionsRef}>
          <ModelSection ref={modelSectionRef} />
          <section className="h-screen bg-primary py-32">
            <TitleHeader text="Project Details" textColor="white">
              <MainButton
                text="What we did"
                variant="primary-white-outlined"
                isButton={false}
              />
            </TitleHeader>
          </section>
          <section className="h-screen bg-background py-32">
            <TitleHeader text="Team Members" textColor="black">
              <MainButton
                text="Who we are"
                variant="primary-outlined"
                isButton={false}
              />
            </TitleHeader>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
