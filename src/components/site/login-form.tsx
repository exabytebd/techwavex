"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(formData: FormData) {
    setLoading(true);
    setError("");
    const res = await signIn("credentials", { email: formData.get("email"), password: formData.get("password"), redirect: false });
    setLoading(false);
    if (res?.error) return setError("Invalid admin credentials.");
    router.push("/admin/dashboard");
    router.refresh();
  }
  return (
    <form action={submit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">Email<input name="email" type="email" className={inputClass} defaultValue="admin@techwavex.com" /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">Password<input name="password" type="password" className={inputClass} placeholder="Admin@12345" /></label>
      {error ? <p className="text-sm text-rose-500">{error}</p> : null}
      <Button disabled={loading}>{loading ? "Signing in..." : "Sign in"}</Button>
    </form>
  );
}

const inputClass = "h-12 w-full rounded-[8px] border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-white/[0.06] dark:text-white";
