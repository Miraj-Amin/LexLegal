// Lexamin Legal — Business card mockups
// Each artboard shows FRONT + BACK of one card design, on a soft background
// so they read like physical cards. Standard UK 85×55mm aspect (~1.545:1).

const GOLD = "#c9a25f";
const GOLD_SOFT = "#b8923f";
const NAVY = "#0e1822";
const NAVY_DEEP = "#080f17";
const CREAM = "#f4f0e6";
const CREAM_WARM = "#ece6d6";
const INK = "#1a1612";

// ─── The Interlocked Cipher mark (Branch 8B) ───────────────────────
const CipherMark = ({ accent = GOLD, line = "rgba(244,240,230,0.28)", size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
    <rect x="3" y="3" width="94" height="94" fill="none" stroke={line} strokeWidth="1.4" />
    <rect x="26" y="22" width="9" height="56" fill={accent} />
    <rect x="26" y="69" width="36" height="9" fill={accent} />
    <g transform="rotate(180 50 50)">
      <rect x="26" y="22" width="9" height="56" fill={accent} opacity="0.6" />
      <rect x="26" y="69" width="36" height="9" fill={accent} opacity="0.6" />
    </g>
  </svg>
);

// ─── Card frame: physical-feel container ───────────────────────────
const Card = ({ bg, children, style }) => (
  <div style={{
    width: 460,
    height: 290,
    background: bg,
    boxShadow: "0 1px 0 rgba(255,255,255,0.4) inset, 0 18px 36px -16px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.18)",
    overflow: "hidden",
    position: "relative",
    fontFamily: "Inter, sans-serif",
    flexShrink: 0,
    ...style,
  }}>
    {children}
  </div>
);

const PhoneIcon = ({ c }) => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.91.36 1.79.7 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.27a2 2 0 0 1 2.11-.45c.84.34 1.72.57 2.63.7A2 2 0 0 1 22 16.92z"/></svg>;
const MailIcon = ({ c }) => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PinIcon = ({ c }) => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const LinkIcon = ({ c }) => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;

// QR placeholder
const QR = ({ c, bg, size = 56 }) => {
  const cells = [
    [1,1,1,1,1,0,1,0,1,0,1,1,1,1,1],
    [1,0,0,0,1,1,0,1,0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1,1,1,1,1,0,1,0,1],
    [1,0,1,0,1,0,0,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,1,1,0,0,1,1,0,0,0,1],
    [1,1,1,1,1,0,1,0,1,0,1,1,1,1,1],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
    [1,0,1,1,0,1,0,1,0,1,1,0,1,1,0],
    [0,1,1,0,1,0,1,1,1,0,0,1,1,0,1],
    [1,1,0,1,1,1,0,0,1,1,0,0,0,1,0],
    [0,0,0,0,0,0,1,0,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,0,0,1,0,0,0,1],
    [1,0,0,0,1,1,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,0,1,0,1,1,0,1,0,1],
    [1,1,1,1,1,0,1,1,1,0,1,1,1,1,1],
  ];
  const cs = size / cells.length;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <rect width={size} height={size} fill={bg} />
      {cells.flatMap((row, y) => row.map((v, x) =>
        v ? <rect key={`${x}-${y}`} x={x*cs} y={y*cs} width={cs} height={cs} fill={c} /> : null
      ))}
    </svg>
  );
};

// ─────────────────────────────────────────────────────────────────────
// CARD 01 — Classic (Navy front, Cream back)
// ─────────────────────────────────────────────────────────────────────
const Card01Front = () => (
  <Card bg={NAVY}>
    <div style={{ padding: 30, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 22 }}>
        <CipherMark accent={GOLD} line="rgba(244,240,230,0.22)" size={62} />
        <div style={{ borderLeft: "1px solid rgba(244,240,230,0.18)", paddingLeft: 22, paddingTop: 8 }}>
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: 22, color: CREAM,
            letterSpacing: "0.06em", lineHeight: 1,
          }}>LEXAMIN <span style={{ color: GOLD }}>LEGAL</span></div>
          <div style={{
            marginTop: 6, fontSize: 8, letterSpacing: "0.28em",
            textTransform: "uppercase", color: GOLD,
          }}>Residential Property · London</div>
        </div>
      </div>
      <div>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: 28, color: CREAM,
          letterSpacing: "-0.005em", lineHeight: 1,
        }}>Nikhil Amin</div>
        <div style={{
          marginTop: 8, fontSize: 9, letterSpacing: "0.28em",
          textTransform: "uppercase", color: GOLD, fontWeight: 500,
        }}>Consultant Residential Property Solicitor</div>
        <div style={{
          marginTop: 14, paddingTop: 12,
          borderTop: "1px solid rgba(201,162,95,0.3)",
          fontSize: 10, color: "rgba(244,240,230,0.6)",
          letterSpacing: "0.06em",
          fontStyle: "italic", fontFamily: "'Playfair Display', serif",
        }}>High-value · Time-critical · Deal-focused</div>
      </div>
    </div>
  </Card>
);

