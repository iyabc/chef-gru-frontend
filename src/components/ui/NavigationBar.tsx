import React from 'react';
import Image from 'next/image';

import { motion, useInView } from 'framer-motion';
import BERTLogo from 'public/images/BERT Logo.png';

type NavigationBarProps = {
  viewRef: React.RefObject<HTMLDivElement>;
};

const navigationBarVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  hidden: { opacity: 0, scale: 0 },
};

const NavigationBar: React.FC<NavigationBarProps> = ({ viewRef }) => {
  const inView = useInView(viewRef);

  return (
    <motion.nav
      ref={viewRef}
      animate={inView ? 'visible' : 'hidden'}
      initial="hidden"
      variants={navigationBarVariants}
      className="fixed top-0 w-full flex justify-center py-4 duration-300 ease-in-out z-50"
    >
      <button className="relative w-16 h-16">
        <Image src={BERTLogo} alt="BERTLogo" className="object-contain" fill />
      </button>
    </motion.nav>
  );
};

export default NavigationBar;
