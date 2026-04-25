import { SectionHeader } from "./SectionHeader";

export function GithubStats() {
  const username = "Saber-Seerat";
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="05" title="GitHub Stats" />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border bg-surface p-2 transition-all hover:border-primary/50">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=00000000&title_color=22d3ee&icon_color=22d3ee&text_color=94a3b8`}
              alt="GitHub Stats"
              loading="lazy"
              className="h-full w-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-surface p-2 transition-all hover:border-primary/50">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=00000000&title_color=22d3ee&text_color=94a3b8`}
              alt="Top Languages"
              loading="lazy"
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-lg border border-border bg-surface p-2 transition-all hover:border-primary/50">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=00000000&stroke=22d3ee&ring=22d3ee&fire=22d3ee&currStreakLabel=22d3ee&sideLabels=94a3b8&dates=94a3b8&currStreakNum=ffffff&sideNums=ffffff`}
            alt="GitHub Streak"
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}