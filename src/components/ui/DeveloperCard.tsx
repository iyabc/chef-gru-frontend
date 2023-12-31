import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

import type { DeveloperType } from 'lib/types/developerType';

const renderIcon = (socialName: string) => {
  switch (socialName.toUpperCase()) {
    case 'FACEBOOK':
      return <FaFacebookSquare className="w-full h-full" />;

    case 'LINKEDIN':
      return <FaLinkedin className="w-full h-full object-cover" />;

    case 'GITHUB':
      return <FaGithubSquare className="w-full h-full object-cover" />;

    default:
      throw 'NotFound';
  }
};

const DeveloperCard = ({ developer }: { developer: DeveloperType }) => {
  const socialIconsData = [
    {
      url: developer.socials.facebook,
      label: 'Facebook',
    },
    {
      url: developer.socials.linkedin,
      label: 'Linkedin',
    },
    {
      url: developer.socials.github,
      label: 'Github',
    },
  ];

  return (
    <div className="w-full text-center flex flex-col justify-center items-center">
      <div className="select-none overflow-hidden relative w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 rounded-2xl">
        <Image
          src={developer.imageSrc}
          alt={developer.lastName}
          className="object-cover h-full w-full"
          placeholder="blur"
          draggable={false}
        />
      </div>
      <p className="lg:text-xl font-semibold capitalize mt-4 mb-1">
        {developer.firstName} {developer.lastName}
      </p>
      <div className="grid grid-cols-3 gap-1">
        {socialIconsData.map((iconData, index) => (
          <a
            href={iconData.url}
            key={index}
            aria-label={iconData.label}
            className="w-5 sm:w-6 lg:w-8 hover:-translate-y-0.5 transition duration-150 ease-out active:ease-in"
          >
            {renderIcon(iconData.label)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DeveloperCard;
