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
    lede: "We support young women and youth to create sustainable livelihoods by developing enterprises that generate income, create jobs, and respond to local community needs.",
    paragraphs: [
      "Rather than focusing only on entrepreneurship training, we help participants identify viable economic opportunities, organize themselves into groups, test business ideas, and establish income-generating ventures.",
      "Participants gain practical experience in planning, production, marketing, customer engagement, and enterprise management while generating real income from their activities.",
      "The goal is not simply to start businesses, but to build enterprises that can grow, create employment, and strengthen local economies.",
    ],
  },
  {
    num: "02",
    title: "Capacity Building",
    image: capacity,
    lede: "Strong enterprises and community initiatives require more than motivation. They require the skills, systems, and confidence needed to manage growth and navigate challenges.",
    paragraphs: [
      "Our capacity building work focuses on strengthening the practical capabilities that help individuals and groups succeed.",
      "Rather than delivering one-off workshops, we integrate learning into ongoing initiatives so participants can immediately apply new knowledge to real situations. This creates a continuous learning process where skills are reinforced through practice and experience.",
      "By strengthening both individual capabilities and organizational systems, we help communities build the foundation needed for long-term success.",
    ],
  },
  {
    num: "03",
    title: "Circular Economy",
    image: circular,
    lede: "Many communities often face environmental challenges that are viewed as problems. We see many of these challenges as opportunities for young people.",
    paragraphs: [
      "Our circular economy initiatives help young women and youth recover value from materials that would otherwise be discarded.",
      "We support communities to identify market opportunities linked to environmental action, develop products and services from otherwise waste materials, and build enterprises that contribute to cleaner and healthier living environments.",
      "This approach creates a direct connection between environmental stewardship and economic opportunity, allowing communities to generate livelihoods while addressing local environmental concerns.",
    ],
  },
  {
    num: "04",
    title: "Community Leadership & Civic Engagement",
    image: leadership,
    lede: "Community development requires people who are willing and able to organize others, make informed decisions, and advocate for community priorities.",
    paragraphs: [
      "Our leadership and civic engagement work supports young women and youth to become active contributors within their communities.",
      "Leadership development takes place through practical responsibility within community initiatives, self-help groups, enterprises, and local forums. Participants learn how to mobilize people, solve problems, manage resources, and contribute to community development efforts.",
      "The result is a growing network of young leaders who are equipped to influence positive change and strengthen community resilience.",
    ],
  },
];

function Programs() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          From co-creation to <span className="italic text-primary">community success stories.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We turn community ideas into transformational income generating activities, for sustainable economic pathways. Each program is co-designed with the people it serves, implemented through collective action, and structured to grow and scale into initiatives that communities can sustain and benefit from.
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
                Explore the program →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* How programs work together */}
      <section className="container-x py-24">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            How our programs work together.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Each program plays a different role, but together they create a pathway for long-term change.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            It all begins with a participant joining a self help initiative that solves a community problem, and creates value and opportunity for a livelihood. As they become involved, they strengthen their technical, financial, and organizational skills through capacity building sessions.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            They also then participate in circular economy enterprises that improve local environmental conditions. Over time, participants take on leadership responsibilities within their groups, enterprises, and wider community structures.
          </p>
          <p className="mt-5 text-foreground leading-relaxed">
            This creates a progression from opportunity, to capability, to ownership, to leadership.
          </p>
        </div>
      </section>

      {/* What makes our approach different */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">What makes our approach different.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our approach is grounded more in practice, and moderate in theory. Rather than designing programs for communities, we design them with the people who will participate, ensuring that every initiative reflects real needs, real conditions, and real opportunities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Learning is not separated from action. Skills are developed through participation, problem solving, and building experience as they contribute to ongoing initiatives.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From the beginning, we structure every program around strengthening community resilience. Our focus is on outcomes that can be seen and measured in everyday life.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Areas of focus.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our work is concentrated in a few interconnected areas where community potential can be transformed into long-term impact.
            </p>
            <ul className="mt-5 space-y-3 text-foreground">
              {[
                "Community-owned livelihood enterprises that provide practical opportunities to generate income.",
                "Groups of young people engaged in collective economic activities designed and managed locally.",
                "Circular economy solutions that turn waste into valuable products and services.",
                "Leadership development through real participation in decisions and coordination.",
                "Stronger systems that allow communities to sustain and grow their own initiatives.",
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
            To us, success is not only about the number of programs implemented, but about the strength and independence of the communities we work with.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We see success when young women and youth are consistently earning income through activities they love doing and manage themselves. We see it when community-owned enterprises are able to operate without external support and continue to grow over time.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We measure success when more young people are actively participating in local leadership spaces and contributing to decisions that affect their futures and communities.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We are particularly keen for visible changes in the environment, including cleaner, healthier neighbourhoods created through circular economy initiatives.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            At a deeper level, success is reflected in stronger local economic networks where young people collaborate, trade, and support each other in ways that create shared resilience.
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
            We welcome collaboration with individuals, institutions, and organizations that are willing to invest not only resources, but also ideas, expertise, and networks that strengthen local solutions.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
            Whether through funding, technical support, or partnership in implementation, we are open to working together to expand opportunities for young people and strengthen community systems that last. If this approach resonates with you, we would be glad to begin a conversation.
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
