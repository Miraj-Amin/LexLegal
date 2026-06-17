// Lexamin Legal — LL Cipher branch: 5 alternatives from Concept 08

const GOLD = "#c9a25f";
const GOLD_SOFT = "#b8923f";
const NAVY = "#0e1822";
const CREAM = "#f4f0e6";

// ─── Original (for reference) ───────────────────────────────────────
const Original = ({ inverted }) => {
  const accent = inverted ? GOLD : GOLD_SOFT;
  const line = inverted ? "rgba(244,240,230,0.25)" : "rgba(14,24,34,0.2)";
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">
      <rect x="2" y="2" width="96" height="96" fill="none" stroke={line} strokeWidth="1" />
      <rect x="22" y="22" width="9" height="56" fill={accent} />
      <rect x="22" y="69" width="32" height="9" fill={accent} />
      <rect x="42" y="32" width="9" height="46" fill={accent} opacity="0.55" />
      <rect x="42" y="69" width="36" height="9" fill={accent} opacity="0.55" />
    </svg>
  );
};

// ─── 8A · Mirrored (Portal) ─────────────────────────────────────────
// Two L's facing each other — symmetric, gateway feel
const MirroredLL = ({ inverted }) => {
  const accent = inverted ? GOLD : GOLD_SOFT;
  const line = inverted ? "rgba(244,240,230,0.25)" : "rgba(14,24,34,0.2)";
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">
      <rect x="2" y="2" width="96" height="96" fill="none" stroke={line} strokeWidth="1" />
      {/* Left L */}
      <rect x="22" y="22" width="9" height="48" fill={accent} />
      <rect x="22" y="61" width="22" height="9" fill={accent} />
      {/* Right mirrored L */}
      <rect x="69" y="22" width="9" height="48" fill={accent} />
      <rect x="56" y="61" width="22" height="9" fill={accent} />
    </svg>
  );
};

// ─── 8B · Interlocked Cipher ────────────────────────────────────────
// One L upright, one rotated 180° — they overlap, stamp/seal feel
const InterlockedLL = ({ inverted }) => {
  const accent = inverted ? GOLD : GOLD_SOFT;
  const line = inverted ? "rgba(244,240,230,0.25)" : "rgba(14,24,34,0.2)";
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">
      <rect x="2" y="2" width="96" height="96" fill="none" stroke={line} strokeWidth="1" />
      {/* Upright L */}
      <rect x="26" y="22" width="9" height="56" fill={accent} />
      <rect x="26" y="69" width="36" height="9" fill={accent} />
      {/* 180-rotated L (becomes a Γ in opposite corner) */}
      <g transform="rotate(180 50 50)">
        <rect x="26" y="22" width="9" height="56" fill={accent} opacity="0.6" />
        <rect x="26" y="69" width="36" height="9" fill={accent} opacity="0.6" />
      </g>
    </svg>
  );
};

// ─── 8C · Corner Brackets ───────────────────────────────────────────
// Frame becomes 4 L-shaped corner ticks (like gallery crop marks)
const BracketLL = ({ inverted }) => {
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">
      {/* Corner brackets */}
      <path d="M 4 18 L 4 4 L 18 4" fill="none" stroke={accent} strokeWidth="1.4" />
      <path d="M 82 4 L 96 4 L 96 18" fill="none" stroke={accent} strokeWidth="1.4" />
      <path d="M 96 82 L 96 96 L 82 96" fill="none" stroke={accent} strokeWidth="1.4" />
      <path d="M 18 96 L 4 96 L 4 82" fill="none" stroke={accent} strokeWidth="1.4" />
      {/* LL monogram, centered, equal weight */}
      <rect x="30" y="26" width="9" height="48" fill={accent} />
      <rect x="30" y="65" width="28" height="9" fill={accent} />
      <rect x="50" y="34" width="9" height="40" fill={accent} />
      <rect x="50" y="65" width="32" height="9" fill={accent} />
    </svg>
  );
};

// ─── 8D · Negative-Space Block ──────────────────────────────────────
// Solid gold tile, LL knocked out in the bg color
const NegativeSpaceLL = ({ inverted }) => {
  const accent = inverted ? GOLD : GOLD_SOFT;
  const knockout = inverted ? NAVY : CREAM;
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">
      <rect x="2" y="2" width="96" height="96" fill={accent} />
      {/* L1 knocked out */}
      <rect x="22" y="22" width="9" height="56" fill={knockout} />
      <rect x="22" y="69" width="32" height="9" fill={knockout} />
      {/* L2 knocked out (ghosted via slight alpha) */}
      <g opacity="0.55">
        <rect x="42" y="32" width="9" height="46" fill={knockout} />
        <rect x="42" y="69" width="36" height="9" fill={knockout} />
      </g>
    </svg>
  );
};

