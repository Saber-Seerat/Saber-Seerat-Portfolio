import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "GitLab"],
  },
  {
    title: "Database",
    items: ["SQL", "NoSQL"],
  },
  {
    title: "Soft Skills",
    items: ["Problem-solving", "Teamwork", "Time management"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="02" title="Skills & Tools" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="group rounded-lg border border-border bg-surface-elevated p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                // {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground transition-colors group-hover:border-primary/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}