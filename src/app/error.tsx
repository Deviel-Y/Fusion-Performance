"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen bg-black px-6 text-center">
      <div className="max-w-md">
        <div className="text-6xl font-black text-[#CCFF00] font-heading mb-2">
          500
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4 font-heading">
          Something Went Wrong
        </h2>
        <p className="text-[#555555] text-sm leading-relaxed mb-8">
          An unexpected error occurred. Our team has been notified. Try
          refreshing the page or come back later.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button variant="primary" size="md" onClick={reset}>
            Try Again
          </Button>
          <Button
            variant="ghost"
            size="md"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
