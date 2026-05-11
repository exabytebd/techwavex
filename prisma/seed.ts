import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { blogPosts, serviceCategories, testimonials, trainingPrograms } from "../src/lib/data";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await hash(process.env.SEED_ADMIN_PASSWORD ?? "Admin@12345", 12);

  await prisma.user.upsert({
    where: { email: process.env.SEED_ADMIN_EMAIL ?? "admin@techwavex.com" },
    update: { passwordHash },
    create: {
      name: "TechWave-X Admin",
      email: process.env.SEED_ADMIN_EMAIL ?? "admin@techwavex.com",
      passwordHash,
      role: "ADMIN",
    },
  });

  for (const service of serviceCategories) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: { title: service.title, summary: service.summary, features: service.features },
      create: { slug: service.slug, title: service.title, summary: service.summary, features: service.features },
    });
  }

  for (const program of trainingPrograms) {
    await prisma.trainingProgram.upsert({
      where: { slug: program.slug },
      update: { title: program.title, overview: program.overview, modules: program.modules, duration: program.duration, format: program.format },
      create: { slug: program.slug, title: program.title, overview: program.overview, modules: program.modules, duration: program.duration, format: program.format },
    });
  }

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: { title: post.title, excerpt: post.excerpt, category: post.category },
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        content: `${post.excerpt}\n\nTechWave-X publishes practical insights for teams building digital businesses, systems, and careers.`,
        publishedAt: new Date(),
      },
    });
  }

  for (const item of testimonials) {
    await prisma.testimonial.create({ data: item }).catch(() => null);
  }

  const settings = [
    ["admin_email", "admin@techwavex.com", "Admin email"],
    ["contact_email", "support@techwavex.com", "Contact email"],
    ["phone", "+880 1700 000000", "Phone"],
    ["address", "Level-6 Chattogram Software Technology Park, Agrabad, Chattogram", "Address"],
    ["linkedin", "https://linkedin.com/company/techwave-x", "LinkedIn"],
  ];
  for (const [key, value, label] of settings) {
    await prisma.siteSetting.upsert({ where: { key }, update: { value, label }, create: { key, value, label } });
  }
}

main().finally(() => prisma.$disconnect());
