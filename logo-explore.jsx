// Lexamin Legal — Logo concept explorations
// Each concept is rendered standalone, shown on both dark + light surfaces,
// with a one-line rationale.

const { useState } = React;

const GOLD = "#c9a25f";
const GOLD_SOFT = "#b8923f";
const NAVY = "#0e1822";
const NAVY_DEEP = "#080f17";
const CREAM = "#f4f0e6";
const FOREST = "#1c3a2e";
const INK = "#1a1612";

// ──────────────────────────────────────────────────────────────────
// CONCEPT 01 — Editorial Wordmark
// ──────────────────────────────────────────────────────────────────
const ConceptEditorialWordmark = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 76,
        fontWeight: 400,
        letterSpacing: "0.02em",
        color: ink,
        lineHeight: 0.95,
      }}>
        Lexamin <span style={{ fontStyle: "italic", fontWeight: 400 }}>Legal</span>
      </div>
      <div style={{
        marginTop: 18,
        height: 1,
        width: 80,
        background: accent,
        marginLeft: "auto",
        marginRight: "auto",
      }} />
      <div style={{
        marginTop: 16,
        fontFamily: "Inter, sans-serif",
        fontSize: 10,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: accent,
      }}>
        Residential Property · London
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// CONCEPT 02 — Lex | Amin (Personal Lockup)
// ──────────────────────────────────────────────────────────────────
const ConceptLexAmin = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28 }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 64,
          fontWeight: 400,
          letterSpacing: "0.04em",
          color: ink,
          lineHeight: 1,
        }}>LEX</div>
        <div style={{ width: 1, height: 70, background: accent }} />
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 64,
          fontWeight: 400,
          letterSpacing: "0.04em",
          color: ink,
          lineHeight: 1,
        }}>AMIN</div>
      </div>
      <div style={{
        marginTop: 16,
        fontFamily: "Inter, sans-serif",
        fontSize: 11,
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color: accent,
        fontWeight: 500,
      }}>
        Legal
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// CONCEPT 03 — The Column
// ──────────────────────────────────────────────────────────────────
const ConceptColumn = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
      <svg width="58" height="120" viewBox="0 0 60 120" aria-hidden="true">
        {/* Capital top */}
        <rect x="6" y="6" width="48" height="3" fill={accent} />
        <rect x="10" y="11" width="40" height="2" fill={accent} />
        {/* Shaft with fluting */}
        <rect x="14" y="15" width="32" height="86" fill={accent} opacity="0.0" stroke={accent} strokeWidth="0.6" />
        <line x1="20" y1="15" x2="20" y2="101" stroke={accent} strokeWidth="0.8" />
        <line x1="26" y1="15" x2="26" y2="101" stroke={accent} strokeWidth="0.8" />
        <line x1="30" y1="15" x2="30" y2="101" stroke={accent} strokeWidth="0.8" />
        <line x1="34" y1="15" x2="34" y2="101" stroke={accent} strokeWidth="0.8" />
        <line x1="40" y1="15" x2="40" y2="101" stroke={accent} strokeWidth="0.8" />
        <line x1="14" y1="15" x2="14" y2="101" stroke={accent} strokeWidth="1.2" />
        <line x1="46" y1="15" x2="46" y2="101" stroke={accent} strokeWidth="1.2" />
        {/* Base */}
        <rect x="10" y="103" width="40" height="2" fill={accent} />
        <rect x="6" y="107" width="48" height="3" fill={accent} />
        <rect x="2" y="112" width="56" height="3" fill={accent} />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 38,
          fontWeight: 400,
          letterSpacing: "0.06em",
          color: ink,
          lineHeight: 1,
        }}>LEXAMIN LEGAL</div>
        <div style={{
          marginTop: 10,
          fontFamily: "Inter, sans-serif",
          fontSize: 9,
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          color: accent,
        }}>
          Residential Property Solicitor
        </div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// CONCEPT 04 — Geometric LL Monogram
