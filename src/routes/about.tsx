import { createFileRoute, Link } from "@tanstack/react-router";
import { team } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Doyle Money Tree Enterprises, LLC" },
      { name: "description", content: "Meet the leadership of Doyle Money Tree Enterprises, a Tampa, Florida company bringing together books, Bible studies and professional services." },
      { property: "og:title", content: "About Doyle Money Tree Enterprises" },
      { property: "og:description", content: "Our company, our divisions and the people behind them." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl">About us</h1>
      <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
        Doyle Money Tree Enterprises, LLC is a Tampa, Florida company that serves as the home for several
        focused activities, each with its own character and purpose.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Link to="/books" className="rounded-xl border bg-card p-6"><h2 className="text-xl">Books & Bible Studies</h2><p className="mt-2 text-sm text-muted-foreground">Books and teaching resources for groups and leaders.</p></Link>
        <Link to="/engineering" className="rounded-xl border bg-card p-6"><h2 className="text-xl">Professional Services</h2><p className="mt-2 text-sm text-muted-foreground">Architectural design and engineering coordination.</p></Link>
        <a href="https://tmt-tc.com" target="_blank" rel="noreferrer" className="rounded-xl border bg-card p-6"><h2 className="text-xl">Trading Strategy Consulting ↗</h2><p className="mt-2 text-sm text-muted-foreground">Stock trading strategy consulting at tmt-tc.com.</p></a>
      </div>
      <h2 className="mt-16 text-3xl">Leadership</h2>
      <div className="mt-8 space-y-6">
        {team.map((p) => (
          <article key={p.title} className="grid gap-6 rounded-xl bg-secondary p-8 md:grid-cols-[120px_1fr]">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-primary font-display text-3xl text-primary-foreground">{p.name[0]}</div>
            <div>
              <h3 className="text-2xl">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.bio}</p>
              <p className="mt-4 text-sm"><span className="font-medium">Areas of expertise:</span> {p.expertise.join(" · ")}</p>
              <p className="mt-1 text-sm"><span className="font-medium">Qualifications:</span> {p.qualifications.join(" · ")}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
