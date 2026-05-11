import { z } from "zod";
import { prisma } from "@/lib/prisma";

const listFromInput = z.union([z.array(z.string()), z.string()]).transform((value) =>
  Array.isArray(value)
    ? value.map((item) => item.trim()).filter(Boolean)
    : value.split(/\r?\n|,/).map((item) => item.trim()).filter(Boolean),
);

const serviceSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  summary: z.string().min(10),
  features: listFromInput,
  active: z.boolean().default(true),
});

const trainingSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  overview: z.string().min(10),
  modules: listFromInput,
  duration: z.string().min(2),
  format: z.string().min(2),
  active: z.boolean().default(true),
});

const blogSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  excerpt: z.string().min(10),
  content: z.string().min(10),
  category: z.string().min(2),
  published: z.boolean().default(true),
});

const testimonialSchema = z.object({
  name: z.string().min(2),
  role: z.string().min(2),
  quote: z.string().min(10),
  active: z.boolean().default(true),
});

const settingSchema = z.object({
  key: z.string().min(2),
  value: z.string(),
  label: z.string().optional().nullable(),
});

type ResourceConfig = {
  schema: z.ZodTypeAny;
  updateSchema: z.ZodTypeAny;
  findMany: () => Promise<unknown>;
  create: (data: unknown) => Promise<unknown>;
  update: (id: string, data: unknown) => Promise<unknown>;
  delete: (id: string) => Promise<unknown>;
};

export const adminResources: Record<string, ResourceConfig> = {
  services: {
    schema: serviceSchema,
    updateSchema: serviceSchema.partial(),
    findMany: () => prisma.service.findMany({ orderBy: { createdAt: "desc" } }),
    create: (data) => prisma.service.create({ data: data as never }),
    update: (id, data) => prisma.service.update({ where: { id }, data: data as never }),
    delete: (id) => prisma.service.delete({ where: { id } }),
  },
  "training-programs": {
    schema: trainingSchema,
    updateSchema: trainingSchema.partial(),
    findMany: () => prisma.trainingProgram.findMany({ orderBy: { createdAt: "desc" } }),
    create: (data) => prisma.trainingProgram.create({ data: data as never }),
    update: (id, data) => prisma.trainingProgram.update({ where: { id }, data: data as never }),
    delete: (id) => prisma.trainingProgram.delete({ where: { id } }),
  },
  "blog-posts": {
    schema: blogSchema,
    updateSchema: blogSchema.partial(),
    findMany: () => prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } }),
    create: (data) => prisma.blogPost.create({ data: { ...(data as Record<string, unknown>), publishedAt: new Date() } as never }),
    update: (id, data) => prisma.blogPost.update({ where: { id }, data: data as never }),
    delete: (id) => prisma.blogPost.delete({ where: { id } }),
  },
  testimonials: {
    schema: testimonialSchema,
    updateSchema: testimonialSchema.partial(),
    findMany: () => prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } }),
    create: (data) => prisma.testimonial.create({ data: data as never }),
    update: (id, data) => prisma.testimonial.update({ where: { id }, data: data as never }),
    delete: (id) => prisma.testimonial.delete({ where: { id } }),
  },
  settings: {
    schema: settingSchema,
    updateSchema: settingSchema.partial(),
    findMany: () => prisma.siteSetting.findMany({ orderBy: { key: "asc" } }),
    create: (data) => prisma.siteSetting.create({ data: data as never }),
    update: (id, data) => prisma.siteSetting.update({ where: { id }, data: data as never }),
    delete: (id) => prisma.siteSetting.delete({ where: { id } }),
  },
};

export function getAdminResource(resource: string) {
  return adminResources[resource];
}
