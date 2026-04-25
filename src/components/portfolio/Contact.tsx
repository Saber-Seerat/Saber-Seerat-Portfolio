import { Mail, Phone, Github, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-primary">06. What's Next?</p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          I'm currently open to new opportunities and collaborations. Whether you have
          a project in mind, a question, or just want to say hi — my inbox is always
          open. I'll get back to you as soon as I can.
        </p>

        <a
          href="mailto:saber.seerat66@gmail.com"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-mono text-sm font-medium text-primary-foreground transition-all hover:glow-primary hover:-translate-y-0.5"
        >
          Say hello
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "saber.seerat66@gmail.com",
              href: "mailto:saber.seerat66@gmail.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+93 786 743 584",
              href: "tel:+93786743584",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "@Saber-Seerat",
              href: "https://github.com/Saber-Seerat",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group rounded-lg border border-border bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 truncate text-sm text-foreground transition-colors group-hover:text-primary">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}