import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/photo-advocacy-signs.jpg";
import problemImg from "../assets/photo-community-3.jpg";
import measureImg from "../assets/photo-library.jpg";
import outcomeImg from "../assets/photo-rally.jpg";

export const Route = createFileRoute("/theory-of-change")({
  head: () => ({
    meta: [
      { title: "Theory of Change — WMAGE" },
      { name: "description", content: "How WMAGE translates inputs into long-term economic security, environmental action, and local leadership in Kibera." },
    ],
  }),
  component: ToC,
});

const chain = [
  { tag: "Inputs", title: "Local staff, curricula, equipment, seed capital, partners.", body: "We combine community knowledge with donor resources and technical partners to ensure programs are relevant, fundable, and rooted in Kibera." },
  { tag: "Activities", title: "Cohort training, coaching, microgrants, waste-to-value pilots, fellowships.", body: "Every activity is paired with market linkages and a monitoring plan so outputs lead to sustainable outcomes." },
  { tag: "Outputs", title: "Certified trainees, microgrants disbursed, hubs established, leaders graduated.", body: "Immediate outputs are tracked against targets and form the basis for donor reporting and adaptive learning." },
  { tag: "Outcomes", title: "Income earned. Waste reduced. Voices at the table.", body: "Sustained businesses, cleaner neighborhoods, and trained leaders influencing local decisions over time." },
  { tag: "Long-term goal", title: "Economically secure, environmentally active, locally represented.", body: "Economic stability, green livelihoods, and civic voice together create resilient households and healthier neighborhoods." },
];

function ToC() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <p className="eyebrow mb-6">Theory of change</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          A clear line from <span className="italic text-primary">investment</span> to <span className="italic text-primary">impact.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Kibera faces persistent unemployment, gender inequality, limited access to skills and markets, and environmental hazards. WMAGE addresses these barriers through a measurable, locally led model.
        </p>
      </section>

      {/* Hero image */}
      <section className="container-x pb-4">
        <div className="rounded-3xl overflow-hidden aspect-[21/9]">
          <img src={heroImg} alt="WMAGE advocates holding signs for equality and against gender-based violence" className="w-full h-full object-cover" />
        </div>
      </section>


      <section className="container-x pb-8">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 flex flex-col justify-center">
            <p className="eyebrow mb-3" style={{ color: "var(--ochre)" }}>Problem statement</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              Persistent unemployment, entrenched gender inequality, and environmental hazards prevent women and youth in Kibera from earning stable incomes and shaping decisions that affect their lives.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden min-h-[280px] md:min-h-0">
            <img src={problemImg} alt="Community members in Kibera" className="w-full h-full object-cover object-[center_25%]" />
          </div>
        </div>
      </section>


      {/* Chain */}
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
            <p className="eyebrow mb-3">Assumptions & risks</p>
            <h2 className="font-serif text-3xl md:text-4xl">Honest about what could go wrong.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The model assumes market demand for trained skills and recycled products, participant access to basic tools, and willingness of local institutions to engage. Risks include market shocks, funding gaps, and political instability — mitigated through diversified funding, strong market partnerships, and adaptive programming.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Measurement & learning</p>
            <h2 className="font-serif text-3xl md:text-4xl">What we count, and why.</h2>
            <ul className="mt-4 space-y-2 text-foreground">
              {[
                "Employment and income indicators",
                "Business survival at 12 months",
                "Tonnes of waste diverted",
                "Trained leaders in decision-making roles",
              ].map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2.5 inline-block w-4 h-px bg-primary flex-shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Donors receive clear targets, regular data, and case studies. Learning cycles ensure programs evolve based on evidence and community feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome banner image */}
      <section className="container-x py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3]">
            <img src={measureImg} alt="Library and learning space" className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-6">
            <p className="eyebrow mb-3">Long-term goal</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Economically secure. Environmentally active. Locally represented.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Sustained businesses, cleaner neighborhoods, and trained leaders influencing local decisions — together creating resilient households and healthier neighborhoods.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative h-[360px] md:h-[440px]">
          <img src={outcomeImg} alt="WMAGE rally" className="absolute inset-0 w-full h-full object-cover object-[60%_center]" />
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
          Want the targets, budget lines, and monitoring milestones?
        </h2>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
          Request a donor package →
        </Link>
      </section>
    </>
  );
}
