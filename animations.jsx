// Lexamin Legal — Animation utilities & tech-feel components
// Vanilla React + IntersectionObserver. No motion lib needed.

const { useEffect, useRef, useState, useCallback } = React;

// ── useReveal ──────────────────────────────────────────────────────
// Adds .in-view to a ref when it enters the viewport. Pass an
// optional delay (ms) and threshold.
function useReveal({ delay = 0, threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in-view");
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (delay) setTimeout(() => el.classList.add("in-view"), delay);else
          el.classList.add("in-view");
          if (once) obs.unobserve(el);
        } else if (!once) {
          el.classList.remove("in-view");
        }
      });
    }, { threshold, rootMargin: "0px 0px -8% 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold, once]);
  return ref;
}

// ── Reveal wrapper ─────────────────────────────────────────────────
// Convenience component for one-off reveals.
const Reveal = ({ as: Tag = "div", delay = 0, kind = "up", className = "", children, ...rest }) => {
  const ref = useReveal({ delay });
  return (
    <Tag ref={ref} className={`reveal reveal-${kind} ${className}`} {...rest}>
      {children}
    </Tag>);

};

// ── useCount ───────────────────────────────────────────────────────
// Animated number counter that starts when target enters viewport.
function useCount(target, { duration = 1400, start = 0 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(start);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const t0 = performance.now();
          const tick = (t) => {
            const k = Math.min(1, (t - t0) / duration);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - k, 3);
            setValue(Math.round(start + (target - start) * eased));
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, start]);
  return [value, ref];
}

const Counter = ({ to, prefix = "", suffix = "", duration = 1400, className }) => {
  const [v, ref] = useCount(to, { duration });
  return <span ref={ref} className={className}>{prefix}{v}{suffix}</span>;
};

// ── useMagnetic ────────────────────────────────────────────────────
// Element follows cursor slightly when hovered. Strength 0–1.
function useMagnetic(strength = 0.3) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let rect = null;
    const enter = () => {rect = el.getBoundingClientRect();};
    const move = (e) => {
      if (!rect) rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const leave = () => {el.style.transform = "";};
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);
  return ref;
}

// ── ScrollProgress ─────────────────────────────────────────────────
// Gold line at the top of the viewport that fills as the user scrolls.
const ScrollProgress = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const k = max > 0 ? h.scrollTop / max : 0;
      el.style.transform = `scaleX(${k})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div className="scroll-progress" ref={ref} aria-hidden="true" />;
};

// ── CustomCursor ───────────────────────────────────────────────────
// Dot + lagging ring follower. Ring grows on hoverable elements.
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // touch
    document.body.classList.add("has-custom-cursor");
    let mx = window.innerWidth / 2,my = window.innerHeight / 2;
    let rx = mx,ry = my;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const onMove = (e) => {mx = e.clientX;my = e.clientY;};
    const onDown = () => ring.classList.add("down");
    const onUp = () => ring.classList.remove("down");
    const onOver = (e) => {
      const t = e.target.closest("a, button, [data-magnetic], [role='button'], input, .hoverable");
      if (t) ring.classList.add("hover");else
      ring.classList.remove("hover");
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);
    let raf;
    const tick = () => {
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);
  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>);

};

// ── PageTransition ─────────────────────────────────────────────────
// Intercepts clicks on same-site links; animates an overlay across,
// then navigates. On load, animates the overlay back out.
// Lives in both index.html and People.html so transitions chain cleanly.
const PageTransition = () => {
  const overlayRef = useRef(null);
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // On load: slide overlay out from covering state
    requestAnimationFrame(() => {
      overlay.classList.add("entering");
      setTimeout(() => overlay.classList.remove("covering", "entering"), 800);
    });

    // Intercept clicks on internal links
    const onClick = (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href) return;
      if (a.target === "_blank") return;
      if (href.startsWith("#")) return; // in-page anchor
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      // Only handle same-document html
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && !url.hash) return;

      e.preventDefault();
      overlay.classList.add("leaving");
      setTimeout(() => {
        window.location.href = a.href;
      }, 600);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <div className="page-transition covering" ref={overlayRef} aria-hidden="true">
      <div className="pt-bg" />
      <div className="pt-mark">
        <img src="images/lexamin-ll-mark.png" alt="Lexamin Legal" width="106" height="113" style={{ display: "block", width: "auto", height: 113 }} />
      </div>
    </div>);

};

// ── LiveClock ──────────────────────────────────────────────────────
// Shows current London time. Used in nav as a tech detail.
const LiveClock = () => {
  const [time, setTime] = useState(() => formatLondon());
  useEffect(() => {
    const t = setInterval(() => setTime(formatLondon()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="live-clock" aria-label="Current time in London">
      <span className="dot" />
      <span className="lbl">London</span>
      <span className="time">{time}</span>
    </div>);

};
function formatLondon() {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit", minute: "2-digit", hour12: false,
      timeZone: "Europe/London"
    }).format(new Date());
  } catch (e) {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
}

// ── ScrambleText ───────────────────────────────────────────────────
// Letter-by-letter scramble that resolves to the final string.
// Triggers when in viewport.
const ScrambleText = ({ text, duration = 900, className }) => {
  const ref = useRef(null);
  const [out, setOut] = useState(text);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      return;
    }
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·-";
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const t0 = performance.now();
        const tick = (t) => {
          const k = Math.min(1, (t - t0) / duration);
          const result = text.split("").map((c, i) => {
            if (c === " ") return " ";
            const settleAt = i / text.length * 0.85;
            if (k > settleAt + 0.15) return c;
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("");
          setOut(result);
          if (k < 1) requestAnimationFrame(tick);else
          setOut(text);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [text, duration]);
  return <span ref={ref} className={className}>{out}</span>;
};

// ── Marquee ────────────────────────────────────────────────────────
// Infinite horizontal ticker. Pass an array of items.
const Marquee = ({ items, duration = 35, separator = "·" }) => {
  // Duplicate items so the loop is seamless.
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        {doubled.map((it, i) =>
        <span key={i} className="marquee-item">
            <span>{it}</span>
            <span className="marquee-sep">{separator}</span>
          </span>
        )}
      </div>
    </div>);

};

// ── SpotlightSection ───────────────────────────────────────────────
// Adds a soft mouse-following gold spotlight on a dark section.
// Wrap a section and pass it as a child. Apply via class.
function useSpotlight() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
      el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  return ref;
}

// ── LogoFlash ─────────────────────────────────────────────────────
// On link click: shows a centered cipher mark with a soft fade-in,
// then navigates. No shutter, no sliding overlay — just a brief flash
// of the brand mark to bridge the navigation.
const LogoFlash = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const onClick = (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href) return;
      if (a.target === "_blank") return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && !url.hash) return;

      e.preventDefault();
      setActive(true);
      // brief flash, then navigate
      setTimeout(() => {window.location.href = a.href;}, 520);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <div className={`logo-flash ${active ? "active" : ""}`} aria-hidden="true">
      <div className="lf-mark">
        <img src="images/lexamin-ll-mark.png" alt="Lexamin Legal" width="106" height="113" style={{ display: "block", width: "auto", height: 113 }} />
      </div>
    </div>);

};

Object.assign(window, {
  useReveal, Reveal,
  useCount, Counter,
  useMagnetic,
  ScrollProgress,
  CustomCursor,
  PageTransition,
  LogoFlash,
  LiveClock,
  ScrambleText,
  Marquee,
  useSpotlight
});