import { DesignCard } from "@/components/inspiration/design-card";
import { designs } from "@/data/designs";

export default function InspirationPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner */}
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium text-primary">AafnoInk Inspiration</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Designs to spark your next idea.
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Browse ready-made designs from our community. See one you like, hit
            Use design, and make it yours.
          </p>
        </div>
      </section>

      {/* Designs grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {designs.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
