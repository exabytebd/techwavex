import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Base = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
};

const styles = {
  primary: "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:bg-cyan-300",
  secondary: "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100",
  ghost: "text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10",
  outline: "border border-slate-300 bg-white/70 text-slate-900 hover:border-cyan-400 dark:border-white/15 dark:bg-white/5 dark:text-white",
};

const sizes = { sm: "h-9 px-3 text-sm", md: "h-11 px-5 text-sm", lg: "h-12 px-6 text-base" };

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & Base) {
  return <button className={cn("inline-flex items-center justify-center gap-2 rounded-full font-semibold transition", styles[variant], sizes[size], className)} {...props} />;
}

export function ButtonLink({ variant = "primary", size = "md", className, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & Base & { href: string }) {
  return <Link href={href} className={cn("inline-flex items-center justify-center gap-2 rounded-full font-semibold transition", styles[variant], sizes[size], className)} {...props} />;
}
