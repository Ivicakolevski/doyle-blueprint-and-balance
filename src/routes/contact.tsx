import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { submitContact } from "@/lib/inquiry.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supportEmail } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Contact — Doyle Money Tree Enterprises, LLC" },
      { name: "description", content: "Get in touch with Doyle Money Tree Enterprises in Tampa, Florida." },
      { property: "og:title", content: "Contact Doyle Money Tree Enterprises" },
      { property: "og:description", content: "Send us a message about books, Bible studies or engineering services." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setBusy(true);
    try {
      await submitContact({ data: { name: String(fd.get("name")), email: String(fd.get("email")), topic: String(fd.get("topic")), message: String(fd.get("message")) } });
      setDone(true);
      form.reset();
    } catch {
      toast.error("Something went wrong. Please check the form and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl">Contact us</h1>
      <a href={`mailto:${supportEmail}`} className="mt-4 inline-block break-all text-lg text-primary underline underline-offset-4">{supportEmail}</a>
      <p className="mt-4 text-lg text-muted-foreground">
        Questions about a book or Bible study, or anything else? Send a message. For a building project, use the{" "}
        <Link to="/engineering" hash="inquiry" className="text-primary underline underline-offset-4">project inquiry form</Link>.
      </p>
      {done ? (
        <div className="mt-8 rounded-xl bg-secondary p-8"><h2 className="text-2xl">Thank you — your message has been received.</h2></div>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 grid gap-5 rounded-xl border bg-card p-8">
          <div><Label className="mb-2 block">Name *</Label><Input name="name" required maxLength={120} /></div>
          <div><Label className="mb-2 block">Email *</Label><Input name="email" type="email" required maxLength={255} /></div>
          <div>
            <Label className="mb-2 block">Topic</Label>
            <select name="topic" className="h-10 w-full rounded-md border bg-background px-3">
              <option>Books & Bible Studies</option><option>Engineering Services</option><option>General</option>
            </select>
          </div>
          <div><Label className="mb-2 block">Message *</Label><Textarea name="message" required minLength={5} maxLength={5000} rows={5} /></div>
          <Button type="submit" size="lg" disabled={busy}>{busy ? "Sending…" : "Send message"}</Button>
        </form>
      )}
    </div>
  );
}
