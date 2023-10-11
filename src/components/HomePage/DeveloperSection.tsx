import React from 'react';

import type { DeveloperType } from 'lib/types/developerType';

import DeveloperCard from '@/components/ui/DeveloperCard';
import MainButton from '@/components/ui/MainButton';
import TitleHeader from '@/components/ui/TitleHeader';
import { Developers } from '@/data/developersData';

const DeveloperSection = () => {
  return (
    <section className="container bg-background py-32">
      <TitleHeader text="Team Members" textColor="black">
        <MainButton
          text="Who we are"
          variant="primary-outlined"
          isButton={false}
        />
      </TitleHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center my-16">
        {Developers.map((developer: DeveloperType, index: number) => {
          return (
            <div className="my-3 lg:mx-3" key={index}>
              <DeveloperCard developer={developer} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeveloperSection;
