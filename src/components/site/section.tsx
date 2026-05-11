import { Badge } from "@/components/ui/badge";

export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{text}</p> : null}
    </div>
  );
}
