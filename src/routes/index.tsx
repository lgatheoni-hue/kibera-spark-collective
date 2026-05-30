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
      { title: "WMAGE, Women in Monitoring and Advancing General Empowerment" },
      { name: "description", content: "A community based organization advancing data driven programs, locally co-created livelihoods, and transformational leadership." },
    ],
  }),
  component: Home,
});

const programs = [
  { title: "Economic Empowerment", image: economic, body: "Locally co-created livelihood initiatives, community owned enterprises, and learning on the job so skills and income grow together." },
  { title: "Capacity Building", image: capacity, body: "Digital inclusion, practical technology skills, and organizational strengthening that let communities deliver and sustain their own impact." },
  { title: "Circular Economy", image: circular, body: "Inclusive circular models, community owned green enterprises, and local value chains that link environmental and economic returns." },
  { title: "Leadership & Civic Engagement", image: leadership, body: "Mentorship and civic pathways that turn community members into organizers, advocates, and active drivers of change." },
];

const stats = [
  { value: "Co-created", label: "Programs designed with, and owned by, the communities we serve" },
  { value: "Action", label: "Beyond classrooms, livelihood depends on doing the work" },
  { value: "Evidence", label: "Baselines, monthly tracking, and honest reporting" },
  { value: "Transform", label: "Small investments turned into visible community change" },
];

const approach = [
  { n: "01", t: "Listen", b: "We start with community conversations to surface real barriers and real opportunities." },
  { n: "02", t: "Co-design", b: "Programs, enterprises, and pilots are designed alongside the people who will lead them." },
  { n: "03", t: "Deliver", b: "Action first. People learn while doing the work, earning a return, and owning the outcome." },
  { n: "04", t: "Measure", b: "Baseline data, monthly tracking, and beneficiary feedback so programs adapt to what works." },
];

function Home() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[88vh] min-h-[600px] max-h-[860px] w-full overflow-hidden">
          <img
            src={hero}
            alt="WMAGE members rallying for equality, diversity and inclusion"
            className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="relative container-x h-full flex items-center">
            <div className="max-w-3xl text-white fade-up">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/85 mb-6">
                Data driven · Community owned · Transformational
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-white">
                Empowering Women, <span style={{ color: "var(--ochre)" }} className="italic">Enriching</span> Communities
              </h1>
              <p className="mt-8 max-w-xl text-base md:text-lg text-white/90 leading-relaxed">
                We partner with communities to co-create livelihoods, build leadership, and deliver measurable change that lasts beyond any single program.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/30"
                >
                  Get in Touch
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

      <div className="border-b border-border bg-secondary/40">
        <div className="container-x py-4 flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap overflow-x-auto">
          <span>Economic Empowerment</span><span>·</span>
          <span>Capacity Building</span><span>·</span>
          <span>Circular Economy</span><span>·</span>
          <span>Leadership & Civic Engagement</span><span>·</span>
          <span className="text-primary">Earn, Lead, Transform</span>
        </div>
      </div>

      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={maktaba} alt="WMAGE team at the resource centre" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            A community organization built for <em className="text-primary">action.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Many communities are already informed and many organizations have already trained them. WMAGE moves past awareness into doing. We co-create enterprises, support people while they run them, and measure the change as it happens.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Every program ships with clear indicators, transparent finances, and an honest read of what is working, so partners see exactly how investment becomes outcome.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Learn more about us →
          </Link>
        </div>
      </section>

      <section className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {stats.map((s) => (
            <div key={s.label} className="py-10 px-2 border-b border-border md:border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
              <div className="font-serif text-4xl md:text-5xl text-primary">{s.value}</div>
              <div className="mt-3 text-sm text-muted-foreground max-w-[22ch] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
            Four programs, one accountable model.
          </h2>
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

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-2xl mb-14">
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

      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white">
              Numbers, and the people behind them.
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-8 text-cream/85">
            <Impact title="Livelihoods that hold" body="Community owned enterprises generate steady income because participants learn the work by running it." />
            <Impact title="Households gain stability" body="Families report more predictable income and a stronger ability to plan, save, and invest." />
            <Impact title="Cleaner, greener neighborhoods" body="Circular economy hubs divert waste, recover value, and create local green jobs." />
            <Impact title="Leaders who show up" body="Trained community members take active roles on committees, campaigns, and local decision tables." />
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
            Faces, not figures.
          </h2>
          <Link to="/about" className="text-sm underline underline-offset-4 hover:text-primary">
            Meet the team →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={team6} alt="Women leaders together" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={counselling} alt="Counselling and support team" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={community} alt="Community members" loading="lazy" className="w-full h-full object-cover object-[center_25%]" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={team8} alt="Team smiling outside the centre" loading="lazy" className="w-full h-full object-cover object-[center_30%]" />
          </figure>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <figure className="rounded-[2rem] bg-secondary/50 border border-border p-10 md:p-16 text-center max-w-4xl mx-auto">
          <p style={{ color: "var(--clay)" }} className="text-5xl font-serif leading-none mb-6">"</p>
          <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
            United for equality, diversity and inclusion. Empowering women, enriching democracy.
          </blockquote>
          <figcaption className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            WMAGE community
          </figcaption>
        </figure>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="rounded-[2rem] border border-border bg-card p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Let's build something <span className="text-primary italic">lasting, together.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed">
              We welcome partners who want to walk alongside communities, not just fund them. Whether you bring resources, expertise, or curiosity, there is a place for you in this work.
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
              <span>Start a conversation</span>
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
