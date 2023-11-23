'use client';

import { usePathname } from 'next/navigation';

import { useEffect, useState } from 'react';
import HomePage from '@/components/HomePage/HomePage';
import Custom404 from '@/components/ui/Custom404';
import { RecipeProvider } from '@/contexts/RecipeContext';

export default function Home() {
  const pathName = usePathname();
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    if (pathName !== '/') {
      setIsHomePage(false);
      console.log('fake pathName' + pathName);
    } else {
      setIsHomePage(true);
      console.log(pathName);
    }
  }, [pathName]);

  return <>{isHomePage ? <HomePage /> : <Custom404 />}</>;
}
