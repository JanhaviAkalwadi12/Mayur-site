import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/mayur.png";
import { Navbar } from "@/components/portfolio/Navbar";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Reveal } from "@/components/portfolio/Reveal";
import { TiltCard } from "@/components/portfolio/TiltCard";
import { Counter } from "@/components/portfolio/Counter";
import { MagneticButton } from "@/components/portfolio/MagneticButton";
import { Chatbot } from "@/components/portfolio/Chatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mayur Akalwadi — Business Development Manager & Senior Business Analyst" },
      { name: "description", content: "Executive portfolio of Mayur Akalwadi: 8+ years driving ERP transformation, SAP MM/WM/EWM, supply chain optimization and industrial product strategy." },
      { property: "og:title", content: "Mayur Akalwadi — ERP & Business Transformation Leader" },
      { property: "og:description", content: "Bridging complex industrial product architecture and enterprise-scale efficiency." },
      { property: "og:image", content: portraitAsset },
      { name: "twitter:image", content: portraitAsset },
    ],
  }),
  component: Index,
});

/* ---------- Section: Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden grain-bg">
      {/* floating decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] blur-2xl animate-float-slow" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.14),transparent_70%)] blur-2xl animate-float-slow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <a
              href="https://kreosoftwares.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 glass-gold rounded-full px-3.5 py-1.5 text-xs tracking-wide text-silver/90"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-gold animate-pulse-gold" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              Currently: Business Development Manager at{" "}
              <span className="text-gold font-semibold underline-offset-2 hover:underline">KREO</span>
              <span aria-hidden>↗</span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              <span className="text-foreground">Mayur</span>{" "}
              <span className="text-gold">Akalwadi</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-4 text-base sm:text-lg text-silver/80 font-medium">
              Business Development Manager
              <span className="mx-2 text-gold/70">|</span>
              Senior Business Analyst
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-6 max-w-xl text-lg text-silver/75 leading-relaxed">
              Bridging the gap between complex industrial product architecture
              and enterprise-scale efficiency.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                "8+ Years of Experience",
                "Bengaluru · Flexible to Relocate",
                "ERP Transformation Specialist",
              ].map((b) => (
                <span
                  key={b}
                  className="glass rounded-full px-3.5 py-1.5 text-xs text-silver/85 gold-border"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-9 flex flex-wrap gap-4">
              <MagneticButton
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-gold rounded-full px-7 py-3.5 text-sm"
              >
                Let's Connect
              </MagneticButton>
              <MagneticButton
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-ghost-gold rounded-full px-7 py-3.5 text-sm"
                strength={0.2}
              >
                View Portfolio
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 bg-[var(--gradient-gold)] opacity-20 blur-2xl rounded-3xl" />
            <div className="relative glass-gold rounded-3xl overflow-hidden p-2">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={portraitAsset}
                  alt="Portrait of Mayur Akalwadi"
                  className="w-full h-auto object-cover aspect-[3/4]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 gold-border animate-float-slow">
                <div className="text-[10px] uppercase tracking-[0.18em] text-gold/90">Specialty</div>
                <div className="text-sm font-semibold">SAP MM · WM · EWM</div>
              </div>
              <div className="absolute -top-4 -right-3 glass rounded-2xl px-4 py-3 gold-border animate-float-slow" style={{ animationDelay: "1s" }}>
                <div className="text-[10px] uppercase tracking-[0.18em] text-gold/90">Impact</div>
                <div className="text-sm font-semibold">+20% efficiency</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section: About ---------- */
