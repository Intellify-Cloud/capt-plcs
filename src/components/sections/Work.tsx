"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { site } from "@/data/site";

export default function Work() {
  if (!site.work.show) return null;

  return (
    <section id="work" className="mx-auto max-w-7xl px-8 py-32">
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3">
        {site.work.items.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e0d8] mb-8">
              {/* Image placeholder — replace with real cover when available */}
              <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-widest text-[#a19a91] opacity-50">
                PROJECT_PREVIEW_{idx + 1}
              </div>
              <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/[0.02]" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#a19a91] uppercase">
                  {project.category}
                </span>
                <span className="text-[10px] text-[#a19a91]">{project.year}</span>
              </div>
              <h3 className="text-2xl font-serif italic text-[#131516] tracking-tight">
                {project.title}
              </h3>
              <div className="mt-4 flex items-center gap-2 text-[11px] font-bold tracking-widest opacity-0 transition-all group-hover:opacity-100">
                VIEW PROJECT <ChevronRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
