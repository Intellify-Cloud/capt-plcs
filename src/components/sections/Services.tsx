"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/data/site";

export default function Services() {
  if (!site.services.show) return null;

  const [openCategory, setOpenCategory] = useState<number>(0);
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 md:py-48 border-t border-black/[0.05]">
      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[14px] font-bold tracking-[0.3em] uppercase text-[#a19a91] mb-4">
            {site.services.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#131516] tracking-tight">
            {site.services.heading}
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex gap-8 mb-16 border-b border-black/[0.06]">
          {site.services.categories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => { setOpenCategory(idx); setOpenItem(null); }}
              className={`pb-4 text-[14px] font-bold tracking-[0.2em] uppercase transition-all ${
                openCategory === idx
                  ? "text-[#131516] border-b-2 border-[#131516] -mb-px"
                  : "text-[#a19a91] hover:text-[#545454]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Service items — accordion */}
        <motion.div
          key={openCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="divide-y divide-black/[0.06]"
        >
          {site.services.categories[openCategory].items.map((item, idx) => (
            <div key={item.title}>
              <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => setOpenItem(openItem === idx ? null : idx)}
              >
                <div className="flex items-center gap-6">
                  <span className="text-[14px] text-[#a19a91] font-light w-6 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl md:text-2xl font-serif text-[#131516] tracking-tight group-hover:italic transition-all">
                    {item.title}
                  </span>
                </div>
                <span className={`text-[#a19a91] transition-transform duration-300 text-lg ${openItem === idx ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              {openItem === idx && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="pb-6 pl-12 text-base leading-relaxed text-[#545454] max-w-2xl"
                >
                  {item.description}
                </motion.p>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
