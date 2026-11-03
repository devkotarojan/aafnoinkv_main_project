'use client';
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest: string},
  reset: () => void,
}

export default function ShopError({error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-bold">
        Something went wrong!
      </h2>

      <p className="text-muted-foreground">
        We couldn&apos;t load the products. Please try again.
      </p>

      <Button onClick={reset}>
        Try Again
      </Button>
    </div>
  )
}