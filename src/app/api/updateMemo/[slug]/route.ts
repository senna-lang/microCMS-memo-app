import { updateMemo } from "@/lib/microcmsClient";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const id = params.slug;
  const body = await req.json();
  const { title, content } = body;
  const props = {
    id,
    title,
    content,
  };
  const res = await updateMemo(props);
  return NextResponse.json({ message: "update completed" });
}
