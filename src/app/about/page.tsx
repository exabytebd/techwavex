import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section";

export const metadata: Metadata = { title: "About", description: "About TechWave-X, a premium technology service and training company." };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="About TechWave-X" title="A modern technology company built around practical growth" text="TechWave-X combines professional services and training so businesses and learners can move from ambition to execution with a clear path." />
      <div className="grid gap-6 md:grid-cols-3">
        <Card><h2 className="text-xl font-black text-slate-950 dark:text-white">Mission</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">To help people and businesses build durable digital capability through software, ecommerce systems, marketing, automation, and practical education.</p></Card>
        <Card><h2 className="text-xl font-black text-slate-950 dark:text-white">Approach</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">We keep journeys simple: understand the goal, design the plan, execute the work, measure the result, and improve the system.</p></Card>
        <Card><h2 className="text-xl font-black text-slate-950 dark:text-white">Standard</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">Every touchpoint should feel premium, readable, transparent, and business-focused, from a course module to a software dashboard.</p></Card>
      </div>
    </section>
  );
}
