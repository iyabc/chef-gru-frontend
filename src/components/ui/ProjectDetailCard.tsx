import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type ProjectDetailCardProps = {
  body: string;
  imageUrl: StaticImageData;
  title: string;
};

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({
  title,
  body,
  imageUrl,
}) => {
  return (
    <div className="grid justify-between items-center grid-cols-1 lg:grid-cols-2 text-white">
      <div className="mb-9 lg:mr-16">
        <p className="font-rightGroteskCompactBlack text-2xl lg:text-4xl font-medium uppercase mb-3">
          {title}
        </p>
        <p className="text-sm lg:text-base">{body}</p>
      </div>
      <div className="relative h-80 w-full">
        <Image
          src={imageUrl}
          alt="Detail Image"
          className="object-cover h-full w-full rounded-2xl"
          fill
        />
      </div>
    </div>
  );
};

export default ProjectDetailCard;
