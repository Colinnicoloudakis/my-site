import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies(); // cookies() is async in Next 15
  const authed = cookieStore.get("auth")?.value === "ok";
  if (!authed) redirect("/login");
  return <>{children}</>;
}
