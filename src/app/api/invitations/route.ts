import { NextResponse, NextRequest } from "next/server";
import { saveInvitation, getInvitationBySlug } from "@/app/lib/invitation-store";
import { InvitationData } from "@/app/types";

export const runtime = "nodejs";

const validCategories = new Set<InvitationData["category"]>(["Announcements", "Birthdays"]);
const validSubFamilies = new Set<InvitationData["subFamily"]>(["Wihogora", "Light", "Hope"]);

// POST handler
export async function POST(request: NextRequest) {
  const payload = (await request.json()) as InvitationData;

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (!validCategories.has(payload.category) || !validSubFamilies.has(payload.subFamily)) {
    return NextResponse.json({ error: "Invalid category or subFamily" }, { status: 400 });
  }

  const slug = await saveInvitation(payload);
  return NextResponse.json({ slug }, { status: 201 });
}

// GET handler — **params is synchronous**
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } } // ✅ synchronous object
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  const invitation = await getInvitationBySlug(id);

  if (!invitation) {
    return NextResponse.json({ error: "Invitation not found" }, { status: 404 });
  }

  return NextResponse.json(invitation);
}
