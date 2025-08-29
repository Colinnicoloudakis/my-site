"use client";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const res = await fetch("/api/login", { method: "POST", body: formData });
    if (res.ok) {
      window.location.href = "/";
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data?.message ?? "Invalid password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        action={handleSubmit}
        className="w-full max-w-sm border rounded-2xl p-6 space-y-4"
      >
        <h1 className="text-xl font-bold">Enter Password</h1>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl px-4 py-2"
          required
        />
        <button className="btn-primary w-full" type="submit">
          Unlock
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </div>
  );
}
