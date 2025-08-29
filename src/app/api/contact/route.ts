import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  console.log("Contact submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
