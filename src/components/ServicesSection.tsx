"use client";
import { FC } from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'
import Reveal from './Reveal'
import { motion, Variants } from 'framer-motion'

const services = [
  {
    title: 'Screen Printing',
    desc: 'High-quality prints with vibrant colors, perfect for tee shirts, hoodies, and more.',
    image: 'https://images.unsplash.com/photo-1558704164-ab7a0016c1f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Embroidery',
    desc: 'Premium stitching for hats, polos, jackets, and uniforms that stand the test of time.',
    image: 'https://images.unsplash.com/photo-1657668282135-b620193e7801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

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
          <motion.div
            key={service.title}
            variants={card}
            className="group rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow bg-white"
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ServicesSection 