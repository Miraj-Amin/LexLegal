// Lexamin Legal — Colour palette options
// Each palette = a card showing swatches, hex codes, the logo applied,
// and a sample button + tiny in-context preview.

const PALETTES = [
  {
    id: "navy-gold",
    name: "Navy & Gold",
    note: "Current direction. Classic, authoritative, prime-residential.",
    ink: "#0e1822",
    accent: "#c9a25f",
    bg: "#f4f0e6",
    support: "#1c3a2e",
    inkName: "Midnight Navy",
    accentName: "Burnished Gold",
    bgName: "Warm Cream",
    supportName: "Forest",
  },
  {
    id: "forest-brass",
    name: "Forest & Brass",
    note: "Establishment, traditional. Reads as a legacy firm.",
    ink: "#1d3329",
    accent: "#b8923f",
    bg: "#ede6d2",
    support: "#2a2520",
    inkName: "Deep Forest",
    accentName: "Antique Brass",
    bgName: "Ivory",
    supportName: "Charred Oak",
  },
  {
    id: "oxblood-stone",
    name: "Oxblood & Stone",
    note: "Refined, distinctive. A more confident, slightly editorial palette.",
    ink: "#5a1b2c",
    accent: "#c4a890",
    bg: "#f1ebe1",
    support: "#2d1f1a",
    inkName: "Oxblood",
    accentName: "Stone",
    bgName: "Bone",
    supportName: "Bitter Cocoa",
  },
  {
    id: "midnight-champagne",
    name: "Midnight & Champagne",
    note: "Private-bank polish. HNW-leaning.",
    ink: "#14213d",
    accent: "#d4b88a",
    bg: "#f5f3ed",
    support: "#0a1424",
    inkName: "Midnight Blue",
    accentName: "Champagne",
    bgName: "Pearl",
    supportName: "Deep Indigo",
  },
  {
    id: "charcoal-sage",
    name: "Charcoal & Sage",
    note: "Modern, restrained. Contemporary professional with a soft pulse.",
    ink: "#2c2e2b",
    accent: "#8b9d83",
    bg: "#ebebe5",
    support: "#16181a",
    inkName: "Graphite",
    accentName: "Sage",
    bgName: "Fog",
    supportName: "Black Ink",
  },
  {
    id: "mocha-camel",
    name: "Mocha & Camel",
    note: "Quiet luxury. Warm, tactile, very Loro Piana.",
    ink: "#3d2f24",
    accent: "#c4a484",
    bg: "#ede4d3",
    support: "#1f1812",
    inkName: "Mocha",
    accentName: "Camel",
    bgName: "Bone",
    supportName: "Espresso",
  },
  {
    id: "slate-copper",
    name: "Slate & Copper",
    note: "Industrial-luxury. Distinctive, a touch architectural.",
    ink: "#2a313a",
    accent: "#b87333",
    bg: "#e8e2d8",
    support: "#13171c",
    inkName: "Slate",
    accentName: "Copper",
    bgName: "Chalk",
    supportName: "Ink",
  },
  {
    id: "aubergine-gold",
    name: "Aubergine & Gold",
    note: "Unexpected, sophisticated. Stands apart from typical legal branding.",
    ink: "#2d1b2e",
    accent: "#c9a25f",
    bg: "#f0ead8",
    support: "#180e19",
    inkName: "Aubergine",
    accentName: "Gold",
    bgName: "Vellum",
    supportName: "Plum Ink",
  },
];

// ─── LL monogram, palette-driven ───────────────────────────────────
const LLMark = ({ ink, accent, bg }) => (
  <svg width="78" height="78" viewBox="0 0 100 100" aria-hidden="true">
    <rect x="2" y="2" width="96" height="96" fill="none" stroke={ink} strokeWidth="1" opacity="0.18" />
    <rect x="22" y="22" width="9" height="56" fill={accent} />
    <rect x="22" y="69" width="32" height="9" fill={accent} />
    <rect x="42" y="32" width="9" height="46" fill={accent} opacity="0.55" />
    <rect x="42" y="69" width="36" height="9" fill={accent} opacity="0.55" />
  </svg>
);