// ──────────────────────────────────────────────────────────────────
const ConceptGeoLL = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  const lineCol = inverted ? "rgba(244,240,230,0.25)" : "rgba(14,24,34,0.2)";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
      <svg width="100" height="100" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="2" y="2" width="96" height="96" fill="none" stroke={lineCol} strokeWidth="1" />
        {/* First L */}
        <rect x="22" y="22" width="9" height="56" fill={accent} />
        <rect x="22" y="69" width="32" height="9" fill={accent} />
        {/* Second L, inset and lower */}
        <rect x="42" y="32" width="9" height="46" fill={accent} opacity="0.55" />
        <rect x="42" y="69" width="36" height="9" fill={accent} opacity="0.55" />
      </svg>
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

// ──────────────────────────────────────────────────────────────────
// CONCEPT 05 — The Arch (doorway/threshold)
// ──────────────────────────────────────────────────────────────────
const ConceptArch = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <svg width="160" height="80" viewBox="0 0 160 80" aria-hidden="true">
        {/* Arch outline */}
        <path d="M 10 78 L 10 50 Q 10 8 80 8 Q 150 8 150 50 L 150 78"
              fill="none" stroke={accent} strokeWidth="1.6" />
        {/* Inner shadow arch */}
        <path d="M 22 78 L 22 50 Q 22 20 80 20 Q 138 20 138 50 L 138 78"
              fill="none" stroke={accent} strokeWidth="0.7" opacity="0.5" />
        {/* Keystone */}
        <rect x="76" y="6" width="8" height="14" fill={accent} />
        {/* Base line */}
        <line x1="2" y1="78" x2="158" y2="78" stroke={accent} strokeWidth="1.2" />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 38,
          fontWeight: 400,
          letterSpacing: "0.04em",
          color: ink,
          lineHeight: 1,
        }}>Lexamin Legal</div>
        <div style={{
          marginTop: 10,
          fontFamily: "Inter, sans-serif",
          fontSize: 9,
          letterSpacing: "0.36em",
          textTransform: "uppercase",
          color: accent,
        }}>
          Solicitors · Est. 2026
        </div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// CONCEPT 06 — Citation Brackets
// ──────────────────────────────────────────────────────────────────
const ConceptBrackets = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28 }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 96,
          fontWeight: 300,
          color: accent,
          lineHeight: 0.7,
          marginTop: -8,
        }}>[</div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 44,
          fontWeight: 400,
          letterSpacing: "0.08em",
          color: ink,
          lineHeight: 1,
        }}>LEXAMIN<br/>
        <span style={{ fontStyle: "italic", letterSpacing: "0.04em", fontSize: 28, color: accent }}>legal</span>
        </div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 96,
          fontWeight: 300,
          color: accent,
          lineHeight: 0.7,
          marginTop: -8,
        }}>]</div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// CONCEPT 07 — Stacked Editorial Block
// ──────────────────────────────────────────────────────────────────
const ConceptStacked = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  const subInk = inverted ? "#a39c87" : "#6a6253";
  return (
    <div style={{ textAlign: "left", minWidth: 280 }}>
      <div style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 10,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: accent,
        fontWeight: 500,
      }}>— Established 2026</div>
      <div style={{
        marginTop: 12,
        fontFamily: "'Playfair Display', serif",
        fontSize: 64,
        fontWeight: 400,
        letterSpacing: "-0.005em",
        color: ink,
        lineHeight: 0.95,
      }}>Lexamin</div>
      <div style={{
        marginTop: 4,
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontSize: 64,
        fontWeight: 400,
        letterSpacing: "-0.005em",
        color: accent,
        lineHeight: 0.95,
      }}>Legal.</div>
      <div style={{
        marginTop: 18,
        paddingTop: 14,
        borderTop: `1px solid ${accent}`,
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Inter, sans-serif",
        fontSize: 10,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: subInk,
      }}>
        <span>Residential property</span>
        <span>London / Surrey</span>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// CONCEPT 08 — NA Initial Crest