const Card01Back = () => (
  <Card bg={CREAM}>
    <div style={{ padding: 30, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 18, height: 18, border: `1px solid ${GOLD_SOFT}`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD_SOFT }}><PhoneIcon c={GOLD_SOFT} /></div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: NAVY }}>+44 (0) 7935 011 281</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 18, height: 18, border: `1px solid ${GOLD_SOFT}`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD_SOFT }}><MailIcon c={GOLD_SOFT} /></div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: NAVY }}>nikhil@lexaminlegal.com</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 18, height: 18, border: `1px solid ${GOLD_SOFT}`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD_SOFT }}><LinkIcon c={GOLD_SOFT} /></div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: NAVY }}>www.lexaminlegal.com</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 18, height: 18, border: `1px solid ${GOLD_SOFT}`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD_SOFT }}><PinIcon c={GOLD_SOFT} /></div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: NAVY }}>London · Surrey</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <QR c={NAVY} bg={CREAM} size={70} />
          <div style={{ fontSize: 7.5, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD_SOFT }}>Scan</div>
        </div>
      </div>
      <div style={{
        paddingTop: 14, borderTop: `1px solid ${GOLD_SOFT}33`,
        fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase",
        color: "#6a6253", textAlign: "center",
      }}>
        Trusted by agents for speed, certainty and communication
      </div>
    </div>
  </Card>
);

// ─────────────────────────────────────────────────────────────────────
// CARD 02 — Embossed Cipher (mark dominates)
// ─────────────────────────────────────────────────────────────────────
const Card02Front = () => (
  <Card bg={NAVY}>
    <div style={{ padding: 0, height: "100%", position: "relative" }}>
      {/* Giant mark, off-bleed */}
      <div style={{ position: "absolute", left: -30, top: -10, opacity: 0.95 }}>
        <CipherMark accent={GOLD} line="rgba(244,240,230,0.08)" size={320} />
      </div>
      <div style={{ position: "absolute", inset: 0, padding: 30, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: 18, color: CREAM,
          letterSpacing: "0.06em", lineHeight: 1, textAlign: "right",
        }}>LEXAMIN <span style={{ color: GOLD }}>LEGAL</span></div>
        <div style={{
          marginTop: 6, fontSize: 8, letterSpacing: "0.32em",
          textTransform: "uppercase", color: "rgba(201,162,95,0.85)", textAlign: "right",
        }}>Residential Property · London</div>
      </div>
    </div>
  </Card>
);

const Card02Back = () => (
  <Card bg={NAVY}>
    <div style={{ padding: 30, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: 32, color: CREAM,
          letterSpacing: "-0.005em", lineHeight: 1,
        }}>Nikhil <span style={{ color: GOLD, fontStyle: "italic" }}>Amin</span></div>
        <div style={{
          marginTop: 10, fontSize: 9, letterSpacing: "0.26em",
          textTransform: "uppercase", color: GOLD, fontWeight: 500,
        }}>Consultant · Residential Property</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: CREAM }}>
        <div>+44 (0) 7935 011 281</div>
        <div style={{ color: GOLD }}>nikhil@lexaminlegal.com</div>
        <div>www.lexaminlegal.com</div>
        <div style={{ color: "rgba(244,240,230,0.55)" }}>London / Surrey</div>
      </div>
    </div>
  </Card>
);

