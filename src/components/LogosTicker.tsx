'use client';

import { FC } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// `react-infinite-ticker` uses window, so we load it dynamically to avoid SSR issues.
// We also turn SSR off for this component.
const HorizontalTicker: any = dynamic(
  () => import('react-infinite-ticker').then((mod) => mod.HorizontalTicker),
  { ssr: false }
);

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@9/icons/puma.svg',
];

const LogosTicker: FC = () => (
  <section
    className="py-12 bg-eggshell border-y border-black/10 overflow-hidden"
    aria-label="Our clients"
  >
    {/* duration controls how long a full cycle takes (ms) */}
    <HorizontalTicker duration={20000} direction="left">
      {logos.map((src, i) => (
        <div key={i} className="w-32 h-16 relative mx-12 inline-block">
          <Image src={src} alt="client logo" fill className="object-contain" />
        </div>
      ))}
    </HorizontalTicker>
  </section>
);

export default LogosTicker; 