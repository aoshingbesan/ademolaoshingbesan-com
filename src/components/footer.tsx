import { CopyEmailButton } from "@/components/copy-email-button";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-100 bg-white px-6 py-16 sm:px-10 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Let&rsquo;s Collaborate</p>
            <h2 className="mt-3 max-w-xl text-4xl font-medium leading-tight text-zinc-900 sm:text-5xl">
              Let&rsquo;s talk about a project, collaboration or an idea you may have
            </h2>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:w-48">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-between rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
            >
              Hire Me
              <span className="h-px w-4 bg-white/50" aria-hidden />
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-300"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-zinc-100 pt-8 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">
              LinkedIn
            </a>
            <a href={site.links.framer} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">
              Framer
            </a>
            <a href={site.links.dribbble} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">
              Dribbble
            </a>
            <a href={site.links.behance} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">
              Behance
            </a>
            <a href={site.links.contra} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">
              Contra
            </a>
            <CopyEmailButton
              email={site.email}
              className="text-sm text-zinc-500 hover:text-zinc-900"
            />
          </div>
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </section>
  );
}
