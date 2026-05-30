import { createFileRoute, Link } from "@tanstack/react-router";
import kibera from "../assets/photo-maktaba.jpg";
import team6 from "../assets/photo-team-6.jpg";
import team8 from "../assets/photo-team-8.jpg";
import counselling from "../assets/photo-counselling-2.jpg";
import community from "../assets/photo-community-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WMAGE, a community based organization" },
      { name: "description", content: "WMAGE partners with communities to co-create livelihoods, build leadership, and deliver measurable, transformational change." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          Built with the community. <span className="italic text-primary">Accountable to it.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          WMAGE is a community based organization that moves past awareness into action. We co-create livelihoods, strengthen local capacity, and back leaders who can carry the work forward.
        </p>
      </section>

      <section className="container-x">
        <div className="rounded-3xl overflow-hidden">
          <img src={kibera} alt="WMAGE team at the resource centre" width={1600} height={900} loading="lazy" className="w-full h-[420px] md:h-[560px] object-cover object-[center_35%]" />
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-10 md:gap-16">
        <Block title="A community where every person shapes their own future.">
          Skills, income, and voice combine into communities led by the people who live in them. We see a future where opportunity is locally generated and locally held.
        </Block>
        <Block title="Equip people to earn, lead, and transform.">
          Practical pathways, designed alongside the community, delivered close to home, and measured against real outcomes.
        </Block>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mb-14">
            Inclusivity, accountability, local ownership, evidence.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Inclusivity", b: "We design for the people most often left out of programs and decisions." },
              { t: "Accountability", b: "Transparent finances, transparent decisions. Partners and communities see the same numbers." },
              { t: "Local ownership", b: "Communities are co-creators, not recipients. Programs survive when they already belong to them." },
              { t: "Evidence", b: "Baselines, monthly tracking, and honest feedback. Programs adapt to what actually works." },
            ].map((v) => (
              <div key={v.t} className="bg-card border border-border rounded-2xl p-7">
                <h3 className="font-serif text-2xl text-primary">{v.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            People from the community, supported by experts who back them.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Our core team includes program managers, trainers, community mobilizers, and monitoring specialists drawn from the communities we serve. An advisory board of development, finance, and technology experts provides strategic guidance.
          </p>
          <p>
            Strong financial controls, transparent procurement, and regular public reporting make sure resources are used efficiently and for the outcomes they were intended for.
          </p>
        </div>
      </section>

      <section className="container-x pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <figure className="aspect-[4/5] rounded-2xl overflow-hidden md:row-span-2 md:aspect-[4/5.2]">
            <img src={team6} alt="Women leaders together at the resource centre" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-square rounded-2xl overflow-hidden">
            <img src={counselling} alt="Team outside the counselling room" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-square rounded-2xl overflow-hidden">
            <img src={community} alt="Members in the community" loading="lazy" className="w-full h-full object-cover object-[center_25%]" />
          </figure>
          <figure className="aspect-square rounded-2xl overflow-hidden col-span-2 md:col-span-2">
            <img src={team8} alt="Members smiling outside the centre" loading="lazy" className="w-full h-full object-cover object-[center_30%]" />
          </figure>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="How we started" body="WMAGE grew out of community conversations and lived experience. Founders created locally led pilots that proved people learn fastest when they are doing the work and depending on it. Those pilots became today's programs, refined through monitoring data and community feedback." />
          <Card title="How we stay accountable" body="We partner with local government, civil society, private sector buyers, and technology providers to expand market access and technical capacity. Partners receive quarterly progress reports, financial statements, and an annual impact summary." />
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
            Come and see the work →
          </Link>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-3xl md:text-4xl leading-tight">{title}</h2>
      <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{children}</p>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
      <h3 className="font-serif text-2xl md:text-3xl">{title}</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
