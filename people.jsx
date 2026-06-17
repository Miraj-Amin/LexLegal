// Lexamin Legal — People page (motion-rich)

const { useEffect } = React;

const PEOPLE_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoDirection": "cipher",
  "theme": "navy"
} /*EDITMODE-END*/;

// ===== HERO =====
const PeopleHero = () =>
<header className="people-hero">
    <div className="wrap">
      <div className="people-hero-grid">
        <div>
          <Reveal>
            <div className="sec-tag">
              <span className="bracket">[</span>
              <ScrambleText text="LEX.PPL" />
              <span className="bracket">/</span>
              <span>The people</span>
              <span className="bracket">]</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1>A small, senior team — <em>by design.</em></h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="hero-lede">
              Lexamin Legal is growing carefully. Every name on this page handles
              their files personally — clients, agents and brokers always know
              who they're speaking to, and why.
            </p>
          </Reveal>
        </div>
        <div className="people-hero-stats">
          <Reveal delay={120}>
            <div className="stat-row">
              <div className="stat-num">
                <Counter to={window.SOLICITORS.length} />
              </div>
              <div className="stat-lbl">Solicitor{window.SOLICITORS.length === 1 ? "" : "s"} on the team</div>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="stat-row">
              <div className="stat-num">
                <Counter to={15} /><span style={{ fontSize: 18 }}>yrs</span>
              </div>
              <div className="stat-lbl">Combined senior experience</div>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="stat-row">
              <div className="stat-num">
                <Counter to={100} />%
              </div>
              <div className="stat-lbl">Files handled by a named solicitor</div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </header>;


// ===== SOLICITOR PROFILE =====
const SolicitorProfile = ({ s, index }) =>
<article className="profile" id={s.id}>
    <div className="wrap">
      <div className="profile-grid">
        <aside className="profile-aside">
          <Reveal kind="up">
            <div className="profile-portrait">
              {s.portrait ?
            <img src={s.portrait} alt={s.name} /> :

            <div className="placeholder-label">
                  <strong>{s.name}</strong>
                  portrait
                </div>
            }
              {s.badge && <div className="profile-badge">{s.badge}</div>}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="profile-contact">
              <div className="contact-line">
                <span className="lbl">Direct</span>
                <a href={`tel:${s.contact.phone.replace(/[^+\d]/g, "")}`}>{s.contact.phone}</a>
              </div>
              <div className="contact-line">
                <span className="lbl">Email</span>
                <a href={`mailto:${s.contact.email}`}>{s.contact.email}</a>
              </div>
              <div className="contact-line">
                <span className="lbl">Coverage</span>
                <span>{s.contact.coverage}</span>
              </div>
            </div>
          </Reveal>
        </aside>
        <div className="profile-main">
          <div className="profile-head">
            <Reveal>
              <div className="sec-tag">
                <span className="bracket">[</span>
                <ScrambleText text={`PPL.0${index + 1}`} />
                <span className="bracket">/</span>
                <span>Solicitor</span>
                <span className="bracket">]</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2>{s.name}</h2>
            </Reveal>
            <Reveal delay={220}>
              <div className="profile-role">{s.role}</div>
            </Reveal>
          </div>
          <div className="profile-bio">
            {s.bio.map((p, i) =>
          <Reveal key={i} delay={100 + i * 80}>
                <p>{p}</p>
              </Reveal>
          )}
          </div>
          <Reveal>
            <div className="profile-specs">
              <div className="specs-label">Particular experience</div>
              <ul>
                {s.specialisms.map((sp, i) =>
              <li key={sp} style={{ transitionDelay: `${i * 60}ms` }}>{sp}</li>
              )}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="profile-timeline">
              <div className="specs-label">Career</div>
              {s.roles.map((r, i) =>
            <div className="tl-row" key={i}>
                  <div className="tl-dates">
                    {r.dates}
                    <span className="duration">{r.duration}</span>
                  </div>
                  <div className="tl-content">
                    <h3>{r.title}</h3>
                    <div className="firm">{r.firm} <span>/</span> {r.mode}</div>
                    {r.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
            )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </article>;


// ===== GROWING THE PRACTICE =====
const Growing = () => {
  const spotRef = useSpotlight();
  return (
    <section className="growing spotlight" ref={spotRef}>
      <div className="wrap">
        <div className="growing-grid">
          <div>
            <Reveal>
              <div className="sec-tag">
                <span className="bracket">[</span>
                <ScrambleText text="PPL.CAR" />
                <span className="bracket">/</span>
                <span>Joining the practice</span>
                <span className="bracket">]</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2>We hire carefully — <em>and rarely.</em></h2>
            </Reveal>
          </div>
          <div className="growing-body">
            <Reveal delay={120}>
              <p>
                Lexamin Legal is built around a single principle: clients deal
                with the solicitor who's actually doing the work. As we grow,
                every addition is chosen for the same approach — calm under
                pressure, commercially minded, and genuinely responsive.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p>
                If you're a senior residential property solicitor with a portable
                following and you're tired of being a cog, we'd be glad to hear
                from you. Everything stays confidential.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div style={{ marginTop: 24 }}>
                <a href="mailto:careers@lexaminlegal.com" className="btn btn-light" data-magnetic>
                  Confidential enquiries →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

};

// ===== APP =====
const PeopleApp = () => {
  const [t, setTweak] = useTweaks(PEOPLE_TWEAK_DEFAULTS);

  useEffect(() => {
    const cls = [];
    if (t.theme === "heritage") cls.push("theme-heritage");
    document.body.className = cls.join(" ");
  }, [t.theme]);

  const inverted = t.theme !== "heritage";

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <LogoFlash />
      <NavBar logoDirection={t.logoDirection} inverted={inverted} current="people" />
      <main id="main">
      <PeopleHero />
      {window.SOLICITORS.map((s, i) =>
        <SolicitorProfile key={s.id} s={s} index={i} />
        )}
      <Growing />
      </main>
      <FooterBar logoDirection={t.logoDirection} />
      <FloatingWhatsApp />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Logo direction">
          <TweakSelect
            label="Mark"
            value={t.logoDirection}
            onChange={(v) => setTweak("logoDirection", v)}
            options={[
            { value: "cipher", label: "Interlocked Cipher (8B)" },
            { value: "house", label: "House (L·A·L)" },
            { value: "authority", label: "Structured Authority" },
            { value: "heritage", label: "Modern Heritage" },
            { value: "edge", label: "Contemporary Edge" }]
            } />
        </TweakSection>
        <TweakSection label="Theme">
          <TweakRadio
            label="Palette"
            value={t.theme}
            onChange={(v) => setTweak("theme", v)}
            options={[
            { value: "navy", label: "Navy + Gold" },
            { value: "heritage", label: "Cream-first" }]
            } />
        </TweakSection>
      </TweaksPanel>
    </>);

};

ReactDOM.createRoot(document.getElementById("root")).render(<PeopleApp />);