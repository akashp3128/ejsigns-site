"use client";
import { FC } from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'
import Reveal from './Reveal'
import { motion, Variants, MotionProps } from 'framer-motion'
import Link from 'next/link'
import { services } from '../data/services'

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MotionLink = motion(Link);

const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-eggshell">
      {/* Heading fade-up */}
      <Reveal>
        <SectionHeading title="Our Services">
          We offer professional contract services so you can focus on growing your business while we handle the craftsmanship.
        </SectionHeading>
      </Reveal>

      {/* Staggered cards */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <MotionLink
            key={service.title}
            variants={card as Variants}
            className="group rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow bg-white"
            href={`/services/${service.slug}`}
          >
            <div className="relative h-64 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-brand mb-2">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {service.desc}
              </p>
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </section>
  );
}

export default ServicesSection 