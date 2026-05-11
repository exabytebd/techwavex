import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trainingPrograms } from "@/lib/data";

export function generateStaticParams() {
  return trainingPrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = trainingPrograms.find((item) => item.slug === slug);
  return { title: program?.title ?? "Training Program", description: program?.overview };
}

export default async function TrainingDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = trainingPrograms.find((item) => item.slug === slug);
  if (!program) notFound();
  const Icon = program.icon;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_.5fr]">
        <div>
          <Icon className="mb-5 size-12 text-cyan-500" />
          <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">{program.title}</h1>
          <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">{program.overview}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/apply?category=Training&interestedIn=${encodeURIComponent(program.title)}`}>Apply for Admission</ButtonLink>
            <ButtonLink href={`/apply?category=Training&interestedIn=${encodeURIComponent(program.title)}`} variant="outline">Book Free Consultation</ButtonLink>
          </div>
        </div>
        <Card>
          <h2 className="text-xl font-black text-slate-950 dark:text-white">Training format</h2>
          <dl className="mt-5 grid gap-4 text-sm">
            <div><dt className="font-bold text-slate-950 dark:text-white">Format</dt><dd className="text-slate-600 dark:text-slate-300">{program.format}</dd></div>
            <div><dt className="font-bold text-slate-950 dark:text-white">Duration</dt><dd className="text-slate-600 dark:text-slate-300">{program.duration}</dd></div>
            <div><dt className="font-bold text-slate-950 dark:text-white">Instructor</dt><dd className="text-slate-600 dark:text-slate-300">{program.instructor}</dd></div>
          </dl>
        </Card>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card><h2 className="text-2xl font-black text-slate-950 dark:text-white">Who this is for</h2><List items={program.audience} /></Card>
        <Card><h2 className="text-2xl font-black text-slate-950 dark:text-white">What students will learn</h2><List items={program.learn} /></Card>
        <Card><h2 className="text-2xl font-black text-slate-950 dark:text-white">Module breakdown</h2><List items={program.modules} /></Card>
        <Card><h2 className="text-2xl font-black text-slate-950 dark:text-white">Career / business outcome</h2><p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{program.outcome}</p></Card>
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return <div className="mt-5 grid gap-3">{items.map((item) => <span key={item} className="flex gap-2 text-slate-700 dark:text-slate-200"><CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan-500" />{item}</span>)}</div>;
}
