'use client';

import { FC } from 'react';
import Image from 'next/image';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', color: '#1D3557' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Carhartt_logo_%28yellow%29.svg', color: undefined },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg', color: '#1D3557' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@9/icons/puma.svg', color: '#1D3557' },
];

const LogosMarquee: FC = () => {
  return (
    <section className="py-12 bg-eggshell border-y border-black/10 overflow-hidden" aria-label="Our clients">
      <div className="whitespace-nowrap animate-marquee flex items-center">
        {logos.concat(logos).map(({ src, color }, i) => (
          <div key={i} className="w-32 h-16 relative px-10 inline-block flex-shrink-0">
            <Image src={src} alt="client logo" fill style={{ color }} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogosMarquee; 