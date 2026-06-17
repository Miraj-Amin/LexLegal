// Lexamin Legal — Contact page (tabbed form switcher)

const CT_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoDirection": "cipher",
  "theme": "navy"
} /*EDITMODE-END*/;

const FORM_TABS = [
{ id: "quote", label: "Property Quote" },
{ id: "referral", label: "Agent / Broker Referral" },
{ id: "certification", label: "Certification / ID1" },
{ id: "general", label: "Something Else" }];


const ContactApp = () => {
  const [t, setTweak] = useTweaks(CT_TWEAK_DEFAULTS);
  React.useEffect(() => {document.body.className = t.theme === "heritage" ? "theme-heritage" : "";}, [t.theme]);
  const inverted = t.theme !== "heritage";

  // Read ?form=quote|referral|certification|general from URL
  const initial = (() => {
    try {
      const p = new URLSearchParams(window.location.search).get("form");
      return FORM_TABS.find((f) => f.id === p)?.id || "quote";
    } catch (e) {return "quote";}
  })();
  const [active, setActive] = React.useState(initial);
  // Sync to URL hash for shareability (no full reload)
  React.useEffect(() => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("form", active);
      window.history.replaceState(null, "", url.toString());
    } catch (e) {}
  }, [active]);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <NavBar logoDirection={t.logoDirection} inverted={inverted} current="contact" />
      <main id="main">

      <header className="page-hero">
        <div className="wrap">
          <div className="page-hero-grid">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="LEX.CNT" /><span className="bracket">/</span>
                  <span>Get in touch</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1>Send a note. <em>We'll come back today.</em></h1>
              </Reveal>
              <Reveal delay={280}>
                <p className="page-hero-lede">
                  Whether you're a client, an estate agent, a broker or a fellow
                  professional — pick the right form, send the basics, and Nikhil
                  will reply personally the same working day.
                </p>
              </Reveal>
              <Reveal delay={420}>
                <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={window.WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-solid" data-magnetic>WhatsApp Nikhil</a>
                  <a href="tel:+447935011281" className="btn" data-magnetic>Call 07935 011 281</a>
                </div>
              </Reveal>
            </div>
            <div className="page-hero-aside">
              <Reveal delay={150}><div className="line"><span className="k">Email</span><span className="v">info@lexaminlegal.com</span></div></Reveal>
              <Reveal delay={200}><div className="line"><span className="k">Mobile</span><span className="v">+44 (0) 7935 011 281</span></div></Reveal>
              <Reveal delay={250}><div className="line"><span className="k">Hours</span><span className="v">Mon–Fri 09:00–18:00</span></div></Reveal>
              <Reveal delay={300}><div className="line"><span className="k">Response</span><span className="v">Same working day</span></div></Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* Tabbed forms */}
      <section className="content-section">
        <div className="wrap">
          <Reveal>
            <div className="content-head" style={{ marginBottom: 36 }}>
              <div className="sec-tag">
                <span className="bracket">[</span><ScrambleText text="CNT.FRM" /><span className="bracket">/</span>
                <span>Enquiry forms</span><span className="bracket">]</span>
              </div>
              <h2>Pick the one <em>that fits.</em></h2>
              <p>Submissions arrive in your inbox at <strong>info@lexaminlegal.com</strong> and are also logged to your dashboard so nothing slips.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="form-tabs" role="tablist">
              {FORM_TABS.map((tab) =>
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                className={`form-tab ${active === tab.id ? "active" : ""}`}
                onClick={() => setActive(tab.id)}>
                
                  {tab.label}
                </button>
              )}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div style={{ marginTop: 0 }}>
              {/* key forces remount → fresh state when switching tab */}
              <EnquiryForm key={active} kind={active} id={`contact-${active}-form`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Profile links */}
      <section className="content-section dark">
        <div className="wrap">
          <div className="two-col">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="CNT.PRF" /><span className="bracket">/</span>
                  <span>Other places to find us</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="content-head" style={{ marginBottom: 0, color: "var(--cream)" }}>
                  Verifiable, <em style={{ color: "var(--gold)" }}>everywhere it matters.</em>
                </h2>
              </Reveal>
            </div>
            <div className="two-col-body">
              <Reveal delay={120}>
                <p>
                  Nikhil's practising profiles at the regulated firms he works through:
                </p>
              </Reveal>
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                <Reveal delay={200}>
                  <a href="https://www.taylor-rose.co.uk/our-people/profile/Nikhil-Amin"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-light"
                  style={{ justifyContent: "flex-start", width: "100%", maxWidth: 420 }}>
                    Taylor Rose profile ↗
                  </a>
                </Reveal>
                <Reveal delay={280}>
                  <a href="https://www.meadowsryan.co.uk/team/nikhil-amin/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-light"
                  style={{ justifyContent: "flex-start", width: "100%", maxWidth: 420 }}>
                    Meadows Ryan profile ↗
                  </a>
                </Reveal>
                <Reveal delay={360}>
                  <a href={window.LINKEDIN_HREF}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-light"
                  style={{ justifyContent: "flex-start", width: "100%", maxWidth: 420 }}>
                    LinkedIn ↗
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <FooterBar logoDirection={t.logoDirection} />
      <FloatingWhatsApp />
    </>);

};
ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);