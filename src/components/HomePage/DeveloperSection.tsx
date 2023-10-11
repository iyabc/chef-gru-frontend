import React from 'react';

import type { DeveloperType } from 'lib/types/developerType';

import DeveloperCard from '@/components/ui/DeveloperCard';
import MainButton from '@/components/ui/MainButton';
import TitleHeader from '@/components/ui/TitleHeader';
import { Developers } from '@/data/developersData';

const DeveloperSection = () => {
  return (
    <section className="bg-background py-32">
      <TitleHeader text="Team Members" textColor="black">
        <MainButton
          text="Who we are"
          variant="primary-outlined"
          isButton={false}
        />
      </TitleHeader>
      `
      <div className="flex flex-col justify-center items-center lg:flex-row ">
        {Developers.map((developer: DeveloperType, index: number) => {
          return (
            <div key={index}>
              <DeveloperCard developer={developer} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeveloperSection;
