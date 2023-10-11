import React from 'react'
import type { DeveloperType } from 'lib/types/developerType';
import TitleHeader from '../ui/TitleHeader';
import MainButton from '../ui/MainButton';
import DeveloperCard from '@/components/ui/DeveloperCard';
import { Developers } from '@/data/developersData';

const DeveloperSection = () => {
  return (
    <section className="bg-background flex justify-center items-center flex-col h-screen">
`       <TitleHeader text="Team Members" textColor="black">
            <MainButton
                text="Who we are"
                variant="primary-outlined"
                isButton={false}
            />
        </TitleHeader>`
        <div className="flex flex-col justify-center lg:flex-row">
            {Developers.map((developer: DeveloperType, index: number) => {
                return (
                <div key={index}>
                    <DeveloperCard developer={developer} />
                </div>
                );
            })}
        </div>
  </section>
  )
}

export default DeveloperSection
