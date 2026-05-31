import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/photo-advocacy-signs.jpg";
import problemImg from "../assets/photo-community-3.jpg";
import measureImg from "../assets/photo-library.jpg";
import outcomeImg from "../assets/photo-rally.jpg";

export const Route = createFileRoute("/theory-of-change")({
  head: () => ({
    meta: [
      { title: "Theory of Change, WIMAGE" },
      { name: "description", content: "Turning potential into opportunity. How WIMAGE bridges the gap between awareness and lasting community-led change." },
    ],
  }),
  component: ToC,
});

const pathways = [
  {
    n: "01",
    t: "Economic participation",
    b: "We support young women and youth to establish and strengthen enterprises that generate income, create jobs, and respond to local needs. Economic stability provides the foundation upon which individuals can invest in themselves, support their families, and remain actively engaged in community development.",
  },
  {
    n: "02",
    t: "Capacity development",
    b: "Through practical experience, mentorship, and structured learning opportunities, participants strengthen the skills required to manage enterprises, coordinate activities, solve problems, and adapt to changing circumstances. Learning is connected directly to action, making it more relevant and sustainable.",
  },
  {
    n: "03",
    t: "Leadership development",
    b: "As participants gain experience and confidence, they begin taking greater responsibility within their groups, enterprises, and communities. Leadership emerges through participation, collaboration, and accountability rather than through theory alone.",
  },
];

