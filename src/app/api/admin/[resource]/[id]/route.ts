import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getAdminResource } from "@/lib/admin-resources";

export async function PATCH(request: Request, { params }: { params: Promise<{ resource: string; id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { resource, id } = await params;
  const config = getAdminResource(resource);
  if (!config) return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  const parsed = config.updateSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  return NextResponse.json({ item: await config.update(id, parsed.data) });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ resource: string; id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { resource, id } = await params;
  const config = getAdminResource(resource);
  if (!config) return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  await config.delete(id);
  return NextResponse.json({ ok: true });
}