// ──────────────────────────────────────────────────────────────────
const ConceptCrest = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      <svg width="100" height="100" viewBox="0 0 100 100" aria-hidden="true">
        {/* Shield */}
        <path d="M 50 6 L 90 14 L 90 56 Q 90 86 50 96 Q 10 86 10 56 L 10 14 Z"
              fill="none" stroke={accent} strokeWidth="1.4" />
        <path d="M 50 12 L 84 19 L 84 56 Q 84 81 50 90 Q 16 81 16 56 L 16 19 Z"
              fill="none" stroke={accent} strokeWidth="0.5" opacity="0.5" />
        {/* N */}
        <text x="34" y="62" fontFamily="Playfair Display, serif" fontSize="38" fontWeight="400" fill={accent} textAnchor="middle">N</text>
        {/* A */}
        <text x="66" y="62" fontFamily="Playfair Display, serif" fontSize="38" fontWeight="400" fontStyle="italic" fill={accent} textAnchor="middle">a</text>
        {/* Diamond */}
        <rect x="48" y="74" width="4" height="4" transform="rotate(45 50 76)" fill={accent} />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 30,
          fontWeight: 400,
          letterSpacing: "0.1em",
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
          Nikhil Amin · Solicitor
        </div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// CONCEPT 09 — Underline Mark (subtle, type-led)
// ──────────────────────────────────────────────────────────────────
const ConceptUnderline = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 62,
        fontWeight: 400,
        letterSpacing: "0.01em",
        color: ink,
        lineHeight: 1,
        position: "relative",
        display: "inline-block",
      }}>
        Lexamin Legal
        <span style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -10,
          height: 3,
          background: accent,
        }} />
        <span style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -18,
          height: 1,
          background: accent,
          opacity: 0.4,
        }} />
      </div>
      <div style={{
        marginTop: 32,
        fontFamily: "Inter, sans-serif",
        fontSize: 11,
        letterSpacing: "0.36em",
        textTransform: "uppercase",
        color: accent,
        fontWeight: 500,
      }}>
        Conveyancing · Leasehold · HNW
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// CONCEPT 10 — Wax Seal
// ──────────────────────────────────────────────────────────────────
const ConceptSeal = ({ inverted }) => {
  const ink = inverted ? CREAM : NAVY;
  const accent = inverted ? GOLD : GOLD_SOFT;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
      <svg width="110" height="110" viewBox="0 0 110 110" aria-hidden="true">
        <circle cx="55" cy="55" r="48" fill="none" stroke={accent} strokeWidth="1.3" />
        <circle cx="55" cy="55" r="42" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.6" />
        {/* Curved top text using textPath */}
        <defs>
          <path id="ringTop" d="M 17 55 A 38 38 0 0 1 93 55" fill="none" />
          <path id="ringBot" d="M 17 55 A 38 38 0 0 0 93 55" fill="none" />
        </defs>
        <text fill={accent} fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="3">
          <textPath href="#ringTop" startOffset="50%" textAnchor="middle">LEXAMIN · LEGAL</textPath>
        </text>
        <text fill={accent} fontFamily="Inter, sans-serif" fontSize="6" letterSpacing="2.5">
          <textPath href="#ringBot" startOffset="50%" textAnchor="middle">LONDON · SURREY · ESTABLISHED 2026</textPath>
        </text>
        {/* Center monogram */}
        <text x="55" y="64" textAnchor="middle"
              fontFamily="Playfair Display, serif"
              fontSize="36" fontWeight="400" fill={accent}>L</text>
        {/* Decorative flourish */}
        <line x1="40" y1="32" x2="70" y2="32" stroke={accent} strokeWidth="0.5" />
        <line x1="40" y1="78" x2="70" y2="78" stroke={accent} strokeWidth="0.5" />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 28,
          fontWeight: 400,
          letterSpacing: "0.12em",
          color: ink,
          lineHeight: 1,
        }}>LEXAMIN LEGAL</div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// Concept wrapper — show on dark + light, with rationale