// ─── Swatch row ────────────────────────────────────────────────────
const Swatch = ({ color, name, hex, large, dark }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{
      height: large ? 78 : 58,
      background: color,
      border: dark ? "1px solid rgba(0,0,0,0.08)" : "none",
      marginBottom: 10,
    }} />
    <div style={{
      fontFamily: "Inter, sans-serif",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#2a2520",
      fontWeight: 500,
      marginBottom: 3,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}>{name}</div>
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.04em",
      color: "#6a6253",
    }}>{hex.toUpperCase()}</div>
  </div>
);

// ─── Palette card ──────────────────────────────────────────────────
const PaletteCard = ({ p }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: p.bg,
    display: "flex",
    flexDirection: "column",
    fontFamily: "Inter, sans-serif",
    color: p.ink,
  }}>
    {/* Header */}
    <div style={{
      padding: "24px 28px 18px",
      borderBottom: `1px solid ${p.ink}1f`,
    }}>
      <div style={{
        fontSize: 10,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: p.accent,
        fontWeight: 600,
        marginBottom: 8,
      }}>Palette</div>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 28,
        color: p.ink,
        letterSpacing: "-0.005em",
        lineHeight: 1.1,
        marginBottom: 8,
      }}>{p.name}</div>
      <div style={{ fontSize: 12, color: p.ink, opacity: 0.7, lineHeight: 1.5, maxWidth: 380 }}>{p.note}</div>
    </div>

    {/* Swatches */}
    <div style={{ padding: "22px 28px 0", display: "flex", gap: 10 }}>
      <Swatch color={p.ink} name={p.inkName} hex={p.ink} dark />
      <Swatch color={p.accent} name={p.accentName} hex={p.accent} dark />
      <Swatch color={p.bg} name={p.bgName} hex={p.bg} dark />
      <Swatch color={p.support} name={p.supportName} hex={p.support} dark />
    </div>

    {/* Logo on light */}
    <div style={{ padding: "28px 28px 16px", display: "flex", alignItems: "center", gap: 16 }}>
      <LLMark ink={p.ink} accent={p.accent} bg={p.bg} />
      <div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          color: p.ink,
          letterSpacing: "0.06em",
          lineHeight: 1,
        }}>LEXAMIN <span style={{ color: p.accent }}>LEGAL</span></div>
        <div style={{
          marginTop: 6,
          fontSize: 9,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: p.accent,
        }}>Residential Property · London</div>
      </div>
    </div>

    {/* In-context dark band — primary surface */}
    <div style={{
      marginTop: "auto",
      background: p.ink,
      padding: "22px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 14,
    }}>
      <div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 17,
          color: p.bg,
          letterSpacing: "0.05em",
          lineHeight: 1.1,
        }}>LEXAMIN <span style={{ color: p.accent }}>LEGAL</span></div>
        <div style={{
          marginTop: 4,
          fontSize: 9,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: p.accent,
          opacity: 0.9,
        }}>On {p.inkName}</div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button style={{
          background: p.accent,
          color: p.ink,
          border: "none",
          padding: "10px 16px",
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
          cursor: "default",
        }}>Get in touch</button>
        <button style={{
          background: "transparent",
          color: p.accent,
          border: `1px solid ${p.accent}`,
          padding: "10px 16px",
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
          cursor: "default",
        }}>About</button>
      </div>
    </div>

    {/* Support color row */}
    <div style={{
      background: p.support,
      padding: "10px 28px",
      fontSize: 9,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: p.bg,
      opacity: 0.85,
      display: "flex",
      justifyContent: "space-between",
    }}>
      <span>Support · {p.supportName}</span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0 }}>{p.support.toUpperCase()}</span>
    </div>
  </div>
);

const App = () => (
  <DesignCanvas>
    <DCSection
      id="palettes"
      title="Lexamin Legal — Colour palette options"
      subtitle="Eight directions. Each shown with swatches, logo on light + dark, and a sample CTA. Tap to expand."
    >
      {PALETTES.map(p => (
        <DCArtboard key={p.id} id={p.id} label={p.name} width={580} height={620}>
          <PaletteCard p={p} />
        </DCArtboard>
      ))}
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
