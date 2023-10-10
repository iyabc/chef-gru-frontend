import type { DeveloperType } from 'lib/types/developerType';
import BungagImgSrc from 'public/Devs/bungag.jpg';
import PanesImgSrc from 'public/Devs/panes.jpg';
import TanImgSrc from 'public/Devs/tan.jpg';

export const Developers: DeveloperType[] = [
  {
    imageSrc: BungagImgSrc,
    email: 'viverbungag1@gmail.com',
    firstName: 'Viver Val',
    lastName: 'Bungag',
    socials: {
      facebook: 'https://www.facebook.com/buboy1',
      github: 'https://github.com/viverbungag',
      linkedin: 'https://www.linkedin.com/in/viver-bungag-958364215/',
    },
  },
  {
    imageSrc: PanesImgSrc,
    email: 'juliennepanes@gmail.com',
    firstName: 'Julienne Andrea',
    lastName: 'Panes',
    socials: {
      facebook: 'https://www.facebook.com/julyenjulyenjulyen',
      github: 'https://github.com/iyabc/',
      linkedin: 'https://www.linkedin.com/in/julienne-andrea-panes-99456024a/',
    },
  },
  {
    imageSrc: TanImgSrc,
    email: 'jayinnhahn@gmail.com',
    firstName: 'Jay Innhahn',
    lastName: 'Tan',
    socials: {
      facebook: 'https://www.facebook.com/jayinnhahn',
      github: 'https://github.com/jayinnhahn',
      linkedin: 'https://www.linkedin.com/in/jayinnhahn/',
    },
  },
];
