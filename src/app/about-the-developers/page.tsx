import type { DeveloperType } from 'lib/types/developerType';

import DeveloperCard from '@/components/ui/DeveloperCard';
import { Developers } from '@/data/developersData';

const page = () => {
  return (
    <div className="bg-background flex justify-center items-center flex-col h-screen">
      <div className="bg-primary border-2 border-Black py-[0.88rem] px-[2.22rem] w-[11.5rem] h-[2.8rem] rounded-full flex justify-center items-center">
        <p className="text-base text-[0.75rem] md:text-[1rem] text-center capitalize text-white font-bold">
          WHO WE ARE
        </p>
      </div>
      <h1 className="text-[2rem] lg:text-[4rem] font-rightGroteskCompactBlack text-Black">
        TEAM MEMBERS
      </h1>
      <div className="flex flex-col lg:flex-row">
        {Developers.map((developer: DeveloperType, index: number) => {
          return (
            <div key={index}>
              <DeveloperCard developer={developer} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
