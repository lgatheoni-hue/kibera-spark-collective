import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Partnership — WMAGE" },
      { name: "description", content: "Email info@wimage.org.ke for a donor-ready proposal with targets, budgets, and monitoring milestones." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", interest: "Training cohort", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Partnership inquiry — ${form.org || form.name || "WMAGE"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.org}\nEmail: ${form.email}\nInterest: ${form.interest}\n\n${form.message}`
    );
    window.location.href = `mailto:info@wimage.org.ke?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6">Contact & partnership</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">
            Let's translate intent into <span className="italic text-primary">measurable change.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            WMAGE offers donors and partners a direct route to locally led impact in Kibera. Tell us what you care about — we'll prepare a concise donor package tailored to your priorities.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-3xl bg-ink text-cream p-8 md:p-10">
            <p className="eyebrow mb-2" style={{ color: "var(--ochre)" }}>Direct line</p>
            <a href="mailto:info@wimage.org.ke" className="font-serif text-3xl md:text-4xl block hover:text-ochre transition-colors">
              info@wimage.org.ke
            </a>
            <hr className="border-cream/15 my-7" />
            <dl className="space-y-4 text-cream/85 text-sm">
              <div>
                <dt className="uppercase tracking-[0.18em] text-xs text-cream/60 mb-1">Location</dt>
                <dd>Kibera, Nairobi · Kenya</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-xs text-cream/60 mb-1">Site visits</dt>
                <dd>Welcome with advance notice. Accompanied by program staff.</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-xs text-cream/60 mb-1">Reporting</dt>
                <dd>Quarterly progress, financials, and annual impact report.</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-3">Request a donor package</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Targets, budgets, milestones — within 5 working days.
              </h2>
            </div>
            <form onSubmit={submit} className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Organization" value={form.org} onChange={(v) => setForm({ ...form, org: v })} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Area of interest</label>
                <div className="flex flex-wrap gap-2">
                  {["Training cohort", "Microgrants", "Circular economy", "Leadership fellowship", "Other"].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setForm({ ...form, interest: opt })}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        form.interest === opt
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your priorities, region focus, and timeline..."
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-muted-foreground">
                  Submitting opens your email client addressed to info@wimage.org.ke.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  {sent ? "Sent — thank you" : "Send inquiry →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, value, onChange, type = "text", required, className = "",
}: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