// ─────────────────────────────────────────────────────────────────────
// CARD 03 — Editorial (cream, type-led)
// ─────────────────────────────────────────────────────────────────────
const Card03Front = () => (
  <Card bg={CREAM}>
    <div style={{ padding: 0, height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Top thin gold band */}
      <div style={{ height: 6, background: GOLD }} />
      <div style={{ flex: 1, padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: 38, color: NAVY,
          letterSpacing: "-0.005em", lineHeight: 1, marginBottom: 6,
        }}>Lexamin <span style={{ fontStyle: "italic", color: GOLD_SOFT }}>Legal</span></div>
        <div style={{ width: 60, height: 1, background: GOLD_SOFT, margin: "12px 0 14px" }} />
        <div style={{
          fontSize: 9, letterSpacing: "0.36em",
          textTransform: "uppercase", color: GOLD_SOFT, fontWeight: 500,
        }}>Residential Property Solicitor</div>
      </div>
      <div style={{ height: 6, background: NAVY }} />
    </div>
  </Card>
);

const Card03Back = () => (
  <Card bg={CREAM}>
    <div style={{ padding: "30px 36px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: 24, color: NAVY,
          letterSpacing: "-0.005em", lineHeight: 1,
        }}>Nikhil Amin</div>
        <div style={{
          marginTop: 6, fontSize: 9, letterSpacing: "0.24em",
          textTransform: "uppercase", color: GOLD_SOFT, fontWeight: 500,
        }}>Consultant Solicitor</div>
        <div style={{
          marginTop: 8, fontSize: 9.5, color: "#6a6253",
          fontStyle: "italic", fontFamily: "'Playfair Display', serif",
        }}>via Taylor Rose &amp; Meadows &amp; Co</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5, fontSize: 11, color: NAVY, fontFamily: "'Playfair Display', serif" }}>
        <div>+44 (0) 7935 011 281</div>
        <div>nikhil@lexaminlegal.com</div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, paddingTop: 8, borderTop: `1px solid ${GOLD_SOFT}33`, fontSize: 8.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6a6253", fontFamily: "Inter, sans-serif" }}>
          <span>www.lexaminlegal.com</span>
          <span>London · Surrey</span>
        </div>
      </div>
    </div>
  </Card>
);

// ─────────────────────────────────────────────────────────────────────
// CARD 04 — Architect's (split vertical, ruled)
// ─────────────────────────────────────────────────────────────────────
const Card04Front = () => (
  <Card bg={CREAM}>
    <div style={{ height: "100%", display: "grid", gridTemplateColumns: "160px 1fr" }}>
      <div style={{ background: NAVY, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CipherMark accent={GOLD} line="rgba(244,240,230,0.18)" size={86} />
      </div>
      <div style={{ padding: "32px 30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{
            fontSize: 8.5, letterSpacing: "0.32em", textTransform: "uppercase",
            color: GOLD_SOFT, fontWeight: 600, marginBottom: 10,
          }}>Lexamin Legal</div>
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: 26, color: NAVY,
            letterSpacing: "-0.005em", lineHeight: 1.05,
          }}>Nikhil Amin</div>
          <div style={{
            marginTop: 8, fontSize: 9, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#6a6253",
          }}>Residential Property · Consultant</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: NAVY }}>
          <div>+44 7935 011 281</div>
          <div style={{ color: GOLD_SOFT }}>nikhil@lexaminlegal.com</div>
        </div>
      </div>
    </div>
  </Card>
);

