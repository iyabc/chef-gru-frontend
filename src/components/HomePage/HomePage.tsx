'use client';

import { useRef } from 'react';

import HeroSection from '@/components/HomePage/HeroSection';
import ModelSection from '@/components/HomePage/ModelSection';
import NavigationBar from '@/components/ui/NavigationBar';

import Divider from '@/components/ui/Divider';
import DeveloperSection from '@/components/HomePage/DeveloperSection';
import Footer from '@/components/ui/Footer';
import ProjectDetailSection from '@/components/HomePage/ProjectDetailSection';
const HomePage = () => {
  const sectionsRef = useRef(null);
  const modelSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToModelSection = () => {
    modelSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <HeroSection handleExploreButtonClick={scrollToModelSection} />
      <Divider
        title="GENERATE NOVEL RECIPES WITH THE TOUCH OF YOUR HAND"
        text="Elevate Your Cooking Game with Novel Recipes at Your Fingertips! Harness the Power of Artificial Intelligence to Craft Unique Dishes Tailored to Your Taste Buds. Experience a Revolution in Recipe Generation!"
        color="Yellow"
      />
      <div className="w-full">
        <NavigationBar sectionRef={sectionsRef} />
        <div ref={sectionsRef}>
          <ModelSection ref={modelSectionRef} />
          <Divider
            title="Recipe Generation: Unveiling the Process"
            text="Explore our project's journey from data prep to model training, unveiling the magic of generating unique recipes. Witness how our AI crafts delectable dishes, putting culinary creativity at your fingertips!"
            color="Black"
          />
          <ProjectDetailSection />
          <DeveloperSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
