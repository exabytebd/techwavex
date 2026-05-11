import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section";
import { trainingPrograms } from "@/lib/data";

export const metadata: Metadata = { title: "Training Programs", description: "Industry-focused TechWave-X training programs in Amazon FBA, eBay, supply chain, CCNA, and AI automation." };

export default function TrainingPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Training Programs" title="Learn practical skills for digital careers and business execution" text="Choose a program with clear modules, formats, instructors, and outcomes." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainingPrograms.map((program) => {
          const Icon = program.icon;
          return <Card key={program.slug}><Icon className="mb-5 size-10 text-cyan-500" /><h2 className="text-2xl font-black text-slate-950 dark:text-white">{program.title}</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{program.overview}</p><p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200">{program.duration} · {program.format}</p><ButtonLink href={`/training/${program.slug}`} className="mt-6">View curriculum <ArrowRight className="size-4" /></ButtonLink></Card>;
        })}
      </div>
    </section>
  );
}
