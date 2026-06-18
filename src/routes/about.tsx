import { createFileRoute, Link } from "@tanstack/react-router";
import kibera from "../assets/photo-maktaba.jpg";
import team6 from "../assets/photo-team-6.jpg";
import team8 from "../assets/photo-team-8.jpg";
import counselling from "../assets/photo-counselling-2.jpg";
import community from "../assets/photo-community-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WIMAGE, Built with Communities. Driven by Young Energy" },
      { name: "description", content: "WIMAGE is a youth-led community based organization working with young people in Kibera to create sustainable livelihoods and community-driven development." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Community Ownership", b: "The people most affected by a challenge are best placed to help shape its solution." },
  { t: "Action", b: "Lived experience is one of the most powerful ways people learn, grow, and create lasting impact." },
  { t: "Accountability", b: "We are committed to transparency, the responsible stewardship of every resource entrusted to us, and honest reporting." },
  { t: "Inclusion", b: "We create space for the voices of young women and youth who are too often left out of decision-making." },
  { t: "Sustainability", b: "We invest in solutions built to keep creating value long after a project or grant cycle has ended." },
];

type Person = { name: string; role: string; bio: string };

const board: Person[] = [
  { name: "Princess Rogelyne", role: "Board Chairperson", bio: "Chairperson of the WIMAGE board, providing strategic leadership and championing community-driven development." },
  { name: "Patrick Kiarie", role: "Board Secretary", bio: "Board Secretary supporting governance, documentation, and continuity across WIMAGE's work." },
  { name: "Lucy Wangui", role: "Board Treasurer", bio: "Treasurer overseeing financial stewardship, transparent reporting, and responsible use of resources." },
  { name: "Marion Stetcy", role: "Board Member, Partnerships", bio: "Board member leading partnership strategy and stakeholder engagement." },
  { name: "Pascal Nabwana", role: "Board Member, Impact & Sustainability", bio: "Board member guiding impact, monitoring, and long-term sustainability of community programmes." },
];

const secretariat: Person[] = [
  { name: "Patrick Kiarie", role: "Executive Director", bio: "Leads day-to-day operations, strategic direction, and partnerships across WIMAGE programmes." },
  { name: "Gerry Obiero", role: "Finance Director", bio: "Oversees financial planning, controls, and compliance to ensure resources deliver intended impact." },
  { name: "Agness Muteti", role: "Programmes Coordinator", bio: "Coordinates programme design, implementation, and community engagement across all initiatives." },
  { name: "Pauline Wambui", role: "Communications Officer", bio: "Leads storytelling, brand voice, and community communications across digital and print." },
  { name: "Baraka Munene", role: "Impact, Monitoring & Evaluation Officer", bio: "Designs monitoring frameworks, tracks outcomes, and translates evidence into programme learning." },
  { name: "Kevin Kamuyu", role: "Field Officer", bio: "Works directly with community groups, supporting implementation and field-level coordination." },
  { name: "Veronicah Wanjiru", role: "Fundraising & Partnerships", bio: "Builds funding pipelines, partner relationships, and resource mobilisation for community programmes." },
];

