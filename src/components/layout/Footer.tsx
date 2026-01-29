import Image from "next/image";
import { BrandName } from "@/components/ui/BrandName";
import { basePath } from "@/lib/tokens";

export function Footer() {
  return (
    <footer className="bg-brand-midnight text-white" id="contact">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* Logo and tagline */}
        <div className="mb-8">
          <Image
            src={`${basePath}/logos/ansrsource-logo.png`}
            alt="ansrsource logo"
            width={160}
            height={35}
            className="brightness-0 invert"
          />
          <p className="mt-2 text-sm text-white/70">
            Learn Toward Tomorrow&trade;
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()}{" "}
            <BrandName className="text-white/60" />. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
