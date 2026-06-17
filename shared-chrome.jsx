// Lexamin Legal — Shared Nav, Footer, WhatsApp button, social icons

const PAGES = [
{ id: "home", label: "Home", href: "index.html" },
{ id: "about", label: "About", href: "About.html" },
{ id: "services", label: "Property Services", href: "Services.html" },
{ id: "agents", label: "Agents & Brokers", href: "Agents.html" },
{ id: "certification", label: "Document Certification", href: "Certification.html" },
{ id: "contact", label: "Contact", href: "Contact.html" }];


const LinkedInIcon = () =>
<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 11.01-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>;


const WhatsAppIcon = ({ size = 14 }) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3M12 21.8c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.7 1 1-3.6-.2-.4C2.9 15.7 2.3 14 2.3 12.1c0-5.4 4.3-9.8 9.7-9.8 2.6 0 5 1 6.9 2.9 1.8 1.8 2.8 4.3 2.8 6.9 0 5.4-4.3 9.7-9.7 9.7M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.6 1.4 5.6 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.4" />
  </svg>;


const WHATSAPP_MSG = "Hi Nikhil, I found your details through Lexamin Legal and would like to speak to you about a property matter.";
const WHATSAPP_HREF = `https://wa.me/447935011281?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const LINKEDIN_HREF = "https://www.linkedin.com/in/nikhil-amin-property";

// ── NAV BAR ──────────────────────────────────────────────────────
const NavBar = ({ logoDirection, inverted, current = "home" }) => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {document.body.style.overflow = "";};
  }, [open]);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="index.html" className="nav-logo" data-magnetic>
            <LogoLockup direction={logoDirection} inverted={inverted} animated={true} />
          </a>
          <div className="nav-right">
            <div className="nav-links">
              {PAGES.filter((p) => p.id !== "home").map((p) =>
              <a key={p.id} href={p.href} data-active={current === p.id ? "1" : "0"}>{p.label}</a>
              )}
            </div>
            <div className="nav-utils">
              <LiveClock />
              <a href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer"
              className="nav-icon-btn" title="Connect on LinkedIn" data-magnetic>
                <LinkedInIcon />
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
              className="nav-icon-btn" title="Message on WhatsApp" data-magnetic>
                <WhatsAppIcon />
              </a>
            </div>
            <a href="Contact.html" className="btn btn-solid nav-cta" data-magnetic>
              Make an Enquiry
            </a>
            <button className="nav-burger" aria-label="Open menu" onClick={() => setOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="nav-mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        <div className="nav-mobile-inner">
          <div className="nav-mobile-links">
            {PAGES.map((p, i) =>
            <a key={p.id} href={p.href}
            className={current === p.id ? "active" : ""}
            style={{ transitionDelay: `${i * 60}ms` }}
            onClick={() => setOpen(false)}>
                <span className="num">0{i + 1}</span>
                <span className="lbl">{p.label}</span>
              </a>
            )}
          </div>
          <div className="nav-mobile-foot">
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn">
              <WhatsAppIcon size={16} />&nbsp;&nbsp;WhatsApp
            </a>
            <a href="tel:+447935011281" className="btn">Call · 07935 011 281</a>
            <a href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer" className="nav-icon-btn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </>);

};

// ── FLOATING WHATSAPP BUTTON ──────────────────────────────────────
const FloatingWhatsApp = () => {
  const [hidden, setHidden] = React.useState(false);
  React.useEffect(() => {
    const foot = document.querySelector(".foot-v2");
    if (!foot || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => setHidden(e.isIntersecting),
      { threshold: 0 }
    );
    io.observe(foot);
    return () => io.disconnect();
  }, []);
  return (
    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
    className={`whatsapp-fab ${hidden ? "is-hidden" : ""}`} title="Message Nikhil on WhatsApp" data-magnetic>
      <WhatsAppIcon size={22} />
      <span className="whatsapp-fab-label">WhatsApp</span>
      <span className="whatsapp-fab-pulse" />
    </a>);

};


// ── FOOTER ───────────────────────────────────────────────────────
const FooterBar = ({ logoDirection }) =>
<footer className="foot-v2">
    <div className="wrap">
      <div className="foot-grid">
        <div className="foot-brand">
          <LogoLockup direction={logoDirection} inverted={true} />
          <p className="foot-tag" style={{ width: "327px", textAlign: "justify", margin: "0px" }}>


        </p>
          <div className="foot-socials">
            <a href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer"
          className="nav-icon-btn" title="LinkedIn"><LinkedInIcon /></a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
          className="nav-icon-btn" title="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>

        <div className="foot-col">
          <div className="foot-h">Practice</div>
          <a href="About.html">About</a>
          <a href="Services.html">Property Services</a>
          <a href="People.html">Our People</a>
          <a href="Agents.html">Agents &amp; Brokers</a>
          <a href="Certification.html">Document Certification</a>
        </div>

        <div className="foot-col">
          <div className="foot-h">Get in touch</div>
          <a href="mailto:info@lexaminlegal.com">info@lexaminlegal.com</a>
          <a href="tel:+447935011281">+44 (0) 7935 011 281</a>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">WhatsApp Nikhil</a>
          <a href="Contact.html">Enquiry forms</a>
        </div>

        <div className="foot-col">
          <div className="foot-h">Profiles</div>
          <a href="https://www.taylor-rose.co.uk/our-people/profile/Nikhil-Amin" target="_blank" rel="noopener noreferrer">Taylor Rose ↗</a>
          <a href="https://www.meadowsryan.co.uk/team/nikhil-amin/" target="_blank" rel="noopener noreferrer">Meadows Ryan ↗</a>
          <a href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>

      <div className="foot-compliance">
        <p>
          <strong>Lexamin Legal Ltd</strong> is not authorised or regulated by the
          Solicitors Regulation Authority. Nikhil Amin provides legal services through
          authorised and regulated law firms where applicable. Formal instructions will
          be confirmed through the relevant regulated firm before work begins.
        </p>
      </div>

      <div className="foot-bottom">
        <span>© 2026 Lexamin Legal Ltd · Registered in England &amp; Wales</span>
        <div className="foot-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
          <a href="#">Complaints</a>
        </div>
      </div>
    </div>
  </footer>;


Object.assign(window, { NavBar, FooterBar, FloatingWhatsApp, WhatsAppIcon, LinkedInIcon, WHATSAPP_HREF, LINKEDIN_HREF });