import type { StaticImageData } from 'next/image';

export type DeveloperType = {
  email: string;
  firstName: string;
  imageSrc: StaticImageData;
  lastName: string;
  socials: SocialType[];
};

export type SocialType = {
  facebook?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
};
