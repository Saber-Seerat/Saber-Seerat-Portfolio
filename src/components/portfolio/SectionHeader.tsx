export function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="flex items-baseline gap-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
        <span className="font-mono text-base text-primary md:text-lg">{index}.</span>
        <span>{title}</span>
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}