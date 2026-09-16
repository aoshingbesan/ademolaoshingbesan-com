import { SiteNav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";

// Mild aspect-ratio variation so the gallery doesn't look like a rigid grid —
// swap for real image dimensions once shots are uploaded.
const TILE_ASPECT = [
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/3]",
];

const COLUMN_COUNT = 3;

// Explicit round-robin column split instead of CSS `columns` — CSS multi-col
// balances by total height across the whole set, which for a short list like
// this can leave one column visibly heavier than the others. Assigning items
// to columns ourselves keeps the three columns even and predictable.
const columns: number[][] = Array.from({ length: COLUMN_COUNT }, () => []);
TILE_ASPECT.forEach((_, i) => columns[i % COLUMN_COUNT].push(i));

export default function VisualsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteNav />

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-medium text-zinc-900 sm:text-5xl">
            Visuals
          </h1>
          <p className="mt-3 max-w-md text-sm text-zinc-500">
            UI shots, art direction, and one-off visual work — a gallery, not case
            studies. Placeholders until real shots are uploaded.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row">
            {columns.map((col, ci) => (
              <div key={ci} className="flex flex-1 flex-col gap-6">
                {col.map((i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 text-sm text-zinc-400 ${TILE_ASPECT[i]}`}
                  >
                    Shot — TBD
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
