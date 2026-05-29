import { createFileRoute, Link } from "@tanstack/react-router";
import economic from "../assets/photo-team-indoor.jpg";
import capacity from "../assets/photo-library.jpg";
import circular from "../assets/program-circular.jpg";
import leadership from "../assets/photo-advocacy-signs.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — WMAGE" },
      { name: "description", content: "Cohort-based, time-bound programs that move participants from training to income and from awareness to action." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    num: "01",
    title: "Economic Empowerment",
    image: economic,
    lede: "Short vocational courses, financial literacy, business planning, microgrants, and buyer linkages.",
    points: [
      "Graduate with a viable business plan and seed capital",
      "Introductions to local buyers and service providers",
      "Designed to produce income within six months",
      "Follow-on coaching for enterprises that scale",
    ],
  },
  {
    num: "02",
    title: "Capacity Building",
    image: capacity,
    lede: "Digital literacy, basic AI awareness, organizational development, and training-of-trainers.",
    points: [
      "Boost employability with relevant digital skills",
      "Improve local service delivery",
      "Build resilient community institutions",
      "Sustain activities beyond initial funding cycles",
    ],
  },
  {
    num: "03",
    title: "Circular Economy",
    image: circular,
    lede: "Small recycling hubs, waste processing, product development, and market linkages for recycled goods.",
    points: [
      "Reduce environmental hazards in the neighborhood",
      "Create green enterprises owned by women and youth",
      "Diversify household income streams",
      "Improve public health outcomes",
    ],
  },
  {
    num: "04",
    title: "Leadership Development",
    image: leadership,
    lede: "Mentorship, advocacy training, and civic placements that move trained leaders into local decision-making.",
    points: [
      "Practical training in governance and public speaking",
      "Coaching in policy engagement",
      "Placements on local committees",
      "Support to lead community campaigns",
    ],
  },
];

function Programs() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16">
        <p className="eyebrow mb-6">Our programs</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          From training to income.
          <br />
          <span className="italic text-primary">From awareness to action.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Cohort-based, time-bound, co-designed with local stakeholders and market actors. Baseline and endline data, monthly tracking, beneficiary feedback — so results are real and sustained.
        </p>
      </section>

      {programs.map((p, i) => (
        <section key={p.title} className={`${i % 2 === 0 ? "" : "bg-secondary/40 border-y border-border"}`}>
          <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className={`lg:col-span-6 ${i % 2 === 0 ? "" : "lg:order-2"}`}>
              <div className="aspect-[5/4] rounded-3xl overflow-hidden">
                <img src={p.image} alt={p.title} width={1200} height={900} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="font-serif text-5xl text-primary/40">{p.num}</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-2">{p.title}</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{p.lede}</p>
              <ul className="mt-8 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-foreground">
                    <span className="mt-2.5 inline-block w-4 h-px bg-primary flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="eyebrow mb-3">Monitoring & sustainability</p>
            <h3 className="font-serif text-3xl">Tracked, learned, handed over.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every program includes a monitoring plan, sustainability pathway, and community handover strategy. We track employment, income, business survival at 12 months, waste diverted, and leadership placements.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="eyebrow mb-3">Who benefits</p>
            <h3 className="font-serif text-3xl">Women 18–45. Youth 15–30.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Primary beneficiaries are women aged 18–45 and youth aged 15–30 in Kibera. Households, local markets, and municipal services benefit as trained participants create jobs, improve sanitation, and take civic roles.
            </p>
          </div>
        </div>
        <div className="mt-14 text-center">
          <Link to="/theory-of-change" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-foreground/20 hover:border-foreground/60 transition-colors">
            See our theory of change →
          </Link>
        </div>
      </section>
    </>
  );
}
