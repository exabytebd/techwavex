import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/site/lead-form";

export const metadata: Metadata = { title: "Contact", description: "Contact TechWave-X for services, training, partnerships, and consultations." };

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
      <div>
        <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">Talk to TechWave-X</h1>
        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">For business services, course admissions, partnerships, or software projects, send a message and we will route it to the right team.</p>
        <div className="mt-8 grid gap-4">
          <Card className="flex gap-3 p-5"><Mail className="size-5 text-cyan-500" /> support@techwavex.com</Card>
          <Card className="flex gap-3 p-5"><Phone className="size-5 text-cyan-500" /> +880 1700 000000</Card>
          <Card className="flex gap-3 p-5"><MapPin className="size-5 shrink-0 text-cyan-500" /> Level-6 Chattogram Software Technology Park, Agrabad, Chattogram</Card>
        </div>
      </div>
      <Card><Suspense fallback={<p className="text-slate-600 dark:text-slate-300">Loading form...</p>}><LeadForm /></Suspense></Card>
    </section>
  );
}