function ToC() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          Turning potential into <span className="italic text-primary">opportunity.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Across Kibera, young women and youth possess talent, creativity, determination, and a deep understanding of the challenges facing their communities. Many have participated in training programs, awareness campaigns, and short-term initiatives. Yet despite these efforts, too many continue to face unemployment, limited economic opportunities, and exclusion from decisions that shape their future.
        </p>
        <p className="mt-5 max-w-2xl text-lg text-foreground leading-relaxed">
          At WIMAGE, we believe the challenge is not a lack of potential. The challenge is the lack of practical pathways that allow young people to apply their skills, earn an income, build confidence, and become active leaders within their communities.
        </p>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Our theory of change explains how we work to bridge that gap.
        </p>
      </section>

      <section className="container-x pb-4">
        <div className="rounded-3xl overflow-hidden aspect-[21/9]">
          <img src={heroImg} alt="Community advocates for equality and inclusion" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* The Challenge We See */}
      <section className="container-x py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">The challenge we see.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Many community development interventions focus on transferring knowledge. While knowledge is important, information alone rarely creates lasting change.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Young people may learn business skills without having access to an enterprise. They may attend leadership workshops without opportunities to lead. They may understand environmental challenges without having the resources to turn solutions into action.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Without practical opportunities to apply what they have learned, skills often remain unused, confidence declines, and community initiatives struggle to survive beyond initial support.
          </p>
          <p className="mt-4 text-foreground leading-relaxed">
            We believe meaningful development requires more than awareness. It requires participation, ownership, and opportunity.
          </p>
        </div>
        <div>
          <div className="rounded-3xl overflow-hidden aspect-[4/5]">
            <img src={problemImg} alt="Community members" className="w-full h-full object-cover object-[center_25%]" />
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-28">
          <p className="eyebrow mb-3" style={{ color: "var(--ochre)" }}>What we believe</p>
          <p className="font-serif text-3xl md:text-5xl leading-snug text-white max-w-4xl">
            People are more likely to create lasting change when they are actively involved in building it.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-5xl text-cream/85 leading-relaxed">
            <p>
              When young women and youth have the opportunity to contribute to real enterprises, solve real community challenges, and take responsibility for real outcomes, they develop the confidence, skills, relationships, and motivation needed to sustain progress long after external support has ended.
            </p>
            <p>
              Development becomes stronger when people are not merely participants in a project, but owners of the solutions being created.
            </p>
          </div>
        </div>
      </section>

      {/* How Change Happens */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">How change happens.</h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            We create opportunities for young women and youth to move through a journey of participation, enterprise development, and leadership.
          </p>
          <p>
            The journey often begins when a young person joins a community initiative designed around a local challenge or opportunity. This may involve environmental action, enterprise development, community organizing, or collective economic activities.
          </p>
          <p>
            As participants become involved, they begin contributing to practical activities that create value for themselves and their communities. Through this process, they gain experience, build confidence, and strengthen their ability to work with others.
          </p>
          <p>
            Alongside these activities, participants develop technical, financial, organizational, and leadership skills that help them manage responsibilities and contribute more effectively to their initiatives.
          </p>
          <p>
            Over time, participants take on greater ownership of the activities they help build. They become decision-makers, coordinators, entrepreneurs, mentors, and advocates within their communities.
          </p>
          <p>
            As enterprises grow and leadership capacity increases, communities become better positioned to generate opportunities, solve local challenges, and sustain their own development efforts.
          </p>
        </div>
      </section>

      {/* Three Pathways */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-3xl mb-14">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              The three pathways of change.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our approach combines three interconnected pathways that reinforce one another.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pathways.map((p) => (
              <div key={p.n} className="bg-card border border-border rounded-2xl p-7">
                <div className="font-serif text-3xl text-primary">{p.n}</div>
                <h3 className="font-serif text-2xl mt-2">{p.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{p.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-foreground max-w-3xl leading-relaxed">
            Together, these pathways create a cycle where economic opportunity strengthens confidence, confidence strengthens leadership, and leadership strengthens community resilience.
          </p>
        </div>
      </section>

      {/* What Makes This Model Different */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img src={measureImg} alt="Community learning space" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <h2 className="font-serif text-3xl md:text-4xl">What makes this model different.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Many programs begin with activities and end when funding ends. Our approach focuses on building systems that communities can continue to manage and grow independently.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We do not view young women and youth as beneficiaries waiting for solutions. We see them as partners, innovators, entrepreneurs, and leaders who already possess valuable knowledge and capabilities.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Rather than importing solutions, we work alongside communities to identify opportunities, organize collective action, and develop initiatives that reflect local priorities and realities.
          </p>
          <p className="mt-4 text-foreground leading-relaxed">
            Our role is not to lead communities. Our role is to help communities strengthen their ability to lead themselves.
          </p>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-4xl max-w-3xl">What success looks like.</h2>
          <ul className="mt-8 space-y-4 max-w-3xl">
            {[
              "Young women and youth generating income through enterprises they helped create and manage.",
              "Community initiatives continuing to operate without relying entirely on external support.",
              "Young people taking active roles in decision-making spaces and organizing collective action.",
              "Environmental challenges becoming economic opportunities through circular economy work.",
              "Communities developing the confidence and capability to create opportunities long after a project has ended.",
            ].map((s) => (
              <li key={s} className="flex gap-3 text-foreground">
                <span className="mt-2.5 inline-block w-4 h-px bg-primary flex-shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Long Term Change */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            The long-term change we seek.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Our long-term vision is a future where young women and youth have meaningful economic opportunities, stronger support networks, and greater influence over the decisions that affect their lives.
          </p>
          <p>
            We envision communities that are economically active, environmentally responsible, socially connected, and capable of driving their own development.
          </p>
          <p>
            By connecting livelihoods, capability development, and leadership, we aim to contribute to communities that are not dependent on external solutions, but are equipped to create their own pathways to progress.
          </p>
        </div>
      </section>

      {/* Building What Lasts */}
      <section className="relative overflow-hidden">
        <div className="relative h-[360px] md:h-[440px]">
          <img src={outcomeImg} alt="Community rally" className="absolute inset-0 w-full h-full object-cover object-[60%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />
          <div className="relative container-x h-full flex items-center">
            <div className="max-w-2xl text-white">
              <p className="eyebrow mb-3" style={{ color: "var(--ochre)" }}>Building what lasts</p>
              <blockquote className="font-serif text-2xl md:text-4xl leading-snug text-white">
                Lasting change does not happen because an organization delivers a project. It happens when people have the opportunity, confidence, and ownership required to shape their own future.
              </blockquote>
              <p className="mt-5 text-white/80">That is the change WIMAGE exists to support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24 text-center">
        <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
          Walk alongside this work.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          We welcome partners, supporters, and collaborators who share our belief that sustainable development begins with community ownership and grows through practical action.
        </p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
          Start a conversation →
        </Link>
      </section>
    </>
  );
}
