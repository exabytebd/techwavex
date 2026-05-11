"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="divide-y divide-slate-200 rounded-[8px] border border-slate-200 bg-white/70 dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.04]">
      {items.map((item, index) => (
        <AccordionPrimitive.Item value={`item-${index}`} key={item.q}>
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-950 dark:text-white">
              {item.q}
              <ChevronDown className="size-4 shrink-0 transition group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="px-5 pb-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.a}</AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
