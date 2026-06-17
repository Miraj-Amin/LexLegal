// Lexamin Legal — Logo lockups
// Primary brand mark is the gold "LL" monogram supplied by the client.
// The legacy SVG directions are kept below for reference but the mark now
// always renders the final artwork, regardless of the `direction` prop.

const LL_MARK_SRC = "images/lexamin-ll-mark.png";

const LogoMark = ({ direction = "cipher", color = "currentColor", accent = "#c9a25f", size = 48, animated = false }) => {
  // Final brand mark: gold LL monogram. Width tracks the artwork's aspect
  // ratio (484×515) so it never distorts at any size.
  return (
    <img
      src={LL_MARK_SRC}
      alt="Lexamin Legal"
      width={Math.round(size * (484 / 515))}
      height={size}
      style={{ display: "block", width: "auto", height: size, objectFit: "contain" }}
    />
  );
};

const LegacyLogoMark = ({ direction = "cipher", color = "currentColor", accent = "#c9a25f", size = 48, animated = false }) => {
  if (direction === "cipher") {
    // Branch 8B — Interlocked Cipher: one L upright, one rotated 180°,
    // overlapping inside a square frame. Wax-stamp / sealed feel.
    const line = color === "#f4f0e6" || color === "currentColor"
      ? "rgba(244,240,230,0.28)"
      : "rgba(14,24,34,0.22)";
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true"
           className={animated ? "cipher-svg cipher-animated" : "cipher-svg"}>
        <rect className="cipher-frame" x="3" y="3" width="94" height="94" fill="none" stroke={line} strokeWidth="1.4" />
        <g className="cipher-l1">
          <rect x="26" y="22" width="9" height="56" fill={accent} />
          <rect x="26" y="69" width="36" height="9" fill={accent} />
        </g>
        <g className="cipher-l2" transform="rotate(180 50 50)">
          <rect x="26" y="22" width="9" height="56" fill={accent} opacity="0.6" />
          <rect x="26" y="69" width="36" height="9" fill={accent} opacity="0.6" />
        </g>
      </svg>
    );
  }
  if (direction === "house") {
    // L + reversed L = walls. A = roof. Architectural mark for a property practice.
    const sw = 7;
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        {/* A roof — pitched lines meeting at apex */}
        <path d="M 18 46 L 50 8 L 82 46"
              stroke={accent} strokeWidth={sw}
              strokeLinejoin="miter" strokeLinecap="square"
              fill="none" />
        {/* A crossbar */}
        <rect x="32" y="29" width="36" height={sw - 1} fill={accent} />
        {/* Left L wall */}
        <rect x="22" y="46" width={sw + 1} height="38" fill={accent} />
        {/* Right reversed L wall */}
        <rect x="71" y="46" width={sw + 1} height="38" fill={accent} />
        {/* Joined L feet — the floor */}
        <rect x="22" y="84" width="56" height={sw - 1} fill={accent} />
        {/* Subtle ground shadow line */}
        <line x1="14" y1={92} x2="86" y2={92} stroke={color} strokeWidth="0.6" opacity="0.4" />
      </svg>
    );
  }
  if (direction === "authority") {
    // Two columns of L (mirrored) with vertical pillar between — "structured authority"
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        {/* Left L */}
        <path d="M 18 18 L 28 18 L 28 72 L 50 72 L 50 82 L 18 82 Z"
              fill={accent} />
        {/* Pillar */}
        <rect x="49" y="14" width="2" height="72" fill={color} opacity="0.5" />
        {/* Right mirrored L */}
        <path d="M 82 18 L 72 18 L 72 72 L 50 72 L 50 82 L 82 82 Z"
              fill={accent} opacity="0.95" />
        {/* Top serif caps */}
        <rect x="14" y="14" width="18" height="3" fill={accent} />
        <rect x="68" y="14" width="18" height="3" fill={accent} />
      </svg>
    );
  }
  if (direction === "heritage") {
    // Circular seal with interlocking L L
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="44" fill="none" stroke={accent} strokeWidth="1.5" />
        <circle cx="50" cy="50" r="38" fill="none" stroke={accent} strokeWidth="0.6" opacity="0.6" />
        {/* Left L */}
        <path d="M 32 28 L 38 28 L 38 62 L 52 62 L 52 68 L 32 68 Z"
              fill={accent} />
        {/* Right L (mirrored, overlapping slightly) */}
        <path d="M 68 28 L 62 28 L 62 62 L 48 62 L 48 68 L 68 68 Z"
              fill={accent} opacity="0.9" />
        {/* Decorative diamond */}
        <rect x="49" y="73" width="2" height="2" transform="rotate(45 50 74)" fill={accent} />
        <rect x="49" y="25" width="2" height="2" transform="rotate(45 50 26)" fill={accent} />
      </svg>
    );
  }
  // contemporary edge: L X L
  return (
    <svg width={size} height={size} viewBox="0 0 120 100" aria-hidden="true">
      <text x="6" y="76" fontFamily="Playfair Display, serif" fontSize="68" fontWeight="400" fill={accent}>L</text>
      <text x="46" y="76" fontFamily="Playfair Display, serif" fontSize="44" fontStyle="italic" fontWeight="400" fill={color}>x</text>
      <text x="78" y="76" fontFamily="Playfair Display, serif" fontSize="68" fontWeight="400" fill={accent}>L</text>
      <line x1="6" y1="86" x2="114" y2="86" stroke={accent} strokeWidth="0.8" />
    </svg>
  );
};

// Full horizontal lockup for nav / footer
const LogoLockup = ({ direction = "cipher", inverted = false, compact = false, animated = false }) => {
  const ink = inverted ? "#f4f0e6" : "#0e1822";
  const gold = "#c9a25f";
  const tagline = {
    cipher: "Property law, without the drama.",
    house: "Foundations in residential property.",
    authority: "Precision. Strategy. Results.",
    heritage: "Solicitors for life's moving parts",
    edge: "Property. People. Performance."
  }[direction];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, height: "100%" }}>
      <LogoMark direction={direction} color={ink} accent={gold} size={compact ? 36 : 44} animated={animated} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: `1px solid ${inverted ? "rgba(244,240,230,0.2)" : "rgba(14,24,34,0.15)"}`, paddingLeft: 14, height: compact ? 36 : 44 }}>
        <div style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: compact ? 16 : 19,
          color: ink,
          letterSpacing: "0.05em",
          lineHeight: 1,
          fontWeight: 400
        }}>
          LEXAMIN <span style={{ color: gold }}>LEGAL</span>
        </div>
        {!compact && (
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: inverted ? "#9e9580" : "#8a8270",
            marginTop: 6
          }}>
            {tagline}
          </div>
        )}
      </div>
    </div>
  );
};

// Large display lockup for hero, etc.
const LogoDisplay = ({ direction = "cipher", inverted = true }) => {
  const ink = inverted ? "#f4f0e6" : "#0e1822";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18 }}>
      <LogoMark direction={direction} color={ink} accent="#c9a25f" size={84} />
    </div>
  );
};

Object.assign(window, { LogoMark, LogoLockup, LogoDisplay });
