import React, { useRef } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  firstQuickHorizontalFromLeftFadeInVariants,
  firstQuickVerticalFromRightFadeInVariants,
} from '@/animations/fadeIn';

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
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef);
  const imageInView = useInView(textRef);

  return (
    <div className="grid justify-between items-center grid-cols-1 lg:grid-cols-2 text-background">
      <motion.div
        ref={textRef}
        variants={firstQuickHorizontalFromLeftFadeInVariants}
        initial="initial"
        animate={textInView && 'animate'}
        className="mb-9 lg:mr-16"
      >
        <p className="font-rightGroteskCompactBlack text-2xl lg:text-4xl font-medium uppercase mb-3">
          {title}
        </p>
        <p className="text-sm lg:text-base">{body}</p>
      </motion.div>
      <motion.div
        ref={imageRef}
        variants={firstQuickVerticalFromRightFadeInVariants}
        initial="initial"
        animate={imageInView && 'animate'}
        className="relative h-80 w-full"
      >
        <Image
          src={imageUrl}
          alt="Detail Image"
          className="object-cover h-full w-full rounded-2xl"
          fill
        />
      </motion.div>
    </div>
  );
};

export default ProjectDetailCard;
