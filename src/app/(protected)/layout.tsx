import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const authed = cookies().get("auth")?.value === "ok";
  if (!authed) redirect("/login");
  return <>{children}</>;
}
