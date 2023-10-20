'use client';

import { useRef } from 'react';
import Link from 'next/link';

import Footer from '@/components/ui/Footer';
import NavigationBar from '@/components/ui/NavigationBar';

export default function NotFound() {
  const sectionsRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar viewRef={sectionsRef} />
      <div className="flex-grow flex-col flex justify-center items-center mx-10">
        <h1 className="text-xl xsm:text-2xl sm:text-4xl font-bold font-rightGroteskCompactBlack uppercase mb-1 text-left">
          Oops! It seems there&rsquo;s nothing here.
        </h1>
        <p className="text-l">
          It seems you&rsquo;ve strayed from the recipe. Let&rsquo;s guide you
          back to the
          <Link href="/">
            <span className="ml-1 text-[#000080]">kitchen</span>
          </Link>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
