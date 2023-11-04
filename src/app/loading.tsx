import React from 'react';
import Image from 'next/image';

import GRULogo from 'public/images/GRU logo.png';

const loading = () => {
  return (
    <section className="h-screen bg-background flex flex-col justify-center items-center">
      <div className="relative w-full h-full">
        <Image src={GRULogo} alt="GRULogo" className="object-contain" fill />
      </div>
    </section>
  );
};

export default loading;
