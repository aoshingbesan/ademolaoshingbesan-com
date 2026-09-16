// Shared identity/contact data used across every page of the site.
// Page-specific copy (Home's hero bio, About's long-form bio, etc.) lives in
// each page's own file — this is only what's reused everywhere (nav, footer).

export const site = {
  name: "Ademola Oshingbesan",
  // TODO(Ademola): confirm this — inferred from your email/Dribbble handle
  // ("adeoluwaademola245", "Adeoluwa245"). Change or remove if wrong.
  popularKnownAs: "ADE",
  email: "adeoluwaademola245@gmail.com",
  photo: "/Ademola_OshingbesanHeadshot.png",
  // TODO(Ademola): drop your resume PDF at public/resume.pdf — this path will
  // then just work.
  resumeUrl: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/ademola-oshingbesan-87548121b/",
    framer: "https://ademolaoshingbesan.framer.website/",
    dribbble: "https://dribbble.com/Adeoluwa245",
    behance: "https://www.behance.net/ademolaoshingbesan",
    contra: "https://contra.com/oshingbesan_ademola_y96aakt1",
  },
};

export const experience = [
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
    period: "2022 – 2023",
  },
  {
    role: "Visual & Brand Designer",
    company: "Prince Graphic Concepts",
    period: "2019 – 2022",
  },
];

export const services = [
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
];
