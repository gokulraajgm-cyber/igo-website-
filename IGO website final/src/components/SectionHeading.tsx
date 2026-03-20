interface Props {
  label: string;
  className?: string;
}

const SectionHeading = ({ label, className = "" }: Props) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{label}</h2>
    <div className="w-20 h-1 gradient-gold mx-auto rounded-full" />
  </div>
);

export default SectionHeading;
