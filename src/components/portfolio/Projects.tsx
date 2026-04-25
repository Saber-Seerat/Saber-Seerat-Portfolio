import { SectionHeader } from "./SectionHeader";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Web Calculator",
    desc: "A clean, responsive calculator app supporting full arithmetic operations with a polished UI and keyboard support.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Saber-Seerat",
  },
  {
    title: "QR Code Generator",
    desc: "Generate custom QR codes from any text or URL instantly, with download support for sharing across platforms.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Saber-Seerat",
  },
  {
    title: "Todo List App",
    desc: "A modern todo manager with persistent storage, filtering, and a smooth UX for managing daily tasks efficiently.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Saber-Seerat",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="04" title="Featured Projects" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-lg border border-border bg-surface-elevated p-6 transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <Folder className="h-9 w-9 text-primary" strokeWidth={1.25} />
                <div className="flex items-center gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repo"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live demo"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}