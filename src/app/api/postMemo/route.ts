import { createMemo} from "@/lib/microcmsClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const res = await createMemo(body);
  return NextResponse.json(res);
}