// ──────────────────────────────────────────────────────────────────
const ConceptCard = ({ index, name, vibe, Component }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: CREAM,
    display: "grid",
    gridTemplateRows: "auto 1fr 1fr auto",
    fontFamily: "Inter, sans-serif",
  }}>
    {/* Header */}
    <div style={{
      padding: "20px 26px",
      borderBottom: `1px solid rgba(14,24,34,0.08)`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
    }}>
      <div>
        <div style={{
          fontSize: 10,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: GOLD_SOFT,
          fontWeight: 500,
          marginBottom: 4,
        }}>Concept {String(index).padStart(2, "0")}</div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          color: NAVY,
          letterSpacing: "-0.005em",
        }}>{name}</div>
      </div>
      <div style={{
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#6a6253",
        textAlign: "right",
        maxWidth: 220,
        lineHeight: 1.5,
      }}>{vibe}</div>
    </div>

    {/* Dark surface */}
    <div style={{
      background: NAVY,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", top: 10, left: 14,
        fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase",
        color: "rgba(244,240,230,0.32)",
      }}>On Navy</div>
      <Component inverted={true} />
    </div>

    {/* Light surface */}
    <div style={{
      background: CREAM,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      position: "relative",
      borderTop: `1px solid rgba(14,24,34,0.08)`,
    }}>
      <div style={{
        position: "absolute", top: 10, left: 14,
        fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase",
        color: "rgba(14,24,34,0.32)",
      }}>On Cream</div>
      <Component inverted={false} />
    </div>
  </div>
);

// ──────────────────────────────────────────────────────────────────
// Concept registry
// ──────────────────────────────────────────────────────────────────
const CONCEPTS = [
  {
    id: "editorial-wordmark",
    name: "Editorial Wordmark",
    vibe: "Type-only. Confident.<br/>Lets the name do the work.",
    Component: ConceptEditorialWordmark,
  },
  {
    id: "lex-amin",
    name: "Lex · Amin",
    vibe: "Personal lockup. Reads as<br/>a chambers nameplate.",
    Component: ConceptLexAmin,
  },
  {
    id: "stacked",
    name: "Stacked Editorial",
    vibe: "Magazine block. Modern,<br/>structured, very current.",
    Component: ConceptStacked,
  },
  {
    id: "underline",
    name: "Underline Mark",
    vibe: "Quiet. The accent rule does<br/>the heavy lifting.",
    Component: ConceptUnderline,
  },
  {
    id: "brackets",
    name: "Citation Brackets",
    vibe: "Lawyerly. References<br/>legal citation style.",
    Component: ConceptBrackets,
  },
  {
    id: "column",
    name: "The Column",
    vibe: "Architectural. Classical<br/>property reference.",
    Component: ConceptColumn,
  },
  {
    id: "arch",
    name: "The Arch",
    vibe: "Threshold / doorway.<br/>Residential metaphor.",
    Component: ConceptArch,
  },
  {
    id: "geo-ll",
    name: "Geometric LL",
    vibe: "Minimal contemporary<br/>monogram in a frame.",
    Component: ConceptGeoLL,
  },
  {
    id: "crest",
    name: "NA Crest",
    vibe: "Personal shield with<br/>Nikhil's initials.",
    Component: ConceptCrest,
  },
  {
    id: "seal",
    name: "Wax Seal",
    vibe: "Traditional, ceremonial.<br/>Trust-forward.",
    Component: ConceptSeal,
  },
];

const App = () => {
  return (
    <DesignCanvas>
      <DCSection
        id="explore"
        title="Lexamin Legal — Logo concepts"
        subtitle="10 directions. Each shown at scale on navy + cream. Tap any card to expand."
      >
        {CONCEPTS.map((c, i) => (
          <DCArtboard key={c.id} id={c.id} label={c.name} width={680} height={560}>
            <ConceptCard
              index={i + 1}
              name={c.name}
              vibe={<span dangerouslySetInnerHTML={{ __html: c.vibe }} />}
              Component={c.Component}
            />
          </DCArtboard>
        ))}
      </DCSection>
    </DesignCanvas>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
