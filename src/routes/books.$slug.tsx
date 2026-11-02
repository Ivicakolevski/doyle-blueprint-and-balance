import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import { studies } from "@/lib/content";

export const Route = createFileRoute("/books/$slug")({
  loader: ({ params }) => {
    const study = studies.find((s) => s.slug === params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Bible Study` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — Bible Study` },
          { property: "og:description", content: loaderData.summary },
        ]
      : [{ title: "Study not found" }, { name: "robots", content: "noindex" }],
  }),
  component: StudyPage,
});

function StudyPage() {
  const s = Route.useLoaderData();
  const downloads = ["Leader preparation guide (PDF)", "Leader preparation guide (Word)", "Follow Me participant handouts (PDF)"];
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link to="/books" className="text-sm text-muted-foreground">← Books & Bible Studies</Link>
      <h1 className="mt-4 text-4xl md:text-5xl">{s.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{s.summary}</p>
      <dl className="mt-8 grid gap-4 rounded-xl bg-secondary p-6 sm:grid-cols-3">
        <div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Subject</dt><dd className="mt-1">{s.subject}</dd></div>
        <div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Intended audience</dt><dd className="mt-1">{s.audience}</dd></div>
        <div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Sessions</dt><dd className="mt-1">{s.sessions}</dd></div>
      </dl>
      <h2 className="mt-12 text-2xl">Session outline</h2>
      <ol className="mt-4 space-y-2">
        {s.outline.map((o, i) => (
          <li key={o} className="flex gap-4 border-b py-3"><span className="font-display text-gold">{i + 1}</span>{o}</li>
        ))}
      </ol>
      <h2 className="mt-12 text-2xl">Downloads for leaders</h2>
      <div className="mt-4 grid gap-3">
        {downloads.map((d) => (
          <div key={d} className="flex items-center justify-between rounded-lg border bg-card p-4">
            <span className="flex items-center gap-3"><FileText className="h-5 w-5 text-primary" />{d}</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground"><Download className="h-4 w-4" />Coming soon</span>
          </div>
        ))}
      </div>
    </div>
  );
}
