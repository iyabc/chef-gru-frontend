import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

import type { DeveloperType } from 'lib/types/developerType';

function renderIcon(socialName: string) {
  switch (socialName.toUpperCase()) {
    case 'FACEBOOK':
      return (
        <FaFacebookSquare
          className={
            'w-[2rem] h-[2rem] hover:-translate-y-0.5 transition duration-150 ease-out active:ease-in'
          }
        />
      );

    case 'LINKEDIN':
      return (
        <FaLinkedin
          className={
            'w-[2rem] h-[2rem] hover:-translate-y-0.5 transition duration-150 ease-out active:ease-in'
          }
        />
      );

    case 'GITHUB':
      return (
        <FaGithubSquare
          className={
            'w-[2rem] h-[2rem] hover:-translate-y-0.5 transition duration-150 ease-out active:ease-in'
          }
        />
      );

    default:
      throw 'NotFound';
  }
}
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
    <div className="mb-10 w-full py-[1.88rem] px-[2.11rem] text-center flex flex-col justify-center items-center">
      <div className="flex overflow-y-hidden select-none relative h-[26rem] max-w-[26rem] rounded-[5rem]">
        <Image
          src={developer.imageSrc}
          alt={developer.lastName}
          className="object-cover"
          placeholder="blur"
          draggable={false}
        />
      </div>
      <p className="text-[1.5625rem] text-Black font-bold uppercase">
        {developer.firstName} {developer.lastName}
      </p>
      <div className="flex justify-center">
        <div className="grid grid-flow-col w-fit text-Black">
          {socialIconsData.map((iconData, index) => (
            <a href={iconData.url} key={index} aria-label={iconData.label}>
              {renderIcon(iconData.label)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
