import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: { children: React.ReactNode }) {
  const jar = await cookies();            // Next 15: cookies() is async
  const authed = jar.get("auth")?.value === "ok";
  if (!authed) redirect("/login");        // bounce if not logged in
  return <>{children}</>;                 // let RootLayout render navbar/footer
}
