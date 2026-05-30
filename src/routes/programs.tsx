import { createFileRoute, Link } from "@tanstack/react-router";
import economic from "../assets/photo-team-indoor.jpg";
import capacity from "../assets/photo-library.jpg";
import circular from "../assets/program-circular.jpg";
import leadership from "../assets/photo-advocacy-signs.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs, WMAGE" },
      { name: "description", content: "Locally co-created livelihoods, capacity building, circular economy, and civic leadership programs that move communities from awareness into action." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    num: "01",
    title: "Economic Empowerment",
    image: economic,
    lede: "We partner with communities to co-create livelihood initiatives that are locally driven and community owned.",
    body: "Together we identify income generating opportunities, co-design solutions, mobilize collective action, and provide the support needed to launch and grow sustainable, community owned enterprises, from farming and livestock projects to recycling and other viable local ventures. Skills and capacity are built on the job, so people learn while they earn and the work belongs to them from day one.",
  },
  {
    num: "02",
    title: "Capacity Building",
    image: capacity,
    lede: "We strengthen the skills, leadership, and systems that let communities and local organizations drive their own development.",
    body: "Through digital inclusion, practical technology skills, organizational strengthening, and local leadership development, communities build the capacity to solve challenges, deliver services, and sustain impact over the long term.",
  },
  {
    num: "03",
    title: "Circular Economy",
    image: circular,
    lede: "We advance inclusive circular economy models that reduce waste, recover valuable resources, and create sustainable livelihoods.",
    body: "By supporting community owned green enterprises and local value chains, we help build climate resilient economies that generate both environmental and economic benefits, turning what was once discarded into income and opportunity.",
  },
  {
    num: "04",
    title: "Leadership & Civic Engagement",
    image: leadership,
    lede: "We cultivate community leaders who can organize collective action, influence local decision making, and champion sustainable development.",
    body: "Through mentorship, civic engagement, and practical leadership opportunities, community members become active drivers of positive change, taking seats at the tables where decisions about their lives are made.",
  },
];

function Programs() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          From co-creation to <span className="italic text-primary">community owned impact.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Each program is co-designed with the people it serves, time bound, evidence driven, and built around learning by doing, so livelihoods, skills, and leadership grow together.
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
              <p className="mt-5 text-lg text-foreground leading-relaxed">{p.lede}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-serif text-3xl">Tracked, learned, handed over.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every program ships with a monitoring plan, sustainability pathway, and a clear handover to the community. We track income, enterprise survival, waste recovered, and leaders placed in decision making roles.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-serif text-3xl">Built with, not for.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Programs work because the people delivering them are the people who will own them. Co-creation is not a phase, it is the model, and it shapes every cohort, enterprise, and pilot we run.
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
