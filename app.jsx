// Lexamin Legal — Homepage (firm-led, motion-rich)

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoDirection": "cipher",
  "theme": "navy",
  "heroLayout": "split",
  "showPrinciples": true,
  "accentHue": "gold",
  "liquidGlass": true
} /*EDITMODE-END*/;

// Helper: split h1 into per-word spans for reveal mask.
const HERO_WORDS = [
["Residential", false], ["property", false], ["law,", false],
["delivered", true], ["without", true], ["the", true], ["drama.", true]];


// ===== HERO =====
const Hero = () => {
  const heroRef = useReveal({ delay: 60 });
  const h1Ref = useReveal({ delay: 100 });
  const ledeRef = useReveal({ delay: 300, kind: "up" });
  const ctaRef = useReveal({ delay: 450 });
  const metaRef = useReveal({ delay: 100, threshold: 0.4 });
  const cardRef = useReveal({ delay: 250, kind: "left" });

  return (
    <header className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="sec-tag reveal reveal-up" ref={heroRef}>
              <span className="bracket">[</span>
              <ScrambleText text="LEX.001" duration={1200} />
              <span className="bracket">/</span>
              <span>Residential Property · London &amp; Surrey</span>
              <span className="bracket">]</span>
            </div>
            <h1 ref={h1Ref}>
              {HERO_WORDS.map(([w, italic], i) =>
              <span className="word" key={i}>
                  <span
                  style={{ transitionDelay: `${100 + i * 80}ms` }}
                  className={italic ? "italic-gold" : ""}>
                  
                    {w}{i < HERO_WORDS.length - 1 ? "\u00A0" : ""}
                  </span>
                </span>
              )}
            </h1>
            <p className="hero-lede reveal reveal-up" ref={ledeRef} style={{ textAlign: "justify" }}>
              Sales, purchases, remortgages, transfers of equity and
              property-related certification services across London, Surrey
              and Croydon. Clear advice. Fast communication. Deal-focused
              execution.
            </p>
            <div className="hero-cta reveal reveal-up" ref={ctaRef}>
              <a href="Services.html#quote" className="btn btn-solid" data-magnetic>Request a property quote</a>
              <a href="Agents.html#refer" className="btn" data-magnetic>Refer a client</a>
              <a href="Certification.html#book" className="btn" data-magnetic>Book certification</a>
            </div>
            <div className="hero-meta" ref={metaRef}>
              <Reveal delay={50}>
                <div className="num">
                  <Counter to={15} />
                  <span style={{ fontSize: 20 }}>yrs</span>
                </div>
                <div className="lbl">Founding experience</div>
              </Reveal>
              <Reveal delay={150}>
                <div className="num">
                  £<Counter to={20} />M+
                </div>
                <div className="lbl">Prime transactions</div>
              </Reveal>
              <Reveal delay={250}>
                <div className="num">
                  <Counter to={2} />
                </div>
                <div className="lbl">Practising firms</div>
              </Reveal>
            </div>
          </div>
          <aside className="hero-card reveal reveal-left" ref={cardRef}>
            <span className="corner tl" aria-hidden="true" />
            <span className="corner tr" aria-hidden="true" />
            <span className="corner bl" aria-hidden="true" />
            <span className="corner br" aria-hidden="true" />
            <div className="hero-portrait" style={{ alignItems: "flex-end", paddingBottom: 30 }}>
              <div className="placeholder-label">
                <strong>South London imagery</strong>
                Practice / locale photography<br />
                drop image here
              </div>
            </div>
            <div className="hero-card-foot">
              <div>
                <div className="name">Lexamin Legal</div>
                <div className="role">Residential Property · Est. 2026</div>
              </div>
              <div className="sra">
                Via SRA-regulated<br />
                firms — Taylor Rose<br />
                &amp; Meadows Ryan
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>);

};

// ===== ABOUT =====
const About = () =>
<section className="about" id="about">
    <div className="wrap">
      <div className="about-grid" style={{ textAlign: "left" }}>
        <div>
          <Reveal>
            <div className="sec-tag">
              <span className="bracket">[</span>
              <ScrambleText text="LEX.002" />
              <span className="bracket">/</span>
              <span>The practice</span>
              <span className="bracket">]</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2>Calm, commercial, <em>and on top of it.</em></h2>
          </Reveal>
        </div>
        <div className="about-body">
          <Reveal delay={120}>
            <p style={{ textAlign: "justify" }}>
              Lexamin Legal is a <strong>focused residential property practice</strong>{" "}
              for families, investors, developers and high-net-worth clients
              on the moves that matter — across London, South West London,
              Surrey and beyond.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p style={{ textAlign: "justify" }}>
              We work with the discipline of a large-firm property team and the
              responsiveness of a smaller practice. <strong>No paralegal queue,
              no diluted attention</strong> — every instruction sits with a
              named solicitor who knows your file.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p style={{ textAlign: "justify" }}>
              Property transactions become unnecessarily stressful when
              communication breaks down or issues are left unresolved for too
              long. Our job is to stay ahead of problems, work closely with
              agents and brokers, and protect momentum in the deal.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <div className="signature">
              <div>
                <div className="sig-name">Founded 2026</div>
                <div className="sig-role">By Nikhil Amin · Solicitor</div>
              </div>
              <div className="sig-firms">
                <span className="label">Practising via</span>
                <span>Taylor Rose</span>
                <span>Meadows &amp; Co</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>;


