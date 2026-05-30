import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get in touch, WMAGE" },
      { name: "description", content: "We would love to hear from you. Reach out for information, partnership, or to share feedback on our work." },
    ],
  }),
  component: Contact,
});

const reasons = ["For information", "For partnership", "For an inquiry", "To share feedback"] as const;
type Reason = typeof reasons[number];

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<{ name: string; org: string; email: string; reason: Reason; message: string }>({
    name: "",
    org: "",
    email: "",
    reason: "For information",
    message: "",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.reason}, from ${form.name || form.org || "a friend of WMAGE"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.org}\nEmail: ${form.email}\nReason: ${form.reason}\n\n${form.message}`
    );
    window.location.href = `mailto:info@wimage.org.ke?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">
            We would love to <span className="italic text-primary">hear from you.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Whether you have a question, a possible partnership, or honest feedback on the work, your voice helps shape what we do next. Reach out, and a real person will write back.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-3xl bg-ink text-cream p-8 md:p-10">
            <p className="eyebrow mb-2" style={{ color: "var(--ochre)" }}>Direct line</p>
            <a href="mailto:info@wimage.org.ke" className="font-serif text-3xl md:text-4xl block hover:text-ochre transition-colors break-all">
              info@wimage.org.ke
            </a>
            <hr className="border-cream/15 my-7" />
            <dl className="space-y-4 text-cream/85 text-sm">
              <div>
                <dt className="uppercase tracking-[0.18em] text-xs text-cream/60 mb-1">Where to find us</dt>
                <dd>Nairobi, Kenya</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-xs text-cream/60 mb-1">Visit us</dt>
                <dd>Friends and partners are welcome with a little notice, so we can host you well.</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-xs text-cream/60 mb-1">Stay in the loop</dt>
                <dd>We share quarterly updates and an annual impact summary.</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Tell us a little about why you are reaching out.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                There is no wrong reason. Pick what fits best, write a short note, and we will take it from there.
              </p>
            </div>
            <form onSubmit={submit} className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Organization (optional)" value={form.org} onChange={(v) => setForm({ ...form, org: v })} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">I am reaching out</label>
                <div className="flex flex-wrap gap-2">
                  {reasons.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setForm({ ...form, reason: opt })}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        form.reason === opt
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
                <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Your message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Share whatever feels useful. We read every message."
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-muted-foreground">
                  Sending opens your email app addressed to info@wimage.org.ke.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  {sent ? "Thank you, talk soon" : "Send message →"}
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
