"use client";

import { motion } from "framer-motion";

export const FadeIn = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: "easeOut" }} className={className}>
    {children}
  </motion.div>
);

export const Stagger = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Rise = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div variants={{ hidden: { opacity: 0, y: 24, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1 } }} transition={{ duration: 0.58, ease: "easeOut" }} className={className}>
    {children}
  </motion.div>
);
