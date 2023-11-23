import { PassingOutputType } from 'lib/types/passingOutputType';
import MainButton from '../ui/MainButton';

const RecipeSection: React.FC<PassingOutputType> = ({ output }) => {
  return (
    <div className="container py-10">
      <div className="text-center mb-3 lg:mb-6">
        <MainButton
          text="Generated recipe"
          variant="secondary-outlined"
          isButton={false}
        />
      </div>
      <p className="uppercase break-words text-center font-rightGroteskCompactBlack text-3xl sm:text-4xl lg:text-5xl">
        {output?.title}
      </p>
      <div className="grid grid-cols-1 gap-4 mt-6">
        <div className="bg-accent/90 rounded-md p-5">
          <p className="uppercase font-rightGroteskCompactBlack text-xl sm:text-2xl mb-2">
            Ingredients:
          </p>
          <div>
            <ul className="ml-5 list-disc">
              {output?.ingredients?.map((ingredient: string, index: number) => (
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
            {output?.instructions?.map((instruction: string, index: number) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;
