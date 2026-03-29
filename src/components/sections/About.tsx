"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function About() {
  if (!site.about.show) return null;

  return (
    <section id="about" className="py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Offset decorative border frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[#131516]/10 z-0" />

            {/* Photo container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e5e0d8] z-10">
              {/* Base image — desaturated */}
              <Image
                src={site.about.image}
                alt={site.about.title}
                fill
                className="object-cover object-center grayscale"
              />

              {/* Warm sepia wash — mix-blend-mode multiply tints the grey into warm tan */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "rgba(193, 168, 140, 0.28)",
                  mixBlendMode: "multiply",
                }}
              />

              {/* Subtle vignette — draws focus to face */}
              <div
                className="absolute inset-0 z-20"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 30%, transparent 40%, rgba(19,21,22,0.35) 100%)",
                }}
              />

              {/* Bottom fade — grounds the image into the section */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 z-20"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(241,237,231,0.5))",
                }}
              />

              {/* Role label pinned to bottom-left */}
              <div className="absolute bottom-6 left-6 z-30">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">
                  {site.about.role}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            {/* Name + role */}
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#a19a91] mb-3">
                {site.about.role}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#131516] tracking-tight">
                {site.about.title}
              </h2>
            </div>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4">
              {site.about.bio.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed text-[#545454]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-[#131516]/20 pl-6 my-4">
              <p className="text-xl md:text-2xl font-serif italic text-[#131516] leading-[1.5]">
                "{site.about.quote}"
              </p>
            </blockquote>

            <Link
              href="/about"
              className="self-start text-[14px] font-bold tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-all"
            >
              Read About Sam Place
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
