import { SiteNav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";

/* ------------------------------------------------------------------ */
/*  EDIT ME — replace with real experiments                            */
/* ------------------------------------------------------------------ */
const experiments = [
  {
    title: "Experiment One — [TODO]",
    description: "Placeholder — a smaller build or AI-workflow tinker to fill in.",
    color: "#2f6fed",
  },
  {
    title: "Experiment Two — [TODO]",
    description: "Placeholder — a smaller build or AI-workflow tinker to fill in.",
    color: "#ff5d3a",
  },
  {
    title: "Experiment Three — [TODO]",
    description: "Placeholder — a smaller build or AI-workflow tinker to fill in.",
    color: "#16a34a",
  },
  {
    title: "Experiment Four — [TODO]",
    description: "Placeholder — a smaller build or AI-workflow tinker to fill in.",
    color: "#a855f7",
  },
  {
    title: "Experiment Five — [TODO]",
    description: "Placeholder — a smaller build or AI-workflow tinker to fill in.",
    color: "#eab308",
  },
  {
    title: "Experiment Six — [TODO]",
    description: "Placeholder — a smaller build or AI-workflow tinker to fill in.",
    color: "#0891b2",
  },
];
/* ------------------------------------------------------------------ */

export default function ExperimentsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteNav />

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-medium text-zinc-900 sm:text-5xl">
            Experiments
          </h1>
          <p className="mt-3 max-w-md text-sm text-zinc-500">
            Smaller builds, AI-workflow tinkering, and interface experiments that
            don&rsquo;t need a full case study.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiments.map((exp) => (
              <div
                key={exp.title}
                className="rounded-2xl border border-zinc-200/70 p-6 transition-colors hover:border-zinc-300"
              >
                <div
                  className="h-10 w-10 rounded-xl"
                  style={{ backgroundColor: exp.color, opacity: 0.85 }}
                />
                <h3 className="mt-4 text-base font-semibold text-zinc-900">
                  {exp.title.replace(" — [TODO]", "")}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
