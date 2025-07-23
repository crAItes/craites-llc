const Logo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center font-bold text-2xl`}>
      <span className="text-charcoal">CR</span>
      <span className="text-gold">AI</span>
      <span className="text-charcoal">TES</span>
    </div>
  );
};

export default Logo;