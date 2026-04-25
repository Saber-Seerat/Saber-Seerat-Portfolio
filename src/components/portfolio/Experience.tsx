import { SectionHeader } from "./SectionHeader";

const jobs = [
  {
    role: "Frontend Developer",
    company: "Lajward Technologies",
    location: "Remote",
    desc: "Building modern, responsive web interfaces with React and JavaScript. Collaborating across teams to ship production features.",
  },
  {
    role: "Procurement Specialist",
    company: "Help Build Tomorrow",
    location: "Kabul",
    desc: "Managed procurement workflows and vendor coordination, ensuring transparent and efficient operations.",
  },
  {
    role: "Title Assistant",
    company: "Peace Global Logistics",
    location: "Kabul",
    desc: "Handled documentation processes and supported logistics operations across multiple shipments.",
  },
  {
    role: "Database Developer",
    company: "Juvenile Primary Court",
    location: "Kabul",
    desc: "Designed and maintained database systems for case management and reporting.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="03" title="Experience" />

        <ol className="relative space-y-8 border-l border-border pl-8 md:pl-12">
          {jobs.map((job) => (
            <li key={job.company} className="relative">
              <span className="absolute -left-[37px] mt-2 flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-background md:-left-[49px]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <div className="rounded-lg border border-border bg-surface p-6 transition-all hover:border-primary/50 hover:bg-surface-elevated">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">
                    {job.role}{" "}
                    <span className="text-primary">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {job.location}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {job.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}