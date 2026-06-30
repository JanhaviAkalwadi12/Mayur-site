import { n as __toESM } from "../_runtime.mjs";
import { c as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { t as mayur_default } from "./mayur-FVNovQXx.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DKQzFjRq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MagneticButton({ children, strength = .35, className = "", ...rest }) {
	const ref = (0, import_react.useRef)(null);
	const handleMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - (r.left + r.width / 2)) * strength;
		const y = (e.clientY - (r.top + r.height / 2)) * strength;
		el.style.transform = `translate(${x}px, ${y}px)`;
	};
	const handleLeave = () => {
		const el = ref.current;
		if (el) el.style.transform = "translate(0,0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		onMouseMove: handleMove,
		onMouseLeave: handleLeave,
		className: `will-change-transform transition-transform duration-300 ease-out ${className}`,
		...rest,
		children
	});
}
var ma_logo_default = "/assets/ma-logo-CCBCwqhF.png";
var LINKS = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Skills",
		href: "#skills"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const handleClick = (href) => (e) => {
		e.preventDefault();
		setOpen(false);
		document.querySelector(href)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto max-w-7xl px-5 md:px-8 transition-all duration-500 ${scrolled ? "" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `glass rounded-2xl flex items-center justify-between px-5 md:px-7 py-3 gold-border ${scrolled ? "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						onClick: handleClick("#top"),
						className: "flex items-center gap-2.5 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ma_logo_default,
							alt: "Mayur Akalwadi logo",
							className: "h-9 w-9 object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold tracking-tight text-foreground/95",
							children: "Mayur Akalwadi"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden md:flex items-center gap-1",
						children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							onClick: handleClick(l.href),
							className: "relative px-4 py-2 text-sm text-silver/85 hover:text-foreground transition-colors after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:bg-[var(--gradient-gold)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform",
							children: l.label
						}) }, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							onClick: () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }),
							className: "hidden sm:inline-flex btn-gold rounded-full px-5 py-2.5 text-sm",
							children: "Let's Connect"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							"aria-label": "Toggle menu",
							onClick: () => setOpen((o) => !o),
							className: "md:hidden h-10 w-10 grid place-items-center rounded-lg glass-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-4 h-px bg-foreground mb-1.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-4 h-px bg-foreground" })]
						})]
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:hidden mt-2 glass rounded-2xl p-4 gold-border animate-reveal-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: handleClick(l.href),
						className: "block px-3 py-3 text-sm text-silver/90 hover:text-gold",
						children: l.label
					}) }, l.href))
				})
			})]
		})
	});
}
function ParticleBackground() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let w = canvas.width = window.innerWidth;
		let h = canvas.height = window.innerHeight;
		const N = Math.min(70, Math.floor(w * h / 28e3));
		const dots = Array.from({ length: N }, () => ({
			x: Math.random() * w,
			y: Math.random() * h,
			vx: (Math.random() - .5) * .25,
			vy: (Math.random() - .5) * .25,
			r: Math.random() * 1.4 + .4
		}));
		const onResize = () => {
			w = canvas.width = window.innerWidth;
			h = canvas.height = window.innerHeight;
		};
		window.addEventListener("resize", onResize);
		const tick = () => {
			ctx.clearRect(0, 0, w, h);
			for (let i = 0; i < dots.length; i++) {
				const d = dots[i];
				d.x += d.vx;
				d.y += d.vy;
				if (d.x < 0 || d.x > w) d.vx *= -1;
				if (d.y < 0 || d.y > h) d.vy *= -1;
				ctx.beginPath();
				ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(212,175,55,0.45)";
				ctx.fill();
				for (let j = i + 1; j < dots.length; j++) {
					const d2 = dots[j];
					const dx = d.x - d2.x;
					const dy = d.y - d2.y;
					const dist = Math.hypot(dx, dy);
					if (dist < 130) {
						ctx.strokeStyle = `rgba(212,175,55,${.12 * (1 - dist / 130)})`;
						ctx.lineWidth = .6;
						ctx.beginPath();
						ctx.moveTo(d.x, d.y);
						ctx.lineTo(d2.x, d2.y);
						ctx.stroke();
					}
				}
			}
			raf = requestAnimationFrame(tick);
		};
		tick();
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", onResize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		"aria-hidden": true,
		className: "fixed inset-0 -z-10 pointer-events-none opacity-60"
	});
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: {
			transitionDelay: `${delay}ms`,
			transform: shown ? "translateY(0)" : "translateY(28px)",
			opacity: shown ? 1 : 0
		},
		className: `transition-all duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] ${className}`,
		children
	});
}
function TiltCard({ children, className = "", max = 8 }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(0)`;
	};
	const reset = () => {
		const el = ref.current;
		if (el) el.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: reset,
		className: `transition-transform duration-300 ease-out will-change-transform ${className}`,
		children
	});
}
function Counter({ to, suffix = "", duration = 1800 }) {
	const ref = (0, import_react.useRef)(null);
	const [val, setVal] = (0, import_react.useState)(0);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting && !started.current) {
				started.current = true;
				const t0 = performance_default.now();
				const tick = (t) => {
					const p = Math.min(1, (t - t0) / duration);
					const eased = 1 - Math.pow(1 - p, 3);
					setVal(Math.round(eased * to));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "font-display font-bold text-gold tabular-nums",
		children: [val, suffix]
	});
}
var SUGGESTIONS = [
	"Tell me about Mayur",
	"What's his experience?",
	"Which SAP tools?",
	"How can I contact him?"
];
function answer(q) {
	const s = q.toLowerCase();
	if (/(hi|hello|hey|hola)\b/.test(s)) return "Hello! I'm Mayur's executive assistant. Ask me about his experience, SAP expertise, projects, or how to get in touch.";
	if (/(contact|email|phone|reach|hire|connect)/.test(s)) return "You can reach Mayur at akalwadi1103@gmail.com or +91 99804 11129. He's based in Bengaluru and open to global hybrid opportunities.";
	if (/(experience|background|career|work|history|companies|role)/.test(s)) return "Mayur has 8+ years across: Business Development Manager at KREO Softwares (2024–Present), Business Analyst at SAP Labs (2022–2024), SAP MM Consultant at Capgemini (2020–2022), SAP ERP Consultant at TCS (2018–2020), and Industrial Product Designer (2017–2018).";
	if (/(sap|tool|stack|tech|skill|software)/.test(s)) return "SAP toolkit: MM, WM, EWM, TM, APO, IBP, and Ariba — plus PLM, ERP architecture, business analysis, and supply chain optimization.";
	if (/(project|case study|portfolio|work sample)/.test(s)) return "Selected work includes AI-Driven Omni-Channel Fulfillment (SAP EWM), Multi-Echelon Inventory Optimization (SAP MM), and a Smart Product Lifecycle & Traceability Network (PLM→ERP). Open any card under Projects for details.";
	if (/(service|offer|engagement|consult)/.test(s)) return "Engagements: ERP & Supply Chain Transformation, End-to-End Business Analysis, Industrial Product Validation, and Market Growth / Business Development.";
	if (/(education|university|degree|study)/.test(s)) return "Mayur is an alumnus of M.S. Ramaiah University of Applied Sciences.";
	if (/(location|where|based|city|relocat)/.test(s)) return "Based in Bengaluru, India — flexible to relocate and open to global engagements.";
	if (/(about|who|mayur|introduce|bio)/.test(s)) return "Mayur Akalwadi is a Business Development Manager and Senior Business Analyst with 8+ years bridging industrial product design, ERP transformation (SAP MM/WM/EWM and beyond), supply chain, and enterprise growth.";
	if (/(impact|result|metric|kpi|number)/.test(s)) return "Track record includes 8+ years of enterprise delivery, 100% architecture alignment, and an average 20% efficiency lift on transformation engagements.";
	return "I can help with Mayur's experience, SAP tools, projects, services, or contact details. Try one of the quick prompts below.";
}
function Chatbot() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [input, setInput] = (0, import_react.useState)("");
	const [msgs, setMsgs] = (0, import_react.useState)([{
		role: "bot",
		text: "Hi, I'm Mayur's executive assistant. Ask about his experience, SAP expertise, or how to engage."
	}]);
	const scrollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [msgs, open]);
	const send = (text) => {
		const t = text.trim();
		if (!t) return;
		setMsgs((m) => [...m, {
			role: "user",
			text: t
		}]);
		setInput("");
		setTimeout(() => {
			setMsgs((m) => [...m, {
				role: "bot",
				text: answer(t)
			}]);
		}, 380);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		"aria-label": open ? "Close assistant" : "Open assistant",
		onClick: () => setOpen((o) => !o),
		className: "fixed bottom-6 right-6 z-[70] h-14 w-14 rounded-full btn-gold grid place-items-center shadow-[0_18px_48px_-12px_rgba(212,175,55,0.55)] animate-pulse-gold",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xl",
			children: open ? "✕" : "✦"
		})
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-24 right-4 sm:right-6 z-[70] w-[min(92vw,380px)] glass-gold rounded-3xl overflow-hidden gold-border animate-reveal-up flex flex-col max-h-[70vh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-4 border-b border-white/5 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-9 w-9 rounded-full bg-[var(--gradient-gold)] grid place-items-center text-[var(--background)] font-bold",
					children: "M"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-sm font-semibold",
					children: "Mayur's Assistant"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[10px] uppercase tracking-[0.2em] text-gold/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-gold mr-1.5 align-middle" }), "Online"]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "flex-1 overflow-y-auto px-4 py-4 space-y-3",
				children: msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `max-w-[85%] text-sm leading-relaxed rounded-2xl px-3.5 py-2.5 ${m.role === "user" ? "bg-[var(--gradient-gold)] text-[var(--background)] font-medium" : "glass text-silver/90"}`,
						children: m.text
					})
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pb-2 flex flex-wrap gap-1.5",
				children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => send(s),
					className: "text-[11px] glass rounded-full px-2.5 py-1 text-silver/80 hover:text-gold gold-border",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					send(input);
				},
				className: "p-3 border-t border-white/5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Ask about experience, SAP, projects…",
					className: "flex-1 bg-white/[0.04] border border-white/10 focus:border-gold/60 focus:outline-none rounded-full px-4 py-2.5 text-sm placeholder:text-silver/40"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					"aria-label": "Send",
					className: "h-10 w-10 rounded-full btn-gold grid place-items-center text-sm shrink-0",
					children: "→"
				})]
			})
		]
	})] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden grain-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] blur-2xl animate-float-slow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.14),transparent_70%)] blur-2xl animate-float-slow",
				style: { animationDelay: "1.5s" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://kreosoftwares.in",
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-2 glass-gold rounded-full px-3.5 py-1.5 text-xs tracking-wide text-silver/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-gold animate-pulse-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-gold" })]
						}),
						"Currently: Business Development Manager at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold font-semibold underline-offset-2 hover:underline",
							children: "KREO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "↗"
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Mayur"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "Akalwadi"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 180,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base sm:text-lg text-silver/80 font-medium",
						children: [
							"Business Development Manager",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-gold/70",
								children: "|"
							}),
							"Senior Business Analyst"
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 260,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-silver/75 leading-relaxed",
						children: "Bridging the gap between complex industrial product architecture and enterprise-scale efficiency."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 340,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7 flex flex-wrap gap-2.5",
						children: [
							"8+ Years of Experience",
							"Bengaluru · Flexible to Relocate",
							"ERP Transformation Specialist"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "glass rounded-full px-3.5 py-1.5 text-xs text-silver/85 gold-border",
							children: b
						}, b))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 440,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							onClick: () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }),
							className: "btn-gold rounded-full px-7 py-3.5 text-sm",
							children: "Let's Connect"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							onClick: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }),
							className: "btn-ghost-gold rounded-full px-7 py-3.5 text-sm",
							strength: .2,
							children: "View Portfolio"
						})]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 250,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-md lg:max-w-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-[var(--gradient-gold)] opacity-20 blur-2xl rounded-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative glass-gold rounded-3xl overflow-hidden p-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-2xl overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: mayur_default.url,
									alt: "Portrait of Mayur Akalwadi",
									className: "w-full h-auto object-cover aspect-[3/4]",
									loading: "eager"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 gold-border animate-float-slow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.18em] text-gold/90",
									children: "Specialty"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: "SAP MM · WM · EWM"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -top-4 -right-3 glass rounded-2xl px-4 py-3 gold-border animate-float-slow",
								style: { animationDelay: "1s" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.18em] text-gold/90",
									children: "Impact"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: "+20% efficiency"
								})]
							})
						]
					})]
				})
			})]
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
						children: "— About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl md:text-5xl font-bold leading-tight",
						children: [
							"An executive operator at the intersection of",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "design, data and delivery."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-silver/80 text-lg leading-relaxed",
						children: "8 years of proven expertise driving growth at the intersection of industrial product design, enterprise resource planning, supply chain logistics, and business transformation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 glass-gold rounded-2xl p-5 max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.2em] text-gold/90",
							children: "Alumnus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-semibold",
							children: "M.S. Ramaiah University of Applied Sciences"
						})]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 150,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "relative border-l border-gold/30 pl-8 space-y-7",
					children: [
						{
							year: "2024 — Present",
							title: "Business Development Manager",
							org: "KREO Softwares"
						},
						{
							year: "2022 — 2024",
							title: "Business Analyst",
							org: "SAP Labs"
						},
						{
							year: "2020 — 2022",
							title: "SAP MM Consultant",
							org: "Capgemini"
						},
						{
							year: "2018 — 2020",
							title: "SAP ERP Consultant",
							org: "Tata Consultancy Services (TCS)"
						},
						{
							year: "2017 — 2018",
							title: "Industrial Product Designer & PLM",
							org: "Manufacturing Sector"
						}
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-[var(--gradient-gold)] shadow-[0_0_0_4px_rgba(212,175,55,0.15)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-[0.22em] text-gold/80",
								children: t.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-lg font-semibold text-foreground",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-silver/70",
								children: t.org
							})
						]
					}, t.year))
				})
			})]
		})
	});
}
function Expertise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative py-24 md:py-32 grain-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
					children: "— Core Expertise"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl md:text-5xl font-bold max-w-3xl",
					children: ["Three pillars. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "One transformation playbook."
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid md:grid-cols-3 gap-5",
					children: [
						{
							title: "ERP & Supply Chain",
							span: "md:col-span-2",
							items: [
								"SAP Material Management (MM)",
								"SAP Warehouse Management (WM)",
								"SAP Extended Warehouse Management (EWM)"
							],
							glyph: "◆"
						},
						{
							title: "Business Intelligence",
							items: [
								"Business Analysis",
								"Process Mapping",
								"Requirement Gathering",
								"ERP Consulting"
							],
							glyph: "◇"
						},
						{
							title: "Engineering & Innovation",
							items: [
								"Industrial Product Design",
								"Product Analysis",
								"Product Lifecycle Management"
							],
							glyph: "✦"
						}
					].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						className: c.span ?? "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-gold rounded-3xl p-7 h-full flex flex-col",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-gold text-2xl",
											children: c.glyph
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] uppercase tracking-[0.25em] text-silver/50",
											children: ["0", i + 1]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-xl font-semibold",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-5 space-y-2.5",
										children: c.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-3 text-sm text-silver/85",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--gradient-gold)]" }), it]
										}, it))
									})
								]
							})
						})
					}, c.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackToggle, {})
			]
		})
	});
}
function StackToggle() {
	const [view, setView] = (0, import_react.useState)("domain");
	const items = view === "domain" ? [
		"Business Analysis",
		"Supply Chain",
		"ERP Transformation",
		"Product Strategy"
	] : [
		"SAP MM (Material Management)",
		"SAP WM (Warehouse Management)",
		"SAP EWM (Extended Warehouse Management)",
		"SAP TM (Transportation Management)",
		"SAP APO (Advanced Planning & Optimization)",
		"SAP IBP (Integrated Business Planning)",
		"SAP Ariba (Procurement & Supplier Collaboration)",
		"PLM",
		"ERP Systems"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-2",
				children: "— View By"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl md:text-3xl font-semibold",
				children: "Tech Stack"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass rounded-full p-1 gold-border flex",
				children: ["domain", "tools"].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setView(k),
					className: `relative px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-colors ${view === k ? "text-[var(--background)]" : "text-silver/80 hover:text-foreground"}`,
					children: [view === k && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-[var(--gradient-gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative",
						children: k === "domain" ? "Domain Expertise" : "Tools"
					})]
				}, k))
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-7 flex flex-wrap gap-3",
			children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass rounded-2xl px-5 py-3 text-sm gold-border animate-reveal-up",
				style: { animationDelay: `${i * 60}ms` },
				children: it
			}, it))
		})]
	});
}
function Metrics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass-gold rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-8 md:gap-4",
				children: [
					{
						n: 8,
						suffix: "+",
						label: "Years Enterprise Experience"
					},
					{
						n: 100,
						suffix: "%",
						label: "Architecture Alignment"
					},
					{
						n: 20,
						suffix: "%",
						label: "Average Efficiency Increase"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center md:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-6xl md:text-7xl leading-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.n,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-sm text-silver/75 uppercase tracking-[0.2em]",
							children: s.label
						})]
					})
				}, s.label))
			})
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative py-24 md:py-32 grain-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
				children: "— Services"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-3xl md:text-5xl font-bold max-w-3xl",
				children: ["Engagements built for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "enterprise outcomes."
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid md:grid-cols-2 gap-5",
				children: [
					{
						t: "ERP & Supply Chain Transformation Consulting",
						d: "End-to-end SAP MM/WM/EWM rollouts, process redesign and adoption.",
						g: "◆"
					},
					{
						t: "End-to-End Business Analysis & Strategy",
						d: "From discovery and requirement gathering to roadmap and KPIs.",
						g: "✦"
					},
					{
						t: "Industrial Product Design Validation & Optimization",
						d: "PLM alignment, BOM accuracy, manufacturability and lifecycle gating.",
						g: "◇"
					},
					{
						t: "Market Growth & Business Development Management",
						d: "Pipeline architecture, enterprise GTM and strategic partnerships.",
						g: "❖"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-3xl p-7 gold-border group relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-gold text-3xl",
									children: s.g
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] uppercase tracking-[0.25em] text-silver/40",
									children: ["Service · 0", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-xl font-semibold leading-snug",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-silver/75 leading-relaxed",
								children: s.d
							})
						]
					}) })
				}, s.t))
			})]
		})
	});
}
var PROJECTS = [
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
			"High-turnover item optimization with velocity-based zoning"
		],
		impact: "Reduced warehouse travel time and labor overhead by up to 20%, lifting on-time fulfillment across DTC and B2B channels."
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
			"Automated source determination for fastest fulfillment"
		],
		impact: "Prevented stockouts on critical SKUs while reducing excess inventory investment and freeing working capital."
	},
	{
		title: "Smart Product Lifecycle & Traceability Network",
		tag: "PLM → ERP",
		short: "Centralized platform connecting industrial CAD designs with SAP production systems.",
		problem: "Engineering and ERP operated in silos — CAD revisions, BOM updates and batch records were reconciled manually, slowing launches and introducing errors.",
		solution: [
			"Engineering Change Management workflows across PLM/ERP",
			"Batch traceability from raw material to finished good",
			"CAD-to-BOM synchronization with rev control"
		],
		impact: "Reduced engineering data errors and accelerated product launch cycles with full traceability for audits."
	}
];
function Projects() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "relative py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
				children: "— Case Studies"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-3xl md:text-5xl font-bold max-w-3xl",
				children: ["Selected engagements ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "at enterprise scale."
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid md:grid-cols-3 gap-5",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					className: p.span ?? "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(p),
						className: "text-left w-full glass-gold rounded-3xl p-7 h-full group relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold",
										children: p.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-silver/40 text-xs",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-2xl font-semibold leading-tight",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-silver/75 leading-relaxed",
									children: p.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 inline-flex items-center gap-2 text-sm text-gold",
									children: ["Open case study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										children: "→"
									})]
								})
							]
						})]
					}) })
				}, p.title))
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectModal, {
			project: open,
			onClose: () => setOpen(null)
		})]
	});
}
function ProjectModal({ project, onClose }) {
	const [tab, setTab] = (0, import_react.useState)("problem");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-reveal-up",
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/70 backdrop-blur-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative w-full max-w-3xl glass-gold rounded-3xl p-7 md:p-10 max-h-[90vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					"aria-label": "Close",
					className: "absolute top-4 right-4 h-9 w-9 rounded-full glass grid place-items-center hover:bg-white/5",
					children: "✕"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold",
					children: project.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-2xl md:text-3xl font-bold leading-tight",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 inline-flex glass rounded-full p-1 gold-border",
					children: [
						"problem",
						"solution",
						"impact"
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(k),
						className: `relative px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-colors ${tab === k ? "text-[var(--background)]" : "text-silver/80 hover:text-foreground"}`,
						children: [tab === k && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-[var(--gradient-gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: k === "problem" ? "Problem" : k === "solution" ? "ERP Solution" : "Business Impact"
						})]
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 text-silver/85 leading-relaxed",
					children: [
						tab === "problem" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.problem }),
						tab === "solution" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: project.solution.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gradient-gold)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
							}, s))
						}),
						tab === "impact" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg",
							children: project.impact
						})
					]
				})
			]
		})]
	});
}
function ArchitectureMap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 md:py-32 grain-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
				children: "— Architecture Map"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-3xl md:text-5xl font-bold max-w-3xl",
				children: ["From CAD to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "market scale."
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-6 md:space-y-10",
					children: [
						{
							title: "Industrial Design",
							desc: "CAD, validation, manufacturability"
						},
						{
							title: "Product Lifecycle Management",
							desc: "BOM, ECM, revision control"
						},
						{
							title: "ERP Integration",
							desc: "SAP MM · WM · EWM"
						},
						{
							title: "Supply Chain Optimization",
							desc: "Multi-echelon, vendor quotas"
						},
						{
							title: "Business Growth",
							desc: "GTM, partnerships, scale"
						}
					].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `${i % 2 === 1 ? "md:text-left" : "md:text-right"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass-gold rounded-2xl p-6 inline-block max-w-md hover:translate-y-[-2px] transition-transform",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] uppercase tracking-[0.22em] text-gold/85",
											children: ["Stage 0", i + 1]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-display text-xl font-semibold",
											children: n.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 text-sm text-silver/75",
											children: n.desc
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden md:flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-flex h-4 w-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-gold animate-pulse-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-4 w-4 rounded-full bg-[var(--gradient-gold)] shadow-[0_0_20px_rgba(212,175,55,0.6)]" })]
								})
							})]
						})
					}, n.title))
				})]
			})]
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 4e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
					children: "— Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl md:text-5xl font-bold leading-tight",
					children: ["Let's design your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "next transformation."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-10 glass-gold rounded-3xl p-7 md:p-8 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company",
							name: "company"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Message",
							name: "message",
							textarea: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							type: "submit",
							className: "btn-gold rounded-full px-7 py-3.5 text-sm",
							children: sent ? "✓ Sent — Thank you" : "Start Project"
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 150,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 lg:pt-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "Phone",
							value: "+91 99804 11129",
							href: "tel:+919980411129"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "Email",
							value: "akalwadi1103@gmail.com",
							href: "mailto:akalwadi1103@gmail.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "Location",
							value: "Bengaluru, India"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "Open To",
							value: "Global · Hybrid Opportunities"
						})
					]
				})
			})]
		})
	});
}
function Field({ label, name, type = "text", textarea = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] uppercase tracking-[0.2em] text-silver/70",
			children: label
		}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			rows: 4,
			className: "mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-gold/60 focus:outline-none rounded-xl px-4 py-3 text-sm placeholder:text-silver/40 transition-colors",
			placeholder: `Your ${label.toLowerCase()}...`
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			className: "mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-gold/60 focus:outline-none rounded-xl px-4 py-3 text-sm placeholder:text-silver/40 transition-colors",
			placeholder: `Your ${label.toLowerCase()}`
		})]
	});
}
function ContactRow({ label, value, href }) {
	const Inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-5 gold-border flex items-center justify-between hover:bg-white/[0.04] transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-[0.25em] text-gold/85",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-medium text-foreground",
			children: value
		})] }), href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gold text-xl",
			children: "↗"
		})]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		children: Inner
	}) : Inner;
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative pt-16 pb-10 border-t border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-display text-2xl font-bold",
					children: ["Mayur ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "Akalwadi"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-silver/70 max-w-sm",
					children: "Bridging complex industrial product architecture with enterprise-scale efficiency."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] uppercase tracking-[0.22em] text-gold/85 mb-3",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-x-5 gap-y-2",
					children: [
						"About",
						"Skills",
						"Projects",
						"Services",
						"Contact"
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${l.toLowerCase()}`,
						className: "text-sm text-silver/80 hover:text-gold transition-colors",
						children: l
					}) }, l))
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-silver/55",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "© 2026 Mayur Akalwadi. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Crafted with precision · Bengaluru, India" })]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metrics, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureMap, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chatbot, {})
		]
	});
}
//#endregion
export { Index as component };
