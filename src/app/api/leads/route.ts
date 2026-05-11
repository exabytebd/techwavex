import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendLeadEmails } from "@/lib/mail";
import { leadSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  try {
    const lead = await prisma.lead.create({ data: parsed.data });
    await sendLeadEmails(parsed.data);
    return NextResponse.json({ lead }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to save lead" }, { status: 500 });
  }
}