function About() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          Built with communities. <span className="italic text-primary">Led by young people.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          WIMAGE is a youth-led, community-based organisation working with young people in Kibera to build sustainable livelihoods, strengthen local enterprises, and support community-driven development.
        </p>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We believe the people closest to a community's challenges are also closest to its solutions. Our role is to walk alongside them, helping turn their own solutions into action, building practical pathways to opportunity, and supporting impact that communities can own and sustain for themselves.
        </p>
      </section>

      <section className="container-x">
        <div className="rounded-3xl overflow-hidden">
          <img src={kibera} alt="WIMAGE team at the resource centre" width={1600} height={900} loading="lazy" className="w-full h-[420px] md:h-[560px] object-cover object-[center_35%]" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-10 md:gap-16">
        <Block title="Our Vision">
          A community where young people have access to opportunity, a genuine sense of belonging, and the agency to shape their own future.
        </Block>
        <Block title="Our Mission">
          To work alongside young people to co-create sustainable solutions, strengthen community leadership, and build inclusive local economies.
        </Block>
      </section>

      {/* Why We Exist */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Why we exist.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Young people in Kibera carry ideas, energy, and deep local knowledge. Yet despite making up the majority of the population, many continue to face real barriers to employment, leadership, and meaningful participation in decisions about their own community.
            </p>
            <p>
              Too often, support stops at awareness and training, without building the practical pathways young people need to act on what they have learned.
            </p>
            <p>
              WIMAGE was founded on a simple conviction: change lasts when people have the opportunity to apply their skills, earn an income, and lead solutions within their own community.
            </p>
            <p>
              We exist to build those pathways, helping young people move from participation to genuine, sustained contribution to their community's development.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes WIMAGE Different */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={community} alt="Community members in the field" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            What makes WIMAGE <span className="italic text-primary">different.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Many organisations focus on delivering activities. We focus on helping communities build something that outlasts any single project.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Our approach is rooted in community ownership, practical action, and long-term sustainability.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We work alongside young women and youth to identify and weigh up opportunities, co-create solutions, and stay engaged as initiatives grow. Learning happens through participation, shared responsibility, and lived experience, not in a classroom alone.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Communities are not the audience for our work. They are our partners, and their leadership is central to whatever success we achieve together.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mb-14">Our values.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="bg-card border border-border rounded-2xl p-7">
                <h3 className="font-serif text-2xl text-primary">{v.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team intro */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Our team.</h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            WIMAGE is led by a team committed to women and youth empowerment, and deeply rooted in the communities we serve.
          </p>
          <p>
            Our team brings together expertise in community enterprise management, community engagement, circular economy entrepreneurship, community leadership, and organisational management.
          </p>
          <p>
            WIMAGE is governed by a Board of Directors, supported by a Secretariat and a network of volunteers and local partners who contribute technical expertise, mentorship, and strategic guidance.
          </p>
        </div>
      </section>

      {/* Board */}
      <section className="container-x pb-12">
        <h3 className="font-serif text-3xl md:text-4xl mb-8">Meet our Board Members</h3>
        <PeopleGrid people={board} />
      </section>

      {/* Secretariat */}
      <section className="container-x pb-20">
        <h3 className="font-serif text-3xl md:text-4xl mb-8">Secretariat Team</h3>
        <PeopleGrid people={secretariat} />
      </section>

      {/* Accountability */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Our commitment to <span className="italic text-primary">accountability.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Trust is earned through accountability and through delivering the results we set out to achieve. We maintain clear systems for financial management, programme implementation, and impact tracking, and we engage communities, partners, and stakeholders regularly to gather feedback, share progress openly, and improve our work.
            </p>
            <p>
              By combining local knowledge with evidence-informed programme design, we ensure that every resource entrusted to us is used responsibly and directed toward lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Looking ahead.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our ambition is a future where more young women and youth have access to opportunity, stronger support networks, and durable economic pathways.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            As we grow, we remain anchored to the principles that shaped our founding: community ownership, practical action, and impact that lasts.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={team8} alt="The WIMAGE team" loading="lazy" className="w-full h-full object-cover object-[center_30%]" />
          </div>
        </div>
      </section>

      {/* Come and see the work */}
      <section className="container-x pb-24">
        <div className="rounded-[2rem] border border-border bg-card p-10 md:p-14">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
            Come and see the work.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We welcome partners, supporters, and community members who want to see what we do and how we do it, and to explore how you might be part of it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              Book a site visit, become a volunteer →
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-foreground/20 hover:border-foreground/60 transition-colors">
              Book a site visit, partner with us →
            </Link>
            <Link to="/programs" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-foreground/20 hover:border-foreground/60 transition-colors">
              Learn more about our programmes →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {people.map((p) => (
        <div key={p.name + p.role} className="group relative">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary border border-border flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif text-3xl">
              {initials(p.name)}
            </div>
          </div>
          <div className="mt-3">
            <p className="font-serif text-lg leading-tight">{p.name}</p>
            <p className="text-sm text-muted-foreground">{p.role}</p>
          </div>
          {/* Hover bio popup */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-2 w-[260px] z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
            <div className="bg-ink text-white rounded-2xl p-5 shadow-xl shadow-black/30">
              <p className="font-serif text-base text-white">{p.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--ochre)] mt-1">{p.role}</p>
              <p className="text-sm text-white/85 leading-relaxed mt-3">{p.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-3xl md:text-4xl leading-tight">{title}</h2>
      <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{children}</p>
    </div>
  );
}

// Preserved imports kept above; unused references silenced
void team6;
void counselling;
