import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-primary">{"<"}</span>
          <span className="text-foreground">saber</span>
          <span className="text-primary">{" />"}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`group relative rounded-md px-3 py-2 text-sm transition-colors ${
                active === link.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="font-mono text-xs text-primary/70">0{i + 1}.</span>{" "}
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Saber-Seerat"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-all hover:border-primary hover:text-primary md:inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground hover:text-primary"
              >
                <span className="font-mono text-xs text-primary/70">0{i + 1}.</span>{" "}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}