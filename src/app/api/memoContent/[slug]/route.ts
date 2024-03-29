import { getMemoDetail } from "@/lib/microcmsClient";
import { NextResponse } from "next/server";
export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const id = params.slug;
  const res = await getMemoDetail(id);
  return NextResponse.json(res);
}
