import React, { useState } from 'react';

import MainButton from '@/components/ui/MainButton';
import StarRating from '@/components/ui/StarRating';
import { PassingOutputType } from 'lib/types/passingOutputType';
import { getEvaluation } from '@/utils/apiUtils';
import { EvaluatorType } from 'lib/types/evaluatorType';
import { useInputOutput } from '@/contexts/InputOutputContext';
import { useRouter } from 'next/navigation';
import * as Toast from '@radix-ui/react-toast';
import { AiFillCloseCircle, AiOutlineClose } from 'react-icons/ai';

type EvalQuestionType = {
  type: string;
  question: string;
};

const evalQuestions: EvalQuestionType[] = [
  {
    type: 'clarityRating',
    question: 'How easy was the recipe to follow?',
  },
  {
    type: 'suitabilityRating',
    question:
      'How well does the generated recipe suit the your provided ingredients?',
  },
  {
    type: 'creativityRating',
    question:
      'How creative or inventive is the recipe generated from the user-inputted ingredients?',
  },
  {
    type: 'doabilityRating',
    question:
      'How doable and edible does the recipe appear to be based on your inputted ingredients and the generated recipe?',
  },
  {
    type: 'likelihoodToTryRating',
    question:
      'How likely are you to try the recipe generated from your inputted ingredients? ',
  },
  {
    type: 'overallQualityRating',
    question:
      'How would you rate the overall quality of the recipe generated from your inputted ingredients?',
  },
];

const EvaluationForm: React.FC<PassingOutputType> = ({ inputOutput }) => {
  const router = useRouter();

  const [toastMessage, setToastMessage] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const [errorInput, setErrorInput] = useState(false);

  const [contactNumber, setContactNumber] = useState('');
  const [cookingYears, setCookingYears] = useState('');
  const [clarityRating, setClarityRating] = useState(0);
  const [creativityRating, setCreativityRating] = useState(0);
  const [suitabilityRating, setSuitabilityRating] = useState(0);
  const [doabilityRating, setDoabilityRating] = useState(0);
  const [likelihoodToTryRating, setLikelihoodToTryRating] = useState(0);
  const [overallQualityRating, setOverallQualityRating] = useState(0);

  const handleContactNumberChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContactNumber(event.target.value);
  };

  const handleCookingYearsChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCookingYears(event.target.value);
  };

  const handleSubmit = async () => {
    if (cookingYears !== '') {
      setErrorInput(false);

      const data: EvaluatorType = {
        contact_number: contactNumber,
        years_experience: cookingYears,
        user_input: inputOutput?.input || '',
        recipe_output: inputOutput?.output || '',
        clarity_rating: clarityRating,
        creativity_rating: creativityRating,
        suitability_rating: suitabilityRating,
        doability_rating: doabilityRating,
        likelihood_to_try_rating: likelihoodToTryRating,
        overall_rating: overallQualityRating,
      };

      const result = await getEvaluation(data);

      if (result) {
        setToastMessage('Submission successful! Thank you for your feedback.');
        setOpenToast(true);

        setIsSubmitSuccess(true);
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } else {
        setToastMessage('Submission failed, try again.');
        setOpenToast(true);
      }
    } else {
      setErrorInput(true);
      setToastMessage('Submission failed, check required fields.');
      setOpenToast(true);
    }
  };

  return (
    <div className="grid W-full gap-10 text-background font-black justify-items-center">
      <p className="text-center w-full lg:w-3/5 text-sm sm:text-base">
        We sincerely appreciate your participation in our study. As we strive
        for continuous improvement, your valuable feedback on the recipes tried
        is essential.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-space-between lg:items-end">
        <input
          type="number"
          id="first_name"
          className="bg-background text-sm text-black rounded-lg focus:ring-2 focus:ring-primary focus:primary block w-full p-2.5"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={handleContactNumberChange}
        />

        <input
          type="number"
          className={`${
            errorInput ? 'ring-[#e43838] bg-[#c031316b]' : 'bg-background'
          } bg-background text-sm text-black rounded-lg focus:ring-2 focus:ring-primary focus:primary block w-full p-2.5`}
          placeholder="Years of Cooking"
          value={cookingYears}
          onChange={handleCookingYearsChange}
        />
      </div>

      <p className="text-center w-full lg:w-3/5 text-sm sm:text-base">
        On a scale of <span className="text-primary">1 to 5</span>, with 1 being
        the lowest and 5 being the highest:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-4">
        {evalQuestions.map((question: EvalQuestionType, index: number) => (
          <div key={index} className="border border-accent p-5 rounded-lg">
            <p className="text-base mb-6">{question.question}</p>
            <StarRating
              value={
                question.type === 'clarityRating'
                  ? clarityRating
                  : question.type === 'creativityRating'
                  ? creativityRating
                  : question.type === 'suitabilityRating'
                  ? suitabilityRating
                  : question.type === 'doabilityRating'
                  ? doabilityRating
                  : question.type === 'likelihoodToTryRating'
                  ? likelihoodToTryRating
                  : question.type === 'overallQualityRating'
                  ? overallQualityRating
                  : 0
              }
              setValue={
                question.type === 'clarityRating'
                  ? setClarityRating
                  : question.type === 'creativityRating'
                  ? setCreativityRating
                  : question.type === 'suitabilityRating'
                  ? setSuitabilityRating
                  : question.type === 'doabilityRating'
                  ? setDoabilityRating
                  : question.type === 'likelihoodToTryRating'
                  ? setLikelihoodToTryRating
                  : question.type === 'overallQualityRating'
                  ? setOverallQualityRating
                  : () => {}
              }
            />
          </div>
        ))}
      </div>

      <MainButton
        text="SUBMIT"
        variant="primary-outlined"
        isDisabled={isSubmitSuccess}
        isButton={true}
        handleOnClick={handleSubmit}
      />

      <Toast.Root
        className={`${
          toastMessage.includes('failed') ? 'bg-[#c03131]' : 'bg-[#318631]'
        } fixed bottom-0 right-0 py-4 px-5 m-5 rounded-lg flex`}
        open={openToast}
        onOpenChange={setOpenToast}
      >
        <Toast.Description>{toastMessage}</Toast.Description>
        <Toast.Action className="ToastAction" asChild altText="Close">
          <button className="ms-2">
            <AiFillCloseCircle />
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </div>
  );
};

export default EvaluationForm;
