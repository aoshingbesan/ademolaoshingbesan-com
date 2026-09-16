"use client";

import { useState } from "react";

export type Project = {
  title: string;
  year: string;
  category: string;
  description: string;
  placeholder?: boolean;
  // TODO: set once a project has a real deployed site to link to.
  liveUrl?: string;
};

// Slight aspect-ratio variation per card so the two-column masonry doesn't
// look like a rigid grid — swap for real cover-image dimensions later.
const COVER_ASPECT = ["aspect-[4/5]", "aspect-[4/5]", "aspect-square", "aspect-[4/5]"];

function LockIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5zm-3 8V6a3 3 0 1 1 6 0v3H9zm3 4a1.5 1.5 0 0 1 .75 2.8V17a.75.75 0 0 1-1.5 0v-1.2A1.5 1.5 0 0 1 12 13z" />
    </svg>
  );
}

function ArrowUpRight({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
              active === cat
                ? "bg-zinc-900 text-white"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-6 sm:columns-2">
        {filtered.map((project, i) => (
          <article key={project.title} className="mb-8 break-inside-avoid">
            <div
              className={`flex items-center justify-center rounded-[28px] border border-dashed border-zinc-300 bg-zinc-50 text-sm text-zinc-400 ${
                COVER_ASPECT[i % COVER_ASPECT.length]
              }`}
            >
              {project.placeholder ? "Cover — TBD" : project.title}
            </div>

            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-medium text-zinc-900">
                {project.title.replace(" — [TODO]", "")}
              </h3>
              <span className="shrink-0 text-sm text-zinc-400">{project.year}</span>
            </div>

            <p className="mt-2 text-[15px] leading-6 text-zinc-500">
              {project.description}
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 text-zinc-400">
                <LockIcon />
                Read Case Study
              </span>
              <span className="h-4 w-px bg-zinc-300" />
              <a
                href={project.liveUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-zinc-900 hover:opacity-70"
              >
                View Live Site
                <ArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
