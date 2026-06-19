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
  { title: "Economic Empowerment", image: economic, body: "We walk with young women and youth as they build sustainable livelihoods through community enterprises and practical, hands-on entrepreneurship support." },
  { title: "Capacity Strengthening", image: capacity, body: "We build the practical skills, confidence, and systems young women and youth need to lead, organise, and solve problems, in their groups, their initiatives, and their daily lives." },
  { title: "Circular Economy", image: circular, body: "We support grassroots action that turns waste into enterprise through recycling, resource recovery, and green, community-led business." },
  { title: "Community Leadership & Civic Engagement", image: leadership, body: "We support emerging leaders to take part in local decision-making, organise collective action, and advocate for the priorities of their own community." },
];

const values = [
  { t: "Community Ownership", b: "Young women and community members identify, design, lead, and sustain every initiative they take part in. Decisions are made with them, not for them." },
  { t: "Action", b: "We believe people learn most through hands-on responsibility. Skills are built through real work, real accountability, and real outcomes." },
  { t: "Accountability", b: "We listen, implement, track progress honestly, and report back to communities, partners, and ourselves, to make sure resources translate into genuine impact." },
  { t: "Sustainability", b: "We invest in solutions that are locally owned and proven to keep creating value long after a programme or grant cycle ends." },
];

const approach = [
  { n: "01", t: "Listen", b: "Every initiative begins by listening: understanding community needs, strengths, and aspirations directly from the people living them." },
  { n: "02", t: "Co-create", b: "We design solutions together with the people who will lead and own them, not in isolation from them." },
  { n: "03", t: "Act", b: "Solutions move into practice through well-structured, community-driven initiatives with clear shared responsibilities." },
  { n: "04", t: "Grow", b: "We strengthen what is working and support communities to sustain and expand it on their own terms." },
];

const successes = [
  "Young women and youth with a stronger voice in the decisions that shape their community, and the confidence to use it.",
  "Households with greater stability, and young people earning steady income through enterprises they manage themselves.",
  "Cleaner, healthier neighbourhoods, as waste becomes a resource rather than a hazard.",
  "Community groups with the skills and systems to manage their own initiatives, long after our direct support ends.",
  "Community-owned businesses creating local jobs and shared opportunity.",
  "A community with the confidence, networks, and sense of belonging to shape its own future.",
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
                Youth-led · Community owned · Built to last
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] tracking-tight text-white">
                Rooted in Kibera. Led by Young Women. <span className="italic text-primary">Built on Belonging.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base md:text-lg text-white/90 leading-relaxed">
                WIMAGE works alongside young women and youth in Kibera to build local leadership, strengthen community voice, care for the environment we share, and grow livelihoods that hold households and neighbourhoods together for the long term.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/30"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/60 text-white hover:bg-white hover:text-primary transition-colors font-medium"
                >
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-secondary/40">
        <div className="container-x py-4 flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap overflow-x-auto">
          <span>Economic Empowerment</span><span>·</span>
          <span>Capacity Strengthening</span><span>·</span>
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
            A community organisation built for <em className="text-primary">the long haul.</em>
          </h2>
          <p className="mt-6 text-lg text-foreground leading-relaxed">
            We believe lasting change is led by the people closest to it.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            WIMAGE walks with young people in Kibera for the full journey: building skills, taking up leadership, caring for their environment, and strengthening the relationships and livelihoods that hold their community together.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Our experience tells us that real learning happens through doing: through ownership, responsibility, and action, not through a workshop certificate.
          </p>
        </div>
      </section>

      {/* From Ideas to Opportunities */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              From everyday ideas to <span className="italic text-primary">everyday change.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Young women and youth in Kibera are not short of ambition, creativity, or insight into their own community. What they are too often denied is the practical pathway to turn that insight into a livelihood, a leadership role, a cleaner neighbourhood, or a stronger voice in decisions that affect them.
            </p>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              We work side by side with young people to identify what matters most to them, design programmes together, agree shared responsibilities, and build community-owned solutions, whatever form they take, that strengthen the people and the place around them.
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
              See all programmes →
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
              What change looks like.
            </h2>
            <p className="mt-5 text-cream/80 leading-relaxed">
              We measure our work honestly, against outcomes communities themselves define as meaningful, across every area we work in, not one.
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
        <div className="flex items-end justify-between flex-wrap gap-6 mb-6">
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
            Partners, not beneficiaries.
          </h2>
          <Link to="/about" className="text-sm underline underline-offset-4 hover:text-primary">
            Meet the team →
          </Link>
        </div>
        <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-10">
          We do not use the word "beneficiary" to describe the people we work with. Every young woman, every youth group, and every community member is a partner in the work, contributing knowledge, leadership, and labour, not simply receiving a service.
        </p>
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
              Let's build something lasting, <span className="text-primary italic">together.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed">
              We welcome partners who believe in community-first development, locally led solutions, and practical, accountable action.
            </p>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed">
              Whether you bring funding, technical expertise, networks, or ideas, we would value the chance to explore how we can work together to create opportunity for young people and strengthen their communities.
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