// ===== MARQUEE strip between About and Services =====
const PracticeStrip = () =>
<Marquee
  items={[
  "Sales & Purchases",
  "Leasehold Matters",
  "High-Value & HNW",
  "New Build & Off-Plan",
  "Transfers of Equity",
  "Refinance & Portfolio",
  "Auction Property",
  "Title Investigation"]
  } />;



// ===== SERVICES =====
const SERVICES = [
{ num: "01", title: "Sales & Purchases", body: "Family moves, prime residential and time-sensitive transactions where pace and certainty matter. From offer accepted through to completion." },
{ num: "02", title: "Leasehold Matters", body: "Lease extensions, complex leasehold structures, problematic clauses and the title issues that surface only when a buyer's solicitor starts asking." },
{ num: "03", title: "High-Value & HNW", body: "Prime residential purchases and sales for high-net-worth individuals — structured to manage privacy, timing and counterparties carefully." },
{ num: "04", title: "New Build & Off-Plan", body: "Reservations, contract review, build-stage advice and completion mechanics for new build and off-plan purchases." },
{ num: "05", title: "Transfers of Equity", body: "Adding, removing or restructuring legal owners — including matters tied to family arrangements, trusts and mortgage requirements." },
{ num: "06", title: "Refinance & Portfolio", body: "Single-property remortgages through to portfolio refinancing for investors and landlords, with lender liaison and security review." },
{ num: "07", title: "Auction Property", body: "Pre-auction legal pack reviews, fast turnarounds for buyers and sellers, and post-auction completion under the auctioneer's clock." },
{ num: "08", title: "Title Investigation", body: "Defective title, missing documentation, rights of way, restrictive covenants and rectification work — getting matters to a saleable state." },
{ num: "09", title: "Professional Partner", body: "Working alongside estate agents, mortgage brokers, financial advisers and accountants as a reliable, responsive referral relationship." }];


