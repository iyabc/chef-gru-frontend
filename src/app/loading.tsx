import React from 'react';
import Image from 'next/image';

import logoSrc from 'public/images/BERT Logo.png';

const loading = () => {
  return (
    <section className="h-screen bg-background flex flex-col justify-center items-center">
      <p>Loading...</p>
      <div className="relative w-full h-full">
        <Image src={logoSrc} alt="Logo" className="object-contain" fill />
      </div>
    </section>
  );
};

export default loading;
