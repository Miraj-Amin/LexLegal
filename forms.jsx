// Lexamin Legal — Reusable form engine
//
// One <EnquiryForm> component drives all three enquiry types.
// Each submission:
//   1. Writes a record to localStorage under "lex.enquiries"
//      → the Dashboard page reads from here
//   2. Opens the user's email client with a pre-filled email
//      addressed to info@lexaminlegal.com
//
// To swap in a server-side endpoint later (Formspree, Resend webhook, etc),
// set FORM_ENDPOINT below — submissions will POST there in addition to
// the local + mailto fallback.

const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxx"
const RECIPIENT_EMAIL = "info@lexaminlegal.com";
const STORAGE_KEY = "lex.enquiries";

// ── Storage ────────────────────────────────────────────────────────
function loadEnquiries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function saveEnquiry(record) {
  const all = loadEnquiries();
  all.unshift(record);
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); } catch (e) {}
  return all;
}

// ── Form configs ───────────────────────────────────────────────────
const FORM_CONFIGS = {
  quote: {
    id: "quote",
    title: "Property quote request",
    submitLabel: "Send enquiry",
    fields: [
      { k: "name",      label: "Your name",            type: "text",  required: true,  col: 6 },
      { k: "email",     label: "Email",                type: "email", required: true,  col: 6 },
      { k: "mobile",    label: "Mobile",               type: "tel",   required: true,  col: 6 },
      { k: "matter",    label: "Transaction type",     type: "select", required: true, col: 6,
        options: ["Buying", "Selling", "Remortgaging", "Transfer of equity", "Other"] },
      { k: "address",   label: "Property address",     type: "text",  col: 12, placeholder: "Full address including postcode" },
      { k: "price",     label: "Property price (£)",   type: "text",  col: 6 },
      { k: "tenure",    label: "Tenure",               type: "select", col: 6,
        options: ["Freehold", "Leasehold", "Unknown"] },
      { k: "lender",    label: "Mortgage lender (if known)", type: "text", col: 6 },
      { k: "agent",     label: "Estate agent / broker", type: "text", col: 6 },
      { k: "timescale", label: "Target timescale",     type: "text",  col: 12, placeholder: "e.g. exchange in 6 weeks" },
      { k: "notes",     label: "Anything urgent or unusual?", type: "textarea", col: 12, rows: 4 },
    ],
  },

  referral: {
    id: "referral",
    title: "Refer a client",
    submitLabel: "Refer client",
    fields: [
      { k: "agent_name",  label: "Your name",            type: "text",  required: true, col: 6 },
      { k: "agent_co",    label: "Company",              type: "text",  required: true, col: 6 },
      { k: "agent_email", label: "Your email",           type: "email", required: true, col: 6 },
      { k: "agent_mobile",label: "Your mobile",          type: "tel",   required: true, col: 6 },
      { k: "client_name", label: "Client name",         type: "text",  required: true, col: 12 },
      { k: "client_mobile", label: "Client mobile",     type: "tel",   col: 6 },
      { k: "client_email", label: "Client email",       type: "email", col: 6 },
      { k: "matter",      label: "Transaction type",    type: "select", required: true, col: 6,
        options: ["Purchase", "Sale", "Sale & purchase", "Remortgage", "Transfer of equity", "Auction", "Other"] },
      { k: "address",     label: "Property address",    type: "text",  col: 12 },
      { k: "price",       label: "Price (£)",           type: "text",  col: 6 },
      { k: "urgency",     label: "Target exchange / urgency", type: "text", col: 6 },
      { k: "notes",       label: "Notes",               type: "textarea", col: 12, rows: 4 },
    ],
  },

  certification: {
    id: "certification",
    title: "Document certification / ID1 appointment",
    submitLabel: "Request appointment",
    fields: [
      { k: "name",     label: "Your name",       type: "text",  required: true, col: 6 },
      { k: "email",    label: "Email",           type: "email", required: true, col: 6 },
      { k: "mobile",   label: "Mobile",          type: "tel",   required: true, col: 6 },
      { k: "service",  label: "What do you need?", type: "select", required: true, col: 6,
        options: [
          "ID1 form",
          "ID2 form",
          "Certified ID",
          "Certified proof of address",
          "Statutory declaration",
          "Oath / affidavit",
          "Witness signature",
          "Other",
        ] },
      { k: "deadline", label: "Deadline",        type: "text",  col: 6, placeholder: "e.g. by Friday" },
      { k: "location", label: "Location",        type: "text",  col: 6, placeholder: "e.g. SW London / SW1A" },
      { k: "local",    label: "Can you attend locally?", type: "select", col: 6,
        options: ["Yes", "No", "Either"] },
      { k: "notes",    label: "Anything else we should know?", type: "textarea", col: 12, rows: 3 },
    ],
  },

  general: {
    id: "general",
    title: "Make an enquiry",
    submitLabel: "Send message",
    fields: [
      { k: "name",    label: "Your name", type: "text",  required: true, col: 6 },
      { k: "email",   label: "Email",     type: "email", required: true, col: 6 },
      { k: "mobile",  label: "Mobile",    type: "tel",   col: 6 },
      { k: "topic",   label: "I'm enquiring about", type: "select", required: true, col: 6,
        options: ["Property quote", "Agent / broker referral", "Document certification", "Other"] },
      { k: "message", label: "Message",   type: "textarea", required: true, col: 12, rows: 5 },
    ],
  },
};

