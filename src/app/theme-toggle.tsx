"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function set(next: boolean) {
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  const btn =
    "grid h-8 w-8 place-items-center rounded-full transition-colors";
  const active = "bg-white text-black shadow-sm dark:bg-zinc-700 dark:text-white";
  const idle = "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200";

  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-black/5 p-1 dark:bg-white/10">
      <button
        type="button"
        aria-label="Light mode"
        aria-pressed={dark === false}
        onClick={() => set(false)}
        className={`${btn} ${dark === false ? active : idle}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Dark mode"
        aria-pressed={dark === true}
        onClick={() => set(true)}
        className={`${btn} ${dark === true ? active : idle}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </button>
    </div>
  );
}
