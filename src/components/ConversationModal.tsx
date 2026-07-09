import { useEffect, useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@wimage-kenya.org";

type Props = { open: boolean; onClose: () => void };

export function ConversationModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

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
          email: form.email,
          message: form.message,
          _subject: `New conversation from ${form.name} — WIMAGE website`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setState("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setState("error");
      setError("Sorry, we couldn't send that. Please email info@wimage-kenya.org directly.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-7 md:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center text-foreground/70"
        >
          ✕
        </button>

        {state === "sent" ? (
          <div className="py-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">
              ✓
            </div>
            <h3 className="font-serif text-2xl mb-2">Message received.</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thank you for reaching out. A real person from our team will write back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Say hello</p>
            <h3 className="font-serif text-3xl leading-tight mb-2">Start a conversation.</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Send a short note and someone from our team will get back to you.
            </p>
            <form onSubmit={submit} className="space-y-4">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/60 border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary/60 border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
              />
              <textarea
                required
                rows={4}
                placeholder="What's on your mind?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/60 border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={state === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium disabled:opacity-60"
              >
                {state === "sending" ? "Sending…" : "Send message →"}
              </button>
              <p className="text-xs text-muted-foreground text-center pt-1">
                We reply to every message, usually within a few days.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
