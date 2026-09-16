import { SiteNav } from "../nav";
import { SiteFooter } from "../footer";
import { ProjectsGrid, type Project } from "../projects-grid";

/* ------------------------------------------------------------------ */
/*  EDIT ME — replace with real case studies once migrated from Framer */
/* ------------------------------------------------------------------ */
const projects: Project[] = [
  {
    title: "Project One — [TODO]",
    year: "2025",
    category: "Product Design",
    description: "Placeholder — migrate from Framer once restructured.",
    placeholder: true,
  },
  {
    title: "Project Two — [TODO]",
    year: "2025",
    category: "AI Automation",
    description: "Placeholder — migrate from Framer once restructured.",
    placeholder: true,
  },
  {
    title: "Project Three — [TODO]",
    year: "2024",
    category: "Web",
    description: "Placeholder — migrate from Framer once restructured.",
    placeholder: true,
  },
  {
    title: "Project Four — [TODO]",
    year: "2024",
    category: "Product Design",
    description: "Placeholder — migrate from Framer once restructured.",
    placeholder: true,
  },
];
/* ------------------------------------------------------------------ */

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteNav />

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-medium text-zinc-900 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-3 max-w-md text-sm text-zinc-500">
            Case studies below are placeholders — real write-ups are being migrated and
            restructured from the Framer portfolio.
          </p>

          <div className="mt-10">
            <ProjectsGrid projects={projects} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
