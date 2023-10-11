'use client';

import { useRef } from 'react';

import HeroSection from '@/components/HomePage/HeroSection';
import ModelSection from '@/components/HomePage/ModelSection';
import NavigationBar from '@/components/ui/NavigationBar';
import TitleHeader from '../ui/TitleHeader';
import MainButton from '../ui/MainButton';
import { projectDetails } from '@/data/projectDetailsData';
import { ProjectDetailsType } from 'lib/types/projectDetailsType';
import ProjectDetailCard from '../ui/ProjectDetailCard';
import Divider from '../ui/Divider';
import type { DeveloperType } from 'lib/types/developerType';
import ProjectDetailSection from './ProjectDetailSection';
import DeveloperCard from '@/components/ui/DeveloperCard';
import { Developers } from '@/data/developersData';
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
      <div>
        <NavigationBar sectionRef={sectionsRef} />
        <div ref={sectionsRef}>
          <ModelSection ref={modelSectionRef} />
          <Divider
        title="Recipe Generation: Unveiling the Process"
        text="Explore our project's journey from data prep to model training, unveiling the magic of generating unique recipes. Witness how our AI crafts delectable dishes, putting culinary creativity at your fingertips!"
        color="Black"
      />
        <ProjectDetailSection/>
        
          <section className="h-screen bg-background py-32">
            <TitleHeader text="Team Members" textColor="black">
              <MainButton
                text="Who we are"
                variant="primary-outlined"
                isButton={false}
              />
            </TitleHeader>
            <div className="flex flex-col justify-center lg:flex-row">
              {Developers.map((developer: DeveloperType, index: number) => {
                return (
                  <div key={index}>
                    <DeveloperCard developer={developer} />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
