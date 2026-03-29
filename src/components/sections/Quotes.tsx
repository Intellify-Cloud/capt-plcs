"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { site } from "@/data/site";

const INTERVAL = 6000;

export default function Quotes() {
  if (!site.quotes.show) return null;

  const items = site.quotes.items;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  const prev = () => go((current - 1 + items.length) % items.length);
  const next = useCallback(() => go((current + 1) % items.length), [current, go, items.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [paused, next]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  };

  const q = items[current];

  return (
    <section
      className="bg-[#131516] py-32 md:py-48 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-8 flex flex-col items-center text-center">

        {/* Large decorative quote mark */}
        <span
          className="font-serif text-[120px] leading-none text-white/10 select-none mb-2"
          aria-hidden
        >
          &ldquo;
        </span>

        {/* Quote text */}
        <div className="relative min-h-[10rem] flex items-center justify-center w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center gap-8"
            >
              <p className="text-2xl md:text-3xl font-serif italic font-light leading-[1.6] text-white/90">
                {q.text}
              </p>
              <span className="text-[14px] font-bold tracking-[0.3em] uppercase text-white/40">
                — {q.author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-16 flex items-center gap-8">
          <button
            onClick={prev}
            aria-label="Previous quote"
            className="text-white/30 hover:text-white/80 transition-colors text-xl font-serif"
          >
            ←
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                aria-label={`Quote ${idx + 1}`}
                className={`h-[2px] transition-all duration-500 ${
                  idx === current ? "w-8 bg-white/80" : "w-3 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next quote"
            className="text-white/30 hover:text-white/80 transition-colors text-xl font-serif"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
