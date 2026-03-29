"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const SLIDE_DURATION = 5000; // ms per image

export default function Hero() {
  if (!site.hero.show) return null;

  const images = site.hero.images;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">

      {/* Crossfade background images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt=""
            fill
            className="object-cover"
            priority={current === 0}
          />
          {/* Dark overlay so text stays legible */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="relative z-10 text-center px-8"
      >
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70 mb-10">
          {site.hero.eyebrow}
        </p>

        <h1 className="max-w-4xl mx-auto text-5xl font-extralight tracking-tight text-white sm:text-7xl md:text-8xl md:leading-[1.1] font-serif">
          {site.hero.heading} <br />
          <span className="italic">{site.hero.headingItalic}</span>
        </h1>

        <div className="mt-16 flex flex-col items-center justify-center gap-10 sm:flex-row">
          {site.hero.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className="text-[14px] font-bold tracking-[0.2em] uppercase border-b border-white/40 pb-1 text-white hover:border-white transition-all"
            >
              {cta.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-[2px] transition-all duration-500 ${
                idx === current ? "w-8 bg-white" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