const Card04Back = () => (
  <Card bg={CREAM}>
    <div style={{ height: "100%", display: "grid", gridTemplateColumns: "160px 1fr" }}>
      <div style={{ background: NAVY, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10 }}>
        <QR c={CREAM} bg={NAVY} size={86} />
        <div style={{ fontSize: 7.5, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>lexaminlegal.com</div>
      </div>
      <div style={{ padding: "32px 30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{
            fontSize: 8.5, letterSpacing: "0.32em", textTransform: "uppercase",
            color: GOLD_SOFT, fontWeight: 600, marginBottom: 14,
          }}>Practice areas</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 12, color: NAVY, lineHeight: 1.6 }}>
            Sales · Purchases<br />
            Leasehold · HNW<br />
            New Build · Refinance
          </div>
        </div>
        <div style={{ fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a8270", paddingTop: 10, borderTop: `1px solid ${GOLD_SOFT}33` }}>
          SRA Regulated · via Taylor Rose &amp; Meadows &amp; Co
        </div>
      </div>
    </div>
  </Card>
);

// ─────────────────────────────────────────────────────────────────────
// CARD 05 — Two-Tone Split (gold band)
// ─────────────────────────────────────────────────────────────────────
const Card05Front = () => (
  <Card bg={CREAM}>
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, padding: "26px 30px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CipherMark accent={GOLD_SOFT} line="rgba(14,24,34,0.15)" size={48} />
        <div style={{
          marginTop: 16,
          fontFamily: "'Playfair Display', serif", fontSize: 30, color: NAVY,
          letterSpacing: "-0.005em", lineHeight: 1,
        }}>Nikhil Amin</div>
        <div style={{
          marginTop: 8, fontSize: 9, letterSpacing: "0.26em",
          textTransform: "uppercase", color: GOLD_SOFT, fontWeight: 500,
        }}>Consultant Residential Property Solicitor</div>
      </div>
      <div style={{ background: NAVY, padding: "12px 30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: 14, color: CREAM,
          letterSpacing: "0.08em", lineHeight: 1,
        }}>LEXAMIN <span style={{ color: GOLD }}>LEGAL</span></div>
        <div style={{
          fontSize: 8, letterSpacing: "0.26em", textTransform: "uppercase", color: GOLD,
        }}>Est. 2026 · London</div>
      </div>
    </div>
  </Card>
);

const Card05Back = () => (
  <Card bg={NAVY}>
    <div style={{ padding: 30, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: 24, color: CREAM,
          fontStyle: "italic", letterSpacing: "-0.005em", lineHeight: 1.2,
          maxWidth: 320,
        }}>"Clear advice, strong communication, and keeping transactions moving."</div>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
        paddingTop: 18, borderTop: "1px solid rgba(201,162,95,0.25)",
      }}>
        <div>
          <div style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 4 }}>Contact</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 12, color: CREAM, lineHeight: 1.5 }}>
            +44 7935 011 281<br />
            nikhil@lexaminlegal.com
          </div>
        </div>
        <div>
          <div style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 4 }}>Coverage</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 12, color: CREAM, lineHeight: 1.5 }}>
            London · South West<br />
            London · Surrey
          </div>
        </div>
      </div>
    </div>
  </Card>
);

// ─────────────────────────────────────────────────────────────────────
// CARD 06 — Letterpress Traditional (heavy rules, lawyer-classic)
// ─────────────────────────────────────────────────────────────────────
const Card06Front = () => (
  <Card bg={CREAM_WARM}>
    <div style={{ padding: 22, height: "100%" }}>
      {/* Double border */}
      <div style={{ height: "100%", border: `1px solid ${NAVY}`, padding: 4 }}>
        <div style={{
          height: "100%", border: `1px solid ${NAVY}`,
          padding: "20px 26px", display: "flex", flexDirection: "column",
          justifyContent: "space-between", alignItems: "center", textAlign: "center",
        }}>
          <div>
            <div style={{ fontSize: 8, letterSpacing: "0.36em", textTransform: "uppercase", color: NAVY, fontWeight: 600 }}>— Established 2026 —</div>
            <div style={{
              marginTop: 14,
              fontFamily: "'Playfair Display', serif", fontSize: 34, color: NAVY,
              letterSpacing: "0.04em", lineHeight: 1, fontWeight: 500,
            }}>Lexamin Legal</div>
            <div style={{
              marginTop: 6, fontSize: 9.5, letterSpacing: "0.22em",
              textTransform: "uppercase", color: GOLD_SOFT, fontWeight: 500,
            }}>· Residential Property Solicitors ·</div>
          </div>
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif", fontStyle: "italic",
              fontSize: 18, color: NAVY, marginBottom: 2,
            }}>Nikhil Amin</div>
            <div style={{ fontSize: 8.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6a6253" }}>Consultant Solicitor</div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

const Card06Back = () => (
  <Card bg={CREAM_WARM}>
    <div style={{ padding: 22, height: "100%" }}>
      <div style={{ height: "100%", border: `1px solid ${NAVY}`, padding: 4 }}>
        <div style={{
          height: "100%", border: `1px solid ${NAVY}`,
          padding: "26px 30px", display: "flex", flexDirection: "column",
          justifyContent: "space-between", alignItems: "center", textAlign: "center",
        }}>
          <div>
            <CipherMark accent={NAVY} line="rgba(14,24,34,0.18)" size={50} />
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 11, color: NAVY, lineHeight: 1.7 }}>
            +44 (0) 7935 011 281<br />
            nikhil@lexaminlegal.com<br />
            <span style={{ fontStyle: "italic", color: "#6a6253" }}>London · Surrey</span>
          </div>
          <div style={{ fontSize: 8, letterSpacing: "0.32em", textTransform: "uppercase", color: GOLD_SOFT }}>· lexaminlegal.com ·</div>
        </div>
      </div>
    </div>
  </Card>
);

