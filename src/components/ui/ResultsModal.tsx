import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Image from 'next/image';

import imgSrc from 'public/images/pan.gif';

type RecipeModalProps = {
  onClose: () => void;
  title: string;
  ingredients: string[];
  instructions: string[];
  loading: boolean;
  children: React.ReactNode;
};

const ResultsModal: React.FC<RecipeModalProps> = ({
  onClose,
  title,
  ingredients,
  instructions,
  loading,
  children,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[99]" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center bg-background rounded-lg m-5 sm:m-10 md:m-10 lg:m-20 z-[100]">
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold text-sm sm:text-base lg:text-lg">
                Generating your recipe...
              </p>
              <div className="relative w-40 h-40">
                <Image
                  src={imgSrc}
                  alt="Pan Animation"
                  className="object-contain w-full h-full"
                  fill
                />
              </div>
            </div>
          ) : (
            <div className="container flex flex-col items-center w-full max-w-[70rem] max-h-[50rem] my-16">
              <div className="text-center mb-4">
                <p className="text-primary font-black text-xs sm:text-sm md:text-base lg:text-lg">
                  CHEF L-BERT
                </p>
                <h1 className="uppercase font-rightGroteskCompactBlack text-3xl sm:text-4xl lg:text-5xl">
                  {title}
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="bg-accent p-5 overflow-y-auto h-60 sm:h-full">
                  <h2 className="uppercase font-rightGroteskCompactBlack text-xl sm:text-2xl mb-2">
                    Ingredients:
                  </h2>
                  <div>
                    <ul className="ml-5 list-disc">
                      {ingredients?.map((ingredient: string, index: number) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-accent p-5 overflow-y-auto h-60 sm:h-full">
                  <h2 className="uppercase font-rightGroteskCompactBlack text-xl sm:text-2xl mb-2">
                    Instructions:
                  </h2>
                  <ul className="ml-5 list-decimal">
                    {instructions?.map((instruction: string, index: number) => (
                      <li key={index}>{instruction}</li>
                    ))}
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
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ResultsModal;
