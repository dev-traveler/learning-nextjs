"use client"; // Error components must be Client components

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

// Props must be serializable for components in the "use client" entry file, "reset" is invalid.ts(71007)
// https://github.com/vercel/next.js/discussions/46795
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
