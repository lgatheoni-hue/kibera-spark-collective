import { createFileRoute, Link } from "@tanstack/react-router";
import kibera from "../assets/photo-maktaba.jpg";
import team6 from "../assets/photo-team-6.jpg";
import team8 from "../assets/photo-team-8.jpg";
import counselling from "../assets/photo-counselling-2.jpg";
import community from "../assets/photo-community-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WMAGE — Locally led empowerment in Kibera" },
      { name: "description", content: "Founded in 2024 by Kibera youth leaders, WMAGE works with the community as co-designers, trainers, and leaders." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <p className="eyebrow mb-6">About WMAGE</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          Rooted in Kibera. <span className="italic text-primary">Built by the community it serves.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          WMAGE was founded in 2024 by Kibera youth leaders who wanted practical, locally rooted solutions for women and young people facing unemployment, gender inequality, and environmental hazards.
        </p>
          <img src={kibera} alt="WMAGE team gathered outside the Maktaba Resource Centre in Kibera" width={1600} height={900} loading="lazy" className="w-full h-[420px] md:h-[560px] object-cover object-[center_30%]" />
          <p className="mt-3 text-xs text-muted-foreground uppercase tracking-[0.18em]">Maktaba Resource Centre · Kibera</p>

      <section className="container-x">
        <div className="rounded-3xl overflow-hidden">
          <img src={kibera} alt="Kibera at golden hour" width={1600} height={900} loading="lazy" className="w-full h-[420px] md:h-[560px] object-cover" />
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-10 md:gap-16">
        <Block eyebrow="Vision" title="A Kibera where every woman and young person shapes their future.">
          Skills, income, and voice combine into communities led by the people who live in them. We see a Kibera where opportunity is locally generated and locally held.
        </Block>
        <Block eyebrow="Mission" title="Equip women and youth to earn, lead, and transform.">
          Practical skills, income opportunities, and leadership pathways — designed with the community, delivered close to home, measured against real outcomes.
        </Block>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <p className="eyebrow mb-4">Our values</p>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mb-14">
            Inclusivity, accountability, local ownership, evidence.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Inclusivity", b: "We design for the women and youth most often left out of programs and decisions." },
              { t: "Accountability", b: "Transparent finances, transparent decisions. Donors and beneficiaries see the same numbers." },
              { t: "Local ownership", b: "Communities are co-designers — not recipients. Programs survive when they're already theirs." },
              { t: "Evidence", b: "Baseline and endline data, monthly tracking, beneficiary feedback. Programs adapt to what works." },
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
          <p className="eyebrow mb-4">Team and governance</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            People from Kibera, supported by experts who back them.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Our core team is drawn from Kibera and includes program managers, trainers, community mobilizers, and monitoring specialists. An advisory board of development, finance, and technology experts provides strategic guidance.
          </p>
          <p>
            Financial controls, transparent procurement, and regular public reporting ensure donor funds are used efficiently and for the intended outcomes.
          </p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="History and roots" body="WMAGE grew from community conversations and lived experience. Founders who grew up in Kibera created locally led pilots that proved training plus market linkages works. Those pilots became today's programs — refined by monitoring data and community feedback." />
          <Card title="Partnerships and accountability" body="We partner with local government, civil society, private sector buyers, and technology providers to expand market access and technical capacity. Donors receive quarterly progress reports, financial statements, and impact dashboards." />
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
            Visit us in Kibera →
          </Link>
        </div>
      </section>
    </>
  );
}

function Block({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-4">{eyebrow}</p>
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
