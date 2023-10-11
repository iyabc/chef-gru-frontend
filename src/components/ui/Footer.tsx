import React from 'react';
import Image from 'next/image';
import BERTLogo from 'public/images/BERT Logo.png';

import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-accent flex bottom-0 justify-center items-center w-full py-[1.56rem]'>
        <button className="relative w-10 h-10">
        <Image src={BERTLogo} alt="BERTLogo" className="object-contain" fill />
      </button>
        <a href="https://github.com/iyabc/chef-l-bert"> 
            <FaGithubSquare className='w-[2rem] h-[2rem] hover:-translate-y-0.5 text-white transition duration-150 ease-out active:ease-in'/>
        </a>
    </div>
  )
}

export default Footer
