import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "../assets/hero.jpg";
import economic from "../assets/program-economic.jpg";
import capacity from "../assets/program-capacity.jpg";
import circular from "../assets/program-circular.jpg";
import leadership from "../assets/program-leadership.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WMAGE — Women in Monitoring and Advancing General Empowerment" },
      { name: "description", content: "Grassroots Kibera organization equipping women and youth with skills, income, and leadership for lasting community transformation." },
    ],
  }),
  component: Home,
});

const programs = [
  { title: "Economic Empowerment", image: economic, body: "Short vocational training, financial literacy, microgrants, and market linkages that move participants from idea to income in six months." },
  { title: "Capacity Building", image: capacity, body: "Digital literacy, AI awareness, and training-of-trainers that strengthen individuals and local institutions for the long term." },
  { title: "Circular Economy", image: circular, body: "Recycling hubs and waste-to-value pilots that create green livelihoods, cleaner neighborhoods, and new household income." },
  { title: "Leadership Development", image: leadership, body: "Mentorship, advocacy training, and civic placements that move women and youth into rooms where decisions are made." },
];

const stats = [
  { value: "6 mo.", label: "Median time from training to first income" },
  { value: "4", label: "Linked priorities, one accountable model" },
  { value: "100%", label: "Programs designed with community co-leaders" },
  { value: "2024", label: "Founded by Kibera youth leaders" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-10 md:pt-16 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-7 fade-up">
            <p className="eyebrow mb-6">Kibera · Nairobi · Est. 2024</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Skills that earn.
              <br />
              <span className="text-primary italic">Voices that lead.</span>
              <br />
              Change you can measure.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              WMAGE equips women and youth in Kibera with practical skills, income opportunities, and leadership — turning small investments into visible, lasting change.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                Request donor package
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-foreground/20 hover:border-foreground/60 transition-colors"
              >
                Explore programs
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-secondary">
              <img
                src={hero}
                alt="Women and youth at a WMAGE community workshop in Kibera"
                width={1600}
                height={1100}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-cream text-sm font-medium tracking-wide">
                Co-designed. Locally led. Evidence driven.
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="border-y border-border bg-secondary/40 overflow-hidden">
          <div className="container-x py-4 flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap overflow-x-auto">
            <span>Economic Empowerment</span><span>·</span>
            <span>Capacity Building</span><span>·</span>
            <span>Circular Economy</span><span>·</span>
            <span>Leadership Development</span><span>·</span>
            <span className="text-primary">Earn · Lead · Transform</span>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">Quick snapshot</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Four linked priorities. <em>One accountable model.</em>
          </h2>
        </div>
        <div className="lg:col-span-7 text-lg text-muted-foreground leading-relaxed space-y-5">
          <p>
            WMAGE runs cohort-based training, seed funding cycles, waste-to-value pilots,
            and leadership fellowships that move people from learning to earning — and from
            civic awareness to civic influence.
          </p>
          <p>
            Every program is designed with clear indicators so donors see exactly how funds
            translate into outcomes. We pair quantitative results with human stories.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {stats.map((s) => (
            <div key={s.label} className="py-10 px-2 border-b border-border md:border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
              <div className="font-serif text-4xl md:text-5xl text-primary">{s.value}</div>
              <div className="mt-3 text-sm text-muted-foreground max-w-[18ch] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">What we deliver</p>
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
              From short, practical training to leadership at the table.
            </h2>
          </div>
          <Link to="/programs" className="text-sm underline underline-offset-4 hover:text-primary">
            See all programs →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className={`group relative rounded-3xl overflow-hidden bg-card border border-border ${i % 3 === 0 ? "md:translate-y-6" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4" style={{ color: "var(--ochre)" }}>Impact in practice</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Numbers, and the people behind them.
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-8 text-cream/85">
            <Impact title="Graduates earn within six months" body="Participants secure paid work or launch small enterprises shortly after completing training cohorts." />
            <Impact title="Household incomes stabilize" body="Families report more reliable monthly income and improved capacity to plan and save." />
            <Impact title="Recycling pilots cut local waste" body="Hubs divert waste, generate revenue, and create new green jobs in the neighborhood." />
            <Impact title="Fellows lead in community" body="Leadership fellows take active roles on local committees and advocacy campaigns." />
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="container-x py-24 md:py-32">
        <div className="rounded-[2rem] border border-border bg-card p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Get involved</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              A short, donor-ready concept note —
              <span className="text-primary italic"> tailored to your priorities.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed">
              Sponsor a training cohort, underwrite microgrants, co-design a circular economy pilot, or fund a leadership fellowship. Each partnership ships with site visits, quarterly reports, and an annual impact summary.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href="mailto:info@wimage.org.ke"
              className="inline-flex items-center justify-between gap-3 px-6 py-5 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              <span className="font-medium">info@wimage.org.ke</span>
              <span>→</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-between gap-3 px-6 py-5 rounded-2xl border border-border hover:border-foreground/50 transition-colors"
            >
              <span>Request a donor package</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Impact({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-cream/15 pt-5">
      <h3 className="font-serif text-2xl text-cream">{title}</h3>
      <p className="mt-2 leading-relaxed">{body}</p>
    </div>
  );
}
