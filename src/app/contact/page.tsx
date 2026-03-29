import Navbar  from "@/components/layout/Navbar";
import Footer  from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${site.contact.heading} — ${site.meta.title}`,
  description: site.contact.subheading,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F1EDE7] text-[#545454] font-sans">
      <Navbar />
      <main className="pt-32">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
