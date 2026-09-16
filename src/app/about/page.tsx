import { SiteNav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";
import { experience } from "@/lib/site-data";

/* ------------------------------------------------------------------ */
/*  EDIT ME                                                             */
/* ------------------------------------------------------------------ */
const hero = {
  bio:
    "I'm a Design Engineer who bridges product design and software engineering to " +
    "build scalable, intuitive digital products. With 5+ years of design experience " +
    "and a software engineering background, I work across product systems, frontend " +
    "development, and AI-powered workflows — turning complex problems into " +
    "thoughtful, functional experiences across fintech, healthtech, legaltech, " +
    "logistics, and digital services.",
  currently: "Designing products, building things, and looking for interesting problems to solve.",
};

const story = {
  career: [
    "In 2019, I started at Prince Graphic Concepts, developing visual identities and " +
      "brand assets across Lagos, before moving into product design in 2022, taking " +
      "on freelance and contract work with early-stage startups spanning EdTech, " +
      "crypto, NGO platforms, and digital services.",
    "From 2023 to 2026, I studied Software Engineering at African Leadership " +
      "University in Kigali, graduating as the best graduating student. It gave me " +
      "a technical foundation that shapes how I design, building with " +
      "implementation and scalability in mind, not just aesthetics.",
    "Since 2024, I've led design on Consumatech's Inhlanyelo eFranchise Platform for " +
      "UNISA, built Zidify's fintech savings platform from scratch as Founding " +
      "Product Designer, and worked as an AI Product & Automation Designer at a " +
      "stealth legaltech startup in Dubai, designing workflows around behavioral " +
      "analytics and AI-assisted systems.",
    "Today, I'm building and deploying AI-powered products and workflows, bringing " +
      "together six years of visual craft, product thinking, software engineering, " +
      "and analytics into one practice focused on turning complex ideas into " +
      "intuitive, intelligent, production-ready experiences.",
  ],
  bioPara2:
    "Outside of design and building, you'll probably find me watching Arsenal stress " +
    "me for 90 minutes, reading about behavioral psychology, keeping up with the " +
    "Apple ecosystem, or getting far too competitive during a card game.",
};

const stats = [
  { value: "40+", label: "Projects done" },
  { value: "6+", label: "Years of experience" },
  { value: "50k", label: "Users impacted" },
  { value: "99%", label: "Happy clients" },
];

// TODO(Ademola): these are placeholders — drop your real photos in
// public/about/ (e.g. photo-1.jpg … photo-6.jpg) and swap the `src` below for
// an <Image> per tile, same as the header headshot.
const photoCount = 6;

const howIWork = [
  {
    title: "Make the hard part real early.",
    description:
      "I prototype the difficult interaction before polishing the easy screens. " +
      "The browser is part of the design process, not merely its destination.",
  },
  {
    title: "Design the system, not the screenshot.",
    description:
      "Components, content and edge cases are considered together so the " +
      "finished product stays coherent after the first release.",
  },
  {
    title: "Ship the whole thought.",
    description:
      "I move between product logic, interaction design and frontend code so " +
      "the intent survives implementation.",
  },
];

// Skills that read as both a designer's and a developer's — no separate "design
// skills" / "dev skills" split.
const skills = [
  "Product Design",
  "Design Systems",
  "Prototyping",
  "Interaction Design",
  "UX Research",
  "Frontend Engineering",
  "React & Next.js",
  "TypeScript",
  "Tailwind CSS",
  "API Integration",
  "Product Analytics",
  "AI Workflow Automation",
  "Design-to-Code Handoff",
  "Accessibility",
];

const certifications = [
  { title: "Claude AI Courses", issuer: "Anthropic", date: "2026" },
  {
    title: "Artificial Intelligence Micro-Certification (AIC)™️",
    issuer: "Product School",
    date: "April 2026",
  },
  {
    title: "Product Analytics Certification",
    issuer: "Pendo x Mind the Product",
    date: "March 2026",
  },
  {
    title: "HTML, CSS & Javascript Bootcamp",
    issuer: "DEV & Design",
    date: "August 2024",
  },
  {
    title: "Google Professional UX Design Certification",
    issuer: "Coursera",
    date: "September 2023",
  },
  {
    title: "Complete Web & Mobile Designer",
    issuer: "Udemy",
    date: "December 2022",
  },
  {
    title: "Complete UI/UX Design Course for all Levels",
    issuer: "aptlearn",
    date: "December 2022",
  },
];
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-zinc-900 sm:text-xl sm:leading-9">
            {hero.bio}
          </p>
          <p className="mt-6 text-lg text-zinc-500">
            <span className="font-semibold text-zinc-900">Currently:</span>{" "}
            {hero.currently}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-medium text-zinc-900">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip — infinite auto-scroll, bigger tiles, placeholders until real photos are supplied */}
      <section className="overflow-hidden bg-white py-14">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max animate-[marquee_42s_linear_infinite] gap-2 motion-reduce:animate-none">
            {Array.from({ length: photoCount * 2 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-[4/3] w-[520px] shrink-0 items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 text-sm text-zinc-400"
              >
                Photo — TBD
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The story */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {story.career.map((paragraph, i) => (
            <p
              key={i}
              className={`text-lg leading-8 text-zinc-500 ${i > 0 ? "mt-5" : ""}`}
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-5 text-lg leading-8 text-zinc-500">{story.bioPara2}</p>

          {/* Experience */}
          <h2 className="mt-16 text-2xl font-medium text-zinc-900">
            Experience
          </h2>
          <ul className="mt-6 divide-y divide-zinc-100">
            {experience.map((job) => (
              <li
                key={`${job.role}-${job.company}`}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4 first:pt-0"
              >
                <div>
                  <p className="text-base font-semibold text-zinc-900">{job.role}</p>
                  <p className="text-sm text-zinc-500">{job.company}</p>
                </div>
                <span className="shrink-0 text-sm text-zinc-400">{job.period}</span>
              </li>
            ))}
          </ul>

          {/* How I work — numbered panel */}
          <h2 className="mt-16 text-2xl font-medium text-zinc-900">How I Work</h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-200">
            {howIWork.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 border-b border-zinc-200 p-6 last:border-b-0 sm:flex-row sm:gap-8 sm:p-8"
              >
                <span className="shrink-0 font-mono text-sm text-zinc-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-base font-semibold text-zinc-900">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Skills — tags */}
          <h2 className="mt-16 text-2xl font-medium text-zinc-900">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200 px-3.5 py-1.5 text-sm text-zinc-600"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Bootcamps and Certifications — list, same pattern as Experience */}
          <h2 className="mt-16 text-2xl font-medium text-zinc-900">
            Bootcamps and Certifications
          </h2>
          <ul className="mt-6 divide-y divide-zinc-100">
            {certifications.map((cert) => (
              <li
                key={cert.title}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4 first:pt-0"
              >
                <div>
                  <p className="text-base font-semibold text-zinc-900">{cert.title}</p>
                  <p className="text-sm text-zinc-500">{cert.issuer}</p>
                </div>
                <span className="shrink-0 text-sm text-zinc-400">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
