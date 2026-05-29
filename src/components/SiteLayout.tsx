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
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "backdrop-blur-md bg-background/85 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="WMAGE logo" className="h-10 md:h-12 w-auto" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-xl tracking-tight">WMAGE</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                Kibera · Nairobi
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:gap-2"
            >
              Partner with us
              <span aria-hidden>→</span>
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
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground"
              >
                Partner with us →
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
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-x py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="WMAGE logo" className="h-12 w-auto" />
            <span className="font-serif text-xl">WMAGE</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Women in Monitoring and Advancing General Empowerment — a grassroots
            organization equipping women and youth in Kibera to earn, lead, and
            transform their community.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:info@wimage.org.ke"
                className="hover:text-primary transition-colors"
              >
                info@wimage.org.ke
              </a>
            </li>
            <li className="text-muted-foreground">Kibera, Nairobi · Kenya</li>
            <li className="text-muted-foreground">Founded 2024</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} WMAGE. All rights reserved.</span>
          <span>Locally led. Evidence driven. Built in Kibera.</span>
        </div>
      </div>
    </footer>
  );
}
