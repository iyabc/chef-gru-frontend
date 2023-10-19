import { useRef } from 'react';

import Footer from '@/components/ui/Footer';
import NavigationBar from '@/components/ui/NavigationBar';

const Custom404: React.FC = () => {
  const sectionsRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar viewRef={sectionsRef} />
      <div className="flex-grow flex justify-center items-center">
        <h1 className="text-4xl font-bold">404 Page Not Found</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Custom404;
