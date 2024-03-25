import { getAllMemo } from "@/lib/microcmsClient";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const res = await getAllMemo();
  return NextResponse.json(res);
}
