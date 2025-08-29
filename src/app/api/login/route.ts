import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const pw = form.get("password");
  const ok = typeof pw === "string" && pw === process.env.SITE_PASSWORD;

  if (!ok) {
    return NextResponse.json({ ok: false, message: "Wrong password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("auth", "ok", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
