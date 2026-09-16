"use client";

import { useEffect, useState } from "react";

/** Bare local time in Kigali, updated every 30s. No SSR mismatch: renders
 * nothing until mounted. */
export function LiveTime({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    function update() {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Kigali",
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date()),
      );
    }
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return <span className={className}>{time}</span>;
}
