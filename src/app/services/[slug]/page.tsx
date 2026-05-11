import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { serviceCategories } from "@/lib/data";

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);
  return { title: service?.title ?? "Service", description: service?.summary };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_.55fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{service.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">{service.title}</h1>
          <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">{service.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/apply?category=Service&interestedIn=${encodeURIComponent(service.title)}`}>Book Free Consultation</ButtonLink>
            <ButtonLink href="/services" variant="outline">All Services</ButtonLink>
          </div>
        </div>
        <Card>
          <Icon className="mb-5 size-12 text-cyan-500" />
          <h2 className="text-xl font-black text-slate-950 dark:text-white">What we can support</h2>
          <div className="mt-5 grid gap-3">
            {service.features.map((feature) => <span key={feature} className="flex gap-2 text-sm text-slate-700 dark:text-slate-200"><CheckCircle2 className="size-4 shrink-0 text-cyan-500" />{feature}</span>)}
          </div>
        </Card>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {service.outcomes.map((outcome) => <Card key={outcome} className="p-5"><h3 className="font-black text-slate-950 dark:text-white">{outcome}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">A focused outcome backed by clear scope, communication, and implementation discipline.</p></Card>)}
      </div>
    </section>
  );
}
