export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <main className="flex w-full max-w-xl flex-col items-center gap-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:border-white/15 dark:text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Under construction
        </span>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Ademola Oshingbesan
        </h1>

        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A new site is being built here. Check back soon.
        </p>

        <a
          href="mailto:adeoluwaademola245@gmail.com"
          className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Get in touch
        </a>
      </main>
    </div>
  );
}
