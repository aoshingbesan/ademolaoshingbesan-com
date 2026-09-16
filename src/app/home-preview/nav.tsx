"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/home-preview" },
  { label: "About", href: "/home-preview/about" },
  { label: "Projects", href: "/home-preview/projects" },
  { label: "Experiments", href: "/home-preview/experiments" },
  { label: "Visuals", href: "/home-preview/visuals" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-6 text-zinc-700 sm:px-10">
      <Link href="/home-preview" className="text-sm font-semibold text-zinc-900">
        AO
      </Link>
      <div className="hidden items-center gap-8 text-sm sm:flex">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <a
        href="#contact"
        className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:opacity-85"
      >
        Let&rsquo;s talk
      </a>
    </nav>
  );
}
