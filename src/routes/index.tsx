import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "../assets/photo-rally.jpg";
import economic from "../assets/photo-team-indoor.jpg";
import capacity from "../assets/photo-library.jpg";
import circular from "../assets/program-circular.jpg";
import leadership from "../assets/photo-advocacy-signs.jpg";
import community from "../assets/photo-community-3.jpg";
import team6 from "../assets/photo-team-6.jpg";
import team8 from "../assets/photo-team-8.jpg";
import counselling from "../assets/photo-counselling-2.jpg";
import maktaba from "../assets/photo-maktaba.jpg";

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

const approach = [
  { n: "01", t: "Listen", b: "We begin every program with community conversations to identify real barriers and real opportunities." },
  { n: "02", t: "Co-design", b: "Curricula, microgrant cycles, and pilots are designed together with the women and youth who will lead them." },
  { n: "03", t: "Deliver", b: "Cohort-based training paired with seed capital, mentorship, and direct market linkages." },
  { n: "04", t: "Measure", b: "Baseline and endline data, monthly tracking, and beneficiary feedback so programs adapt to what works." },
];

function Home() {
  return (
    <>
      {/* HERO — full-bleed dark image with overlay text (clean, like reference) */}
      <section className="relative">
        <div className="relative h-[88vh] min-h-[600px] max-h-[860px] w-full overflow-hidden">
          <img
            src={hero}
            alt="WMAGE members rallying on International Women's Day in Kibera"
            className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
          />
          {/* Layered dark overlay for readable text */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="relative container-x h-full flex items-center">
            <div className="max-w-3xl text-white fade-up">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/85 mb-6">
                Kibera · Nairobi · Est. 2024
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-white">
                Empowering Women, <span style={{ color: "var(--ochre)" }} className="italic">Enriching</span> Communities
              </h1>
              <p className="mt-8 max-w-xl text-base md:text-lg text-white/90 leading-relaxed">
                WMAGE equips women and youth in Kibera with practical skills, income opportunities, and leadership — turning small investments into visible, lasting change.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/30"
                >
                  Get Started
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/60 text-white hover:bg-white hover:text-primary transition-colors font-medium"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* MARQUEE */}
      <div className="border-b border-border bg-secondary/40">
        <div className="container-x py-4 flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap overflow-x-auto">
          <span>Economic Empowerment</span><span>·</span>
          <span>Capacity Building</span><span>·</span>
          <span>Circular Economy</span><span>·</span>
          <span>Leadership Development</span><span>·</span>
          <span className="text-primary">Earn · Lead · Transform</span>
        </div>
      </div>

      {/* INTRO + IMAGE SPLIT */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={maktaba} alt="WMAGE team at Maktaba Resource Centre" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="eyebrow mb-4">Who we are</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            A grassroots movement <em className="text-primary">rooted in Kibera.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            WMAGE — Women in Monitoring and Advancing General Empowerment — was founded in 2024 by Kibera youth leaders. We run cohort-based training, seed funding cycles, waste-to-value pilots, and leadership fellowships.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Every program is designed with clear indicators so donors see exactly how funds translate into outcomes. We pair quantitative results with human stories.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Learn more about us →
          </Link>
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
          {programs.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
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

      {/* APPROACH */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">How we work</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              A simple, accountable approach.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((a) => (
              <div key={a.n} className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-colors">
                <div className="font-serif text-3xl text-primary">{a.n}</div>
                <h3 className="font-serif text-2xl mt-2">{a.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{a.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4" style={{ color: "var(--ochre)" }}>Impact in practice</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white">
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

      {/* COMMUNITY GALLERY */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">Our community</p>
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
              Faces, not figures.
            </h2>
          </div>
          <Link to="/about" className="text-sm underline underline-offset-4 hover:text-primary">
            Meet the team →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={team6} alt="WMAGE women leaders" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={counselling} alt="WMAGE counselling team" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={community} alt="WMAGE community members" loading="lazy" className="w-full h-full object-cover object-[center_25%]" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={team8} alt="WMAGE team smiling" loading="lazy" className="w-full h-full object-cover object-[center_30%]" />
          </figure>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-x pb-20 md:pb-28">
        <figure className="rounded-[2rem] bg-secondary/50 border border-border p-10 md:p-16 text-center max-w-4xl mx-auto">
          <p style={{ color: "var(--clay)" }} className="text-5xl font-serif leading-none mb-6">"</p>
          <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
            United for equality, diversity and inclusion. Empowering women — enriching democracy.
          </blockquote>
          <figcaption className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            WMAGE · International Women's Day 2024
          </figcaption>
        </figure>
      </section>

      {/* PARTNER CTA */}
      <section className="container-x pb-24 md:pb-32">
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
      <h3 className="font-serif text-2xl text-white">{title}</h3>
      <p className="mt-2 leading-relaxed">{body}</p>
    </div>
  );
}
