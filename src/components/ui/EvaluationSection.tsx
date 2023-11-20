import React from 'react';

import MainButton from '@/components/ui/MainButton';
import TitleHeader from '@/components/ui/TitleHeader';

const EvaluationSection = () => {
  return (
    <section className="bg-primary py-32">
      <TitleHeader text="Evaluating The Recipe" textColor="white">
        <MainButton
          text="How was it?"
          variant="primary-white-outlined"
          isButton={false}
        />
      </TitleHeader>
      <p> hello </p>
    </section>
  );
};

export default EvaluationSection;
