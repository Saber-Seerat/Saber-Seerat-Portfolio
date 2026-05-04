import { useEffect, useState } from "react";
import { Github, GitFork, Star, Users, BookOpen, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const USERNAME = "Saber-Seerat";

type GhUser = {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  html_url: string;
};

type GhRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
};

export function GithubStats() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`),
        ]);
        if (!uRes.ok || !rRes.ok) throw new Error("GitHub API error");
        const uData: GhUser = await uRes.json();
        const rData: GhRepo[] = await rRes.json();
        if (cancelled) return;
        setUser(uData);
        setRepos(rData);
      } catch (e) {
        if (!cancelled) setError((e as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
  const totalForks = repos.reduce((s, r) => s + r.forks_count, 0);
  const topRepos = [...repos]
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);

  const stats = [
    { icon: BookOpen, label: "Repositories", value: user?.public_repos ?? 0 },
    { icon: Star, label: "Total Stars", value: totalStars },
    { icon: GitFork, label: "Total Forks", value: totalForks },
    { icon: Users, label: "Followers", value: user?.followers ?? 0 },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="05" title="GitHub Stats" />

        {error && (
          <div className="rounded-lg border border-border bg-surface p-6 text-center text-muted-foreground">
            Couldn't load live GitHub data.{" "}
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Visit profile →
            </a>
          </div>
        )}

        {!error && (
          <>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/50"
                >
                  <s.icon className="mb-3 h-5 w-5 text-primary" />
                  <div className="font-mono text-2xl font-bold text-foreground">
                    {loading ? "—" : s.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {(loading ? Array.from({ length: 4 }) : topRepos).map((repo, i) => {
                const r = repo as GhRepo | undefined;
                return (
                  <a
                    key={r?.id ?? i}
                    href={r?.html_url ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/50"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground group-hover:text-primary">
                        <BookOpen className="h-4 w-4 text-primary" />
                        {r?.name ?? "loading..."}
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                      {r?.description ?? (loading ? "" : "No description")}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                      {r?.language && <span>{r.language}</span>}
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {r?.stargazers_count ?? 0}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {r?.forks_count ?? 0}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" />
                View Full GitHub Profile
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}