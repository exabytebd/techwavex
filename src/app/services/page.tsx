import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section";
import { serviceCategories } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: "Professional ecommerce, software, digital marketing, and affiliate business services from TechWave-X." };

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Services" title="Professional services for modern digital businesses" text="From marketplace operations to software and growth systems, TechWave-X helps teams execute with polish and accountability." />
      <div className="grid gap-6 md:grid-cols-2">
        {serviceCategories.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.slug}>
              <div className="flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-[8px] bg-cyan-400/15"><Icon className="size-6 text-cyan-500" /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{service.eyebrow}</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{service.title}</h2>
                </div>
              </div>
              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{service.summary}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {service.features.map((feature) => <span key={feature} className="flex gap-2 text-sm text-slate-700 dark:text-slate-200"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-500" />{feature}</span>)}
              </div>
              <ButtonLink href={`/services/${service.slug}`} className="mt-7">Explore service <ArrowRight className="size-4" /></ButtonLink>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