const Services = () => {
  const spotRef = useSpotlight();
  return (
    <section className="services spotlight" id="services" ref={spotRef}>
      <div className="wrap">
        <div className="services-head">
          <div>
            <Reveal>
              <div className="sec-tag">
                <span className="bracket">[</span>
                <ScrambleText text="LEX.003" />
                <span className="bracket">/</span>
                <span>Practice areas</span>
                <span className="bracket">]</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2>The work we do, <em>day in, day out.</em></h2>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <p style={{ textAlign: "justify" }}>
              A focused residential property practice — from first-time buyers
              finding their footing to prime transactions where there's no margin
              for delay. Each instruction is handled by a named solicitor personally.
            </p>
          </Reveal>
        </div>
        <div className="service-grid">
          {SERVICES.map((s, i) =>
          <Reveal key={s.num} delay={i * 70} className="service-wrap" style={{ "--i": i }}>
              <div className="service">
                <div className="num">{s.num} —</div>
                <h3>{s.title}</h3>
                <p style={{ textAlign: "justify" }}>{s.body}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};

// ===== PRINCIPLES =====
const PRINCIPLES = [
{ n: "i.", title: "Clear advice", body: "Plain English on technical points. You always know where you stand and what comes next." },
{ n: "ii.", title: "Strong communication", body: "Direct lines to your solicitor — not a paralegal queue. Agents and brokers get updates without chasing." },
{ n: "iii.", title: "Momentum first", body: "Stay ahead of problems. Surface issues early. Push the transaction calmly forward." },
{ n: "iv.", title: "Commercial mind", body: "Knowing when to dig in on a point and when to find the pragmatic answer that closes the deal." }];


const Principles = () =>
<section className="principles">
    <div className="wrap">
      <div className="principles-grid">
        {PRINCIPLES.map((p, i) =>
      <Reveal key={p.n} delay={i * 100}>
            <div className="principle">
              <div className="num">{p.n}</div>
              <h4>{p.title}</h4>
              <p style={{ textAlign: "justify" }}>{p.body}</p>
            </div>
          </Reveal>
      )}
      </div>
    </div>
  </section>;


// ===== PEOPLE PREVIEW =====
const PeoplePreview = () => {
  const list = (window.SOLICITORS || []).slice(0, 3);
  return (
    <section className="people-preview">
      <div className="wrap">
        <div className="exp-head">
          <div>
            <Reveal>
              <div className="sec-tag">
                <span className="bracket">[</span>
                <ScrambleText text="LEX.004" />
                <span className="bracket">/</span>
                <span>Our people</span>
                <span className="bracket">]</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2>A small, senior team. <em>By design.</em></h2>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <a href="People.html" className="btn btn-light" data-magnetic>
              Meet everyone →
            </a>
          </Reveal>
        </div>
        <div className="people-row">
          {list.map((s, i) =>
          <Reveal key={s.id} delay={i * 120}>
              <a href={`People.html#${s.id}`} className="person-card">
                <div className="person-portrait">
                  {s.portrait ?
                <img src={s.portrait} alt={s.name} /> :

                <div className="placeholder-label">
                      <strong>{s.name}</strong>
                      portrait
                    </div>
                }
                </div>
                <div className="person-meta">
                  <div className="person-name">{s.name}</div>
                  <div className="person-role">{s.role}</div>
                  <p className="person-blurb" style={{ textAlign: "justify" }}>{s.summary}</p>
                  <div className="person-link">View profile →</div>
                </div>
              </a>
            </Reveal>
          )}
          {list.length < 3 && Array.from({ length: 3 - list.length }).map((_, i) =>
          <Reveal key={`coming-${i}`} delay={(list.length + i) * 120}>
              <div className="person-card person-card-coming">
                <div className="person-portrait person-portrait-coming">
                  <div className="placeholder-label">
                    <strong>Joining the practice</strong>
                    selective additions
                  </div>
                </div>
                <div className="person-meta">
                  <div className="person-name" style={{ color: "var(--gold)" }}>To be announced</div>
                  <div className="person-role">Solicitor</div>
                  <p className="person-blurb">We're growing carefully — adding solicitors who share the practice's approach to client service and deal momentum.</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};

// ===== CONTACT =====
const PhoneIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.91.36 1.79.7 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.27a2 2 0 0 1 2.11-.45c.84.34 1.72.57 2.63.7A2 2 0 0 1 22 16.92z" /></svg>;
const MailIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const PinIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const LinkIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>;

const Contact = () => {
  const spotRef = useSpotlight();
  return (
    <section className="contact spotlight" id="contact" ref={spotRef}>
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <Reveal>
              <div className="sec-tag">
                <span className="bracket">[</span>
                <ScrambleText text="LEX.005" />
                <span className="bracket">/</span>
                <span>Get in touch</span>
                <span className="bracket">]</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2>Have a transaction that <em>needs to move?</em></h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="contact-lede" style={{ textAlign: "justify" }}>
                Whether you're a client, an estate agent, a broker or a fellow
                professional, we're happy to talk it through. Send a note with the
                basics — property, timeline, and what's on your mind — and we'll
                come back the same working day.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 6 }}>
                <a href="mailto:info@lexaminlegal.com" className="contact-line-big">
                  <span className="k">Email</span>
                  <span className="v">info@lexaminlegal.com</span>
                </a>
                <a href="tel:+447935011281" className="contact-line-big">
                  <span className="k">Mobile</span>
                  <span className="v">+44 (0) 7935 011 281</span>
                </a>
                <a href={window.WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="contact-line-big">
                  <span className="k">WhatsApp</span>
                  <span className="v">Message Nikhil</span>
                </a>
                <div className="contact-line-big" style={{ borderBottom: 0 }}>
                  <span className="k">Coverage</span>
                  <span className="v" style={{ color: "var(--cream)" }}>London · Surrey · Croydon</span>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} kind="right">
            <EnquiryForm kind="general" id="home-contact-form" />
          </Reveal>
        </div>
      </div>
    </section>);

};

// ===== APP =====
const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const cls = [];
    if (t.theme === "heritage") cls.push("theme-heritage");
    if (t.heroLayout === "editorial") cls.push("layout-editorial");
    if (!t.liquidGlass) cls.push("no-glass");
    document.body.className = cls.join(" ");
  }, [t.theme, t.heroLayout, t.liquidGlass]);

  const inverted = t.theme !== "heritage";

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <LogoFlash />
      <NavBar logoDirection={t.logoDirection} inverted={inverted} current="home" />
      <main id="main">
        <Hero />
        <About />
        <PracticeStrip />
        <Services />
        {t.showPrinciples && <Principles />}
        <PeoplePreview />
        <Contact />
      </main>
      <FooterBar logoDirection={t.logoDirection} />
      <FloatingWhatsApp />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakRadio
            label="Palette"
            value={t.theme}
            onChange={(v) => setTweak("theme", v)}
            options={[
            { value: "navy", label: "Navy + Gold" },
            { value: "heritage", label: "Cream-first" }]
            } />
          <TweakRadio
            label="Hero layout"
            value={t.heroLayout}
            onChange={(v) => setTweak("heroLayout", v)}
            options={[
            { value: "split", label: "Split" },
            { value: "editorial", label: "Editorial" }]
            } />
          <TweakToggle
            label="Show principles strip"
            value={t.showPrinciples}
            onChange={(v) => setTweak("showPrinciples", v)} />
          <TweakToggle
            label="Liquid glass + bento"
            value={t.liquidGlass}
            onChange={(v) => setTweak("liquidGlass", v)} />
        </TweakSection>
      </TweaksPanel>
    </>);

};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);