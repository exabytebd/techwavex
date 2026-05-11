import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 text-2xl font-black tracking-tight text-slate-950 dark:text-white">TechWave-X</div>
          <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">Professional technology services, ecommerce growth support, software solutions, and practical training programs for modern digital careers and businesses.</p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-slate-950 dark:text-white">Explore</h3>
          <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/services">Services</Link><Link href="/training">Training Programs</Link><Link href="/apply">Admission / Consultation</Link><Link href="/admin">Admin Login</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-slate-950 dark:text-white">Contact</h3>
          <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="flex gap-2"><Mail className="size-4" /> support@techwavex.com</span>
            <span className="flex gap-2"><Phone className="size-4" /> +880 1700 000000</span>
            <span className="flex gap-2"><MapPin className="size-4 shrink-0" /> Level-6 Chattogram Software Technology Park, Agrabad, Chattogram</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">© 2026 TechWave-X. Built for digital growth.</div>
    </footer>
  );
}
