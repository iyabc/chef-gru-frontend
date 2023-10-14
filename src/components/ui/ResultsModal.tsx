import React from 'react';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import extract_sections from '@/components/ui/RecipeUtils';
import { recipeString } from '@/data/sampleData';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface RecipeModalProps {
  onClose: () => void;
}

const ResultsModal: React.FC<RecipeModalProps> = ({ onClose }) => {
  const [recipeData, setRecipeData] = useState<any>({});

  useEffect(() => {
    const generated_recipes_raw = recipeString;
    const generated_recipe_data = extract_sections(generated_recipes_raw);
    setRecipeData(generated_recipe_data);
  }, [recipeString]);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content className="fixed inset-0 flex items-center justify-center bg-background rounded-lg m-5 sm:m-10 md:m-10 lg:m-20">
        <div className="container flex flex-col items-center w-full max-w-[70rem] max-h-[50rem] my-16">
          <div className="text-center mb-4">
            <p className="text-primary font-black text-xs sm:text-sm md:text-base lg:text-lg">
              CHEF L-BERT
            </p>
            <h1 className="uppercase font-rightGroteskCompactBlack text-3xl sm:text-4xl lg:text-5xl">
              {recipeData.title}
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="bg-accent p-5 overflow-y-auto h-60 sm:h-full">
              <h2 className="uppercase font-rightGroteskCompactBlack text-xl sm:text-2xl mb-2">
                Ingredients:
              </h2>
              <div>
                <ul className="ml-5 list-disc">
                  {recipeData.ingredients?.map(
                    (ingredient: string, index: number) => (
                      <li key={index}>{ingredient}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="bg-accent p-5 overflow-y-auto h-60 sm:h-full">
              <h2 className="uppercase font-rightGroteskCompactBlack text-xl sm:text-2xl mb-2">
                Instructions:
              </h2>
              <ul className="ml-5 list-decimal">
                {recipeData.instructions?.map(
                  (instruction: string, index: number) => (
                    <li key={index}>{instruction}</li>
                  )
                )}
              </ul>
            </div>
          </div>
          <Dialog.Close>
            <AiOutlineCloseCircle
              onClick={onClose}
              className="absolute top-[1rem] right-[1rem] inline-flex h-[25px] w-[25px] hover:-translate-y-0.5 transition duration-100 ease-out active:ease-in"
              aria-label="Close"
            />
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default ResultsModal;
