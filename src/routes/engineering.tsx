import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import engImg from "@/assets/engineering.jpg";
import { team } from "@/lib/content";
import { submitInquiry } from "@/lib/inquiry.functions";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering Services — Architectural Design & Engineering | Tampa, FL" },
      { name: "description", content: "Coordinated architectural design and civil, structural and MEP engineering services in Tampa, Florida. Tell us about your project." },
      { property: "og:title", content: "Architectural Design & Engineering Solutions" },
      { property: "og:description", content: "Architecture, civil, structural and MEP engineering — from concept to permit documentation." },
    ],
  }),
  component: Engineering,
});

const services = [
  { key: "Architectural", title: "Architectural Design", items: ["Residential and commercial design", "New construction", "Home additions and renovations", "Floor plans, elevations and design development", "3D visualization and conceptual design"] },
  { key: "Structural", title: "Structural Engineering", items: ["Structural design and calculations", "Framing and structural plans", "Decks, additions, garages and other structures", "Structural assessments and design coordination"] },
  { key: "Civil", title: "Civil Engineering", items: ["Site development coordination", "Grading and drainage design", "Site plans and related documentation", "Coordination with other project professionals"] },
  { key: "MEP", title: "MEP Engineering", items: ["Mechanical system design", "Electrical plans", "Plumbing design", "Coordinating building systems with architectural and structural plans"] },
];

const steps = [
  ["Tell us about your project", "Describe your project, goals, location and current stage of development."],
  ["Review and define the scope", "We discuss requirements, identify the services needed and which professionals should be involved."],
  ["Receive a project proposal", "You receive a proposed scope of work, deliverables, timeline and pricing for review and approval."],
  ["Move forward with support", "Once terms are agreed, the assigned team begins and coordinates the agreed deliverables with you."],
];

function Engineering() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Professional Services · A division of Doyle Money Tree Enterprises, LLC</p>
          <h1 className="mt-4 text-4xl leading-tight md:text-5xl">Architectural Design & Engineering Solutions for Your Next Project</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            From new construction to renovations, additions and commercial projects, our team provides coordinated architectural design and civil, structural and MEP engineering services tailored to each project's needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#inquiry">Discuss Your Project</a></Button>
            <Button asChild size="lg" variant="outline"><a href="#inquiry">Request a Quote</a></Button>
            <Button asChild size="lg" variant="ghost"><a href="#services">Explore Our Services</a></Button>
          </div>
        </div>
        <img src={engImg} alt="Architectural plans and a model home" width={1600} height={1008} className="rounded-xl object-cover shadow-lg" />
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-6 text-center text-lg">
          <p>Based in Tampa, Florida, we connect clients with professional knowledge and technical support to help move their projects forward.</p>
          <p className="mt-4 text-muted-foreground">We begin by listening — understanding what you want to accomplish, the challenges involved and the assistance you need. The scope and terms are agreed before work begins. Whether you have a developed project or an idea that needs direction, we welcome the conversation.</p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <h2 className="text-3xl md:text-4xl">Our services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.key} className="rounded-xl border bg-card p-7">
              <h3 className="text-2xl">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {s.items.map((i) => <li key={i} className="flex gap-2"><span className="text-gold">—</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">The exact scope of each service depends on the project, location, applicable requirements and the qualifications of the professionals involved.</p>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl">Our project process</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="border-t-2 border-primary pt-5">
              <span className="font-display text-3xl text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl">Meet the Professional Services team</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {team.map((p) => (
            <div key={p.title} className="rounded-xl border bg-card p-7">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground">{p.name[0]}</div>
                <h3 className="text-xl">{p.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground">{p.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.expertise.map((e) => <span key={e} className="rounded-full bg-secondary px-3 py-1 text-xs">{e}</span>)}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Portfolio and project examples will be added as they become available.</p>
      </section>

      <InquiryForm />
    </>
  );
}

function InquiryForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setBusy(true);
    try {
      const files = (fd.getAll("files") as File[]).filter((f) => f.size > 0).slice(0, 10);
      const paths: string[] = [];
      for (const f of files) {
        const path = `${crypto.randomUUID()}/${f.name.replace(/[^\w.\-]/g, "_")}`;
        const { error } = await supabase.storage.from("inquiry-files").upload(path, f);
        if (error) throw new Error(`Upload failed for ${f.name}`);
        paths.push(path);
      }
      await submitInquiry({
        data: {
          inquiry_type: fd.get("inquiry_type") as "project",
          name: String(fd.get("name")),
          email: String(fd.get("email")),
          phone: String(fd.get("phone") ?? ""),
          project_location: String(fd.get("project_location") ?? ""),
          project_type: String(fd.get("project_type") ?? ""),
          services: selected,
          timing: String(fd.get("timing") ?? ""),
          description: String(fd.get("description")),
          file_paths: paths,
        },
      });
      setDone(true);
      form.reset();
      setSelected([]);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please check the form and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="inquiry" className="scroll-mt-24 bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl">Tell us about your project</h2>
        <p className="mt-3 text-muted-foreground">Share the basics and we'll review your project and follow up to discuss next steps and a tailored proposal.</p>
        {done ? (
          <div className="mt-8 rounded-xl bg-card p-8">
            <h3 className="text-2xl">Thank you — we've received your inquiry.</h3>
            <p className="mt-2 text-muted-foreground">We'll review the details and be in touch.</p>
            <Button className="mt-6" variant="outline" onClick={() => setDone(false)}>Send another</Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 grid gap-5 rounded-xl bg-card p-8 sm:grid-cols-2">
            <Field label="I'd like to" className="sm:col-span-2">
              <select name="inquiry_type" className="h-10 w-full rounded-md border bg-background px-3">
                <option value="project">Discuss my project</option>
                <option value="consultation">Request an initial consultation</option>
                <option value="quote">Request a quote</option>
              </select>
            </Field>
            <Field label="Full name *"><Input name="name" required maxLength={120} /></Field>
            <Field label="Email *"><Input name="email" type="email" required maxLength={255} /></Field>
            <Field label="Phone"><Input name="phone" maxLength={40} /></Field>
            <Field label="Project location"><Input name="project_location" placeholder="City, state" maxLength={200} /></Field>
            <Field label="Project type">
              <select name="project_type" className="h-10 w-full rounded-md border bg-background px-3">
                <option>New construction</option><option>Addition</option><option>Renovation</option><option>Commercial</option><option>Other</option>
              </select>
            </Field>
            <Field label="Desired timing"><Input name="timing" placeholder="e.g. within 3 months" maxLength={100} /></Field>
            <div className="sm:col-span-2">
              <Label>Services needed</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Architectural", "Civil", "Structural", "MEP", "Not sure yet"].map((s) => {
                  const on = selected.includes(s);
                  return (
                    <button type="button" key={s} onClick={() => setSelected(on ? selected.filter((x) => x !== s) : [...selected, s])}
                      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${on ? "border-primary bg-primary text-primary-foreground" : "bg-background"}`}>
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
            <Field label="Describe the work needed *" className="sm:col-span-2"><Textarea name="description" required minLength={10} maxLength={5000} rows={5} /></Field>
            <Field label="Plans, sketches, PDFs or photos (optional, up to 10 files, 25 MB each)" className="sm:col-span-2">
              <Input name="files" type="file" multiple accept=".pdf,.png,.jpg,.jpeg,.dwg,.doc,.docx,.heic" />
            </Field>
            <Button type="submit" size="lg" disabled={busy} className="sm:col-span-2">{busy ? "Sending…" : "Submit inquiry"}</Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return <div className={className}><Label className="mb-2 block">{label}</Label>{children}</div>;
}
