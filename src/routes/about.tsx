import { createFileRoute, Link } from "@tanstack/react-router";
import kibera from "../assets/photo-maktaba.jpg";
import team6 from "../assets/photo-team-6.jpg";
import team8 from "../assets/photo-team-8.jpg";
import counselling from "../assets/photo-counselling-2.jpg";
import community from "../assets/photo-community-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WIMAGE, Built with Communities. Led by Young People." },
      { name: "description", content: "WIMAGE Kenya is a women-led, community-based organisation working with young women and youths in informal settlements." },
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
  {
    name: "Patrick Kiarie",
    role: "Board Secretary",
    bio: "Patrick is a chess enthusiast, passionate about youth empowerment, entrepreneurship, and technology for good. He works at the intersection of civic engagement, digital advocacy, and youth participation, designing and implementing programmes that empower young people and strengthen inclusive public dialogue with a focus on governance and social change in Kenya.",
  },
  {
    name: "Director of Diaspora Relations",
    role: "Director of Diaspora Relations",
    bio: "Board member coordinating diaspora relations, partnerships, and cross-border collaboration for WIMAGE Kenya.",
  },
  {
    name: "Pascal Nabwana",
    role: "Board Member, Impact & Sustainability",
    bio: "Benjamin Pascal W. Nabwana is a youth leadership practitioner, governance advocate, and social entrepreneur serving as Vice President and Head of the Directorate of Strategic Partnerships, Resource Mobilization, and Corporate Relations at The Youth Parliament of Kenya (YPK). He holds an MBA, a Diploma in ICT from AIRADS, and a professional certification in Counseling Psychology.",
  },
];

const secretariat: Person[] = [
  { name: "Patrick Kiarie", role: "Executive Director", bio: "Leads day-to-day operations, strategic direction, and partnerships across WIMAGE programmes." },
  { name: "Gerry Obiero", role: "Finance Director", bio: "Oversees financial planning, controls, and compliance to ensure resources deliver intended impact." },
  { name: "Diana Mirina", role: "Programmes Coordinator", bio: "Coordinates programme design, implementation, and community engagement across all initiatives." },
  { name: "Pauline Wambui", role: "Communications Officer", bio: "Leads storytelling, brand voice, and community communications across digital and print." },
  { name: "Mary Njoki", role: "Impact, Monitoring & Evaluation Officer", bio: "Designs monitoring frameworks, tracks outcomes, and translates evidence into programme learning." },
  { name: "Gabriel Suter", role: "Field Officer", bio: "Works directly with community groups, supporting implementation and field-level coordination." },
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
          WIMAGE Kenya was born in 2022 and registered as an organisation in 2024. We are the Kenyan chapter of the WIMAGE Global Network, with partners and implementing chapters across Africa, the United Kingdom, and the United States (as a 501(c)(3)).
        </p>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          WIMAGE Kenya is a women-led, community-based organisation that monitors the plight of women and runs programmes with young women and youths in informal settlements. We combine skills training, enterprise support, civic participation, and environmental action so communities can manage and sustain what they build after we take a step back.
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
          Communities where young people have access to opportunity, a genuine sense of belonging, and the agency to shape their own future.
        </Block>
        <Block title="Our Mission">
          To work with young people to co-create sustainable solutions, strengthen community leadership, and build inclusive local economies.
        </Block>
      </section>

      {/* Why We Do What We Do */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Why we do what we do.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Young people in Kenya make up the majority of the population, yet they remain marginalised, facing real barriers to employment, leadership, and participation in decisions about their own future.
            </p>
            <p>
              Young people are disconnected from the government because they read and learn about democracy and good governance in classrooms while they watch it fail just outside the school gates.
            </p>
            <p>
              Training and awareness campaigns are a starting point, but on their own they cannot create sustainable solutions, livelihoods, or a seat at the table.
            </p>
            <p>
              WIMAGE was founded to build what comes after training and awareness: the enterprises, forums, and leadership spaces where young people can put what they have learned to use.
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
            WIMAGE is built to help communities create something that outlasts any single project or grant cycle.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Our approach is rooted in community ownership, practical action, and long-term sustainability. We work alongside young women and youth to identify and weigh up challenges and opportunities, co-create solutions, and stay engaged as initiatives grow. Learning happens through action, participation, shared responsibility, and lived experience, not in a classroom alone.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Communities are not the audience for our work. They are our stakeholders and partners, and their success is central to whatever impact we achieve together.
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
            WIMAGE brings together expertise in community enterprise management, community engagement, circular economy entrepreneurship, community leadership, and organisational management.
          </p>
          <p>
            We are governed by a Board of Directors, supported by a Secretariat and a network of volunteers and local partners.
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
              We maintain clear systems for financial management, programme implementation, and impact tracking, and we report progress openly to communities, partners, and donors.
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
            We welcome partners, supporters, and community members who want to see what we do and explore how they might be part of it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              Contact us →
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
