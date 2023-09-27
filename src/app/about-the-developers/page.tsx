import type { DeveloperType } from 'lib/types/developerType';

import { Developers } from '@/data/developersData';

const page = () => {
  return (
    <div>
      {Developers.map((developer: DeveloperType, index: number) => {
        return (
          // to create dev card
          <div key={index} className="flex flex-col text-center">
            <p className="text-xl text-bold uppercase">{developer.lastName}</p>
            <p>{developer.firstName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
