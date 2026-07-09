import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get in touch, WIMAGE Kenya" },
      { name: "description", content: "We would love to hear from you. Reach out for information, partnership, or to share feedback on our work." },
    ],
  }),
  component: Contact,
});

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@wimage-kenya.org";
const reasons = ["For information", "For partnership", "For an inquiry", "To share feedback"] as const;
type Reason = typeof reasons[number];

function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<{ name: string; org: string; email: string; reason: Reason; message: string }>({
    name: "",
    org: "",
    email: "",
    reason: "For information",
    message: "",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setError(null);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          organization: form.org,
          email: form.email,
          reason: form.reason,
          message: form.message,
          _subject: `${form.reason}, from ${form.name || form.org || "a friend of WIMAGE"}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setState("sent");
      setForm({ name: "", org: "", email: "", reason: "For information", message: "" });
    } catch (err) {
      setState("error");
      setError("Something went wrong sending your message. Please try again, or email info@wimage-kenya.org directly.");
    }
  }

  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-primary mb-5">You are most welcome here</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">
            Come say hello, <span className="italic text-primary">we mean it.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Every partnership we have began with a single conversation. Whether you would like to fund a programme, walk through what we do, or simply understand the community we serve, we would love to hear from you. A real person from our team will read your note and write back personally.
          </p>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
            Donors, funders, sister organisations, students and curious neighbours are all welcome. Tell us what brings you here, and we will meet you where you are.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-3xl bg-ink text-cream p-8 md:p-10">
            <p className="eyebrow mb-2" style={{ color: "var(--ochre)" }}>Direct line</p>
            <a href="mailto:info@wimage-kenya.org" className="font-serif text-2xl md:text-3xl block hover:text-ochre transition-colors break-all">
              info@wimage-kenya.org
            </a>
            <hr className="border-cream/15 my-7" />
            <dl className="space-y-4 text-cream/85 text-sm">
              <div>
                <dt className="uppercase tracking-[0.18em] text-xs text-cream/60 mb-1">Visit us</dt>
                <dd>
                  Wu Yi Plaza, 5th Floor<br />
                  Galana Road, Nairobi, Kenya
                </dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-xs text-cream/60 mb-1">Coming by</dt>
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
          {state === "sent" ? (
            <div className="max-w-xl mx-auto text-center py-10">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl mb-5">✓</div>
              <h2 className="font-serif text-3xl md:text-4xl">Thank you, we've got your message.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Someone from our team will write back to you personally, usually within a few days. In the meantime, feel free to explore our programmes and story.
              </p>
              <button
                onClick={() => setState("idle")}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
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
                {error && (
                  <p className="sm:col-span-2 text-sm text-destructive">{error}</p>
                )}
                <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs text-muted-foreground">
                    Your message sends straight to info@wimage-kenya.org, no email app required.
                  </p>
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-60"
                  >
                    {state === "sending" ? "Sending…" : "Send message →"}
                  </button>
                </div>
              </form>
            </div>
          )}
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
