import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "../assets/photo-rally.jpg";
import economic from "../assets/photo-team-indoor.jpg";
import capacity from "../assets/photo-library.jpg";
import circular from "../assets/program-circular.jpg";
import leadership from "../assets/photo-advocacy-signs.jpg";
import community from "../assets/photo-community-3.jpg";
import team6 from "../assets/photo-team-6.jpg";
import team8 from "../assets/photo-team-8.jpg";
import counselling from "../assets/photo-counselling-2.jpg";
import maktaba from "../assets/photo-maktaba.jpg";
import { ConversationModal } from "../components/ConversationModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WIMAGE Kenya, Voice, Livelihoods and Green Communities" },
      { name: "description", content: "WIMAGE works with young women in informal settlements to strengthen their voices, build livelihoods, and create environment-conscious communities." },
    ],
  }),
  component: Home,
});

const programs = [
  { title: "Capacity Strengthening", image: capacity, body: "Practical skills and systems embedded directly into ongoing initiatives." },
  { title: "Community Leadership & Civic Engagement", image: leadership, body: "Forums and participation spaces where young leaders shape decisions." },
  { title: "Economic Empowerment", image: economic, body: "Enterprises co-designed with youth, creating jobs and steady income." },
  { title: "Circular Economy", image: circular, body: "Recycling and resource recovery that link environmental action to livelihoods." },
];

const approach = [
  { n: "01", t: "Listen", b: "Every initiative starts with the people living the issue, not with our assumptions about it." },
  { n: "02", t: "Co-create", b: "We design solutions with the people who will lead and own them." },
  { n: "03", t: "Act", b: "Solutions move into practice through initiatives with clearly assigned responsibilities." },
  { n: "04", t: "Grow", b: "We strengthen what works and help communities sustain and expand it themselves." },
];

const successes = [
  "Young women and youth with a stronger voice in decisions that shape their community.",
  "Community groups with the skills and systems to run their own initiatives.",
  "Cleaner, healthier neighbourhoods, as waste becomes a resource instead of a hazard.",
  "Community-owned businesses creating local jobs.",
  "Households with greater stability, as young people earn steady income through enterprises they manage themselves.",
];

function Home() {
  return (
    <>
      <section className="relative">
        <div className="relative min-h-[620px] h-[calc(100vh-80px)] max-h-[820px] w-full overflow-hidden">
          <img
            src={hero}
            alt="Young women and youth rallying together"
            className="absolute inset-0 w-full h-full object-cover object-[65%_center]"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="relative h-full w-full px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center">
            <div className="text-white fade-up max-w-[640px] xl:max-w-[720px]">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/85 mb-6">
                Voice · Livelihoods · Green Communities
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] tracking-tight text-white">
                WIMAGE <span className="italic text-primary">Kenya.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base md:text-lg text-white/90 leading-relaxed">
                We work with young women in informal settlements to strengthen their voices, build livelihoods, and create environment-conscious communities.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/30"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/60 text-white hover:bg-white hover:text-primary transition-colors font-medium"
                >
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-secondary/40">
        <div className="container-x py-4 flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap overflow-x-auto">
          <span>Capacity Strengthening</span><span>·</span>
          <span>Leadership & Civic Engagement</span><span>·</span>
          <span>Economic Empowerment</span><span>·</span>
          <span>Circular Economy</span><span>·</span>
          <span className="text-primary">Listen. Co-create. Act. Grow.</span>
        </div>
      </div>

      {/* A Community Organisation Built for the Long Haul */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={maktaba} alt="WIMAGE team at the resource centre" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            A community organisation built for <em className="text-primary">the long haul.</em>
          </h2>
          <p className="mt-6 text-lg text-foreground leading-relaxed">
            At WIMAGE, we listen, we empower, we let women take the lead, and we stay to support. Our model is practical: leadership pathways that build real skills, enterprises that put food on the table, and blue economy initiatives that turn waste into opportunity.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Young women in informal settlements carry ambition, are inspired, and hold deep local knowledge. What they often lack is a clear pathway to turn what they have into a livelihood and influence. We co-create those pathways with them, building solutions that communities own, sustain, and grow.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Learn more about us →
          </Link>
        </div>
      </section>

      {/* Four Areas of Impact */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
              Our four areas of impact.
            </h2>
            <Link to="/programs" className="text-sm underline underline-offset-4 hover:text-primary">
              See all programmes →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {programs.map((p) => (
              <article
                key={p.title}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Our approach.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approach.map((a) => (
            <div key={a.n} className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-colors">
              <div className="font-serif text-3xl text-primary">{a.n}</div>
              <h3 className="font-serif text-2xl mt-2">{a.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{a.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Impact Looks Like */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white">
              What impact looks like.
            </h2>
            <p className="mt-5 text-cream/80 leading-relaxed">
              We measure our work against outcomes communities themselves define as meaningful and impactful, across every area we work in, not one.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {successes.map((s) => (
                <li key={s} className="flex gap-4 border-t border-cream/15 pt-5">
                  <span className="mt-2.5 inline-block w-5 h-px bg-[var(--ochre)] flex-shrink-0" />
                  <span className="text-lg text-white/90 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partners, not beneficiaries */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-6">
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
            Our partners, not beneficiaries.
          </h2>
          <Link to="/about" className="text-sm underline underline-offset-4 hover:text-primary">
            Meet the team →
          </Link>
        </div>
        <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-10">
          We don't see the people we work with as beneficiaries. They are partners who bring knowledge, leadership, and effort to every initiative we run together.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={team6} alt="Young women leaders together" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={counselling} alt="Community engagement" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={community} alt="Community members" loading="lazy" className="w-full h-full object-cover object-[center_25%]" />
          </figure>
          <figure className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={team8} alt="Team smiling outside the centre" loading="lazy" className="w-full h-full object-cover object-[center_30%]" />
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24 md:pb-32">
        <div className="rounded-[2rem] border border-border bg-card p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Let's build something lasting, <span className="text-primary italic">together.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed">
              We welcome partners who believe in community-first development, locally led solutions, and practical, accountable action.
            </p>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed">
              Whether you bring funding, technical expertise, networks, or ideas, we would value the chance to explore how we can work together to create opportunity for young people and strengthen their communities.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-between gap-3 px-6 py-5 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              <span className="font-medium">Start a conversation</span>
              <span>→</span>
            </Link>
            <a
              href="mailto:info@wimage.org.ke"
              className="inline-flex items-center justify-between gap-3 px-6 py-5 rounded-2xl border border-border hover:border-foreground/50 transition-colors"
            >
              <span>info@wimage.org.ke</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
