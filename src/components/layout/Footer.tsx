import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.03] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            {site.nav.logo.image ? (
              <div className="relative h-6 w-36 mb-2">
                <Image
                  src={site.nav.logo.image}
                  alt={site.nav.logo.name}
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
            ) : (
              <span className="text-xl font-bold tracking-[0.1em] text-[#131516] font-serif uppercase">
                {site.nav.logo.name}
              </span>
            )}
            <p className="mt-2 text-[10px] tracking-widest text-[#a19a91]">
              {site.footer.copy}
            </p>
          </div>

          <div className="flex gap-12">
            {site.footer.socials.map((social) => (
              <Link
                key={social.platform}
                href={social.href}
                className="text-[10px] font-bold tracking-[0.2em] hover:text-[#131516] transition-colors"
              >
                {social.platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
