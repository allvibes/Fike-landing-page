'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductShowcase() {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section ref={containerRef} className="py-16 px-6 md:px-16 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full md:w-1/2"
        >
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            {inView && (
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/stZdzVhMZS0?autoplay=1&mute=1&rel=0&showinfo=0&controls=1"
                title="Bike Demo"
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-4">Meet the Future of Biking</h2>
          <p className="text-gray-600 mb-6">
            This smart electric bike blends power, precision, and design. Engineered for urban explorers and weekend riders alike.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}

