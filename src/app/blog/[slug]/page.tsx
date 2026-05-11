import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return { title: post?.title ?? "Insight", description: post?.excerpt };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{post.category} · {post.readTime}</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">{post.title}</h1>
      <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
      <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
        <p>At TechWave-X, practical growth means building systems that can be repeated, measured, and improved. This topic matters because technology work should connect to a clear business or career outcome.</p>
        <p>Strong execution usually starts with a focused audit, a realistic roadmap, and the discipline to improve one workflow at a time. That is how ecommerce operations, software platforms, AI automation, and training programs become useful instead of decorative.</p>
        <p>For teams and learners, the next step is simple: choose a priority, define the measurable result, and build the support system around it.</p>
      </div>
      <ButtonLink href="/apply" className="mt-8">Discuss this with TechWave-X</ButtonLink>
    </article>
  );
}
