import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-muted-foreground">
          Designed & built by{" "}
          <span className="text-primary">Mohammad Saber Seerat</span> · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Saber-Seerat"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:saber.seerat66@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}