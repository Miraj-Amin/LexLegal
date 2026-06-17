// Lexamin Legal — Property Services page

const { useEffect: usEf2 } = React;

const SVC_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoDirection": "cipher",
  "theme": "navy"
}/*EDITMODE-END*/;

const SERVICE_CATEGORIES = [
  {
    num: "01",
    title: "Sales & Purchases",
    items: [
      "Freehold sales",
      "Freehold purchases",
      "Leasehold sales",
      "Leasehold purchases",
      "Sale and purchase together",
      "Company purchases",
    ]
  },
  {
    num: "02",
    title: "High-Value & Complex",
    items: [
      "Prime / high-net-worth transactions",
      "Complex leasehold matters",
      "Title defects & indemnity solutions",
      "Deeds of variation",
      "Licence to assign / alter",
      "Auction sales & purchases",
    ]
  },
  {
    num: "03",
    title: "Refinance & Equity",
    items: [
      "Remortgages",
      "Transfers of equity",
      "Portfolio refinancing",
      "Bridging finance",
      "Lender liaison",
      "Security & charge review",
    ]
  },
  {
    num: "04",
    title: "New Build & Off-Plan",
    items: [
      "Reservation contract review",
      "New build purchases",
      "Off-plan transactions",
      "Build-stage advice",
      "Completion mechanics",
      "Developer negotiation",
    ]
  },
];

const ServicesApp = () => {
  const [t, setTweak] = useTweaks(SVC_TWEAK_DEFAULTS);
  usEf2(() => { document.body.className = t.theme === "heritage" ? "theme-heritage" : ""; }, [t.theme]);
  const inverted = t.theme !== "heritage";
  const spotRef = useSpotlight();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <NavBar logoDirection={t.logoDirection} inverted={inverted} current="services" />
      <main id="main">

      {/* Hero */}
      <header className="page-hero">
        <div className="wrap">
          <div className="page-hero-grid">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="LEX.SVC" /><span className="bracket">/</span>
                  <span>Property Services</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1>Residential property work — <em>handled end to end.</em></h1>
              </Reveal>
              <Reveal delay={280}>
                <p className="page-hero-lede">
                  Sales, purchases, remortgages, transfers of equity and the more bespoke
                  matters where deal certainty and pace make the difference.
                </p>
              </Reveal>
              <Reveal delay={420}>
                <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="#quote" className="btn btn-solid" data-magnetic>Request a quote</a>
                  <a href="Agents.html" className="btn" data-magnetic>Agents &amp; brokers →</a>
                </div>
              </Reveal>
            </div>
            <div className="page-hero-aside">
              <Reveal delay={150}><div className="line"><span className="k">Coverage</span><span className="v">London · Surrey · Croydon</span></div></Reveal>
              <Reveal delay={200}><div className="line"><span className="k">Tenure</span><span className="v">Freehold &amp; leasehold</span></div></Reveal>
              <Reveal delay={250}><div className="line"><span className="k">Value range</span><span className="v">Up to prime / HNW</span></div></Reveal>
              <Reveal delay={300}><div className="line"><span className="k">Turnaround</span><span className="v">Same-day initial reply</span></div></Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* Service deep-grid */}
      <section className="services-deep">
        <div className="wrap">
          <Reveal>
            <div className="content-head">
              <div className="sec-tag">
                <span className="bracket">[</span><ScrambleText text="SVC.01" /><span className="bracket">/</span>
                <span>Practice areas</span><span className="bracket">]</span>
              </div>
              <h2>Every category, in one practice.</h2>
              <p>Each matter is handled personally by a named solicitor — no handing off to a junior, no losing context between teams.</p>
            </div>
          </Reveal>
          <div className="svc-categories">
            {SERVICE_CATEGORIES.map((c, i) => (
              <Reveal key={c.num} delay={i * 80}>
                <div className="svc-cat">
                  <div className="num">{c.num} —</div>
                  <h3>{c.title}</h3>
                  <ul>{c.items.map(it => <li key={it}>{it}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <Marquee items={[
        "Same-day response",
        "Named solicitor",
        "Agent &amp; broker friendly",
        "Time-critical transactions",
        "Calm under pressure",
        "Commercial advice",
      ]} duration={32} />

      {/* Quote form */}
      <section className="content-section dark spotlight" id="quote" ref={spotRef}>
        <div className="wrap">
          <div className="two-col">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="SVC.FRM" /><span className="bracket">/</span>
                  <span>Request a quote</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="content-head" style={{ marginBottom: 0, color: "var(--cream)" }}>
                  Send the basics. <em style={{ color: "var(--gold)" }}>We'll come back the same day.</em>
                </h2>
              </Reveal>
              <Reveal delay={280}>
                <p style={{ color: "rgba(244,240,230,0.7)", marginTop: 24, fontSize: 16, lineHeight: 1.7 }}>
                  Property, price, timeline and anything we should know up front.
                  No long form — we just need enough to give you a clear, costed
                  response and get the file moving.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={window.WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn" data-magnetic>WhatsApp →</a>
                  <a href="tel:+447935011281" className="btn" data-magnetic>Call 07935 011 281</a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200} kind="right">
              <EnquiryForm kind="quote" id="quote-form" />
            </Reveal>
          </div>
        </div>
      </section>

      </main>
      <FooterBar logoDirection={t.logoDirection} />
      <FloatingWhatsApp />
    </>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<ServicesApp />);
