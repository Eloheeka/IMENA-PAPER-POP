import { NextResponse } from "next/server";
import { saveInvitation, getInvitationBySlug } from "@/app/lib/invitation-store";
import { InvitationData } from "@/app/types";

export const runtime = "nodejs";

// For POST validation
const validCategories = new Set<InvitationData["category"]>(["Announcements", "Birthdays"]);
const validSubFamilies = new Set<InvitationData["subFamily"]>(["Wihogora", "Light", "Hope"]);

// POST handler
export async function POST(request: Request) {
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

// GET handler
export async function GET(
  request: Request,
  { params }: { params: { id: string } } // ✅ params must be object, not Promise
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  // Use getInvitationBySlug instead of getInvitationById
  const invitation = await getInvitationBySlug(id);

  if (!invitation) {
    return NextResponse.json({ error: "Invitation not found" }, { status: 404 });
  }

  return NextResponse.json(invitation);
}
