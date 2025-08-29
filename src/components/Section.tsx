import { PropsWithChildren } from "react";

export default function Section({
  title,
  subtitle,
  children,
}: PropsWithChildren<{ title: string; subtitle?: string }>) {
  return (
    <section className="py-10">
      <div className="space-y-2 mb-6">
        <h2>{title}</h2>
        {subtitle ? <p className="text-gray-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
