import Section from "@/components/Section";

const projects = [
  { title: "Landing Page", description: "Fast, minimalist landing page.", href: "#" },
  { title: "Portfolio", description: "Showcase your work.", href: "#" },
  { title: "Mini App", description: "Interactive UI with state.", href: "#" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1>Projects</h1>
      <Section title="Examples">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="border rounded-2xl p-6 hover:shadow-sm transition">
              <h3>{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.description}</p>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
