import DropdownNERs from '@/components/ui/DropdownNERs';
import MainButton from '@/components/ui/MainButton';
import { NERs } from '@/data/nersData';

const HomePage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-3xl font-rightGroteskCompactBlack font-bold">
          CHEF L-BERT
        </h1>
        <DropdownNERs ners={NERs} />
        <MainButton text="Generate" />
      </div>
    </div>
  );
};

export default HomePage;
