"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const bio = site.about.bio || [];

  return (
    <div className="min-h-screen bg-[#F1EDE7] text-[#545454] font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24 items-start">
            
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-[#e5e0d8]"
            >
              <Image
                src={site.about.image || "/assets/team/Sam-Place.png"}
                alt={site.about.title || "Sam Place"}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </motion.div>

            {/* Content Column */}
            <div className="flex flex-col pt-4">
              <motion.div variants={fadeIn} initial="initial" animate="animate">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a19a91] mb-4 block">
                  {site.about.role}
                </span>
                <h1 className="text-5xl font-serif text-[#131516] mb-12 tracking-tight md:text-7xl">
                  {site.about.title}
                </h1>
              </motion.div>

              <motion.div 
                variants={fadeIn} 
                initial="initial" 
                animate="animate"
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                {bio.map((paragraph, idx) => (
                  <p key={idx} className="text-xl leading-relaxed font-light md:text-2xl">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              <motion.div 
                variants={fadeIn} 
                initial="initial" 
                animate="animate"
                transition={{ delay: 0.4 }}
                className="mt-16 pt-16 border-t border-black/[0.05]"
              >
                <Link 
                  href="/#contact" 
                  className="text-[14px] font-bold tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-all"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
