"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-black/[0.03] bg-[#F1EDE7]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8 md:py-12">
        <Link href="/" className="group">
          <div className="flex flex-col">
            {site.nav.logo.image ? (
              <div className="relative h-8 w-48 md:h-10 md:w-64">
                <Image
                  src={site.nav.logo.image}
                  alt={site.nav.logo.name}
                  fill
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>
            ) : (
              <span className="text-3xl font-bold tracking-[0.15em] text-[#131516] font-serif uppercase">
                {site.nav.logo.name}
              </span>
            )}
            <div className="mt-1 flex items-center gap-3 overflow-hidden">
              <span className="text-[10px] tracking-widest text-[#a19a91] whitespace-nowrap">
                {site.nav.logo.tagline}
              </span>
              <div className="h-[1px] w-12 bg-black opacity-20 transition-all group-hover:w-full" />
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden space-x-12 md:flex">
          {site.nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium tracking-[0.2em] text-[#545454] transition-colors hover:text-[#131516] hover:underline-thin"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/[0.03] bg-[#F1EDE7] px-8 py-6">
          <div className="flex flex-col gap-6">
            {site.nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium tracking-[0.2em] text-[#545454] transition-colors hover:text-[#131516]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
