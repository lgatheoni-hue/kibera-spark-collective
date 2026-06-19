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
    b: "We support young women and youth to build and strengthen enterprises that generate income, create jobs, and respond to local needs. Economic stability gives people a foundation to invest in themselves, support their families, and stay engaged in their community's development.",
  },
  {
    n: "02",
    t: "Capacity development",
    b: "Through practical experience, mentorship, and structured learning, participants strengthen the skills and confidence they need to organise, coordinate, solve problems, and adapt to change. These are capabilities that serve them in every part of life, not only in enterprise. Learning is tied directly to action, which keeps it relevant and sustainable.",
  },
  {
    n: "03",
    t: "Environmental stewardship",
    b: "We support young women and youth to take direct action on the environmental challenges their community faces: recovering value from waste, restoring shared spaces, and building circular enterprises that leave neighbourhoods cleaner and healthier. Caring for the environment is treated as a community responsibility in its own right, not only an economic opportunity.",
  },
  {
    n: "04",
    t: "Leadership development",
    b: "As participants gain experience and confidence, they take on greater responsibility within their groups, initiatives, and communities: organising others, shaping decisions, and giving voice to community priorities. Leadership grows through participation, collaboration, and accountability, not through theory alone.",
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
          Across Kibera, young women and youth bring talent, determination, and an intimate understanding of the challenges their community faces. Many have already taken part in training programmes, awareness campaigns, and short-term initiatives. Yet too many continue to face unemployment, limited economic opportunity, and exclusion from the decisions that shape their future.
        </p>
        <p className="mt-5 max-w-2xl text-lg text-foreground leading-relaxed">
          At WIMAGE, we do not believe the challenge is a lack of potential. The challenge is the absence of practical pathways that let young people apply their skills, earn an income, build confidence, and lead within their own community.
        </p>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Our Theory of Change sets out how we work to close that gap.
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
            Building lasting change is hard. Knowledge and awareness are an essential starting point, but on their own, they are rarely enough to produce lasting change.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A young person may learn business skills and still need an enterprise to apply them to. They may build leadership knowledge and still need a real space to lead. They may understand an environmental challenge in detail and still need the resources to act on it.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Without a practical opportunity to put learning into action, skills can go unused and momentum can fade once initial support ends. It is a challenge our entire sector continues to work on together.
          </p>
          <p className="mt-4 text-foreground leading-relaxed">
            We believe meaningful development requires more than awareness. It requires participation, ownership, and opportunity, and that is the gap WIMAGE is built to help close.
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
            People are more likely to build lasting change when they are the ones building it.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-5xl text-cream/85 leading-relaxed">
            <p>
              When young women and youth have the chance to contribute to real enterprises, address real community challenges, and take responsibility for real outcomes, they build the confidence, skills, relationships, and motivation to sustain that progress long after external support has ended.
            </p>
            <p>
              Development grows stronger when people are not simply participants in someone else's project, but owners of the solutions they helped create.
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
            We create space for young women and youth to move through a journey of participation, enterprise development, and leadership.
          </p>
          <p>
            That journey often begins when a young person joins a community initiative built around a local challenge or opportunity, environmental action, enterprise development, community organising, or collective economic activity.
          </p>
          <p>
            As they become involved, they begin contributing to practical activities that create value for themselves and their community. Through this process, they build experience, confidence, and the ability to work effectively with others.
          </p>
          <p>
            Alongside this, participants develop technical, financial, organisational, and leadership skills that help them manage responsibility and contribute more effectively to their initiatives.
          </p>
          <p>
            Over time, participants take on greater ownership of what they have helped build, becoming decision-makers, coordinators, entrepreneurs, mentors, and advocates within their own communities.
          </p>
          <p>
            As enterprises grow and leadership capacity deepens, communities become better positioned to generate opportunity, address local challenges, and sustain their own development.
          </p>
        </div>
      </section>

      {/* Four Pathways */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-3xl mb-14">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              The four pathways of change.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our approach combines four interconnected pathways that reinforce one another. None comes before the others. Each meets a different part of what a young person and their community need to thrive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways.map((p) => (
              <div key={p.n} className="bg-card border border-border rounded-2xl p-7">
                <div className="font-serif text-3xl text-primary">{p.n}</div>
                <h3 className="font-serif text-2xl mt-2">{p.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{p.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-foreground max-w-3xl leading-relaxed">
            Together, these four pathways create a cycle: participation builds confidence, confidence builds voice, voice builds leadership, and a community with strong leadership, sound livelihoods, and a cared-for environment is a community equipped to shape its own future.
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
            Our approach is built around sustainability from the outset, focused on systems communities can continue to manage and grow on their own, long after a specific programme or grant cycle has concluded.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We do not see young women and youth as beneficiaries waiting for a solution. We see them as partners, innovators, entrepreneurs, and leaders who already hold valuable knowledge and capability.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We work alongside communities to identify opportunity, organise collective action, and develop initiatives that reflect local priorities and local realities.
          </p>
          <p className="mt-4 text-foreground leading-relaxed">
            Our role is not to lead communities. Our role is to help communities strengthen their own ability to lead themselves.
          </p>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-4xl max-w-3xl">What success looks like.</h2>
          <ul className="mt-8 space-y-4 max-w-3xl">
            {[
              "Young people taking active roles in decision-making spaces, organising collective action, and shaping their community's future.",
              "Environmental challenges turned into community action, as young people mobilise their own resources, talent, and networks to build cleaner, healthier neighbourhoods.",
              "Young women and youth generating income through enterprises they helped create and now manage.",
              "Community initiatives continuing to operate without relying entirely on external support.",
              "Young people who feel they belong, are heard, and have a stake in the future of their community, not only a role within a project.",
              "Communities developing the confidence and capability to keep creating opportunity, in every sense of the word, long after a project has ended.",
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
            Our long-term vision is a future where young women and youth have a genuine sense of belonging, a real voice in the decisions that shape their lives, a cared-for environment, and meaningful economic opportunity, not one of these instead of the others.
          </p>
          <p>
            We envision communities that are socially connected, environmentally responsible, economically active, and equipped to drive their own development.
          </p>
          <p>
            By connecting voice, environment, capability, and livelihood, we aim to contribute to communities that are not dependent on external solutions, but equipped to build their own pathways to progress.
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
                Lasting change is ultimately a question of people, not projects. It happens when people have the opportunity, confidence, and ownership to shape their own future.
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
          We welcome partners, supporters, and collaborators who share our belief that sustainable development begins with community ownership and grows through practical, accountable action.
        </p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
          Start a conversation →
        </Link>
      </section>
    </>
  );
}
