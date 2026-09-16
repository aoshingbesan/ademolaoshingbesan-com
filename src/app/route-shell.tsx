"use client";

import { usePathname } from "next/navigation";

/**
 * The root "/" bento page is designed to lock to exactly one viewport on
 * desktop (no scroll). Every other route should scroll normally. Since that
 * behavior lives on <body> in the shared root layout, this client wrapper
 * decides per-route whether to apply it.
 */
export function RouteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lockToViewport = pathname === "/";

  return (
    <div
      className={`flex flex-1 flex-col ${
        lockToViewport ? "lg:h-[100dvh] lg:overflow-hidden" : ""
      }`}
    >
      {children}
    </div>
  );
}
