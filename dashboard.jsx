// Lexamin Legal — Admin Dashboard
//
// Reads enquiries from localStorage (written by forms.jsx).
// Updates status, deletes, exports CSV.
//
// Note: data is per-browser. Email at info@lexaminlegal.com is the
// canonical record. The dashboard is a local working view.

const DASH_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoDirection": "cipher",
  "theme": "navy"
}/*EDITMODE-END*/;

const STATUS_OPTIONS = ["New", "Contacted", "Quoted", "Follow-up", "Won", "Lost"];
const TYPE_LABELS = {
  quote: "Quote",
  referral: "Referral",
  certification: "Cert / ID1",
  general: "General",
};

function writeAll(list) {
  try { localStorage.setItem("lex.enquiries", JSON.stringify(list)); } catch (e) {}
}

function csvEscape(v) {
  if (v == null) return "";
  const s = String(v).replace(/"/g, '""');
  if (/[",\n]/.test(s)) return `"${s}"`;
  return s;
}

function toCsv(records) {
  const headers = ["id", "received", "type", "status", "name", "email", "mobile", "source"];
  // Collect all data keys across records
  const allKeys = new Set();
  records.forEach(r => Object.keys(r.data || {}).forEach(k => allKeys.add(k)));
  const dataKeys = Array.from(allKeys);
  const head = [...headers, ...dataKeys].join(",");
  const rows = records.map(r => {
    const top = [
      r.id,
      r.ts,
      r.type,
      r.status,
      r.data?.name || r.data?.agent_name || r.data?.client_name || "",
      r.data?.email || r.data?.agent_email || "",
      r.data?.mobile || r.data?.agent_mobile || "",
      r.source,
    ].map(csvEscape).join(",");
    const dataCols = dataKeys.map(k => csvEscape(r.data?.[k] || "")).join(",");
    return `${top},${dataCols}`;
  });
  return [head, ...rows].join("\n");
}

const SAMPLE = [
  {
    id: "lex-demo-1", ts: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    type: "quote", title: "Property quote request", source: "Services.html", status: "New",
    data: { name: "Sarah Patel", email: "sarah.patel@example.com", mobile: "07900 123456",
            matter: "Buying", address: "12 Oakridge Mews, Wandsworth SW18", price: "£1,250,000",
            tenure: "Leasehold", timescale: "Exchange in 4 weeks",
            notes: "Long lease, share of freehold. Mortgage offer in place." }
  },
  {
    id: "lex-demo-2", ts: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    type: "referral", title: "Refer a client", source: "Agents.html", status: "Contacted",
    data: { agent_name: "James Hollis", agent_co: "Knight & Hollis Property", agent_email: "james@khproperty.co.uk",
            agent_mobile: "07700 900123", client_name: "Mr & Mrs Kapoor", client_mobile: "07900 111222",
            matter: "Sale & purchase", address: "Chain — Putney to Esher",
            price: "£2.8M / £3.4M", urgency: "Target exchange end of next month" }
  },
  {
    id: "lex-demo-3", ts: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    type: "certification", title: "Document certification / ID1 appointment",
    source: "Certification.html", status: "Quoted",
    data: { name: "David Lin", email: "d.lin@example.com", mobile: "07700 234567",
            service: "ID1 form", deadline: "by Wednesday", location: "Croydon", local: "Yes",
            notes: "Land Registry transfer of equity. Form pre-filled." }
  },
];

const DashboardApp = () => {
  const [t] = useTweaks(DASH_TWEAK_DEFAULTS);
  React.useEffect(() => { document.body.className = t.theme === "heritage" ? "theme-heritage" : ""; }, [t.theme]);
  const inverted = t.theme !== "heritage";

  const [list, setList] = React.useState(() => {
    const stored = window.loadEnquiries();
    return stored.length ? stored : [];
  });
  const [filter, setFilter] = React.useState("all");
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [activeId, setActiveId] = React.useState(null);

  const refresh = () => setList(window.loadEnquiries());

  const updateStatus = (id, status) => {
    const next = list.map(r => r.id === id ? { ...r, status } : r);
    setList(next); writeAll(next);
  };
  const deleteRow = (id) => {
    if (!confirm("Delete this enquiry from the dashboard? The email record in your inbox is unaffected.")) return;
    const next = list.filter(r => r.id !== id);
    setList(next); writeAll(next);
    if (activeId === id) setActiveId(null);
  };
  const exportCsv = () => {
    const csv = toCsv(filtered);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lexamin-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const loadSamples = () => {
    if (!confirm("Load 3 sample enquiries into the dashboard? You can delete them anytime.")) return;
    const next = [...SAMPLE, ...list];
    setList(next); writeAll(next);
  };
  const clearAll = () => {
    if (!confirm("Clear ALL enquiries from this device? This cannot be undone. The emails in your inbox are unaffected.")) return;
    setList([]); writeAll([]); setActiveId(null);
  };

  // Filters
  const filtered = list.filter(r => {
    if (filter !== "all" && r.status !== filter) return false;
    if (typeFilter !== "all" && r.type !== typeFilter) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      const hay = JSON.stringify(r).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  // Stats
  const total = list.length;
  const newCount = list.filter(r => r.status === "New").length;
  const thisWeek = list.filter(r => Date.now() - new Date(r.ts).getTime() < 7 * 24 * 60 * 60 * 1000).length;
  const conv = (() => {
    const closed = list.filter(r => r.status === "Won" || r.status === "Lost").length;
    if (!closed) return "—";
    return Math.round(list.filter(r => r.status === "Won").length / closed * 100) + "%";
  })();

  const active = activeId ? list.find(r => r.id === activeId) : null;
  const fieldDefs = active ? (window.FORM_CONFIGS[active.type]?.fields || []) : [];

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <NavBar logoDirection={t.logoDirection} inverted={inverted} current="" />

      <section className="dash">
        <div className="wrap">
          <div className="dash-head">
            <div>
              <Reveal>
                <div className="sec-tag">
                  <span className="bracket">[</span><ScrambleText text="LEX.DSH" /><span className="bracket">/</span>
                  <span>Admin · Enquiries</span><span className="bracket">]</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1>Enquiry Dashboard</h1>
              </Reveal>
              <Reveal delay={200}>
                <p style={{ marginTop: 12, color: "var(--ink-soft)", fontSize: 14, maxWidth: 720 }}>
                  All form submissions land here for tracking. Each one also emails{" "}
                  <strong style={{ color: "var(--navy)" }}>info@lexaminlegal.com</strong> when
                  submitted — that's your canonical record. This dashboard is a working view
                  on this device.
                </p>
              </Reveal>
            </div>
            <div className="dash-actions">
              <button className="btn btn-light" onClick={refresh}>Refresh</button>
              <button className="btn btn-light" onClick={exportCsv}>Export CSV</button>
              {list.length === 0 && <button className="btn" onClick={loadSamples}>Load samples</button>}
              {list.length > 0 && <button className="btn" onClick={clearAll}>Clear all</button>}
            </div>
          </div>

          {/* Stats */}
          <Reveal delay={250}>
            <div className="dash-stats">
              <div className="dash-stat">
                <div className="num">{total}</div>
                <div className="lbl">Total enquiries</div>
              </div>
              <div className="dash-stat">
                <div className="num"><em>{newCount}</em></div>
                <div className="lbl">New · need response</div>
              </div>
              <div className="dash-stat">
                <div className="num">{thisWeek}</div>
                <div className="lbl">This week</div>
              </div>
              <div className="dash-stat">
                <div className="num">{conv}</div>
                <div className="lbl">Conversion · won/closed</div>
              </div>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal delay={350}>
            <div className="dash-filters">
              <button className={`dash-filter ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All status</button>
              {STATUS_OPTIONS.map(s => (
                <button key={s} className={`dash-filter ${filter === s ? "active" : ""}`} onClick={() => setFilter(s)}>{s}</button>
              ))}
              <span style={{ width: 1, height: 24, background: "rgba(14,24,34,0.15)", margin: "0 6px" }} />
              <button className={`dash-filter ${typeFilter === "all" ? "active" : ""}`} onClick={() => setTypeFilter("all")}>All types</button>
              {Object.entries(TYPE_LABELS).map(([k, v]) => (
                <button key={k} className={`dash-filter ${typeFilter === k ? "active" : ""}`} onClick={() => setTypeFilter(k)}>{v}</button>
              ))}
              <input
                className="dash-search"
                placeholder="Search name, email, address…"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </Reveal>

          {/* Table */}
          <Reveal delay={420}>
            <div className="dash-list">
              {filtered.length === 0 ? (
                <div className="dash-empty">
                  <h3>{list.length === 0 ? "No enquiries yet." : "No enquiries match these filters."}</h3>
                  <p style={{ marginTop: 6 }}>
                    {list.length === 0
                      ? "When a form is submitted on the site, it will appear here."
                      : "Try clearing the search or status filter."}
                  </p>
                </div>
              ) : (
                <>
                  <div className="dash-row dash-header">
                    <div className="dash-cell">Received</div>
                    <div className="dash-cell">Type</div>
                    <div className="dash-cell">Name &amp; matter</div>
                    <div className="dash-cell contact">Contact</div>
                    <div className="dash-cell">Status</div>
                    <div className="dash-cell ref">Ref</div>
                  </div>
                  {filtered.map(r => {
                    const name = r.data?.name || r.data?.agent_name || r.data?.client_name || "—";
                    const contact = r.data?.email || r.data?.agent_email || r.data?.mobile || "";
                    const matter = r.data?.matter || r.data?.service || r.data?.topic || "";
                    return (
                      <div className="dash-row" key={r.id} onClick={() => setActiveId(r.id)}>
                        <div className="dash-cell date">{new Date(r.ts).toLocaleString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}</div>
                        <div className="dash-cell type">{TYPE_LABELS[r.type] || r.type}</div>
                        <div className="dash-cell name">
                          {name}
                          {matter && <span style={{ display: "block", fontSize: 12, color: "var(--ink-soft)", letterSpacing: 0, fontFamily: "var(--f-body)", marginTop: 2 }}>{matter}</span>}
                        </div>
                        <div className="dash-cell contact">{contact}</div>
                        <div className="dash-cell"><span className="status-pill" data-status={r.status}>{r.status}</span></div>
                        <div className="dash-cell ref">{r.id.slice(-6).toUpperCase()}</div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detail panel */}
      <div className={`dash-detail-overlay ${active ? "open" : ""}`} onClick={(e) => {
        if (e.target.classList.contains("dash-detail-overlay")) setActiveId(null);
      }}>
        <div className="dash-detail">
          {active && <>
            <button className="dash-detail-close" onClick={() => setActiveId(null)}>✕</button>
            <div className="sec-tag" style={{ marginBottom: 12 }}>
              <span className="bracket">[</span>
              <span>{TYPE_LABELS[active.type]?.toUpperCase() || active.type.toUpperCase()}.{active.id.slice(-4).toUpperCase()}</span>
              <span className="bracket">]</span>
            </div>
            <h2>{active.data?.name || active.data?.agent_name || active.data?.client_name || "Enquiry"}</h2>
            <div className="dash-meta">
              <span>{new Date(active.ts).toLocaleString("en-GB", { timeZone: "Europe/London" })}</span>
              <span>·</span>
              <span>{active.source}</span>
              <span>·</span>
              <span>Ref {active.id.slice(-6).toUpperCase()}</span>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
              {(() => {
                const email = active.data?.email || active.data?.agent_email;
                const phone = active.data?.mobile || active.data?.agent_mobile;
                return <>
                  {email && <a className="btn btn-solid" href={`mailto:${email}`} style={{ padding: "10px 16px", fontSize: 11 }}>Reply by email</a>}
                  {phone && <a className="btn btn-light" href={`tel:${phone.replace(/[^+\d]/g, "")}`} style={{ padding: "10px 16px", fontSize: 11 }}>Call</a>}
                  {phone && <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${phone.replace(/[^\d]/g, "")}`} style={{ padding: "10px 16px", fontSize: 11 }}>WhatsApp</a>}
                </>;
              })()}
            </div>

            <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-soft)", fontWeight: 600 }}>Status</div>
            <div className="status-row">
              {STATUS_OPTIONS.map(s => (
                <button key={s} className={active.status === s ? "active" : ""}
                        onClick={() => updateStatus(active.id, s)}>{s}</button>
              ))}
            </div>

            <div className="dash-data">
              {fieldDefs.map(f => {
                const v = active.data?.[f.k];
                if (!v) return null;
                return (
                  <div className="row" key={f.k}>
                    <div className="k">{f.label}</div>
                    <div className="v">{v}</div>
                  </div>
                );
              })}
              {/* Any data fields not in the schema */}
              {Object.entries(active.data || {})
                .filter(([k]) => !fieldDefs.find(f => f.k === k))
                .map(([k, v]) => (
                  <div className="row" key={k}>
                    <div className="k">{k}</div>
                    <div className="v">{v}</div>
                  </div>
                ))
              }
            </div>

            <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(14,24,34,0.1)", display: "flex", justifyContent: "space-between", gap: 12 }}>
              <button className="btn btn-light" onClick={() => deleteRow(active.id)}>Delete from dashboard</button>
              <span style={{ fontSize: 11, color: "var(--ink-soft)", letterSpacing: "0.04em", textAlign: "right", maxWidth: 280, lineHeight: 1.6 }}>
                Email record at info@lexaminlegal.com unaffected.
              </span>
            </div>
          </>}
        </div>
      </div>

      <FooterBar logoDirection={t.logoDirection} />
    </>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<DashboardApp />);
