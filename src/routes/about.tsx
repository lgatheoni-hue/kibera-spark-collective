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
  { t: "Community Ownership", b: "We believe that the people most affected by a challenge should help shape the solution." },
  { t: "Action", b: "We believe experience is one of the most powerful ways to learn and grow and leave an impact." },
  { t: "Accountability", b: "We are committed to transparency, responsible stewardship of resources, and honest reporting." },
  { t: "Inclusion", b: "We create opportunities for young women and youth whose voices are often underrepresented in decision making processes." },
  { t: "Sustainability", b: "We invest in solutions that continue to scale and create value long after initial support has ended." },
];

type Person = { name: string; role: string; bio: string };

const board: Person[] = [
  { name: "Princess Rogelyne", role: "Chairperson", bio: "Chairperson of the WIMAGE board, providing strategic leadership and championing community-driven development." },
  { name: "Patrick Kiarie", role: "Secretary", bio: "Board Secretary supporting governance, documentation, and continuity across WIMAGE's work." },
  { name: "Lucy Wangui", role: "Treasurer", bio: "Treasurer overseeing financial stewardship, transparent reporting, and responsible use of resources." },
  { name: "Marion Stetcy", role: "Partnerships", bio: "Board member leading partnership strategy and stakeholder engagement." },
  { name: "Pascal Nabwana", role: "Impact & Sustainability", bio: "Board member guiding impact, monitoring, and long-term sustainability of community programs." },
];

const secretariat: Person[] = [
  { name: "Patrick Kiarie", role: "Executive Director", bio: "Leads day-to-day operations, strategic direction, and partnerships across WIMAGE programs." },
  { name: "Gerry Obiero", role: "Finance Director", bio: "Oversees financial planning, controls, and compliance to ensure resources deliver intended impact." },
  { name: "Diana Mirina", role: "Programs Coordinator", bio: "Coordinates program design, implementation, and community engagement across all initiatives." },
  { name: "Pauline Wambui", role: "Communications Officer", bio: "Leads storytelling, brand voice, and community communications across digital and print." },
  { name: "Mary Njoki", role: "Impact, M&E Officer", bio: "Designs monitoring frameworks, tracks outcomes, and translates evidence into program learning." },
  { name: "Gabriel Suter", role: "Field Officer", bio: "Works directly with community groups, supporting implementation and field-level coordination." },
  { name: "Veronicah Wanjiru", role: "Fundraising & Partnership", bio: "Builds funding pipelines, partner relationships, and resource mobilization for community programs." },
];

function About() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          Built with communities. <span className="italic text-primary">Driven by young energy.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          WIMAGE is a youth-led community based organization working with young people in Kibera to create sustainable livelihoods, strengthen local enterprises, and support community-driven development.
        </p>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We believe the people closest to community challenges are also closest to the solutions. Our role is to support them to turn their solutions into action, build practical opportunities, and create impact they can own and sustain.
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
          A community where young people have access to opportunity, a sense of belonging, and the ability to shape their own futures.
        </Block>
        <Block title="Our Mission">
          To work with young people to co-create sustainable solutions, strengthen community leadership, and build inclusive local economies.
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
              Young people are full of ideas, energy, and potential. Yet despite being the majority, many continue to face barriers to employment, leadership opportunities, and meaningful participation in community development.
            </p>
            <p>
              Too often, support focuses on awareness and training without creating clear and practical pathways for action.
            </p>
            <p>
              WIMAGE was founded on a simple belief: lasting change happens when people have the opportunity to apply their skills, generate income, and lead solutions within their own communities.
            </p>
            <p>
              We exist to support young people and create the pathways they need to move beyond participation and become active contributors to local realization of sustainable development.
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
            Many focus on delivering activities, we focus on helping communities build something transformational that lasts.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Our approach is rooted in community ownership, practical action, and long-term sustainability.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We work alongside young women and youths to identify and evaluate opportunities, co-create solutions, and support initiatives as they grow. Learning happens through participation, responsibility, and real-world experience.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Communities are not beneficiaries of our work. They are partners and central in our success.
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
            WIMAGE is led by a team passionate about women and youth empowerment and deeply connected to the communities we serve.
          </p>
          <p>
            Our team brings together a diverse mix of expertise in community enterprises management, community engagement, circular economy entrepreneurship, community leadership, and organizational management.
          </p>
          <p>
            WIMAGE is governed by a team of board members, a secretariat, and a pool of volunteers and local partners who contribute technical expertise, mentorship pathways, and strategic guidance.
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
              Trust is built through accountability, and achieving the stipulated results and impact. We use clear systems for financial management, project implementation, and impact tracking. We are also very keen to regularly engage communities, partners, and stakeholders to gather feedback, share progress, and improve our work.
            </p>
            <p>
              By combining local knowledge with evidence-informed program design, we ensure that resources are used responsibly and effectively for transformative impact.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Looking ahead.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our ambition is to build a future where more young women and youth have access to opportunities, stronger support networks, and meaningful economic pathways.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            As we grow, we remain committed to the principles that shaped our beginning: community ownership, practical action, and lasting impact.
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
            We welcome partners, supporters, and community members who want to learn more about what we do, how we do it, and how you can support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              Book a site visit, become a volunteer →
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-foreground/20 hover:border-foreground/60 transition-colors">
              Book a site visit, partner with us →
            </Link>
            <Link to="/programs" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-foreground/20 hover:border-foreground/60 transition-colors">
              Learn more about our programs →
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
