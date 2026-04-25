import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Code2, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="01" title="About Me" />

        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-5 text-muted-foreground md:col-span-3">
            <p>
              Hello! I'm <span className="text-foreground">Saber</span>, a Computer
              Science graduate from{" "}
              <span className="text-primary">Kabul University</span> with a passion for
              crafting clean, performant web experiences.
            </p>
            <p>
              My journey spans frontend development, database engineering, and
              procurement systems — giving me a holistic view of how software solves
              real-world problems. I love turning complex requirements into intuitive
              interfaces.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies in{" "}
              <span className="text-foreground">AI</span>, contributing to side
              projects, and learning whatever's next on the web.
            </p>
            <p className="font-mono text-sm">
              <span className="text-primary">{">"}</span> Currently focused on building
              modern React applications.
            </p>
          </div>

          <div className="space-y-3 md:col-span-2">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                desc: "B.S. Computer Science — Kabul University",
              },
              {
                icon: Code2,
                title: "Focus",
                desc: "React, JavaScript & modern frontend",
              },
              {
                icon: Sparkles,
                title: "Interests",
                desc: "Web Dev, AI & real-world solutions",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-border bg-surface p-4 transition-all hover:border-primary/50 hover:bg-surface-elevated"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-md border border-border bg-background p-2 text-primary transition-colors group-hover:border-primary/50">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}