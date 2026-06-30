import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  "Tell me about Mayur",
  "What's his experience?",
  "Which SAP tools?",
  "How can I contact him?",
];

function answer(q: string): string {
  const s = q.toLowerCase();
  if (/(hi|hello|hey|hola)\b/.test(s))
    return "Hello! I'm Mayur's executive assistant. Ask me about his experience, SAP expertise, projects, or how to get in touch.";
  if (/(contact|email|phone|reach|hire|connect)/.test(s))
    return "You can reach Mayur at akalwadi1103@gmail.com or +91 99804 11129. He's based in Bengaluru and open to global hybrid opportunities.";
  if (/(experience|background|career|work|history|companies|role)/.test(s))
    return "Mayur has 8+ years across: Business Development Manager at KREO Softwares (2024–Present), Business Analyst at SAP Labs (2022–2024), SAP MM Consultant at Capgemini (2020–2022), SAP ERP Consultant at TCS (2018–2020), and Industrial Product Designer (2017–2018).";
  if (/(sap|tool|stack|tech|skill|software)/.test(s))
    return "SAP toolkit: MM, WM, EWM, TM, APO, IBP, and Ariba — plus PLM, ERP architecture, business analysis, and supply chain optimization.";
  if (/(project|case study|portfolio|work sample)/.test(s))
    return "Selected work includes AI-Driven Omni-Channel Fulfillment (SAP EWM), Multi-Echelon Inventory Optimization (SAP MM), and a Smart Product Lifecycle & Traceability Network (PLM→ERP). Open any card under Projects for details.";
  if (/(service|offer|engagement|consult)/.test(s))
    return "Engagements: ERP & Supply Chain Transformation, End-to-End Business Analysis, Industrial Product Validation, and Market Growth / Business Development.";
  if (/(education|university|degree|study)/.test(s))
    return "Mayur is an alumnus of M.S. Ramaiah University of Applied Sciences.";
  if (/(location|where|based|city|relocat)/.test(s))
    return "Based in Bengaluru, India — flexible to relocate and open to global engagements.";
  if (/(about|who|mayur|introduce|bio)/.test(s))
    return "Mayur Akalwadi is a Business Development Manager and Senior Business Analyst with 8+ years bridging industrial product design, ERP transformation (SAP MM/WM/EWM and beyond), supply chain, and enterprise growth.";
  if (/(impact|result|metric|kpi|number)/.test(s))
    return "Track record includes 8+ years of enterprise delivery, 100% architecture alignment, and an average 20% efficiency lift on transformation engagements.";
  return "I can help with Mayur's experience, SAP tools, projects, services, or contact details. Try one of the quick prompts below.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi, I'm Mayur's executive assistant. Ask about his experience, SAP expertise, or how to engage.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: answer(t) }]);
    }, 380);
  };

  return (
    <>
      <button
        aria-label={open ? "Close assistant" : "Open assistant"}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[70] h-14 w-14 rounded-full btn-gold grid place-items-center shadow-[0_18px_48px_-12px_rgba(212,175,55,0.55)] animate-pulse-gold"
      >
        <span className="text-xl">{open ? "✕" : "✦"}</span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[70] w-[min(92vw,380px)] glass-gold rounded-3xl overflow-hidden gold-border animate-reveal-up flex flex-col max-h-[70vh]">
          <div className="px-5 py-4 border-b border-white/5 flex items-center gap-3">
            <span className="h-9 w-9 rounded-full bg-[var(--gradient-gold)] grid place-items-center text-[var(--background)] font-bold">
              M
            </span>
            <div>
              <div className="font-display text-sm font-semibold">Mayur's Assistant</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold mr-1.5 align-middle" />
                Online
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] text-sm leading-relaxed rounded-2xl px-3.5 py-2.5 ${
                    m.role === "user"
                      ? "bg-[var(--gradient-gold)] text-[var(--background)] font-medium"
                      : "glass text-silver/90"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-[11px] glass rounded-full px-2.5 py-1 text-silver/80 hover:text-gold gold-border"
              >
                {s}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-white/5 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about experience, SAP, projects…"
              className="flex-1 bg-white/[0.04] border border-white/10 focus:border-gold/60 focus:outline-none rounded-full px-4 py-2.5 text-sm placeholder:text-silver/40"
            />
            <button
              type="submit"
              aria-label="Send"
              className="h-10 w-10 rounded-full btn-gold grid place-items-center text-sm shrink-0"
            >
              →
            </button>
          </form>
        </div>
      )}
    </>
  );
}