// ── EnquiryForm ────────────────────────────────────────────────────
const EnquiryForm = ({ kind = "quote", id, compact = false }) => {
  const cfg = FORM_CONFIGS[kind];
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [state, setState] = React.useState("idle"); // idle | submitting | success
  const [returnedRecord, setReturnedRecord] = React.useState(null);

  const update = (k, v) => {
    setValues(prev => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors(prev => ({ ...prev, [k]: null }));
  };

  const validate = () => {
    const errs = {};
    cfg.fields.forEach(f => {
      if (f.required && !values[f.k]) errs[f.k] = "Required";
      if (f.type === "email" && values[f.k] && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values[f.k])) errs[f.k] = "Invalid email";
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      // Scroll first error into view
      const firstErrKey = cfg.fields.find(f => errors[f.k] || (f.required && !values[f.k]))?.k;
      if (firstErrKey) {
        const el = document.querySelector(`[data-field="${firstErrKey}"]`);
        if (el) el.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      return;
    }
    setState("submitting");

    const record = {
      id: `lex-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      ts: new Date().toISOString(),
      type: cfg.id,
      title: cfg.title,
      source: window.location.pathname.split("/").pop() || "index.html",
      status: "New",
      data: { ...values },
    };

    saveEnquiry(record);

    // Optional remote POST
    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(record),
        });
      } catch (err) {
        console.warn("Remote submission failed:", err);
      }
    }

    // Build mailto fallback (always opens — gives Nikhil the email)
    const subject = `[Lexamin Legal] ${cfg.title} — ${values.name || values.agent_name || values.client_name || "New enquiry"}`;
    const bodyLines = [
      `New enquiry submitted via lexaminlegal.com`,
      ``,
      `Type: ${cfg.title}`,
      `Received: ${new Date(record.ts).toLocaleString("en-GB", { timeZone: "Europe/London" })}`,
      `Source: ${record.source}`,
      `Reference: ${record.id}`,
      ``,
      `─────────────────────────────`,
    ];
    cfg.fields.forEach(f => {
      if (values[f.k]) bodyLines.push(`${f.label}: ${values[f.k]}`);
    });
    bodyLines.push(`─────────────────────────────`);
    const mailtoHref =
      `mailto:${RECIPIENT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // Open mailto in a new tab so it doesn't navigate away
    setTimeout(() => {
      window.open(mailtoHref, "_blank");
    }, 350);

    setReturnedRecord(record);
    setState("success");
  };

  // ── Success state ───────────────────────────────────────────────
  if (state === "success") {
    return (
      <div className={`form form-success ${compact ? "form-compact" : ""}`} id={id}>
        <div className="form-tick">
          <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
            <circle cx="28" cy="28" r="26" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            <path d="M16 29 L25 37 L41 19" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Enquiry received.</h3>
        <p>
          Thanks {values.name || values.agent_name || "—"}. We've logged your enquiry
          {returnedRecord ? <> (ref <code>{returnedRecord.id.slice(-7).toUpperCase()}</code>)</> : null}
          {" "}and Nikhil will respond personally the same working day.
        </p>
        <p className="form-success-tip">
          Your email client should have opened with a pre-filled message to
          <strong> info@lexaminlegal.com</strong>. If it didn't, please hit send manually,
          or message Nikhil directly on WhatsApp.
        </p>
        <div className="form-success-cta">
          <a href={window.WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
            WhatsApp Nikhil
          </a>
          <button className="btn btn-light" onClick={() => { setState("idle"); setValues({}); setReturnedRecord(null); }}>
            Submit another
          </button>
        </div>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────
  return (
    <form className={`form ${compact ? "form-compact" : ""}`} id={id} onSubmit={handleSubmit} noValidate>
      <div className="form-head">
        <div className="sec-tag">
          <span className="bracket">[</span>
          <span>{cfg.id.toUpperCase()}.FORM</span>
          <span className="bracket">/</span>
          <span>{cfg.fields.filter(f => f.required).length} required fields</span>
          <span className="bracket">]</span>
        </div>
        <h3>{cfg.title}</h3>
      </div>
      <div className="form-grid">
        {cfg.fields.map(f => (
          <div className={`form-field col-${f.col || 12} ${errors[f.k] ? "has-error" : ""}`}
               key={f.k} data-field={f.k}>
            <label htmlFor={`${id}-${f.k}`}>
              {f.label}
              {f.required && <span className="req"> *</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea id={`${id}-${f.k}`} rows={f.rows || 4}
                placeholder={f.placeholder || ""}
                value={values[f.k] || ""}
                onChange={(e) => update(f.k, e.target.value)} />
            ) : f.type === "select" ? (
              <select id={`${id}-${f.k}`}
                value={values[f.k] || ""}
                onChange={(e) => update(f.k, e.target.value)}>
                <option value="">Select…</option>
                {f.options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : (
              <input id={`${id}-${f.k}`} type={f.type}
                placeholder={f.placeholder || ""}
                value={values[f.k] || ""}
                autoComplete={f.type === "email" ? "email" : f.type === "tel" ? "tel" : "off"}
                onChange={(e) => update(f.k, e.target.value)} />
            )}
            {errors[f.k] && <div className="form-err">{errors[f.k]}</div>}
          </div>
        ))}
      </div>
      <div className="form-foot">
        <button type="submit" className="btn btn-solid" data-magnetic disabled={state === "submitting"}>
          {state === "submitting" ? "Sending…" : cfg.submitLabel} →
        </button>
        <div className="form-note">
          By submitting you agree to be contacted by Nikhil Amin in response to this enquiry.
          We won't add you to any mailing list.
        </div>
      </div>
    </form>
  );
};

Object.assign(window, { EnquiryForm, FORM_CONFIGS, loadEnquiries, STORAGE_KEY });
