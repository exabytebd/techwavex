import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminWorkspace } from "@/components/site/admin-workspace";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin Dashboard" };

export default async function AdminDashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/admin");

  const [leads, services, trainingPrograms, blogPosts, testimonials, settings, total, training, service, fresh, converted] = await Promise.all([
    prisma.lead.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.service.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.trainingProgram.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.siteSetting.findMany({ orderBy: { key: "asc" } }),
    prisma.lead.count(),
    prisma.lead.count({ where: { category: "Training" } }),
    prisma.lead.count({ where: { category: "Service" } }),
    prisma.lead.count({ where: { status: "New" } }),
    prisma.lead.count({ where: { status: "Converted" } }),
  ]);

  const metrics = [
    { label: "Total leads", value: total, hint: "All submissions" },
    { label: "Training applications", value: training, hint: "Course pipeline" },
    { label: "Service inquiries", value: service, hint: "Business requests" },
    { label: "New leads", value: fresh, hint: "Need follow-up" },
    { label: "Converted leads", value: converted, hint: "Won opportunities" },
  ];

  return (
    <section className="mx-auto max-w-[1500px] overflow-x-hidden px-3 py-4 pb-24 sm:px-6 sm:py-8 lg:px-8 lg:pb-10">
      <div className="mb-5 rounded-[8px] border border-slate-200 bg-white/80 p-4 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.045] sm:mb-8 sm:bg-transparent sm:p-0 sm:shadow-none sm:dark:bg-transparent">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Admin</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">Operations Dashboard</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">Manage leads, services, courses, publishing, testimonials, and site settings from one focused workspace.</p>
      </div>
      <AdminWorkspace
        metrics={metrics}
        data={{
          leads: leads.map((lead) => ({ ...lead, createdAt: lead.createdAt.toISOString(), updatedAt: lead.updatedAt.toISOString() })),
          services: services.map(serializeItem),
          trainingPrograms: trainingPrograms.map(serializeItem),
          blogPosts: blogPosts.map(serializeItem),
          testimonials: testimonials.map(serializeItem),
          settings: settings.map(serializeItem),
        }}
      />
    </section>
  );
}

function serializeItem<T extends { createdAt: Date; updatedAt: Date }>(item: T) {
  return { ...item, createdAt: item.createdAt.toISOString(), updatedAt: item.updatedAt.toISOString() };
}
