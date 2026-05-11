import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = { title: "Blog / Insights", description: "TechWave-X insights on ecommerce, software, AI automation, marketing, and training." };

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Insights" title="Practical thinking for digital growth" text="Clear, business-focused articles for founders, operators, learners, and teams." />
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => <Card key={post.slug}><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{post.category}</p><h2 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">{post.title}</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{post.excerpt}</p><p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{post.readTime}</p><ButtonLink href={`/blog/${post.slug}`} variant="ghost" className="mt-5 justify-start px-0">Read insight <ArrowRight className="size-4" /></ButtonLink></Card>)}
      </div>
    </section>
  );
}
