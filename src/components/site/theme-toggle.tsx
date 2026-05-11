"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  if (!mounted) return <span className="h-9 w-9 rounded-full border border-slate-200 dark:border-white/10" />;
  const dark = resolvedTheme === "dark";
  return (
    <Button aria-label="Toggle theme" variant="outline" size="sm" className="h-9 w-9 px-0" onClick={() => setTheme(dark ? "light" : "dark")}>
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

function emptySubscribe() {
  return () => {};
}
