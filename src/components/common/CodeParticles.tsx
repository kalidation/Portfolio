const glyphs = [
  "{ }", "</>", "=>", "const", "[ ]", "( )", "useState", "&&", "<App />",
  "async", "import", "...", "?.", "type", "return", "#915eff",
];

// Fixed layout so the background is stable between renders.
const COUNT = 40;
const particles = Array.from({ length: COUNT }, (_, i) => ({
  id: i,
  text: glyphs[i % glyphs.length],
  left: `${(i * 61.8) % 97}%`,
  size: 14 + ((i * 5) % 14),
  duration: 20 + ((i * 7) % 16),
  delay: -((i * 2.3) % 28),
}));

export const CodeParticles = () => (
  <div
    aria-hidden
    className="code-particles pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    {particles.map((p) => (
      <span
        key={p.id}
        className="code-particle"
        style={{
          left: p.left,
          fontSize: p.size,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
        }}
      >
        {p.text}
      </span>
    ))}
  </div>
);
