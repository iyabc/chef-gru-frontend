import React from 'react'
import TitleHeader from '../ui/TitleHeader';
import MainButton from '../ui/MainButton';
import { projectDetails } from '@/data/projectDetailsData';
import { ProjectDetailsType } from 'lib/types/projectDetailsType';
import ProjectDetailCard from '../ui/ProjectDetailCard';

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
      {projectDetails.map(
        (project: ProjectDetailsType, index: number) => (
          <div className="my-16" key={index}>
            <ProjectDetailCard
              title={project.title}
              body={project.body}
              imageUrl={project.imageUrl}
            />
          </div>
        )
      )}
    </div>
  </section>
  )
}

export default ProjectDetailSection
