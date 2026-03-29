"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/data/site";

export default function Contact() {
  if (!site.contact.show) return null;

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ fullName: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-10"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#a19a91] mb-3 uppercase">
                Contact
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#131516] tracking-tight mb-6">
                {site.contact.heading}
              </h2>
              <p className="text-base leading-relaxed text-[#545454]">
                {site.contact.subheading}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* WhatsApp */}
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-black/10 px-6 py-5 hover:border-black/30 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#131516] shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#a19a91] uppercase mb-1">WhatsApp</p>
                  <p className="text-[14px] font-medium text-[#131516]">{site.contact.phone}</p>
                </div>
                <span className="ml-auto text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91] group-hover:text-[#131516] transition-colors">
                  Chat →
                </span>
              </a>

              {/* Instagram */}
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-black/10 px-6 py-5 hover:border-black/30 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#131516] shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#a19a91] uppercase mb-1">Instagram</p>
                  <p className="text-[14px] font-medium text-[#131516]">@captivatingplaces_za</p>
                </div>
                <span className="ml-auto text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91] group-hover:text-[#131516] transition-colors">
                  Follow →
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center gap-4 border border-black/10 px-6 py-5 hover:border-black/30 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#131516] shrink-0" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#a19a91] uppercase mb-1">Email</p>
                  <p className="text-[14px] font-medium text-[#131516]">{site.contact.email}</p>
                </div>
                <span className="ml-auto text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91] group-hover:text-[#131516] transition-colors">
                  Write →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          {site.contact.showForm && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              {status === "sent" ? (
                <div className="flex flex-col items-start justify-center h-full gap-4 py-16">
                  <h3 className="text-3xl font-serif italic text-[#131516]">Thank you.</h3>
                  <p className="text-[#545454]">Your message has been received. Sam will be in touch shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-[14px] font-bold tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-all"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className="border-b border-black/20 bg-transparent py-3 text-[14px] text-[#131516] placeholder:text-[#a19a91] focus:border-black focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91]">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="border-b border-black/20 bg-transparent py-3 text-[14px] text-[#131516] placeholder:text-[#a19a91] focus:border-black focus:outline-none transition-colors"
                      placeholder="+27 00 000 0000"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="border-b border-black/20 bg-transparent py-3 text-[14px] text-[#131516] placeholder:text-[#a19a91] focus:border-black focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91]">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-b border-black/20 bg-transparent py-3 text-[14px] text-[#131516] placeholder:text-[#a19a91] focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-[14px] text-red-500">Something went wrong. Please try again or reach out directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="self-start mt-2 text-[14px] font-bold tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-all disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
