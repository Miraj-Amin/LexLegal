// Lexamin Legal — Document Certification page

const CRT_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoDirection": "cipher",
  "theme": "navy"
}/*EDITMODE-END*/;

const PRICING = [
  { name: "Document certification", from: 20, unit: "from £", note: "Certified copies of ID, proof of address, professional qualifications and other documents required by banks, lenders, the Land Registry and overseas authorities." },
  { name: "ID1 form", from: 100, unit: "from £", note: "Verification of identity for Land Registry purposes (Form ID1). Includes the meeting, ID checks and certification of the form." },
  { name: "ID2 form", from: 100, unit: "from £", note: "Verification of identity for corporate bodies (Form ID2). Includes the meeting, ID checks and certification of the form." },
  { name: "Statutory declarations / oaths", from: 5, unit: "from £", note: "Statutory £5 + £2 per exhibit fee for administering an oath or statutory declaration. Additional professional fee applies if drafting or supporting work is required." },
];

const SERVICES_LIST = [
  "Certified copies of ID documents",
  "Certified proof of address",
  "ID1 forms (Land Registry)",
  "ID2 forms (corporate)",
  "Statutory declarations",
  "Oaths / affidavits",
  "Witnessing signatures",
  "Property-related declarations",
  "Director / company-related documents",
];

const CertificationApp = () => {
  const [t, setTweak] = useTweaks(CRT_TWEAK_DEFAULTS);
  React.useEffect(() => { document.body.className = t.theme === "heritage" ? "theme-heritage" : ""; }, [t.theme]);
  const inverted = t.theme !== "heritage";
  const spotRef = useSpotlight();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <NavBar logoDirection={t.logoDirection} inverted={inverted} current="certification" />
      <main id="main">

      <header className="page-hero">
        <div className="wrap">
          <div className="page-hero-grid">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="LEX.CRT" /><span className="bracket">/</span>
                  <span>Document Certification</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1>ID1, certification &amp; <em>declarations.</em></h1>
              </Reveal>
              <Reveal delay={280}>
                <p className="page-hero-lede">
                  Solicitor-certified ID, Land Registry ID1 / ID2 forms, statutory
                  declarations, oaths and witnessed signatures — local appointments
                  across London, Surrey and Croydon.
                </p>
              </Reveal>
              <Reveal delay={420}>
                <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="#book" className="btn btn-solid" data-magnetic>Book an appointment</a>
                  <a href="tel:+447935011281" className="btn" data-magnetic>Call · 07935 011 281</a>
                </div>
              </Reveal>
            </div>
            <div className="page-hero-aside">
              <Reveal delay={150}><div className="line"><span className="k">Available</span><span className="v">Mon–Sat by appt.</span></div></Reveal>
              <Reveal delay={200}><div className="line"><span className="k">Locations</span><span className="v">London · Surrey · Croydon</span></div></Reveal>
              <Reveal delay={250}><div className="line"><span className="k">Turnaround</span><span className="v">Often same-day</span></div></Reveal>
              <Reveal delay={300}><div className="line"><span className="k">Lead time</span><span className="v">24–48h typical</span></div></Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="content-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="CRT.01" /><span className="bracket">/</span>
                  <span>What we can certify</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="content-head" style={{ marginBottom: 0 }}>
                  <span style={{ fontSize: "inherit" }}>Trusted certification, <em>fast.</em></span>
                </h2>
              </Reveal>
              <Reveal delay={260}>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)", marginTop: 22 }}>
                  Many banks, lenders, the Land Registry and overseas authorities require
                  documents certified by a UK-qualified solicitor. We provide quick
                  appointments with a regulated solicitor and turnaround that fits the
                  pace of a property transaction.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200} kind="right">
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
                {SERVICES_LIST.map((s, i) => (
                  <li key={s} style={{
                    fontFamily: "var(--f-display)", fontSize: 18, color: "var(--navy)",
                    paddingLeft: 22, position: "relative", lineHeight: 1.5,
                  }}>
                    <span style={{
                      position: "absolute", left: 0, top: 11,
                      width: 6, height: 6, background: "var(--gold)",
                      transform: "rotate(45deg)",
                    }} />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="content-section alt">
        <div className="wrap">
          <div className="two-col">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="CRT.PRX" /><span className="bracket">/</span>
                  <span>Pricing</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="content-head" style={{ marginBottom: 0 }}>
                  <span style={{ fontSize: "inherit" }}>Clear pricing — <em>no surprises.</em></span>
                </h2>
              </Reveal>
              <Reveal delay={260}>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)", marginTop: 22 }}>
                  Starting prices below. Final pricing depends on volume, complexity and any
                  additional drafting required. Confirmed in writing before any appointment.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200} kind="right">
              <div className="pricing">
                {PRICING.map((p, i) => (
                  <div className="price-row" key={p.name}>
                    <div className="price-name">{p.name}</div>
                    <div className="price-amount"><span>{p.unit}</span>{p.from}</div>
                    <div className="price-meta">{p.note}</div>
                  </div>
                ))}
                <p className="price-footnote">
                  Prices exclusive of VAT where applicable. Statutory oath / declaration
                  fees are set by law (£5 + £2 per exhibit) — additional professional
                  time is charged separately. All quotes confirmed in writing before work.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="content-section dark">
        <div className="wrap">
          <div className="content-head">
            <Reveal>
              <div className="sec-tag">
                <span className="bracket">[</span><ScrambleText text="CRT.PRP" /><span className="bracket">/</span>
                <span>What to bring</span><span className="bracket">]</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2>A short list. <em>That's all.</em></h2>
            </Reveal>
          </div>
          <div className="service-grid">
            {[
              { num: "01", title: "Photo ID", body: "Original passport or driving licence — current and valid. We'll certify the copy, you keep the original." },
              { num: "02", title: "Proof of address", body: "A utility bill or bank statement dated within the last 3 months. Originals only — printouts from online accounts on request." },
              { num: "03", title: "Documents to certify", body: "The document you actually need certified, plus any reference letter or instructions from the bank, lender or registry that's requested it." },
              { num: "04", title: "ID1 / ID2 forms", body: "The blank form pre-filled with your details. Don't sign anything before the appointment — that's part of what we witness." },
              { num: "05", title: "Statutory declarations", body: "The draft declaration if you already have one; if not, we can prepare it for an additional drafting fee." },
              { num: "06", title: "Payment", body: "Card or bank transfer at the appointment. A clear quote is sent before the meeting — no surprises on the day." },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i * 70} style={{ "--i": i }}>
                <div className="service">
                  <div className="num">{s.num} —</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="content-section spotlight" id="book" ref={spotRef}>
        <div className="wrap">
          <div className="two-col">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="CRT.BKG" /><span className="bracket">/</span>
                  <span>Book an appointment</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="content-head" style={{ marginBottom: 0 }}>
                  <span style={{ fontSize: "inherit" }}>Get an appointment <em>this week.</em></span>
                </h2>
              </Reveal>
              <Reveal delay={260}>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)", marginTop: 22 }}>
                  Tell us what you need certified, your deadline, and a rough location.
                  Most appointments confirmed within hours.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={window.WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn" data-magnetic>WhatsApp →</a>
                  <a href="tel:+447935011281" className="btn" data-magnetic>Call now →</a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200} kind="right">
              <EnquiryForm kind="certification" id="cert-form" />
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
ReactDOM.createRoot(document.getElementById("root")).render(<CertificationApp />);
