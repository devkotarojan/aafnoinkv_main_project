export default function ShopLoading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Shop banner skeleton */}
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="h-4 w-24 animate-pulse rounded bg-muted-foreground/20" />

          <div className="mt-3 h-9 w-full max-w-2xl animate-pulse rounded-md bg-muted-foreground/20 sm:h-11 lg:h-12" />

          <div className="mt-4 space-y-2">
            <div className="h-4 w-full max-w-xl animate-pulse rounded bg-muted-foreground/15" />
            <div className="h-4 w-4/5 max-w-md animate-pulse rounded bg-muted-foreground/15" />
          </div>
        </div>
      </section>

      {/* Product grid skeleton */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="min-w-0">
                {/* Product image */}
                <div className="aspect-square animate-pulse rounded-xl bg-muted-foreground/20" />

                {/* Product details */}
                <div className="mt-4 space-y-3">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-muted-foreground/20" />

                  <div className="h-4 w-1/3 animate-pulse rounded bg-muted-foreground/15" />

                  <div className="h-4 w-1/4 animate-pulse rounded bg-muted-foreground/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
