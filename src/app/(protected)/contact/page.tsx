"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("Sending...");
    const res = await fetch("/api/contact", { method: "POST", body: formData });
    const data = await res.json();
    setStatus(data.ok ? "Sent!" : data.message ?? "Something went wrong");
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1>Contact</h1>
      <p className="mt-2 text-gray-600">This demo posts to a Next.js API route.</p>

      <form action={onSubmit} className="mt-6 space-y-4">
        <input name="name" placeholder="Your name" className="w-full border rounded-xl px-4 py-2" required />
        <input name="email" type="email" placeholder="Email" className="w-full border rounded-xl px-4 py-2" required />
        <textarea name="message" placeholder="Message" className="w-full border rounded-xl px-4 py-2 min-h-[120px]" required />
        <button className="btn-primary" type="submit">Send</button>
      </form>

      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
}
