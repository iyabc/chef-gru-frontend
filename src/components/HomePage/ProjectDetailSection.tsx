import React from 'react';

import type { ProjectDetailsType } from 'lib/types/projectDetailsType';

import MainButton from '@/components/ui/MainButton';
import ProjectDetailCard from '@/components/ui/ProjectDetailCard';
import TitleHeader from '@/components/ui/TitleHeader';
import { projectDetails } from '@/data/projectDetailsData';

const ProjectDetailSection = () => {
  return (
    <section className="bg-primary py-32">
      <TitleHeader text="Project Details" textColor="white">
        <MainButton
          text="What we did"
          variant="primary-white-outlined"
          isButton={false}
        />
      </TitleHeader>

      <div className="container py-20">
        {projectDetails.map((project: ProjectDetailsType, index: number) => (
          <div className="my-16" key={index}>
            <ProjectDetailCard
              title={project.title}
              body={project.body}
              imageUrl={project.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetailSection;
