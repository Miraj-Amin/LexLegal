// Lexamin Legal — About page

const { useEffect } = React;

const ABOUT_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoDirection": "cipher",
  "theme": "navy"
} /*EDITMODE-END*/;

const AboutHero = () =>
<header className="page-hero">
    <div className="wrap">
      <div className="page-hero-grid">
        <div>
          <Reveal>
            <div className="sec-tag">
              <span className="bracket">[</span>
              <ScrambleText text="LEX.ABT" />
              <span className="bracket">/</span>
              <span>About the practice</span>
              <span className="bracket">]</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1>A focused practice, <em>built around the client.</em></h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="page-hero-lede">
              Lexamin Legal is a residential property practice serving London,
              Surrey and Croydon — built for clients who want a named solicitor
              answering the phone, not a paralegal triage queue.
            </p>
          </Reveal>
        </div>
        <div className="page-hero-aside">
          <Reveal delay={150}>
            <div className="line"><span className="k">Founded</span><span className="v">2026</span></div>
          </Reveal>
          <Reveal delay={200}>
            <div className="line"><span className="k">Coverage</span><span className="v">London · Surrey · Croydon</span></div>
          </Reveal>
          <Reveal delay={250}>
            <div className="line"><span className="k">Experience</span><span className="v">15+ years</span></div>
          </Reveal>
          <Reveal delay={300}>
            <div className="line"><span className="k">Files per solicitor</span><span className="v">Personally handled</span></div>
          </Reveal>
        </div>
      </div>
    </div>
  </header>;


const AboutStory = () =>
<section className="content-section">
    <div className="wrap">
      <div className="two-col" style={{ textAlign: "justify" }}>
        <div>
          <Reveal>
            <div className="sec-tag">
              <span className="bracket">[</span><ScrambleText text="ABT.01" /><span className="bracket">/</span>
              <span>The practice</span><span className="bracket">]</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="content-head" style={{ marginBottom: 0 }}>
              <span style={{ fontFamily: "var(--f-display)", fontSize: "inherit" }}>Calm, commercial, <em>and on top of it.</em></span>
            </h2>
          </Reveal>
        </div>
        <div className="two-col-body">
          <Reveal delay={120}>
            <p>
              Lexamin Legal is a <strong>residential property practice</strong> for
              families, investors, developers and high-net-worth clients on the
              moves that matter — across London, Surrey, Croydon and beyond.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              We work with the discipline of a large-firm property team and the
              responsiveness of a smaller practice. <strong>No paralegal queue,
              no diluted attention</strong> — every instruction sits with a
              named solicitor who knows your file.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p>
              Property transactions become unnecessarily stressful when communication
              breaks down or issues are left unresolved for too long. Our job is to
              stay ahead of problems, work closely with agents and brokers, and protect
              momentum in the deal.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <p>
              Lexamin Legal Ltd was founded by <strong>Nikhil Amin</strong>, who
              practises as a consultant solicitor through Taylor Rose and Meadows
              Ryan. Formal legal services are delivered through those regulated firms.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>;


const AboutTrust = () =>
<section className="trust-strip">
    <div className="wrap">
      <div className="trust-grid">
        <Reveal delay={50}>
          <div className="trust-item">
            <div className="v"><Counter to={15} />+<em>yrs</em></div>
            <div className="l">Residential property</div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="trust-item">
            <div className="v">£<Counter to={20} />M+</div>
            <div className="l">Prime transactions</div>
          </div>
        </Reveal>
        <Reveal delay={190}>
          <div className="trust-item">
            <div className="v"><em>Named</em></div>
            <div className="l">Solicitor per file</div>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <div className="trust-item">
            <div className="v"><em>SRA</em></div>
            <div className="l">Regulated via partner firms</div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>;


const PRINCIPLES = [
{ n: "i.", title: "Clear advice", body: "Plain English on technical points. You always know where you stand and what comes next." },
{ n: "ii.", title: "Strong communication", body: "Direct lines to your solicitor — not a paralegal queue. Agents and brokers get updates without chasing." },
{ n: "iii.", title: "Momentum first", body: "Stay ahead of problems. Surface issues early. Push the transaction calmly forward." },
{ n: "iv.", title: "Commercial mind", body: "Knowing when to dig in on a point and when to find the pragmatic answer that closes the deal." }];


const AboutPrinciples = () =>
<section className="principles" style={{ textAlign: "justify" }}>
    <div className="wrap">
      <div className="principles-grid">
        {PRINCIPLES.map((p, i) =>
      <Reveal key={p.n} delay={i * 100}>
            <div className="principle">
              <div className="num">{p.n}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          </Reveal>
      )}
      </div>
    </div>
  </section>;


const AboutCta = () => {
  const spotRef = useSpotlight();
  return (
    <section className="content-section dark spotlight" ref={spotRef}>
      <div className="wrap">
        <div className="two-col">
          <div>
            <Reveal>
              <div className="sec-tag">
                <span className="bracket">[</span><ScrambleText text="ABT.CTA" /><span className="bracket">/</span>
                <span>What's next</span><span className="bracket">]</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="content-head" style={{ marginBottom: 0, color: "var(--cream)" }}>
                Have a matter <em style={{ color: "var(--gold)" }}>we can help with?</em>
              </h2>
            </Reveal>
          </div>
          <div className="two-col-body">
            <Reveal delay={120}>
              <p style={{ textAlign: "justify" }}>
                The fastest way to get a response is to send the basics: property,
                timeline, and what's on your mind. Nikhil will come back personally
                the same working day.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="Contact.html" className="btn btn-solid" data-magnetic>Make an enquiry</a>
                <a href={window.WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn" data-magnetic>WhatsApp Nikhil</a>
                <a href="People.html" className="btn" data-magnetic>Meet the team</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

};

const AboutApp = () => {
  const [t, setTweak] = useTweaks(ABOUT_TWEAK_DEFAULTS);
  useEffect(() => {
    document.body.className = t.theme === "heritage" ? "theme-heritage" : "";
  }, [t.theme]);
  const inverted = t.theme !== "heritage";
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <NavBar logoDirection={t.logoDirection} inverted={inverted} current="about" />
      <main id="main">
      <AboutHero />
      <AboutTrust />
      <AboutStory />
      <AboutPrinciples />
      <AboutCta />
      </main>
      <FooterBar logoDirection={t.logoDirection} />
      <FloatingWhatsApp />
    </>);

};
ReactDOM.createRoot(document.getElementById("root")).render(<AboutApp />);