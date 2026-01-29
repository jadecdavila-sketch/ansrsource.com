interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className = "",
  bgClassName = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={bgClassName}>
      <div className={`mx-auto max-w-[1200px] px-6 py-16 md:py-24 ${className}`}>
        {children}
      </div>
    </section>
  );
}
