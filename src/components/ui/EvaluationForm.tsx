import React from 'react';

import StarRating from '@/components/ui/StarRating';
const EvaluationForm = () => {
  return (
    <div className="grid gap-4 text-background font-black">
      <div>
        <p className="text-center w-[47rem] flex-wrap">
          We sincerely appreciate your participation in our study. As we strive
          for continuous improvement, your valuable feedback on the recipes
          tried is essential. Please input the details below
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <h2> Contact Number: </h2>
          <input type="text" placeholder="Enter your phone number" />
        </div>
        <div>
          <h2> How many years have you been cooking? </h2>
          <input
            type="text"
            placeholder="Input how many years have you been cooking"
          />
        </div>
      </div>

      <p className="text-center w-[45rem] flex-wrap">
        Kindly evaluate the generated recipes using a 1 to 5 rating scale, with
        1 being the lowest and 5 being the highest. Consider the provided
        questions while rating each recipe.
      </p>

      <div>
        <h2> How easy was the recipe to follow? (Clarity) </h2>
        <StarRating />
        <h2>
          How creative or inventive is the recipe generated from the
          user-inputted ingredients? (Creativity/Novelty)
        </h2>
        <StarRating />
      </div>

      <div>
        <h2>
          How well does the generated recipe suit the your provided ingredients?
          (Suitability)
        </h2>
        <StarRating />

        <h2>
          How doable and edible does the recipe appear to be based on your
          inputted ingredients and the generated recipe? (Doability and
          Edibility)
        </h2>
        <StarRating />
      </div>

      <div>
        <h2>
          How likely are you to try the recipe generated from your inputted
          ingredients? (Likelihood to Try)
        </h2>
        <StarRating />

        <h2>
          How would you rate the overall quality of the recipe generated from
          your inputted ingredients? (Overall Recipe Quality)
        </h2>
        <StarRating />
      </div>
    </div>
  );
};

export default EvaluationForm;