// ─── Artboard wrapper: surface + label ─────────────────────────────
const CardStage = ({ name, vibe, Front, Back, surfaceTone = "warm" }) => {
  const tone = surfaceTone === "warm" ? "#e8e0d2" : "#dad4c4";
  return (
    <div style={{
      width: "100%", height: "100%",
      background: `linear-gradient(135deg, ${tone}, #d6cdbb)`,
      padding: 28,
      fontFamily: "Inter, sans-serif",
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      gap: 22,
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div style={{
            fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
            color: GOLD_SOFT, fontWeight: 600, marginBottom: 4,
          }}>Business card</div>
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: 22, color: NAVY,
            letterSpacing: "-0.005em",
          }}>{name}</div>
        </div>
        <div style={{
          fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#6a6253", maxWidth: 260, textAlign: "right", lineHeight: 1.5,
        }}>{vibe}</div>
      </div>

      {/* Cards */}
      <div style={{
        display: "flex", gap: 40, alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        <div style={{ transform: "rotate(-1.2deg)" }}>
          <Front />
          <div style={{
            textAlign: "center", marginTop: 14,
            fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase",
            color: "#6a6253",
          }}>Front</div>
        </div>
        <div style={{ transform: "rotate(1.5deg)" }}>
          <Back />
          <div style={{
            textAlign: "center", marginTop: 14,
            fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase",
            color: "#6a6253",
          }}>Back</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        fontSize: 9, letterSpacing: "0.24em", textTransform: "uppercase",
        color: "#8a8270",
      }}>
        <span>85 × 55 mm · Standard UK</span>
        <span>450gsm matte · gold foil accent</span>
      </div>
    </div>
  );
};

const DESIGNS = [
  { id: "classic",   name: "Classic Lockup",       vibe: "Navy front · cream back.\nDirect, polished, scannable.",       Front: Card01Front, Back: Card01Back },
  { id: "embossed",  name: "Embossed Cipher",      vibe: "Mark dominates the front.\nBold, sealed, memorable.",          Front: Card02Front, Back: Card02Back },
  { id: "editorial", name: "Editorial Wordmark",   vibe: "Type-led, cream, twin rules.\nQuiet luxury.",                  Front: Card03Front, Back: Card03Back },
  { id: "architect", name: "Architect's Split",    vibe: "Vertical split with mark panel.\nStructured, considered.",     Front: Card04Front, Back: Card04Back },
  { id: "two-tone",  name: "Two-Tone Band",        vibe: "Cream front w/ navy footer band.\nApproachable but premium.",  Front: Card05Front, Back: Card05Back },
  { id: "letterpress", name: "Letterpress Traditional", vibe: "Heavy double-rule borders.\nLawyer-classic, deboss-ready.", Front: Card06Front, Back: Card06Back },
];

const App = () => (
  <DesignCanvas>
    <DCSection
      id="cards"
      title="Lexamin Legal — Business card mockups"
      subtitle="Six directions, each shown front + back. Navy & gold palette, Interlocked Cipher mark."
    >
      {DESIGNS.map(d => (
        <DCArtboard key={d.id} id={d.id} label={d.name} width={1080} height={500}>
          <CardStage
            name={d.name}
            vibe={<span style={{ whiteSpace: "pre-line" }}>{d.vibe}</span>}
            Front={d.Front}
            Back={d.Back}
          />
        </DCArtboard>
      ))}
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
