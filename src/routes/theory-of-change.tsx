import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/photo-advocacy-signs.jpg";
import problemImg from "../assets/photo-community-3.jpg";
import measureImg from "../assets/photo-library.jpg";
import outcomeImg from "../assets/photo-rally.jpg";

export const Route = createFileRoute("/theory-of-change")({
  head: () => ({
    meta: [
      { title: "Theory of Change, WMAGE" },
      { name: "description", content: "Communities learn by doing the work, earn a return, and take ownership. This is how we turn intent into transformation." },
    ],
  }),
  component: ToC,
});

const chain = [
  { tag: "Where we start", title: "Communities that are already informed, and ready for action.", body: "Most people we work with have been to a workshop. They have heard the theory. What is missing is sustained action with real stakes. We start there." },
  { tag: "How we engage", title: "Co-create the enterprise, then build skills inside it.", body: "We design livelihood initiatives together with the community, then learn by running them. Training is woven into the work, not a separate event in a classroom." },
  { tag: "Why it sticks", title: "Livelihoods depend on it.", body: "When income and ownership are on the line, learning is serious. People show up because the enterprise is theirs and the return is real." },
  { tag: "What changes", title: "Income earned. Waste reduced. Leaders at the table.", body: "Households earn steadily, green enterprises take hold, and trained leaders shape decisions in their own communities." },
  { tag: "Long term goal", title: "Economically secure, environmentally active, locally represented.", body: "Resilient households, healthier neighborhoods, and a generation of leaders who own the work and the outcomes." },
];

function ToC() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          Past the classroom. <span className="italic text-primary">Into the work.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Many community members are already educated and many organizations have already trained them. The gap is action with real stakes. Our theory of change is simple, people learn by doing the work, earning a return, and owning the outcome.
        </p>
      </section>

      <section className="container-x pb-4">
        <div className="rounded-3xl overflow-hidden aspect-[21/9]">
          <img src={heroImg} alt="Community advocates for equality and inclusion" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="container-x pb-8">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 flex flex-col justify-center">
            <p className="eyebrow mb-3" style={{ color: "var(--ochre)" }}>What we are responding to</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              Awareness is not the bottleneck anymore. Sustained action is. People need enterprises they own, livelihoods that depend on them, and learning that happens while the work is being done.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden min-h-[280px] md:min-h-0">
            <img src={problemImg} alt="Community members" className="w-full h-full object-cover object-[center_25%]" />
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="relative">
          <div className="absolute left-[19px] md:left-[27px] top-3 bottom-3 w-px bg-border" aria-hidden />
          <ol className="space-y-10 md:space-y-14">
            {chain.map((step, i) => (
              <li key={step.tag} className="relative grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr] gap-5 md:gap-8">
                <div className="relative">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg md:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="pt-1 md:pt-2">
                  <p className="eyebrow mb-2">{step.tag}</p>
                  <h2 className="font-serif text-2xl md:text-4xl leading-tight max-w-3xl">{step.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Honest about what could go wrong.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The model assumes market demand for community products, willingness of local institutions to engage, and partners who can stay the course. Risks include market shocks, funding gaps, and political instability, mitigated through diversified funding, strong market partnerships, and adaptive programming.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">What we count, and why.</h2>
            <ul className="mt-4 space-y-2 text-foreground">
              {[
                "Income earned by participants and households",
                "Community owned enterprises still operating at 12 months",
                "Tonnes of waste recovered and revalued",
                "Leaders placed in decision making roles",
              ].map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2.5 inline-block w-4 h-px bg-primary flex-shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Partners receive clear targets, regular data, and case studies. Learning cycles ensure programs evolve based on evidence and community feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3]">
            <img src={measureImg} alt="Community learning space" className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Economically secure. Environmentally active. Locally represented.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Sustained enterprises, cleaner neighborhoods, and leaders who shape decisions, together creating resilient households and healthier communities.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative h-[360px] md:h-[440px]">
          <img src={outcomeImg} alt="Community rally" className="absolute inset-0 w-full h-full object-cover object-[60%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-transparent" />
          <div className="relative container-x h-full flex items-center">
            <blockquote className="font-serif text-3xl md:text-5xl text-white max-w-2xl leading-tight">
              "United for equality, diversity and inclusion."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="container-x py-24 text-center">
        <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
          Want to walk alongside this work?
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          We would love to share what we are learning and hear what matters to you.
        </p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
          Start a conversation →
        </Link>
      </section>
    </>
  );
}
