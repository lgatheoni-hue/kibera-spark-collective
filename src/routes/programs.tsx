import { createFileRoute, Link } from "@tanstack/react-router";
import economic from "../assets/photo-team-indoor.jpg";
import capacity from "../assets/photo-library.jpg";
import circular from "../assets/program-circular.jpg";
import leadership from "../assets/photo-advocacy-signs.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs, WIMAGE" },
      { name: "description", content: "From co-creation to community success stories. Livelihoods, capacity, circular economy, and leadership programs co-designed with young women and youth." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    num: "01",
    title: "Economic Empowerment",
    image: economic,
    lede: "We support young women and youth to build sustainable livelihoods by developing enterprises that generate income, create jobs, and respond to needs identified by their own community.",
    paragraphs: [
      "Rather than offering entrepreneurship training alone, we help participants identify viable economic opportunities, organise into groups, test ideas, and establish income-generating ventures grounded in local demand.",
      "Participants gain hands-on experience in planning, production, marketing, customer engagement, and enterprise management, while generating real income from their work.",
      "Our aim is not simply to help people start businesses, but to build enterprises that create employment and strengthen the local economy around them.",
    ],
  },
  {
    num: "02",
    title: "Capacity Strengthening",
    image: capacity,
    lede: "Strong enterprises and community initiatives need more than motivation. They need the skills, systems, and confidence to manage growth and navigate setbacks.",
    paragraphs: [
      "Our capacity-strengthening work builds the practical capabilities that help individuals and groups succeed.",
      "Rather than one-off workshops, we embed learning within ongoing initiatives so participants can apply new knowledge immediately to real situations, reinforcing skills through practice, not theory alone.",
      "By strengthening both individual capability and organisational systems, we help communities build the foundation they need for long-term success.",
    ],
  },
  {
    num: "03",
    title: "Circular Economy",
    image: circular,
    lede: "Many communities face environmental challenges that are too often seen only as problems. We see many of these same challenges as opportunities for young people.",
    paragraphs: [
      "Our circular economy work helps young women and youth recover value from materials that would otherwise be discarded.",
      "We support communities to identify market opportunities linked to environmental action, develop products and services from waste materials, and build enterprises that contribute to cleaner, healthier neighbourhoods.",
      "This work creates a direct link between environmental stewardship and economic opportunity, allowing communities to build livelihoods while addressing the environmental concerns they live with every day.",
    ],
  },
  {
    num: "04",
    title: "Community Leadership & Civic Engagement",
    image: leadership,
    lede: "Community development needs people who are willing and equipped to organise others, make informed decisions, and advocate for their community's priorities.",
    paragraphs: [
      "Our leadership and civic engagement work supports young women and youth to become active contributors within their communities.",
      "Leadership develops through practical responsibility, within community initiatives, self-help groups, enterprises, and local forums, where participants learn to mobilise people, solve problems, manage resources, and contribute meaningfully to community development.",
      "The result is a growing network of young leaders equipped to influence positive change and strengthen their community's resilience.",
    ],
  },
];

function Programs() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          From co-creation to <span className="italic text-primary">community-led success.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We work with communities to turn their own ideas into income-generating activities that build sustainable economic pathways. Every programme is co-designed with the people it serves, carried out through collective action, and structured so communities can sustain and benefit from it long after our direct support ends.
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
              {p.paragraphs.map((para, idx) => (
                <p key={idx} className="mt-4 text-muted-foreground leading-relaxed">{para}</p>
              ))}
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Explore the programme →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* How programs work together */}
      <section className="container-x py-24">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            How our programmes work together.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Each programme plays a distinct role, but together they form a single pathway for lasting change.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            It typically begins when a participant joins a self-help initiative addressing a community problem and creating a livelihood opportunity. As they become involved, capacity-strengthening sessions build their technical, financial, and organisational skills.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Many also take part in circular economy enterprises that improve local environmental conditions. Over time, participants take on leadership responsibilities within their groups, enterprises, and wider community structures.
          </p>
          <p className="mt-5 text-foreground leading-relaxed">
            A progression from opportunity, to capability, to ownership, to leadership.
          </p>
        </div>
      </section>

      {/* What makes our approach different */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">What makes our approach different.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our approach is grounded in practice, not theory. Rather than designing programmes for communities, we design them with the people who will take part, ensuring every initiative reflects real needs, real conditions, and real opportunities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Learning is never separated from action. Skills are built through participation, problem-solving, and lived experience as people contribute to initiatives already under way.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From the outset, every programme is structured to strengthen community resilience, with a focus on outcomes that are visible and measurable in everyday life.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Areas of focus.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our work concentrates on a few interconnected areas where community potential becomes long-term impact.
            </p>
            <ul className="mt-5 space-y-3 text-foreground">
              {[
                "Community-owned livelihood enterprises that give young women and youth practical pathways to income and economic independence.",
                "Groups of young people engaged in collective economic activity that is designed and managed locally, keeping opportunity creation within the community.",
                "Circular economy solutions that turn waste and underused materials into products and services, linking environmental action directly to income.",
                "Leadership development through genuine participation, decision-making, coordination, and responsibility within community structures.",
                "Stronger systems that allow communities to sustain and grow their own initiatives over time.",
              ].map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2.5 inline-block w-4 h-px bg-primary flex-shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What success looks like */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            What success looks like.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            To us, success is not measured by the number of programmes delivered, but by the strength and independence of the communities we work with.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We see success when young women and youth consistently earn income through work they manage themselves, and when community-owned enterprises operate and grow without relying on external support.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We see it when more young people actively participate in local leadership spaces and shape decisions about their own future, and when circular economy initiatives produce visible, lasting improvements in their neighbourhoods.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            At a deeper level, success shows up in stronger local economic networks, where young people trade, collaborate, and support one another in ways that build shared resilience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-[2rem] border border-border bg-card p-10 md:p-14">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
            Let's build together.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We welcome collaboration with individuals, institutions, and organisations willing to invest not only resources, but also ideas, expertise, and networks that strengthen local solutions.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
            Whether through funding, technical support, or partnership in implementation, we are open to working together to expand opportunity for young people and strengthen the community systems that sustain it. If this approach resonates with you, we would welcome the conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              Talk to us →
            </Link>
            <Link to="/theory-of-change" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-foreground/20 hover:border-foreground/60 transition-colors">
              Explore our theory of change →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
