// Lexamin Legal — Agents & Brokers page

const AGT_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoDirection": "cipher",
  "theme": "navy"
} /*EDITMODE-END*/;

const AgentsApp = () => {
  const [t, setTweak] = useTweaks(AGT_TWEAK_DEFAULTS);
  React.useEffect(() => {document.body.className = t.theme === "heritage" ? "theme-heritage" : "";}, [t.theme]);
  const inverted = t.theme !== "heritage";
  const spotRef = useSpotlight();

  const promises = [
  { n: "i.", t: "Same-day response", b: "Every referral gets an initial call or email back the same working day. No silence, no chasing." },
  { n: "ii.", t: "Direct line to the solicitor", b: "Your client speaks to Nikhil directly — and so do you. No paralegal triage." },
  { n: "iii.", t: "Clear quote within 24h", b: "Costed, plain-English quote turned around fast so you can keep the deal moving." },
  { n: "iv.", t: "Proactive updates", b: "We tell you when the file changes — not the other way around. You always know where exchange stands." }];


  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <NavBar logoDirection={t.logoDirection} inverted={inverted} current="agents" />
      <main id="main">

      <header className="page-hero">
        <div className="wrap">
          <div className="page-hero-grid">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="LEX.AGT" /><span className="bracket">/</span>
                  <span>Agents &amp; Brokers</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1>The solicitor who <em>answers the phone.</em></h1>
              </Reveal>
              <Reveal delay={280}>
                <p className="page-hero-lede" style={{ textAlign: "justify" }}>
                  For agents and brokers who need a property solicitor who understands
                  the pressure of a deal, communicates without being chased, and keeps
                  matters moving toward exchange.
                </p>
              </Reveal>
              <Reveal delay={420}>
                <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="#refer" className="btn btn-solid" data-magnetic>Refer a client</a>
                  <a href={window.WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn" data-magnetic>WhatsApp Nikhil →</a>
                </div>
              </Reveal>
            </div>
            <div className="page-hero-aside">
              <Reveal delay={150}><div className="line"><span className="k">Response time</span><span className="v">Same working day</span></div></Reveal>
              <Reveal delay={200}><div className="line"><span className="k">Quote turnaround</span><span className="v">Within 24 hours</span></div></Reveal>
              <Reveal delay={250}><div className="line"><span className="k">Updates</span><span className="v">Proactive · no chasing</span></div></Reveal>
              <Reveal delay={300}><div className="line"><span className="k">Comms</span><span className="v">Direct to Nikhil</span></div></Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* Promises */}
      <section className="principles" style={{ textAlign: "justify" }}>
        <div className="wrap">
          <div className="principles-grid">
            {promises.map((p, i) =>
            <Reveal key={p.n} delay={i * 100}>
                <div className="principle">
                  <div className="num">{p.n}</div>
                  <h4 style={{ textAlign: "left" }}>{p.t}</h4>
                  <p>{p.b}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="content-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="AGT.PRC" /><span className="bracket">/</span>
                  <span>How a referral works</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="content-head" style={{ marginBottom: 0 }}>
                  <span style={{ fontSize: "inherit" }}>From referral to <em>file open</em> in 24 hours.</span>
                </h2>
              </Reveal>
            </div>
            <div className="two-col-body">
              <Reveal delay={120}>
                <p>
                  <strong>1 · Send the referral.</strong> Use the form below, or just text
                  Nikhil — name, number, property and what's needed.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p>
                  <strong>2 · Client contact within hours.</strong> Nikhil reaches out the
                  same working day — no inbox roulette, no "we'll be in touch next week".
                </p>
              </Reveal>
              <Reveal delay={360}>
                <p>
                  <strong>3 · Quote and file open.</strong> A clear quote follows within 24
                  hours and, if accepted, the file is opened immediately so AML and ID
                  steps don't hold the deal up.
                </p>
              </Reveal>
              <Reveal delay={480}>
                <p>
                  <strong>4 · You stay in the loop.</strong> Weekly progress notes — more
                  often when something needs your attention or the buyer/seller side. No
                  black-box.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={[
      "Estate agents",
      "Mortgage brokers",
      "Financial advisers",
      "Buying agents",
      "Accountants",
      "IFAs",
      "Family offices"]
      } duration={36} separator="·" />

      {/* Referral form */}
      <section className="content-section dark spotlight" id="refer" ref={spotRef}>
        <div className="wrap">
          <div className="two-col">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="AGT.REF" /><span className="bracket">/</span>
                  <span>Refer a client</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="content-head" style={{ marginBottom: 0, color: "var(--cream)" }}>
                  Send a referral — <em style={{ color: "var(--gold)" }}>we'll handle the rest.</em>
                </h2>
              </Reveal>
              <Reveal delay={260}>
                <p style={{ color: "rgba(244,240,230,0.7)", marginTop: 24, fontSize: 16, lineHeight: 1.7 }}>
                  Two minutes to fill in. Your client hears from Nikhil personally,
                  and you get a status update by end of day.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={window.WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn" data-magnetic>WhatsApp →</a>
                  <a href="mailto:info@lexaminlegal.com" className="btn" data-magnetic>Email referral →</a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200} kind="right">
              <EnquiryForm kind="referral" id="refer-form" />
            </Reveal>
          </div>
        </div>
      </section>

      </main>
      <FooterBar logoDirection={t.logoDirection} />
      <FloatingWhatsApp />
    </>);

};
ReactDOM.createRoot(document.getElementById("root")).render(<AgentsApp />);