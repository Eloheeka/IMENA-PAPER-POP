import { NextRequest, NextResponse } from "next/server";
import { getInvitationBySlug } from "@/app/lib/invitation-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } } // ✅ remove Promise
) {
  const { id } = params; // no await needed
  const record = await getInvitationBySlug(id);

  if (!record) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(record, { status: 200 });
}
