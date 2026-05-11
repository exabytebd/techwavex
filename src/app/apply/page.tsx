import type { Metadata } from "next";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/site/lead-form";

export const metadata: Metadata = { title: "Admission / Consultation", description: "Apply for TechWave-X training or request a professional service consultation." };

export default function ApplyPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Start here</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">Admission and consultation form</h1>
        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">Tell us what you want to build or learn. The form is simple, and your response is stored as a new lead for the TechWave-X team to follow up.</p>
      </div>
      <Card>
        <Suspense fallback={<p className="text-slate-600 dark:text-slate-300">Loading form...</p>}><LeadForm /></Suspense>
      </Card>
    </section>
  );
}
