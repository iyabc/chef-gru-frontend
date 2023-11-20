import React from 'react';

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
      <p> hello </p>
      <EvaluationForm />
    </section>
  );
};

export default EvaluationSection;
