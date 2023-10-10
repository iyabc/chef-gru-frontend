import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import BERTLogo from 'public/images/BERT Logo.png';

import { cn } from '@/utils/cvaUtils';

type NavigationBarProps = {
  sectionRef: React.RefObject<HTMLDivElement>;
};

const NavigationBar: React.FC<NavigationBarProps> = ({ sectionRef }) => {
  const [areSectionsVisible, setAreSectionsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setAreSectionsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(sectionRef.current!);

    return () => {
      observer.unobserve(sectionRef.current!);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full flex justify-center py-4 duration-300 ease-in-out',
        {
          'opacity-100 translate-y-0': areSectionsVisible,
          'opacity-0 -translate-y-3': !areSectionsVisible,
        }
      )}
    >
      <button className="relative w-16 h-16">
        <Image src={BERTLogo} alt="BERTLogo" className="object-contain" fill />
      </button>
    </nav>
  );
};

export default NavigationBar;
