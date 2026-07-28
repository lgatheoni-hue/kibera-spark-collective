import { createFileRoute, Link } from "@tanstack/react-router";
import economic from "../assets/u-team-group.jpg";
import capacity from "../assets/u-team-badges.jpg";
import circular from "../assets/program-circular.jpg";
import leadership from "../assets/u-team-pose.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programmes, WIMAGE" },
      { name: "description", content: "Four programmes co-designed with young women and youth in informal settlements: economic empowerment, capacity strengthening, circular economy, and leadership." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    num: "01",
    title: "Economic Empowerment",
    image: economic,
    lede: "We help women establish local group enterprises, supporting them from initial business ideation through to an operating, income-generating venture.",
    paragraphs: [
      "Members identify opportunities grounded in local demand, test ideas, and set up ventures with our hands-on support. Common ventures include women in agripreneurship, recycling, technology for good, and local services.",
      "Participants gain practical experience in planning, marketing, and enterprise management while generating real income.",
      "Our main goal is enterprises that create jobs and strengthen the local economy, not just individual businesses.",
    ],
  },
  {
    num: "02",
    title: "Capacity Strengthening",
    image: capacity,
    lede: "At WIMAGE, strong enterprises and community initiatives need more than motivation. They need the skills, systems, and confidence to manage growth and navigate setbacks.",
    paragraphs: [
      "We design structured skills sessions for the young women and youth in our enterprise, circular economy, and leadership groups, covering practical areas such as financial record-keeping, group governance, communication, and problem-solving.",
      "Sessions are embedded directly into ongoing initiatives so participants can apply new knowledge immediately to real situations they are already managing.",
    ],
  },
  {
    num: "03",
    title: "Circular Economy",
    image: circular,
    lede: "Many communities face environmental challenges that are too often seen only as problems. We see many of these same challenges as opportunities for young people.",
    paragraphs: [
      "We co-design community-based recycling and resource recovery initiatives in groups.",
      "Groups identify local market opportunities linked to waste and develop products, services, and enterprises from it, contributing to cleaner, healthier neighbourhoods while building livelihoods.",
    ],
  },
  {
    num: "04",
    title: "Community Leadership & Civic Engagement",
    image: leadership,
    lede: "Community development needs people who are willing and equipped to organise others, make informed decisions, and advocate for their community's priorities.",
    paragraphs: [
      "We design leadership forums and civic participation initiatives giving young women and youth an ongoing space to take on practical responsibility, mobilise people, solve problems, and manage resources within community initiatives and local forums.",
      "The result is a growing network of young thought leadership equipped to influence positive change and strengthen their community's resilience.",
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
          WIMAGE runs four programmes in informal settlements, each addressing a different need for young women and youth. Every programme is co-designed with the people it serves and structured so communities can sustain it after our direct involvement.
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

      {/* How programmes work together */}
      <section className="container-x py-24">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            How our programmes work together.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A young woman can join the programme that matches what they need most: a livelihood through Economic Empowerment, a green enterprise through Circular Economy, a stronger voice through Leadership & Civic Engagement, or practical skills through Capacity Strengthening, which also runs across the other three.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            In practice, they reinforce one another. A young woman in an Economic Empowerment group draws on Capacity Strengthening sessions to manage her enterprise, and may later take up a leadership role through civic engagement work. Participants are welcome to join more than one programme.
          </p>
        </div>
      </section>

      {/* What makes our approach different */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl">What makes our approach different.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We design programmes with the people who take part, not for them, so each one reflects real needs and real conditions rather than a template.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Skills are built through participation and problem-solving as people contribute to initiatives already under way, not in a classroom disconnected from the work.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
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
              Explore our Theory of Change →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
