"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, CircuitBoard, LineChart, Play, Sparkles, Zap } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQAccordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/section";
import { processSteps, serviceCategories, stats, testimonials, trainingPrograms, whyChoose } from "@/lib/data";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export function AnimatedHome() {
  return (
    <>
      <HeroExperience />
      <ImpactStrip />
      <ServicesShowcase />
      <TrainingOrbit />
      <WhyChoose />
      <ProcessTimeline />
      <Testimonials />
      <FAQBlock />
      <FinalCTA />
    </>
  );
}

function HeroExperience() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 18 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);

  return (
    <section
      className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="aurora absolute inset-x-0 top-[-18rem] h-[42rem] opacity-80 dark:opacity-70" />
      <div className="noise absolute inset-0 opacity-80" />
      <motion.div
        className="absolute left-[8%] top-24 hidden h-20 w-20 rounded-full border border-cyan-300/30 bg-cyan-300/10 blur-[1px] lg:block"
        animate={{ y: [0, 22, 0], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[12%] top-36 hidden h-28 w-28 rounded-full border border-violet-300/30 bg-violet-400/10 blur-[1px] lg:block"
        animate={{ y: [0, -26, 0], x: [0, 12, 0], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.03fr_.97fr] lg:items-center">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fade} transition={{ duration: 0.55 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/70 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-lg shadow-cyan-500/10 backdrop-blur dark:bg-white/10 dark:text-cyan-100">
            <Sparkles className="size-4" /> Premium tech services and career training
          </motion.div>
          <motion.h1 variants={fade} transition={{ duration: 0.7 }} className="text-balance max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Build a future-ready <span className="gradient-text">digital business</span> and career engine.
          </motion.h1>
          <motion.p variants={fade} transition={{ duration: 0.65 }} className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            TechWave-X combines ecommerce operations, custom software, AI automation, digital growth, and practical training into one polished execution partner.
          </motion.p>
          <motion.div variants={fade} transition={{ duration: 0.65 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services" size="lg">Explore Services <ArrowRight className="size-4" /></ButtonLink>
            <ButtonLink href="/apply?category=Training" variant="outline" size="lg"><Play className="size-4" /> Apply for Training</ButtonLink>
          </motion.div>
          <motion.div variants={fade} transition={{ duration: 0.65 }} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {["AI", "Cloud", "Commerce"].map((item) => (
              <div key={item} className="rounded-[8px] border border-slate-200 bg-white/65 px-4 py-3 text-center text-sm font-bold text-slate-900 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="perspective-stage">
          <motion.div style={{ rotateX, rotateY }} className="relative mx-auto max-w-xl transform-gpu">
            <motion.div
              className="glass-panel relative overflow-hidden rounded-[8px] p-5"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
              <motion.div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/25 blur-3xl" animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0.75, 0.45] }} transition={{ duration: 5, repeat: Infinity }} />
              <div className="relative rounded-[8px] border border-slate-200/70 bg-slate-950 p-5 text-white shadow-2xl dark:border-white/10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200"><CircuitBoard className="size-4" /> TechWave-X Command</div>
                  <motion.div className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-lg shadow-emerald-300/60" animate={{ scale: [1, 1.8, 1] }} transition={{ repeat: Infinity, duration: 1.7 }} />
                </div>
                <div className="grid gap-4">
                  {[
                    ["Marketplace growth", "82%", "from account audit to optimized listings"],
                    ["Software pipeline", "5", "apps, APIs, automations, dashboards"],
                    ["Training momentum", "24/7", "hybrid learning path and support"],
                  ].map(([label, value, text], index) => (
                    <motion.div
                      key={label}
                      className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.14, duration: 0.55 }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-slate-300">{label}</span>
                        <span className="text-xl font-black text-cyan-200">{value}</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300" initial={{ width: 0 }} animate={{ width: `${72 + index * 8}%` }} transition={{ delay: 0.5 + index * 0.16, duration: 1.2, ease: "easeOut" }} />
                      </div>
                      <p className="mt-3 text-xs text-slate-400">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div className="absolute -bottom-6 -left-4 rounded-[8px] border border-white/15 bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/20" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <Zap className="mr-2 inline size-4 text-cyan-300" /> AI automation ready
            </motion.div>
            <motion.div className="absolute -right-3 top-10 rounded-[8px] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-violet-500/20 dark:border-white/10 dark:bg-slate-900 dark:text-white" animate={{ y: [0, 12, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
              <LineChart className="mr-2 inline size-4 text-violet-500" /> Scale signals
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImpactStrip() {
  return (
    <section className="mx-auto -mt-4 grid max-w-7xl gap-4 px-4 pb-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {stats.map(([value, label], index) => (
        <motion.div key={label} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.5 }}>
          <Card className="group relative overflow-hidden p-6">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 opacity-80" />
            <div className="text-4xl font-black text-slate-950 dark:text-white">{value}</div>
            <div className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{label}</div>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}

function ServicesShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Services" title="A sharper operating system for digital business" text="Each service line is designed like a premium product: clear scope, modern execution, and measurable business movement." />
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {serviceCategories.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.slug} variants={fade} transition={{ duration: 0.55 }} whileHover={{ y: -10, rotateX: 2 }}>
              <Card className="group relative flex min-h-[360px] flex-col overflow-hidden p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-violet-500/0 transition duration-500 group-hover:from-cyan-400/10 group-hover:to-violet-500/10" />
                <div className="relative mb-6 grid size-14 place-items-center rounded-[8px] bg-slate-950 text-cyan-200 shadow-xl shadow-cyan-500/15 dark:bg-white dark:text-slate-950">
                  <Icon className="size-7" />
                </div>
                <span className="relative text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">0{index + 1} / {service.eyebrow}</span>
                <h3 className="relative mt-3 text-xl font-black text-slate-950 dark:text-white">{service.title}</h3>
                <p className="relative mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.summary}</p>
                <ButtonLink href={`/services/${service.slug}`} variant="ghost" className="relative mt-5 justify-start px-0">View details <ArrowRight className="size-4" /></ButtonLink>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

function TrainingOrbit() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white dark:bg-black/40">
      <div className="aurora absolute inset-x-0 top-0 h-96 opacity-40" />
      <div className="noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Training" title="Programs with a real-world execution arc" text="The training experience feels like a professional product: structured modules, practical labs, and clear outcomes." />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {trainingPrograms.map((program) => {
            const Icon = program.icon;
            return (
              <motion.div key={program.slug} variants={fade} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.45 }}>
                <Card className="relative min-h-[260px] overflow-hidden border-white/10 bg-white/[0.07] text-white">
                  <motion.div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 4.5, repeat: Infinity }} />
                  <Icon className="relative mb-4 size-9 text-cyan-300" />
                  <h3 className="relative text-lg font-black">{program.title}</h3>
                  <p className="relative mt-3 text-sm leading-6 text-slate-300">{program.duration} | {program.format}</p>
                  <ButtonLink href={`/training/${program.slug}`} variant="outline" size="sm" className="relative mt-5 border-white/15 bg-white/10 text-white hover:border-cyan-300">Details</ButtonLink>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Why TechWave-X" title="Trustworthy enough for business, modern enough for tomorrow" />
      <div className="grid gap-6 md:grid-cols-3">
        {whyChoose.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55 }}>
              <Card className="relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 to-violet-500" />
                <Icon className="mb-4 size-10 text-violet-500" />
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Process" title="Discover -> Plan -> Build -> Launch -> Scale" text="A calm, premium workflow that makes complex technology decisions feel structured and visible." />
      <div className="relative grid gap-4 md:grid-cols-5">
        <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent md:block" />
        {processSteps.map((step, i) => (
          <motion.div key={step} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
            <Card className="relative text-center">
              <motion.div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-slate-950 text-lg font-black text-cyan-200 shadow-xl shadow-cyan-500/20 dark:bg-white dark:text-slate-950" whileHover={{ rotate: 360 }} transition={{ duration: 0.7 }}>
                {i + 1}
              </motion.div>
              <div className="font-black text-slate-950 dark:text-white">{step}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Proof" title="Clients and learners choose practical progress" />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div key={item.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <Card className="relative overflow-hidden">
              <div className="absolute right-5 top-3 text-7xl font-black text-cyan-400/10">&quot;</div>
              <p className="relative text-lg leading-8 text-slate-700 dark:text-slate-200">&quot;{item.quote}&quot;</p>
              <div className="mt-5 font-black text-slate-950 dark:text-white">{item.name}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{item.role}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FAQBlock() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="FAQ" title="Clear answers before you start" />
      <FAQAccordion items={[
        { q: "Can TechWave-X handle both services and training?", a: "Yes. The company is designed around two clear journeys: businesses can request services, and learners can apply for structured training programs." },
        { q: "Are programs online or offline?", a: "Programs support online, offline, and hybrid formats depending on the course schedule and learner preference." },
        { q: "Can I book a consultation before choosing?", a: "Yes. Use the application form and select Service or Training. The team can guide you toward the best track." },
      ]} />
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[8px] bg-slate-950 p-8 text-center text-white shadow-2xl shadow-cyan-950/20 sm:p-12"
      >
        <div className="aurora absolute inset-0 opacity-45" />
        <div className="noise absolute inset-0 opacity-40" />
        <CheckCircle2 className="relative mx-auto mb-5 size-10 text-cyan-300" />
        <h2 className="relative text-3xl font-black sm:text-4xl">Ready to build a stronger digital future?</h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-slate-300">Tell us your goal. We will help you choose the right service, training program, or consultation path.</p>
        <ButtonLink href="/apply" size="lg" className="relative mt-8">Start now</ButtonLink>
      </motion.div>
    </section>
  );
}
