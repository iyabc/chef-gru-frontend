import React, { useState } from 'react';

import MainButton from '@/components/ui/MainButton';
import StarRating from '@/components/ui/StarRating';
const EvaluationForm = () => {
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

  return (
    <div className="grid W-full gap-10 text-background font-black justify-items-center">
      <div className="w-full">
        <p className="text-center mx-auto w-[47rem] flex-wrap">
          We sincerely appreciate your participation in our study. As we strive
          for continuous improvement, your valuable feedback on the recipes
          tried is essential. Please input the details below
        </p>
      </div>

      <div className="grid grid-cols-2 justify-space-between">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm">
            Contact Number:
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-background border text-sm text-black rounded-lg focus:ring-primary focus:primary block w-full p-2.5"
            placeholder="09684408000"
            value={contactNumber}
            onChange={handleContactNumberChange}
            required
          />
        </div>

        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm ">
            How Many Years Have You Been Cooking?
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-background border text-sm rounded-lg focus:ring-primary focus:primary block w-full p-2.5"
            placeholder="4"
            value={cookingYears}
            onChange={handleCookingYearsChange}
            required
          />
        </div>
      </div>

      <div className="w-full">
        <p className="text-center mx-auto w-[47rem] flex-wrap">
          Kindly evaluate the generated recipes using a 1 to 5 rating scale,
          with 1 being the lowest and 5 being the highest. Consider the provided
          questions while rating each recipe.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mx-60">
        <div>
          <p className="text-[1rem]">
            How easy was the recipe to follow? (Clarity)
          </p>
          <StarRating value={clarityRating} setValue={setClarityRating} />
        </div>

        <div>
          <p className="text-[1rem]">
            How creative or inventive is the recipe generated from the
            user-inputted ingredients? (Creativity/Novelty)
          </p>
          <StarRating value={creativityRating} setValue={setCreativityRating} />
        </div>

        <div>
          <p className="text-[1rem]">
            How well does the generated recipe suit the your provided
            ingredients? (Suitability)
          </p>
          <StarRating
            value={suitabilityRating}
            setValue={setSuitabilityRating}
          />
        </div>

        <div>
          <p className="text-[1rem]">
            How doable and edible does the recipe appear to be based on your
            inputted ingredients and the generated recipe? (Doability and
            Edibility)
          </p>
          <StarRating value={doabilityRating} setValue={setDoabilityRating} />
        </div>

        <div>
          <p className="text-[1rem]">
            How likely are you to try the recipe generated from your inputted
            ingredients? (Likelihood to Try)
          </p>
          <StarRating
            value={likelihoodToTryRating}
            setValue={setLikelihoodToTryRating}
          />
        </div>

        <div>
          <p className="text-[1rem]">
            How would you rate the overall quality of the recipe generated from
            your inputted ingredients? (Overall Recipe Quality)
          </p>
          <StarRating
            value={overallQualityRating}
            setValue={setOverallQualityRating}
          />
        </div>
      </div>
      <MainButton
        text="SUBMIT"
        variant="primary-outlined"
        isButton={true}
        // handleOnClick={}
      />
    </div>
  );
};

export default EvaluationForm;
