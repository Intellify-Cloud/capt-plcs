import Navbar   from "@/components/layout/Navbar";
import Footer   from "@/components/layout/Footer";
import Hero     from "@/components/sections/Hero";
import Quotes   from "@/components/sections/Quotes";
import Services from "@/components/sections/Services";
import Work     from "@/components/sections/Work";
import About    from "@/components/sections/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1EDE7] text-[#545454] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Quotes />
        <Services />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
}