function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">— About</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              An executive operator at the intersection of{" "}
              <span className="text-gold">design, data and delivery.</span>
            </h2>
            <p className="mt-6 text-silver/80 text-lg leading-relaxed">
              8 years of proven expertise driving growth at the intersection of
              industrial product design, enterprise resource planning, supply
              chain logistics, and business transformation.
            </p>
            <div className="mt-8 glass-gold rounded-2xl p-5 max-w-md">
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold/90">Alumnus</div>
              <div className="mt-1 font-semibold">M.S. Ramaiah University of Applied Sciences</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ol className="relative border-l border-gold/30 pl-8 space-y-7">
            {[
              { year: "2024 — Present", title: "Business Development Manager", org: "KREO Softwares" },
              { year: "2022 — 2024", title: "Business Analyst", org: "SAP Labs" },
              { year: "2020 — 2022", title: "SAP MM Consultant", org: "Capgemini" },
              { year: "2018 — 2020", title: "SAP ERP Consultant", org: "Tata Consultancy Services (TCS)" },
              { year: "2017 — 2018", title: "Industrial Product Designer & PLM", org: "Manufacturing Sector" },
            ].map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-[var(--gradient-gold)] shadow-[0_0_0_4px_rgba(212,175,55,0.15)]" />
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold/80">{t.year}</div>
                <div className="mt-1 font-display text-lg font-semibold text-foreground">{t.title}</div>
                <div className="text-sm text-silver/70">{t.org}</div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section: Expertise (Bento) ---------- */
function Expertise() {
  const cards = [
    {
      title: "ERP & Supply Chain",
      span: "md:col-span-2",
      items: [
        "SAP Material Management (MM)",
        "SAP Warehouse Management (WM)",
        "SAP Extended Warehouse Management (EWM)",
      ],
      glyph: "◆",
    },
    {
      title: "Business Intelligence",
      items: ["Business Analysis", "Process Mapping", "Requirement Gathering", "ERP Consulting"],
      glyph: "◇",
    },
    {
      title: "Engineering & Innovation",
      items: ["Industrial Product Design", "Product Analysis", "Product Lifecycle Management"],
      glyph: "✦",
    },
  ];
  return (
    <section id="skills" className="relative py-24 md:py-32 grain-bg">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">— Core Expertise</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">
            Three pillars. <span className="text-gold">One transformation playbook.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className={c.span ?? ""}>
              <TiltCard className="h-full">
                <div className="glass-gold rounded-3xl p-7 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="text-gold text-2xl">{c.glyph}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-silver/50">0{i + 1}</div>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
                  <ul className="mt-5 space-y-2.5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm text-silver/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--gradient-gold)]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <StackToggle />
      </div>
    </section>
  );
}

function StackToggle() {
  const [view, setView] = useState<"domain" | "tools">("domain");
  const domain = ["Business Analysis", "Supply Chain", "ERP Transformation", "Product Strategy"];
  const tools = [
    "SAP MM (Material Management)",
    "SAP WM (Warehouse Management)",
    "SAP EWM (Extended Warehouse Management)",
    "SAP TM (Transportation Management)",
    "SAP APO (Advanced Planning & Optimization)",
    "SAP IBP (Integrated Business Planning)",
    "SAP Ariba (Procurement & Supplier Collaboration)",
    "PLM",
    "ERP Systems",
  ];
  const items = view === "domain" ? domain : tools;
  return (
    <div className="mt-16">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-2">— View By</div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold">Tech Stack</h3>
          </div>
          <div className="glass rounded-full p-1 gold-border flex">
            {(["domain", "tools"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setView(k)}
                className={`relative px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-colors ${
                  view === k ? "text-[var(--background)]" : "text-silver/80 hover:text-foreground"
                }`}
              >
                {view === k && (
                  <span className="absolute inset-0 rounded-full bg-[var(--gradient-gold)]" />
                )}
                <span className="relative">{k === "domain" ? "Domain Expertise" : "Tools"}</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="mt-7 flex flex-wrap gap-3">
        {items.map((it, i) => (
          <div
            key={it}
            className="glass rounded-2xl px-5 py-3 text-sm gold-border animate-reveal-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Section: Metrics ---------- */
function Metrics() {
  const stats = [
    { n: 8, suffix: "+", label: "Years Enterprise Experience" },
    { n: 100, suffix: "%", label: "Architecture Alignment" },
    { n: 20, suffix: "%", label: "Average Efficiency Increase" },
  ];
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="glass-gold rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="text-center md:text-left">
                <div className="font-display text-6xl md:text-7xl leading-none">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-silver/75 uppercase tracking-[0.2em]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section: Services ---------- */
function Services() {
  const services = [
    { t: "ERP & Supply Chain Transformation Consulting", d: "End-to-end SAP MM/WM/EWM rollouts, process redesign and adoption.", g: "◆" },
    { t: "End-to-End Business Analysis & Strategy", d: "From discovery and requirement gathering to roadmap and KPIs.", g: "✦" },
    { t: "Industrial Product Design Validation & Optimization", d: "PLM alignment, BOM accuracy, manufacturability and lifecycle gating.", g: "◇" },
    { t: "Market Growth & Business Development Management", d: "Pipeline architecture, enterprise GTM and strategic partnerships.", g: "❖" },
  ];
  return (
    <section id="services" className="relative py-24 md:py-32 grain-bg">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">— Services</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">
            Engagements built for <span className="text-gold">enterprise outcomes.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <TiltCard>
                <div className="glass rounded-3xl p-7 gold-border group relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="flex items-start justify-between">
                    <div className="text-gold text-3xl">{s.g}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-silver/40">
                      Service · 0{i + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{s.t}</h3>
                  <p className="mt-3 text-sm text-silver/75 leading-relaxed">{s.d}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section: Projects ---------- */
type Project = {
  title: string;
  short: string;
  tag: string;
  span?: string;
  problem: string;
  solution: string[];
  impact: string;
};
const PROJECTS: Project[] = [
  {
    title: "AI-Driven Omni-Channel Fulfillment",
    tag: "SAP EWM",
    short: "Warehouse optimization engine using real-time demand data to dynamically update storage locations.",
    span: "md:col-span-2",
    problem: "Manual storage allocation and static slotting created excessive travel time and labor overhead across high-velocity SKUs in omni-channel warehouses.",
    solution: [
      "Automated wave management aligned to fulfillment SLAs",
      "Cross-docking coordination for inbound-outbound flow",
      "Dynamic bin assignment driven by live demand signals",
      "High-turnover item optimization with velocity-based zoning",
    ],
    impact: "Reduced warehouse travel time and labor overhead by up to 20%, lifting on-time fulfillment across DTC and B2B channels.",
  },
  {
    title: "Multi-Echelon Inventory Optimization",
    tag: "SAP MM",
    short: "Enterprise supply chain engine automating multi-location procurement.",
    problem: "Disconnected regional planning teams caused simultaneous stockouts and excess working capital tied up in safety stock.",
    solution: [
      "Automated Purchase Requisition triggers across nodes",
      "Safety stock optimization tuned by demand variability",
      "Vendor quota optimization with performance weighting",
      "Automated source determination for fastest fulfillment",
    ],
    impact: "Prevented stockouts on critical SKUs while reducing excess inventory investment and freeing working capital.",
  },
  {
    title: "Smart Product Lifecycle & Traceability Network",
    tag: "PLM → ERP",
    short: "Centralized platform connecting industrial CAD designs with SAP production systems.",
    problem: "Engineering and ERP operated in silos — CAD revisions, BOM updates and batch records were reconciled manually, slowing launches and introducing errors.",
    solution: [
      "Engineering Change Management workflows across PLM/ERP",
      "Batch traceability from raw material to finished good",
      "CAD-to-BOM synchronization with rev control",
    ],
    impact: "Reduced engineering data errors and accelerated product launch cycles with full traceability for audits.",
  },
];

function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">— Case Studies</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">
            Selected engagements <span className="text-gold">at enterprise scale.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className={p.span ?? ""}>
              <TiltCard>
                <button
                  onClick={() => setOpen(p)}
                  className="text-left w-full glass-gold rounded-3xl p-7 h-full group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                        {p.tag}
                      </span>
                      <span className="text-silver/40 text-xs">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-sm text-silver/75 leading-relaxed">{p.short}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                      Open case study <span aria-hidden>→</span>
                    </div>
                  </div>
                </button>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [tab, setTab] = useState<"problem" | "solution" | "impact">("problem");
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-reveal-up"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl glass-gold rounded-3xl p-7 md:p-10 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-9 w-9 rounded-full glass grid place-items-center hover:bg-white/5"
        >
          ✕
        </button>
        <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
          {project.tag}
        </span>
        <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold leading-tight">
          {project.title}
        </h3>

        <div className="mt-6 inline-flex glass rounded-full p-1 gold-border">
          {(["problem", "solution", "impact"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`relative px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-colors ${
                tab === k ? "text-[var(--background)]" : "text-silver/80 hover:text-foreground"
              }`}
            >
              {tab === k && <span className="absolute inset-0 rounded-full bg-[var(--gradient-gold)]" />}
              <span className="relative">
                {k === "problem" ? "Problem" : k === "solution" ? "ERP Solution" : "Business Impact"}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 text-silver/85 leading-relaxed">
          {tab === "problem" && <p>{project.problem}</p>}
          {tab === "solution" && (
            <ul className="space-y-3">
              {project.solution.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gradient-gold)] shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          )}
          {tab === "impact" && <p className="text-lg">{project.impact}</p>}
        </div>
      </div>
    </div>
  );
}

/* ---------- Section: Architecture Map ---------- */
function ArchitectureMap() {
  const nodes = [
    { title: "Industrial Design", desc: "CAD, validation, manufacturability" },
    { title: "Product Lifecycle Management", desc: "BOM, ECM, revision control" },
    { title: "ERP Integration", desc: "SAP MM · WM · EWM" },
    { title: "Supply Chain Optimization", desc: "Multi-echelon, vendor quotas" },
    { title: "Business Growth", desc: "GTM, partnerships, scale" },
  ];
  return (
    <section className="relative py-24 md:py-32 grain-bg">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">— Architecture Map</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">
            From CAD to <span className="text-gold">market scale.</span>
          </h2>
        </Reveal>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <ol className="space-y-6 md:space-y-10">
            {nodes.map((n, i) => (
              <Reveal key={n.title} delay={i * 100}>
                <li
                  className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                    <div className="glass-gold rounded-2xl p-6 inline-block max-w-md hover:translate-y-[-2px] transition-transform">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-gold/85">
                        Stage 0{i + 1}
                      </div>
                      <div className="mt-1 font-display text-xl font-semibold">{n.title}</div>
                      <div className="mt-2 text-sm text-silver/75">{n.desc}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <span className="relative inline-flex h-4 w-4">
                      <span className="absolute inset-0 rounded-full bg-gold animate-pulse-gold" />
                      <span className="relative inline-flex h-4 w-4 rounded-full bg-[var(--gradient-gold)] shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
                    </span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section: Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">— Contact</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Let's design your <span className="text-gold">next transformation.</span>
          </h2>
          <form onSubmit={onSubmit} className="mt-10 glass-gold rounded-3xl p-7 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Company" name="company" />
            <Field label="Message" name="message" textarea />
            <MagneticButton type="submit" className="btn-gold rounded-full px-7 py-3.5 text-sm">
              {sent ? "✓ Sent — Thank you" : "Start Project"}
            </MagneticButton>
          </form>
        </Reveal>

        <Reveal delay={150}>
          <div className="space-y-4 lg:pt-20">
            <ContactRow label="Phone" value="+91 99804 11129" href="tel:+919980411129" />
            <ContactRow label="Email" value="akalwadi1103@gmail.com" href="mailto:akalwadi1103@gmail.com" />
            <ContactRow label="Location" value="Bengaluru, India" />
            <ContactRow label="Open To" value="Global · Hybrid Opportunities" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-silver/70">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          className="mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-gold/60 focus:outline-none rounded-xl px-4 py-3 text-sm placeholder:text-silver/40 transition-colors"
          placeholder={`Your ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          name={name}
          type={type}
          className="mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-gold/60 focus:outline-none rounded-xl px-4 py-3 text-sm placeholder:text-silver/40 transition-colors"
          placeholder={`Your ${label.toLowerCase()}`}
        />
      )}
    </label>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const Inner = (
    <div className="glass rounded-2xl p-5 gold-border flex items-center justify-between hover:bg-white/[0.04] transition-colors">
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-gold/85">{label}</div>
        <div className="mt-1 font-medium text-foreground">{value}</div>
      </div>
      {href && <span className="text-gold text-xl">↗</span>}
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="font-display text-2xl font-bold">
              Mayur <span className="text-gold">Akalwadi</span>
            </div>
            <p className="mt-3 text-sm text-silver/70 max-w-sm">
              Bridging complex industrial product architecture with enterprise-scale efficiency.
            </p>
          </div>
          <nav>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold/85 mb-3">
              Quick Links
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {["About", "Skills", "Projects", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-silver/80 hover:text-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-silver/55">
          <div>© 2026 Mayur Akalwadi. All Rights Reserved.</div>
          <div>Crafted with precision · Bengaluru, India</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Metrics />
      <Services />
      <Projects />
      <ArchitectureMap />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
