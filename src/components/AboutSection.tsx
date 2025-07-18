'use client';

import { FC, useRef } from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import { motion, useScroll, useTransform } from 'framer-motion'

const AboutSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* subtle parallax bg pattern */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center opacity-10"
      />
      <div className="relative">
        <SectionHeading title="About Us">
          Dedicated to delivering the highest quality service with efficiency and clear communication.
        </SectionHeading>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-card">
            <Image src="https://images.unsplash.com/photo-1551836022-5c52b6e17332?auto=format&fit=crop&w=800&q=60" alt="EJ Signs team" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              Since 2019, EJ Signs has empowered local and regional businesses with top-notch customization. From
              small batch runs to large volume orders, our state-of-the-art facility and seasoned team ensure every
              piece meets exacting standards.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We believe great partnerships start with clear communication, reliable timelines, and a willingness to go the
              extra mile. Whether you&amp;apos;re an apparel brand, marketing agency, or corporate buyer, we operate behind the scenes so you can shine in front of your customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 