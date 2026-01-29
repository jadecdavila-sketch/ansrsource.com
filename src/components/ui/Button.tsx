import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-bright-orange text-white hover:bg-brand-dark-orange focus-visible:ring-brand-bright-orange",
  secondary:
    "bg-brand-teal text-white hover:bg-brand-midnight focus-visible:ring-brand-teal",
  ghost:
    "border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white focus-visible:ring-brand-teal",
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
