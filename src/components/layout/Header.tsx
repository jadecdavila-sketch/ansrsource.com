import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { basePath } from "@/lib/tokens";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Thought Leadership", href: "#insights" },
  { label: "Careers", href: "#careers" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-pale-gray bg-white">
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="ansrsource home">
          <Image
            src={`${basePath}/logos/ansrsource-logo.png`}
            alt="ansrsource logo"
            width={180}
            height={40}
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-teal"
            >
              {link.label}
            </a>
          ))}
          <Button variant="ghost" href="#contact">
            Talk to us
          </Button>
        </div>

        {/* Mobile: just show Talk to us button */}
        <div className="md:hidden">
          <Button variant="ghost" href="#contact">
            Talk to us
          </Button>
        </div>
      </nav>
    </header>
  );
}
