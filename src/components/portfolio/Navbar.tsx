import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import logoAsset from "@/assets/ma-logo.png.asset.json";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-8 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <nav
          className={`glass rounded-2xl flex items-center justify-between px-5 md:px-7 py-3 gold-border ${
            scrolled ? "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <a href="#top" onClick={handleClick("#top")} className="flex items-center gap-2.5 group">
            <img
              src={logoAsset.url}
              alt="Mayur Akalwadi logo"
              className="h-9 w-9 object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display font-semibold tracking-tight text-foreground/95">
              Mayur Akalwadi
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={handleClick(l.href)}
                  className="relative px-4 py-2 text-sm text-silver/85 hover:text-foreground transition-colors after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:bg-[var(--gradient-gold)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hidden sm:inline-flex btn-gold rounded-full px-5 py-2.5 text-sm"
            >
              Let's Connect
            </MagneticButton>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden h-10 w-10 grid place-items-center rounded-lg glass-gold"
            >
              <span className="block w-4 h-px bg-foreground mb-1.5" />
              <span className="block w-4 h-px bg-foreground" />
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 gold-border animate-reveal-up">
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={handleClick(l.href)}
                    className="block px-3 py-3 text-sm text-silver/90 hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
