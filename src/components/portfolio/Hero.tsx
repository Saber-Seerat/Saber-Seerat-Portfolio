import { Github, ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-5xl">
        <p className="animate-fade-up font-mono text-sm text-primary">
          $ whoami<span className="animate-blink ml-1">_</span>
        </p>

        <h1 className="animate-fade-up delay-100 mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Mohammad Saber
          <br />
          <span className="text-gradient">Seerat.</span>
        </h1>

        <h2 className="animate-fade-up delay-200 mt-6 font-display text-2xl font-semibold text-muted-foreground md:text-4xl">
          I build things for the web.
        </h2>

        <p className="animate-fade-up delay-300 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Full Stack Web Developer specializing in <span className="font-mono text-primary">React</span> &{" "}
          <span className="font-mono text-primary">JavaScript</span>. I build modern, responsive web
          applications and love working with new technologies.
        </p>

        <div className="animate-fade-up delay-400 mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:glow-primary hover:-translate-y-0.5"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/Saber-Seerat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 font-mono text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="/cv-mohammad-saber-seerat.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 font-mono text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </div>

        <div className="animate-fade-up delay-500 mt-16 flex items-center gap-6 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </div>
          <span className="hidden md:inline">Kabul, Afghanistan</span>
        </div>
      </div>
    </section>
  );
}
