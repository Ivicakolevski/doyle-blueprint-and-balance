import { createFileRoute, Link } from "@tanstack/react-router";
import { books, studies } from "@/lib/content";

export const Route = createFileRoute("/books/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Books & Bible Studies — Doyle Money Tree Enterprises" },
      { name: "description", content: "Books and Bible studies with leader preparation guides and Follow Me participant handouts." },
      { property: "og:title", content: "Books & Bible Studies" },
      { property: "og:description", content: "Books, Bible studies, leader guides and participant handouts." },
    ],
  }),
  component: Books,
});

function Books() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">The library</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Books & Bible Studies</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Teaching resources for individuals, small groups and church leaders.
      </p>

      <h2 className="mt-16 text-2xl">Books</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {books.map((b) => (
          <article key={b.slug} className="flex gap-6 rounded-xl border bg-card p-6">
            <div className="flex h-44 w-32 shrink-0 flex-col justify-end rounded-md bg-primary p-3 text-primary-foreground shadow-md">
              <span className="font-display text-lg leading-tight">{b.title}</span>
            </div>
            <div>
              <h3 className="text-xl">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.subtitle}</p>
              <p className="mt-3 text-sm">{b.description}</p>
              <blockquote className="mt-3 border-l-2 border-gold pl-3 text-sm italic text-muted-foreground">{b.sample}</blockquote>
              <p className="mt-3 text-sm font-medium">{b.purchase ? <a href={b.purchase}>Buy now</a> : "Purchasing details coming soon"}</p>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-16 text-2xl">Bible Studies</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {studies.map((s) => (
          <Link key={s.slug} to="/books/$slug" params={{ slug: s.slug }} className="rounded-xl border bg-card p-6 transition-colors hover:border-primary">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.sessions} sessions</p>
            <h3 className="mt-2 text-xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
