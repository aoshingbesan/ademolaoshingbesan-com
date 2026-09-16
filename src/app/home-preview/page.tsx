import Image from "next/image";
import { LiveTime } from "./local-clock";
import { SiteNav } from "./nav";
import { SiteFooter } from "./footer";
import { site } from "./site-data";

/* ------------------------------------------------------------------ */
/*  EDIT ME — Home-page-only content                                   */
/* ------------------------------------------------------------------ */
const home = {
  tagline: "Product Designer and Design Engineer.",
  bioPara1:
    "With 5+ years of design experience and a Software Engineering " +
    "background. I work across product strategy, UX, interaction design, design " +
    "systems, and frontend development to turn complex ideas into intuitive, " +
    "production-ready products.",
  companies: [
    { name: "Design Lever Inc", url: "https://www.designleverinc.com/" },
    { name: "Zidify", url: "https://www.zidify.com/" },
    { name: "Consumatech", url: "https://consumatech.com/" },
  ],
  // Number of placeholder tiles to loop through the marquee (doubled for the
  // seamless-scroll trick). Swap for real project covers later.
  marqueeCount: 4,
};

const featuredProjects = [
  {
    title: "Featured Project One — [TODO]",
    category: "Product Design",
    year: "2025",
    description:
      "Placeholder — swap in your strongest case study once real write-ups are " +
      "migrated from the Framer portfolio.",
  },
  {
    title: "Featured Project Two — [TODO]",
    category: "AI Automation",
    year: "2025",
    description:
      "Placeholder — swap in your strongest case study once real write-ups are " +
      "migrated from the Framer portfolio.",
  },
  {
    title: "Featured Project Three — [TODO]",
    category: "Web",
    year: "2024",
    description:
      "Placeholder — swap in your strongest case study once real write-ups are " +
      "migrated from the Framer portfolio.",
  },
  {
    title: "Featured Project Four — [TODO]",
    category: "Product Design",
    year: "2024",
    description:
      "Placeholder — swap in your strongest case study once real write-ups are " +
      "migrated from the Framer portfolio.",
  },
];

// Real testimonials — quotes as given, verbatim.
const testimonials = [
  {
    quote:
      "Ademola is an exceptional UI/UX Designer. He is a focused and hardworking " +
      "designer who loves to create and deliver top notch and quality works. I " +
      "definitely recommend him for any company or project.",
    name: "Oreoluwa Ayo-Fisher",
    role: "Founder @ Break Into Tech",
  },
  {
    quote:
      "Ademola's enthusiasm for design was palpable, and his dedication added " +
      "immense value to our project. Beyond his technical skills, he proved to be " +
      "an excellent communicator and a supportive team member.",
    name: "Esther Akashie",
    role: "Freelancer",
  },
  {
    quote:
      "Ademola was responsible for promoting Aquila Studio's brand through various " +
      "marketing and communication channels, both internally and externally. He is " +
      "an exceptional designer who possesses all the skills one would want in an " +
      "excellent product designer. He understands the different processes of " +
      "designs that suit various projects from the process of figuring out how to " +
      "visually represent the components, state changes, and interactions that a " +
      "user will face when they interact with the designs.",
    name: "Aquila Adegbola",
    role: "CEO, Aquila Studio",
  },
];

// Scattered across a 3x2 grid — empty cells are deliberate (matches the
// reference), not a mistake.
const testimonialSlots = [null, testimonials[0], null, testimonials[1], null, testimonials[2]];
/* ------------------------------------------------------------------ */

const quietLink =
  "underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900";

function ArrowUpRightSmall() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function HomePreview() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteNav />

      {/* ---------------------------------------------------------- */}
      {/* HERO — quiet, letter-style (abatisamuel.pro reference)      */}
      {/* ---------------------------------------------------------- */}
      <section className="border-b border-zinc-100 bg-white px-6 py-14 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-200">
                <Image
                  src={site.photo}
                  alt={site.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-2xl font-medium leading-tight text-zinc-900">
                  {site.name}
                </p>
                <p className="mt-0.5 text-sm text-zinc-500">
                  also known as {site.popularKnownAs}
                </p>
              </div>
            </div>

            <div className="text-right">
              <LiveTime className="block text-sm text-zinc-500" />
              <a
                href={`mailto:${site.email}`}
                className={`mt-1 inline-flex items-center gap-1 text-sm text-zinc-600 ${quietLink}`}
              >
                {site.email}
                <ArrowUpRightSmall />
              </a>
            </div>
          </div>

          <p className="mt-10 text-xl font-medium leading-8 text-zinc-900">{home.tagline}</p>

          <p className="mt-5 text-lg leading-8 text-zinc-500">{home.bioPara1}</p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-900">
            <span className="font-semibold">Clients:</span>{" "}
            {home.companies.map((company, i) => (
              <span key={company.name} className="text-zinc-500">
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={quietLink}
                >
                  {company.name}
                </a>
                {i < home.companies.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* LATEST PORTFOLIO — infinite marquee, links out to /projects  */}
      {/* ---------------------------------------------------------- */}
      <section className="overflow-hidden border-b border-zinc-100 bg-white py-14">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max animate-[marquee_34s_linear_infinite] gap-6 motion-reduce:animate-none">
            {Array.from({ length: home.marqueeCount * 2 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-video w-[560px] shrink-0 items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 text-sm text-zinc-400"
              >
                Cover — TBD
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* FEATURED PROJECT                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="border-b border-zinc-100 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold text-indigo-600">Featured</p>

          <div className="mt-6 grid grid-cols-1 gap-y-12">
            {featuredProjects.map((project) => (
              <div key={project.title}>
                <div className="flex aspect-video items-center justify-center rounded-[28px] border border-dashed border-zinc-300 bg-zinc-50 text-sm text-zinc-400">
                  Cover — TBD
                </div>

                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-xl font-medium text-zinc-900">
                    {project.title.replace(" — [TODO]", "")}
                  </h3>
                  <span className="text-sm text-zinc-400">
                    {project.category} · {project.year}
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-6 text-zinc-500">
                  {project.description}
                </p>
                <a
                  href="/home-preview/projects"
                  className={`mt-3 inline-block text-sm font-medium text-zinc-900 ${quietLink}`}
                >
                  Read Case Study →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* TESTIMONIALS                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="border-b border-zinc-100 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="max-w-md text-2xl font-medium leading-9 text-zinc-900 sm:text-3xl sm:leading-10">
            Trusted by people and teams across the globe.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3 sm:auto-rows-[22rem]">
            {testimonialSlots.map((t, i) =>
              t ? (
                <div
                  key={i}
                  className="flex h-full flex-col justify-between overflow-hidden bg-white p-6 sm:p-8"
                >
                  <p className="line-clamp-6 text-[15px] leading-6 text-zinc-600">
                    {t.quote}
                  </p>
                  <div>
                    <p className="text-sm font-medium text-zinc-900">{t.name}</p>
                    <p className="text-xs text-zinc-400">{t.role}</p>
                  </div>
                </div>
              ) : (
                <div key={i} className="hidden h-full bg-zinc-50/60 sm:block" />
              ),
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
