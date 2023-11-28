import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import Image from 'next/image';

import GRULogo from 'public/images/GRU logo.png';

const Footer = () => {
  return (
    <div className="bg-accent flex bottom-0 justify-center items-center w-full py-[1.56rem]">
      <a
        href="/pdf/Bungag-Panes-Tan-Chef-BiGRU.pdf"
        download="Bungag-Panes-Tan-Chef-BiGRU"
      >
        <button className="relative w-10 h-10">
          <Image src={GRULogo} alt="GRULogo" className="object-contain" fill />
        </button>
      </a>

      <a href="https://github.com/iyabc/chef-l-bert">
        <FaGithubSquare className="w-[2rem] h-[2rem] hover:-translate-y-0.5 text-white transition duration-150 ease-out active:ease-in" />
      </a>
    </div>
  );
};

export default Footer;
