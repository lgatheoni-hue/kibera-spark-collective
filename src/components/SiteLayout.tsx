import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/theory-of-change", label: "Theory of Change" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const { location } = useRouterState();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header
        className={`sticky top-0 z-50 transition-all bg-white ${
          scrolled ? "shadow-sm border-b border-border" : "border-b border-border/60"
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="WMAGE home">
            <img src={logo} alt="WMAGE logo" className="h-10 md:h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    active
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>


          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium"
            >
              Get Started
            </Link>

            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 -mr-2"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`h-px bg-foreground transition-all ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`h-px bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`h-px bg-foreground transition-all ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container-x py-4 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="py-3 text-lg font-serif border-b border-border last:border-0"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium"
              >
                Get Started

              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-[var(--ink)] text-white">
      <div className="container-x py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-1.5">
              <img src={logo} alt="WMAGE logo" className="h-10 w-auto" />
            </div>
            <span className="font-serif text-2xl text-white">WMAGE</span>
          </div>
          <p className="mt-5 text-sm text-white/75 max-w-sm leading-relaxed">
            A community based organization advancing data driven, impact focused programs that turn local action into lasting transformation.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.18em] text-white/60 mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/85 hover:text-white transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.18em] text-white/60 mb-4">
            Contact
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="mailto:info@wimage-kenya.org"
                className="text-white/85 hover:text-white transition-colors"
              >
                info@wimage-kenya.org
              </a>
            </li>
            <li className="text-white/70">Kibera, Nairobi · Kenya</li>
            <li className="text-white/70">Founded 2024</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <span>© {new Date().getFullYear()} WMAGE. All rights reserved.</span>
          <span>Locally led. Evidence driven. Built for transformation.</span>
        </div>
      </div>
    </footer>
  );
}

