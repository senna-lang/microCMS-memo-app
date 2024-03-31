import { deleteMemo } from "@/lib/microcmsClient";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const id = params.slug;
  const res = await deleteMemo(id);
  return NextResponse.json({ message: "delete completed" });
}
