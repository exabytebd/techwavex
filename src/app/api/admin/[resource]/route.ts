import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getAdminResource } from "@/lib/admin-resources";

export async function GET(_request: Request, { params }: { params: Promise<{ resource: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { resource } = await params;
  const config = getAdminResource(resource);
  if (!config) return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  return NextResponse.json({ items: await config.findMany() });
}

export async function POST(request: Request, { params }: { params: Promise<{ resource: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { resource } = await params;
  const config = getAdminResource(resource);
  if (!config) return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  const parsed = config.schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  return NextResponse.json({ item: await config.create(parsed.data) }, { status: 201 });
}
