import React from 'react';

import RecipeSection from '@/components/HomePage/RecipeSection';
import EvaluationForm from '@/components/ui/EvaluationForm';
import MainButton from '@/components/ui/MainButton';
import TitleHeader from '@/components/ui/TitleHeader';

const EvaluationSection = () => {
  return (
    <section className="bg-black py-32">
      <TitleHeader text="Evaluating The Recipe" textColor="white">
        <MainButton
          text="How was it?"
          variant="black-white-outlined"
          isButton={false}
        />
      </TitleHeader>
      <RecipeSection />
      <EvaluationForm />
    </section>
  );
};

export default EvaluationSection;
