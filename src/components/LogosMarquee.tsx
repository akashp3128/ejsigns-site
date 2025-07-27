'use client';

import { FC } from 'react';
import Image from 'next/image';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@9/icons/carhartt.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@9/icons/puma.svg',
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