"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Training", "/training"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-black text-slate-950 dark:text-white">
          <span className="grid size-10 place-items-center rounded-[8px] bg-slate-950 text-cyan-300 shadow-lg shadow-cyan-500/20 dark:bg-white dark:text-slate-950">TX</span>
          <span className="text-lg tracking-tight">TechWave-X</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-200">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ButtonLink href="/apply" size="sm">Apply now</ButtonLink>
        </div>
        <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950 md:hidden">
          <div className="grid gap-3">
            {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-[8px] px-3 py-2 font-medium text-slate-700 dark:text-slate-200">{label}</Link>)}
            <div className="flex items-center gap-3 px-3 pt-2"><ThemeToggle /><ButtonLink href="/apply" className="flex-1">Apply now</ButtonLink></div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
