"use client";

import { useState } from "react";
import { FaShareNodes } from "react-icons/fa6";

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Sharing can be cancelled by the user; no UI error is needed.
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center gap-2 text-[#4c9c6f] font-bold text-sm hover:underline"
      aria-label="Share this article"
    >
      <FaShareNodes aria-hidden="true" />
      {copied ? "Copied" : "Share"}
    </button>
  );
}
