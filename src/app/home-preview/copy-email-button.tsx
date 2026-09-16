"use client";

import { useState } from "react";

export function CopyEmailButton({
  email,
  className = "",
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — fall back to a mailto so it still works.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
