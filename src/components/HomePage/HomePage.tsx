import MainButton from '@/components/ui/MainButton';

const HomePage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-3xl font-bold">Chef L-BERT</h1>
        <MainButton text="Generate" />
      </div>
    </div>
  );
};

export default HomePage;
