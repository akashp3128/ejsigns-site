'use client';

import { useEffect } from 'react';

/**
 * Adds `.page-loaded` to <body> on the client so the fade-in CSS kicks in once React hydrates.
 */
export default function PageLoadFade() {
  useEffect(() => {
    document.body.classList.add('page-loaded');
  }, []);
  return null;
} 