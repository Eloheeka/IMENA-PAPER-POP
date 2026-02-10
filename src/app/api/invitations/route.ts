import { NextResponse, NextRequest } from "next/server";
import { saveInvitation, getInvitationBySlug } from "@/app/lib/invitation-store";
import { InvitationData } from "@/app/types";

export const runtime = "nodejs";

const validCategories = new Set<InvitationData["category"]>(["Announcements", "Birthdays"]);
const validSubFamilies = new Set<InvitationData["subFamily"]>(["Wihogora", "Light", "Hope"]);

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

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ Matches Next.js internal type
) {
  const { id } = await context.params; // await the promise

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  const invitation = await getInvitationBySlug(id);

  if (!invitation) {
    return NextResponse.json({ error: "Invitation not found" }, { status: 404 });
  }

  return NextResponse.json(invitation);
}
