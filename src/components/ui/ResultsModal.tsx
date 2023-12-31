import React, { createContext } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Loading from '@/components/ui/Loading';

import imgSrc from 'public/images/pan.gif';
import MainButton from './MainButton';
import Link from 'next/link';

type RecipeModalProps = {
  onClose: () => void;
  title: string;
  ingredients: string[];
  instructions: string[];
  loading: boolean;
  isError: boolean;
  children: React.ReactNode;
};

const ResultsModal: React.FC<RecipeModalProps> = ({
  onClose,
  title,
  ingredients,
  instructions,
  loading,
  isError,
  children,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div>{children}</div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[99]" />
        <Dialog.Content className="fixed inset-0 flex flex-col items-center justify-center bg-background rounded-lg overflow-y-auto m-5 sm:m-10 md:m-10 lg:m-20 z-[100]">
          <Dialog.Close>
            <AiOutlineCloseCircle
              onClick={onClose}
              className="absolute top-0 right-0 m-1 inline-flex h-6 w-6 hover:-translate-y-0.5 transition duration-100 ease-out active:ease-in"
              aria-label="Close"
            />
          </Dialog.Close>
          {loading ? (
            <Loading imageSrc={imgSrc} text="" />
          ) : !isError ? (
            <div className="container flex flex-col items-center h-full my-16">
              <div className="flex flex-col text-center mb-4 w-full">
                <p className="text-primary font-black text-xs sm:text-sm md:text-base lg:text-lg">
                  Chef GRU
                </p>
                <p className="uppercase break-words font-rightGroteskCompactBlack text-3xl sm:text-4xl lg:text-5xl">
                  {title}
                </p>
              </div>
              <div className="flex-1 grid grid-cols-1 gap-4 w-full px-2">
                <div className="bg-accent/90 rounded-md p-5">
                  <p className="uppercase font-rightGroteskCompactBlack text-xl sm:text-2xl mb-2">
                    Ingredients:
                  </p>
                  <div>
                    <ul className="ml-5 list-disc">
                      {ingredients?.map((ingredient: string, index: number) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-accent/90 rounded-md p-5">
                  <p className="uppercase font-rightGroteskCompactBlack text-xl sm:text-2xl mb-2">
                    Instructions:
                  </p>
                  <ul className="ml-5 list-decimal">
                    {instructions?.map((instruction: string, index: number) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-end pt-8">
                <Link href="/evaluation">
                  <MainButton
                    isButton={true}
                    text={'Rate the recipe'}
                    variant={'secondary-outlined'}
                  />
                </Link>
              </div>
            </div>
          ) : (
            <p className="font-semibold text-center">
              Something went wrong, try again!
            </p>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ResultsModal;
