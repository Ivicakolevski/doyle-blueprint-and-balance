import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Ruler } from "lucide-react";
import tree from "@/assets/tree.jpg";
import booksImg from "@/assets/books.jpg";
import engImg from "@/assets/engineering.jpg";
import { studies, team } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doyle Money Tree Enterprises, LLC — Tampa, Florida" },
      { name: "description", content: "One company, two entrances: Books & Bible Studies and Engineering Services, based in Tampa, Florida." },
      { property: "og:title", content: "Doyle Money Tree Enterprises, LLC" },
      { property: "og:description", content: "Books & Bible Studies and Engineering Services from Tampa, Florida." },
    ],
  }),
  component: Index,
});

function Index() {
  const study = studies[0];
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={tree} alt="" width={1808} height={1008} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">Tampa, Florida</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl">
            Knowledge that helps people grow — in faith and in their work.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Doyle Money Tree Enterprises brings together teaching resources for the church and
            coordinated professional services for builders, owners and families.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-16 grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        <Entrance to="/books" img={booksImg} icon={<BookOpen className="h-5 w-5" />} title="Books & Bible Studies" text="Explore our books and teaching resources." cta="Enter the library" />
        <Entrance to="/engineering" img={engImg} icon={<Ruler className="h-5 w-5" />} title="Engineering Services" text="Tell us about your project." cta="Start a project" />
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Featured Bible study</p>
          <h2 className="mt-3 text-3xl">{study.title}</h2>
          <p className="mt-3 text-muted-foreground">{study.summary}</p>
          <p className="mt-4 text-sm">{study.sessions} sessions · {study.audience}</p>
          <Link to="/books/$slug" params={{ slug: study.slug }} className="mt-6 inline-flex items-center gap-2 font-medium text-primary">
            View the study <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-xl border bg-card p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Professional Services</p>
          <h2 className="mt-3 text-3xl">Architectural design & engineering, coordinated.</h2>
          <p className="mt-3 text-muted-foreground">
            Architecture, civil, structural and MEP engineering — one point of contact from initial
            concept through permit documentation.
          </p>
          <Link to="/engineering" className="mt-6 inline-flex items-center gap-2 font-medium text-primary">
            Explore our services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6">
        <h2 className="text-3xl">The people behind the company</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {team.map((p) => (
            <div key={p.title} className="flex gap-5 rounded-xl bg-secondary p-6">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground">
                {p.name[0]}
              </div>
              <div>
                <p className="font-display text-lg">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-medium text-primary">
          Learn more about us <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}

function Entrance(props: { to: "/books" | "/engineering"; img: string; icon: React.ReactNode; title: string; text: string; cta: string }) {
  return (
    <Link to={props.to} className="group overflow-hidden rounded-xl border bg-card shadow-lg transition-transform hover:-translate-y-1">
      <img src={props.img} alt="" width={1600} height={1008} className="h-52 w-full object-cover" />
      <div className="p-7">
        <span className="inline-flex items-center gap-2 text-primary">{props.icon}<span className="text-xs uppercase tracking-[0.18em]">Enter</span></span>
        <h2 className="mt-2 text-2xl">{props.title}</h2>
        <p className="mt-1 text-muted-foreground">{props.text}</p>
        <span className="mt-4 inline-flex items-center gap-2 font-medium text-primary">
          {props.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
