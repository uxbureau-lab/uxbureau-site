import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { CASES_TAG } from "@/lib/cases";

type WebhookPayload = { _type?: string };

// Sanity webhook → invalidate cached case content.
// Configure in Sanity: POST https://lab.uxbureau.pro/api/revalidate,
// projection {_type}, secret = SANITY_REVALIDATE_SECRET.
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Revalidation secret not configured" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret);

  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }
  if (body?._type !== "caseStudy") {
    return NextResponse.json({ message: "Ignored", type: body?._type ?? null });
  }

  revalidateTag(CASES_TAG, "max");
  return NextResponse.json({ revalidated: CASES_TAG, now: Date.now() });
}
