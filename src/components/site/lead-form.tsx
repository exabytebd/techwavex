"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { leadSchema, type LeadInput } from "@/lib/validations";

export function LeadForm() {
  const params = useSearchParams();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      category: (params.get("category") as LeadInput["category"]) ?? "Training",
      interestedIn: params.get("interestedIn") ?? "",
      preferredFormat: "Hybrid",
    },
  });

  async function onSubmit(values: LeadInput) {
    setError("");
    setSuccess("");
    const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    if (!res.ok) {
      setError("Something went wrong. Please try again or contact us directly.");
      return;
    }
    setSuccess("Thanks. Your request has been received and the TechWave-X team will contact you shortly.");
    reset({ category: values.category, preferredFormat: values.preferredFormat, interestedIn: values.interestedIn, fullName: "", email: "", phone: "", address: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <Field label="Full Name" error={errors.fullName?.message}><input {...register("fullName")} className={inputClass} /></Field>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Email" error={errors.email?.message}><input type="email" {...register("email")} className={inputClass} /></Field>
        <Field label="Phone" error={errors.phone?.message}><input {...register("phone")} className={inputClass} /></Field>
      </div>
      <Field label="Address" error={errors.address?.message}><input {...register("address")} className={inputClass} /></Field>
      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Category" error={errors.category?.message}><select {...register("category")} className={inputClass}><option>Service</option><option>Training</option></select></Field>
        <Field label="Preferred Format" error={errors.preferredFormat?.message}><select {...register("preferredFormat")} className={inputClass}><option>Online</option><option>Offline</option><option>Hybrid</option></select></Field>
        <Field label="Interested In" error={errors.interestedIn?.message}><input {...register("interestedIn")} placeholder="Amazon FBA, SaaS..." className={inputClass} /></Field>
      </div>
      <Field label="Message" error={errors.message?.message}><textarea {...register("message")} rows={5} className={inputClass} /></Field>
      {success ? <p className="rounded-[8px] border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-700 dark:text-emerald-200">{success}</p> : null}
      {error ? <p className="rounded-[8px] border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-700 dark:text-rose-200">{error}</p> : null}
      <Button disabled={isSubmitting} type="submit" size="lg">{isSubmitting ? "Submitting..." : "Submit Request"}</Button>
    </form>
  );
}

const inputClass = "h-12 w-full rounded-[8px] border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-white/[0.06] dark:text-white";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100"><span>{label}</span>{children}{error ? <span className="text-xs text-rose-500">{error}</span> : null}</label>;
}