// ─── 8E · Circle Cipher ─────────────────────────────────────────────
// Round frame instead of square — softer, more seal-like
const CircleLL = ({ inverted }) => {
  const accent = inverted ? GOLD : GOLD_SOFT;
  const line = inverted ? "rgba(244,240,230,0.25)" : "rgba(14,24,34,0.2)";
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke={line} strokeWidth="1" />
      <circle cx="50" cy="50" r="40" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.4" />
      {/* L's slightly tucked in to fit circle */}
      <rect x="28" y="28" width="9" height="48" fill={accent} />
      <rect x="28" y="67" width="26" height="9" fill={accent} />
      <rect x="46" y="36" width="9" height="40" fill={accent} opacity="0.55" />
      <rect x="46" y="67" width="28" height="9" fill={accent} opacity="0.55" />
    </svg>
  );
};

// ─── Card wrapper ───────────────────────────────────────────────────
const Lockup = ({ inverted, mark: Mark }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <Mark inverted={inverted} />
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 30,
          fontWeight: 400,
          letterSpacing: "0.14em",
          color: ink,
          lineHeight: 1,
        }}>LEXAMIN LEGAL</div>
        <div style={{
          marginTop: 8,
          fontFamily: "Inter, sans-serif",
          fontSize: 9,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: accent,
        }}>
          London · Surrey
        </div>
      </div>
    </div>
  );
};

const ConceptCard = ({ tag, name, vibe, Mark, highlight }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: CREAM,
    display: "grid",
    gridTemplateRows: "auto 1fr 1fr",
    fontFamily: "Inter, sans-serif",
    position: "relative",
  }}>
    {highlight && (
      <div style={{
        position: "absolute",
        top: 16, right: 16,
        fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase",
        color: GOLD_SOFT, fontWeight: 600,
        padding: "4px 10px", border: `1px solid ${GOLD_SOFT}`,
      }}>Starting point</div>
    )}
    <div style={{
      padding: "22px 28px 20px",
      borderBottom: `1px solid rgba(14,24,34,0.08)`,
    }}>
      <div style={{
        fontSize: 10,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: GOLD_SOFT,
        fontWeight: 500,
        marginBottom: 6,
      }}>{tag}</div>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 26,
        color: NAVY,
        letterSpacing: "-0.005em",
        marginBottom: 8,
      }}>{name}</div>
      <div style={{
        fontSize: 12,
        color: "#6a6253",
        lineHeight: 1.5,
        maxWidth: 360,
      }}>{vibe}</div>
    </div>
    <div style={{
      background: NAVY,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "28px",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", top: 10, left: 14,
        fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase",
        color: "rgba(244,240,230,0.32)",
      }}>On Navy</div>
      <Lockup inverted={true} mark={Mark} />
    </div>
    <div style={{
      background: CREAM,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "28px",
      position: "relative",
      borderTop: `1px solid rgba(14,24,34,0.08)`,
    }}>
      <div style={{
        position: "absolute", top: 10, left: 14,
        fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase",
        color: "rgba(14,24,34,0.32)",
      }}>On Cream</div>
      <Lockup inverted={false} mark={Mark} />
    </div>
  </div>
);

const VARIANTS = [
  {
    id: "original",
    tag: "Concept 08 — Original",
    name: "Geometric LL",
    vibe: "The starting point: two L's offset inside a thin square frame, the second one ghosted to suggest depth.",
    Mark: Original,
    highlight: true,
  },
  {
    id: "mirrored",
    tag: "Branch 8A",
    name: "Mirrored Portal",
    vibe: "Two L's facing each other — symmetric, gateway-like. Reads as a threshold or doorway, fitting for residential.",
    Mark: MirroredLL,
  },
  {
    id: "interlocked",
    tag: "Branch 8B",
    name: "Interlocked Cipher",
    vibe: "One L upright, one rotated 180°. Feels like a wax-cipher or stamp impression — confident, sealed.",
    Mark: InterlockedLL,
  },
  {
    id: "brackets",
    tag: "Branch 8C",
    name: "Corner Brackets",
    vibe: "Frame becomes 4 L-shaped corner ticks — gallery crop-marks. Lighter and more contemporary than the full box.",
    Mark: BracketLL,
  },
  {
    id: "negative",
    tag: "Branch 8D",
    name: "Negative-Space Tile",
    vibe: "Solid gold tile with the L's knocked out. Bold, photo-friendly, very modern. Works as a favicon or app icon.",
    Mark: NegativeSpaceLL,
  },
  {
    id: "circle",
    tag: "Branch 8E",
    name: "Circle Cipher",
    vibe: "Round frame replaces the square — softer, more seal-like. Slightly more traditional read.",
    Mark: CircleLL,
  },
];

const App = () => (
  <DesignCanvas>
    <DCSection
      id="branches"
      title="LL Cipher — 5 branches"
      subtitle="Starting from Concept 08. Same DNA: geometric, framed, two-L interplay. Different gestures."
    >
      {VARIANTS.map(v => (
        <DCArtboard key={v.id} id={v.id} label={v.name} width={580} height={620}>
          <ConceptCard {...v} />
        </DCArtboard>
      ))}
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
