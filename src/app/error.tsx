"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error caught:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center text-3xl">
          ⚠️
        </div>
        <h2 className="text-xl font-bold text-foreground">
          Oops! Something went wrong
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          We encountered an issue loading this page. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-bold text-sm rounded-xl hover:bg-amber-400 transition-colors"
        >
          🔄 Retry
        </button>
      </div>
    </div>
  );
}
