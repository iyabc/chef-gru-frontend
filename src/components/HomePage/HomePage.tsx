'use client';

import { useRef } from 'react';
import HeroSection from '@/components/HomePage/HeroSection';
import ModelSection from '@/components/HomePage/ModelSection';
import NavigationBar from '@/components/ui/NavigationBar';
import Divider from '@/components/ui/Divider';
import DeveloperSection from '@/components/HomePage/DeveloperSection';
import Footer from '@/components/ui/Footer';
import ProjectDetailSection from '@/components/HomePage/ProjectDetailSection';
import SectionUI from '@/components/ui/SectionUI';

const HomePage = () => {
  const sectionsRef = useRef(null);
  const modelSectionRef = useRef<HTMLDivElement>(null);

  const scrollToModelSection = () => {
    modelSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <NavigationBar viewRef={sectionsRef} />
      <SectionUI background="background">
        <HeroSection handleExploreButtonClick={scrollToModelSection} />
      </SectionUI>
      <Divider
        title="GENERATE NOVEL RECIPES WITH THE TOUCH OF YOUR HAND"
        text="Elevate your cooking game with novel recipes at your fingertips! Harness the power of artificial intelligence to craft unique dishes tailored to your taste buds. Experience a revolution in recipe reneration!"
        color="Yellow"
      />
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
      <Footer />
    </main>
  );
};

export default HomePage;
