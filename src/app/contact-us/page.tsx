"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { broadsheetApi } from "@/lib/api";
import { site } from "@/data/site";

type FormValues = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  location: string; // honeypot
  content: string;
};

type Status = "idle" | "busy" | "sent" | "error";

export default function ContactUsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ defaultValues: { location: "" } });

  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(data: FormValues) {
    if (data.location) return; // honeypot triggered — silently ignore
    setStatus("busy");
    try {
      await broadsheetApi.post("/v1/messages", {
        name: data.name,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber,
        content: data.content,
      });
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen py-32 md:py-48">
      <div className="mx-auto max-w-xl px-8">

        {status === "sent" ? (
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-serif font-bold text-[#131516] tracking-tight">Thank you.</h1>
            <p className="text-[#545454]">Your message has been received. We will be in touch shortly.</p>
            <button
              onClick={() => setStatus("idle")}
              className="self-start text-[14px] font-bold tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-all"
            >
              Send Another
            </button>
          </div>
        ) : status === "error" ? (
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-serif font-bold text-[#131516] tracking-tight">Something went wrong.</h1>
            <p className="text-[#545454]">
              Please try again or reach us directly at{" "}
              <a href={`mailto:${site.contact.email}`} className="underline">
                {site.contact.email}
              </a>
              .
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="self-start text-[14px] font-bold tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-all"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mb-12">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#a19a91] mb-3 uppercase">Contact</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#131516] tracking-tight">
                {site.contact.heading}
              </h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

              {/* Honeypot */}
              <input
                type="text"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px]"
                {...register("location")}
              />

              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="border-b border-black/20 bg-transparent py-3 text-[14px] text-[#131516] placeholder:text-[#a19a91] focus:border-black focus:outline-none transition-colors"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-[12px] text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="border-b border-black/20 bg-transparent py-3 text-[14px] text-[#131516] placeholder:text-[#a19a91] focus:border-black focus:outline-none transition-colors"
                  {...register("emailAddress", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.emailAddress && (
                  <p className="text-[12px] text-red-500">{errors.emailAddress.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91]">
                  Contact Number <span className="normal-case font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="+27 00 000 0000"
                  className="border-b border-black/20 bg-transparent py-3 text-[14px] text-[#131516] placeholder:text-[#a19a91] focus:border-black focus:outline-none transition-colors"
                  {...register("phoneNumber")}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a19a91]">
                  Your Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="border-b border-black/20 bg-transparent py-3 text-[14px] text-[#131516] placeholder:text-[#a19a91] focus:border-black focus:outline-none transition-colors resize-none"
                  {...register("content", { required: "Message is required" })}
                />
                {errors.content && (
                  <p className="text-[12px] text-red-500">{errors.content.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "busy"}
                className="self-start mt-2 flex items-center gap-2 text-[14px] font-bold tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-all disabled:opacity-50"
              >
                {status === "busy" ? (
                  <>
                    <span className="inline-block w-3 h-3 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

            </form>
          </>
        )}

      </div>
    </main>
  );
}
