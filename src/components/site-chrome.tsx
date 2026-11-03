import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/money-tree-logo.png.asset.json";
import { supportEmail } from "@/lib/content";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Books & Bible Studies" },
  { to: "/engineering", label: "Engineering Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo.url} alt="Doyle Money Tree logo" width={48} height={64} className="h-16 w-12 shrink-0 object-contain" />
      <span className="leading-tight">
        <span className="block font-display text-lg font-semibold">Doyle Money Tree</span>
        <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Enterprises, LLC
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden gap-7 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden shrink-0" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t px-6 py-3 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl">Doyle Money Tree Enterprises, LLC</p>
          <p className="mt-2 text-sm opacity-80">Tampa, Florida</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">Explore</p>
          <ul className="space-y-2 opacity-80">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
            <li>
              <a href="https://tmt-tc.com" target="_blank" rel="noreferrer">
                Trading Strategy Consulting ↗
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">Get in touch</p>
          <a href={`mailto:${supportEmail}`} className="mb-3 block break-all underline underline-offset-4 opacity-90">{supportEmail}</a>
          <Link to="/contact" className="underline underline-offset-4 opacity-90">
            Send us a message
          </Link>
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Doyle Money Tree Enterprises, LLC. All rights reserved.
      </p>
    </footer>
  );
}
