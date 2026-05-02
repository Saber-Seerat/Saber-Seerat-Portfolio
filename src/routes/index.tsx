import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { GithubStats } from "@/components/portfolio/GithubStats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammad Saber Seerat — Full stack web developer" },
      {
        name: "description",
        content:
          "Portfolio of Mohammad Saber Seerat — Full stack web developer specializing in React & JavaScript. Building modern, responsive web applications.",
      },
      { property: "og:title", content: "Mohammad Saber Seerat — Full stack web developer" },
      {
        property: "og:description",
        content:
          "React & JavaScript Developer building modern, responsive web applications.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
