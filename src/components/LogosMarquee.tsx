'use client';

import { FC } from 'react';
import Image from 'next/image';

const logos = [
  '/vercel.svg',
  '/next.svg',
  '/globe.svg', // correct static path
];

const LogosMarquee: FC = () => {
  return (
    <section className="py-12 bg-eggshell border-y border-black/10 overflow-hidden" aria-label="Our clients">
      <div className="whitespace-nowrap animate-marquee flex gap-16">
        {logos.concat(logos).map((src, i) => (
          <div key={i} className="w-32 h-16 relative">
            <Image src={src} alt={`client logo ${i % 3}`} fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogosMarquee; 