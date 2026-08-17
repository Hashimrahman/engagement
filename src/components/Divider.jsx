export default function Divider({ symbol = "✶ ✶ ✶", className = "" }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <span className="line" />
      <span className="text-gold-400 text-xs sm:text-sm tracking-[0.35em]">
        {symbol}
      </span>
      <span className="line" />
    </div>
  );
}
