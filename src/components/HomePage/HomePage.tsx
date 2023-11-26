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
import EvaluationForm from '@/components/ui/EvaluationForm';
import EvaluationSection from './EvaluationSection';
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
        title="Who is Chef GRU?"
        text="Chef GRU is a sequence-to-sequence BiGRU model featuring an attention mechanism. This study delves into the intricacies of recipe generation tasks on RNN-based neural networks, specifically LSTM and BiGRU, aiming to elevate your culinary journey and revolutionize recipe creation!"
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
