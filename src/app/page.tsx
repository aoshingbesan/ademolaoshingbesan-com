import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { ServicesCarousel } from "./services-carousel";

/* ------------------------------------------------------------------ */
/*  EDIT ME — all page content lives here                             */
/* ------------------------------------------------------------------ */
const site = {
  name: "Ademola Oshingbesan",
  role: "Design Engineer",
  about:
    "I'm a Design Engineer who bridges product design and software engineering to build " +
    "scalable, intuitive digital products. With 5+ years of design experience and a software " +
    "engineering background, I work across product systems, frontend development, and " +
    "AI-powered workflows — turning complex problems into thoughtful, functional experiences " +
    "across fintech, healthtech, legaltech, logistics, and digital services.",
  email: "adeoluwaademola245@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/ademola-oshingbesan-87548121b/",
  photo: "/Ademola_OshingbesanHeadshot.png",
  links: [
    { label: "Framer", url: "https://ademolaoshingbesan.framer.website/" },
    { label: "Dribbble", url: "https://dribbble.com/Adeoluwa245" },
    { label: "Behance", url: "https://www.behance.net/ademolaoshingbesan" },
    { label: "Contra", url: "https://contra.com/oshingbesan_ademola_y96aakt1" },
  ],
  experience: [
    {
      role: "AI Product & Automation Designer",
      company: "B2B Legal Tech Stealth Startup",
      period: "2025",
    },
    {
      role: "Founding Product Designer (Part-Time)",
      company: "Zidify",
      period: "2024 – Present",
    },
    {
      role: "Product Designer",
      company: "Consumatech Solutions",
      period: "2024 – 2025",
    },
    {
      role: "Product Designer",
      company: "Freelance & Contract",
      period: " 2022 – 2023",
    },
    {
      role: "Visual & Brand Designer",
      company: "Prince Graphic Concepts",
      period: " 2019 – 2022",
    },
  ],
  services: [
    {
      title: "Product design",
      description:
        "End-to-end design for apps, dashboards, and platforms — research, flows, and polished, shippable UI.",
    },
    {
      title: "Design systems & frontend",
      description:
        "Component libraries and production frontend in React and Next.js that keep design and code in sync.",
    },
    {
      title: "AI workflows & automation",
      description:
        "Designing and building AI-powered workflows with tools like n8n, Zapier, and the Claude API.",
    },
    {
      title: "Framer sites",
      description:
        "Turning Figma designs into fast, editable Framer portfolios and landing pages.",
    },
  ],
};
/* ------------------------------------------------------------------ */

const ACCENT = "#2f6fed";

function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
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

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
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
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

const BRAND_ICONS: Record<string, React.ReactNode> = {
  Framer: <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />,
  Dribbble: (
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
  ),
  Behance: (
    <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
  ),
  Contra: (
    <>
      <rect x="10" y="2" width="4" height="20" rx="2" />
      <rect x="10" y="2" width="4" height="20" rx="2" transform="rotate(60 12 12)" />
      <rect x="10" y="2" width="4" height="20" rx="2" transform="rotate(120 12 12)" />
    </>
  ),
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="w-fit self-start rounded-full px-3 py-1 text-xs font-semibold text-white"
      style={{ backgroundColor: ACCENT }}
    >
      {children}
    </span>
  );
}

const card =
  "flex min-h-0 flex-col overflow-hidden rounded-[28px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-16px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04] dark:ring-white/10 sm:p-6";

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden px-4 py-6 sm:px-6 lg:flex lg:h-full lg:flex-1 lg:items-center lg:justify-center lg:px-8 lg:py-8">
      <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 gap-3 md:grid-cols-2 lg:h-full lg:grid-cols-4 lg:grid-rows-[1.25fr_1fr_1fr] lg:[grid-auto-flow:dense]">
        {/* About */}
        <section
          className={`${card} order-3 bg-white dark:bg-zinc-900 md:order-none md:col-span-2`}
        >
          <Pill>About</Pill>
          <p className="mt-4 text-sm leading-6 text-zinc-900 dark:text-zinc-100 sm:text-base sm:leading-7">
            {site.about}
          </p>
        </section>

        {/* Photo */}
        <section
          className={`${card} order-2 items-center justify-center gap-3 bg-white text-center dark:bg-zinc-900 md:order-none`}
        >
          <div className="relative h-44 w-44 shrink-0">
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite] text-zinc-400 dark:text-zinc-500"
            >
              <defs>
                <path
                  id="badge-circle"
                  d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                />
              </defs>
              <text className="fill-current text-[12px] font-semibold uppercase tracking-[0.28em]">
                <textPath href="#badge-circle" startOffset="0">
                  Available for work • Available for work •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-[24px] overflow-hidden rounded-full bg-stone-100 dark:bg-zinc-800">
              <Image
                src={site.photo}
                alt={site.name}
                fill
                sizes="180px"
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {site.name}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{site.role}</p>
          </div>
        </section>

        {/* Under construction */}
        <section
          className={`${card} order-1 flex flex-col bg-[#f7f7f4] dark:bg-zinc-900 md:order-none`}
        >
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white dark:bg-white dark:text-black">
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </span>
            Under construction
          </span>
          <p className="mt-4 text-lg font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
            A new portfolio is on the way. Reach out in the meantime.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        {/* LinkedIn */}
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${card} group order-6 flex min-h-[190px] flex-col justify-between bg-[#f0f4f8] transition-transform hover:-translate-y-0.5 dark:bg-zinc-900 md:order-none`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-11 w-11 text-[#0a66c2]"
            aria-hidden
          >
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
          <span className="flex items-center justify-between">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              LinkedIn
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-zinc-900 shadow-sm ring-1 ring-black/5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-white/10">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </span>
        </a>

        {/* Experience */}
        <section
          className={`${card} order-5 flex flex-col bg-white dark:bg-zinc-900 md:order-none md:col-span-2 lg:row-span-2`}
        >
          <Pill>Experience</Pill>
          <ul className="mt-4 divide-y divide-black/[0.06] dark:divide-white/10">
            {site.experience.map((job, i) => (
              <li
                key={i}
                className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
              >
                <div className="min-w-0">
                  <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {job.role}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {job.company}
                  </p>
                </div>
                <span className="shrink-0 text-right text-sm text-zinc-500 dark:text-zinc-400">
                  {job.period}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex justify-center pt-4">
            <ThemeToggle />
          </div>
        </section>

        {/* Links */}
        <section
          className={`${card} order-7 flex flex-col bg-[#f6f5f3] dark:bg-zinc-900 md:order-none lg:row-span-2`}
        >
          <Pill>Elsewhere</Pill>
          <ul className="mt-5 flex flex-1 flex-col justify-between divide-y divide-black/[0.06] dark:divide-white/10">
            {site.links.map((link, i) => (
              <li key={i} className="flex-1">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex h-full items-center justify-between gap-4 py-6 lg:py-4 lg:first:pt-0 lg:last:pb-0"
                >
                  <span className="flex items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-zinc-900 dark:text-zinc-100"
                      aria-hidden
                    >
                      {BRAND_ICONS[link.label]}
                    </svg>
                    <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {link.label}
                    </span>
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-zinc-900 shadow-sm ring-1 ring-black/5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-white/10">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section
          className={`${card} order-4 bg-white dark:bg-zinc-900 md:order-none`}
        >
          <Pill>Services</Pill>
          <ServicesCarousel services={site.services} />
        </section>
      </div>
    </div>
  );
}
