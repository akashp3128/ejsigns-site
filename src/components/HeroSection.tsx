"use client";
import { FC, useRef } from "react";
import { Oswald } from "next/font/google";

// Font loader must be at module scope
const oswald = Oswald({ weight: ["400", "500", "700"], subsets: ["latin"] });
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo";
import Link from "next/link";

const HeroSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position for parallax background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background scales & moves slightly as user scrolls
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Staggered text animation variants
  const parent: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.25 },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex items-center justify-center h-[80vh] min-h-[520px] overflow-hidden text-center"
    >
      {/* Parallax video background */}
      <BackgroundVideo
        src="/hero.mp4"
        style={{ scale: bgScale, y: bgY }}
      />
      {/* Blue tint overlay for contrast */}
      <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply" />

      {/* Content */}
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-background"
      >
        <motion.h1
          variants={child}
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 ${oswald.className}`}
        >
          Quality Products. On-Time, Every Time.
        </motion.h1>
        <motion.h2
          variants={child}
          className={`text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6 ${oswald.className}`}
        >
          Screen Printing • Embroidery • Digitizing
        </motion.h2>

        <motion.p variants={child} className="text-lg sm:text-xl mb-8">
          Trusted by businesses and organizations nationwide for rapid turnaround and unmatched craftsmanship.
        </motion.p>

        <motion.div variants={child}>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center transition-transform rounded-full font-medium text-base h-12 px-8 bg-brand-accent text-background hover:scale-105"
          >
            Get a Quote
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 