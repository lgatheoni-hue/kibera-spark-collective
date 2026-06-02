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
      { title: "WMAGE, Empowering Young Women, Strengthening Communities" },
      { name: "description", content: "A youth-led community based organization co-creating livelihoods, leadership, and sustainable enterprises with young women and youth." },
    ],
  }),
  component: Home,
});

const programs = [
  { title: "Economic Empowerment", image: economic, body: "We support young women and youths to build sustainable livelihoods through community enterprises and entrepreneurship capacity building." },
  { title: "Capacity Building", image: capacity, body: "We strengthen the skills, systems, and tools needed to manage enterprises, access opportunities, and ensure sustainable livelihoods." },
  { title: "Circular Economy", image: circular, body: "We support grassroot action to reduce waste by transforming it into enterprise opportunities through recycling, resource recovery, and green enterprise development." },
  { title: "Community Leadership & Civic Engagement", image: leadership, body: "We support emerging leaders to participate in decision making, organize collective action, and advocate for community priorities." },
];

const values = [
  { t: "Community Ownership", b: "Young women and community members help identify, design, lead, and sustain the initiatives they participate in." },
  { t: "Action", b: "We believe people learn best by hands-on experience. Skills are developed through real work, real responsibility, and real opportunities." },
  { t: "Accountability", b: "We listen, learn, implement and track progress to ensure resources create meaningful and transformative impact." },
  { t: "Sustainability", b: "We focus on solutions that are local, scalable and proven to continue creating value long after a project funds ends." },
];

const approach = [
  { n: "01", t: "Listen", b: "It all begins by listening and understanding community needs, strengths, and aspirations." },
  { n: "02", t: "Co-create", b: "We design the solutions alongside the people who will lead, and take ownership of them." },
  { n: "03", t: "Act", b: "The solutions are put into practice through well structured and impact driven real initiatives." },
  { n: "04", t: "Grow", b: "We strengthen successful models and support long-term sustainability and scalability." },
];

const successes = [
  "Young women earning income through sustainable enterprises.",
  "Stronger and more resilient households.",
  "Community-owned businesses creating local opportunities.",
  "Cleaner neighbourhoods through circular economy solutions.",
  "Young women and youths taking active leadership roles.",
  "Communities with the skills and confidence to shape their own future.",
];

function Home() {
  return (
    <>
      <section className="relative">
        <div className="relative min-h-[620px] h-[calc(100vh-80px)] max-h-[820px] w-full overflow-hidden">
          <img
            src={hero}
            alt="Young women and youth rallying together"
            className="absolute inset-0 w-full h-full object-cover object-[65%_center]"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="relative h-full w-full px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center">
            <div className="text-white fade-up max-w-[640px] xl:max-w-[720px]">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/85 mb-6">
                Youth-led · Community owned · Built for action
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] tracking-tight text-white">
                Empowering Young Women. <span className="italic text-primary">Strengthening</span> Communities.
              </h1>
              <p className="mt-7 max-w-xl text-base md:text-lg text-white/90 leading-relaxed">
                We work with young women and youths to co-create meaningful livelihoods, build local leadership, and develop sustainable enterprises that generate real income and lasting impact.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
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

      {/* A Community Organization Built for Action */}
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
          <p className="mt-6 text-lg text-foreground leading-relaxed">
            We believe sustainable change happens when communities lead it themselves.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Many development programs end after training. We focus on what comes next. We work alongside young people in Kibera to help nurture and grow initiatives that create income, strengthen local networks, and address local community challenges.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Effective learning happens through active participation, ownership, and action.
          </p>
        </div>
      </section>

      {/* From Ideas to Opportunities */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              From Ideas to <span className="italic text-primary">Opportunities.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Young women and youths have the ambition, creativity, and potential to transform their communities. What is often missing is real opportunities to turn ideas into success, leadership, and lasting impact.
            </p>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              We work alongside young people to identify opportunities, design the program, outline collective responsibilities, and build community-owned solutions that create economic opportunities and strengthen their communities.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Learn more about us →
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={community} alt="Young people in the community" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Work is Guided by */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Our work is guided by:</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.t} className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-colors">
              <h3 className="font-serif text-2xl text-primary">{v.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Four Areas of Impact */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
              Our four areas of impact.
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
        </div>
      </section>

      {/* How We Work */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">How we work.</h2>
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
      </section>

      {/* What Success Looks Like */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white">
              What success looks like.
            </h2>
            <p className="mt-5 text-cream/80 leading-relaxed">
              The change we are working towards, made visible in everyday life.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {successes.map((s) => (
                <li key={s} className="flex gap-4 border-t border-cream/15 pt-5">
                  <span className="mt-2.5 inline-block w-5 h-px bg-[var(--ochre)] flex-shrink-0" />
                  <span className="text-lg text-white/90 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partners Not Beneficiaries */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
            Partners, not beneficiaries.
          </h2>
          <Link to="/about" className="text-sm underline underline-offset-4 hover:text-primary">
            Meet the team →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={team6} alt="Young women leaders together" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={counselling} alt="Community engagement" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={community} alt="Community members" loading="lazy" className="w-full h-full object-cover object-[center_25%]" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={team8} alt="Team smiling outside the centre" loading="lazy" className="w-full h-full object-cover object-[center_30%]" />
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24 md:pb-32">
        <div className="rounded-[2rem] border border-border bg-card p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Let's build something <span className="text-primary italic">lasting.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed">
              We welcome like minded partners who believe in community first, local leadership, and practical action.
            </p>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed">
              Whether you bring resources, expertise, networks, or ideas, we would love to explore how we can work together to create opportunities for young people and strengthen communities.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-between gap-3 px-6 py-5 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              <span className="font-medium">Start a conversation</span>
              <span>→</span>
            </Link>
            <a
              href="mailto:info@wimage.org.ke"
              className="inline-flex items-center justify-between gap-3 px-6 py-5 rounded-2xl border border-border hover:border-foreground/50 transition-colors"
            >
              <span>info@wimage.org.ke</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
