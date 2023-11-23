import type { PassingOutputType } from 'lib/types/passingOutputType';

import EvaluationForm from '@/components/ui/EvaluationForm';
import MainButton from '@/components/ui/MainButton';
import TitleHeader from '@/components/ui/TitleHeader';

const EvaluationSection: React.FC<PassingOutputType> = ({ inputOutput }) => {
  return (
    <section className="bg-black py-10">
      <div className="container">
        <TitleHeader text="Evaluating The Recipe" textColor="white">
          <MainButton
            text="How was it?"
            variant="black-white-outlined"
            isButton={false}
          />
        </TitleHeader>
        <EvaluationForm inputOutput={inputOutput} />
      </div>
    </section>
  );
};

export default EvaluationSection;
