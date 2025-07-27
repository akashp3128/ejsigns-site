"use client";

import { FC } from "react";
import { motion, MotionStyle } from "framer-motion";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  /** Optional framer-motion style object for parallax transforms */
  style?: MotionStyle;
  className?: string;
}

/**
 * Full-bleed looping video background.
 * Uses HTML5 <video> for reliable playback and allows framer-motion transforms.
 */
const BackgroundVideo: FC<BackgroundVideoProps> = ({ src, poster, style, className }) => (
  <motion.video
    style={style}
    autoPlay
    muted
    loop
    playsInline
    poster={poster}
    className={`absolute inset-0 w-full h-full object-cover ${className ?? ""}`}
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </motion.video>
);

export default BackgroundVideo; 