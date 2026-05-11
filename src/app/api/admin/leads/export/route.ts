import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  const headers = ["Full Name", "Email", "Phone", "Address", "Interested In", "Category", "Preferred Format", "Status", "Created At"];
  const rows = leads.map((lead) => [lead.fullName, lead.email, lead.phone, lead.address, lead.interestedIn, lead.category, lead.preferredFormat, lead.status, lead.createdAt.toISOString()]);
  const csv = [headers, ...rows].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=techwave-x-leads.csv",
    },
  });
}
