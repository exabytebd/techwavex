import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CircuitBoard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/site/login-form";
import { auth } from "@/auth";

export const metadata: Metadata = { title: "Admin Login" };

export default async function AdminPage() {
  const session = await auth();
  if (session?.user) redirect("/admin/dashboard");

  return (
    <section className="relative grid min-h-screen overflow-hidden bg-slate-50 px-4 py-10 text-slate-950 dark:bg-slate-950 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div className="aurora absolute inset-x-0 top-[-18rem] h-[42rem] opacity-45 dark:opacity-70" />
      <div className="noise absolute inset-0 opacity-70" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center gap-10 lg:contents">
        <div className="flex flex-col justify-center lg:px-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-[8px] bg-white text-lg font-black text-slate-950 shadow-xl ring-1 ring-slate-200 dark:ring-white/10">TX</span>
            <span className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">TechWave-X</span>
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-200">Admin command center</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-6xl">Manage growth operations with clarity.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">Leads, services, training programs, publishing, testimonials, and site settings live in one dedicated back-office workspace.</p>
        </div>
        <div className="flex items-center justify-center lg:px-10">
          <Card className="glass-panel w-full max-w-md border-slate-200 bg-white/90 p-7 dark:border-white/10 dark:bg-white/[0.08]">
            <CircuitBoard className="mb-5 size-10 text-cyan-600 dark:text-cyan-300" />
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">Admin login</h2>
            <p className="mt-2 mb-6 text-sm text-slate-700 dark:text-slate-300">Secure dashboard access for TechWave-X team members.</p>
            <LoginForm />
          </Card>
        </div>
      </div>
    </section>
  );
}
