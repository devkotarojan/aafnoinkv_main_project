import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CircleDollarSign,
  Image as ImageIcon,
  Truck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: ImageIcon,
    title: "Preview Before You Print",
    description: "See exactly how your design will look.",
  },
  {
    icon: BadgeCheck,
    title: "Quality You Can Feel",
    description: "Premium prints made to last.",
  },
  {
    icon: CircleDollarSign,
    title: "Honest Pricing",
    description: "Clear prices, no hidden surprises.",
  },
  {
    icon: Truck,
    title: "Delivered to Your Door",
    description: "Reliable delivery, right to you.",
  },
];

export function Hero() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative isolate">
        {/* Subtle background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[550px] w-[550px] rounded-full bg-primary/[0.045] blur-3xl"
        />

        <div className="mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:px-16 lg:py-20">
          {/* LEFT: CONTENT */}
          <div className="relative z-20 flex flex-col items-start">
            {/* Eyebrow */}

            {/* Main heading */}
            <h1 className="max-w-[650px] text-[clamp(2.9rem,6vw,4rem)] leading-[0.99] font-extrabold tracking-[-0.065em]">
              Your Design.
              <br />
              Your Merch.
              <br />
              <span className="text-primary">Made Easy.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[460px] text-base leading-8 text-muted-foreground sm:text-lg">
              Turn your ideas into something you can wear. Create custom
              T-shirts, hoodies, and more with your own artwork or designs
              from our gallery.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/design"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-primary px-7 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Start Designing
              </Link>

              <Link
                href="/shop"
                className="group inline-flex h-14 items-center gap-2 rounded-lg border border-border bg-card/70 px-6 text-sm font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-card"
              >
                Explore Catalog
              </Link>
            </div>

            {/* Small trust indicator */}
            <div className="mt-12 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-[#E9D7C5] text-xs font-bold text-[#654B37]">
                  A
                </div>
                <div className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-[#D7E0D1] text-xs font-bold text-[#40513C]">
                  D
                </div>
                <div className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-[#E8D5D8] text-xs font-bold text-[#724B55]">
                  M
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold">
                  Made for your kind of creativity
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Your style. Your statement.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT COMPOSITION */}
          <div className="relative mx-auto h-[510px] w-full max-w-[650px] sm:h-[590px] lg:h-[620px]">
            {/* Main background shape */}
            <div
              aria-hidden="true"
              className="absolute inset-x-[7%] top-[8%] h-[82%] rotate-[-5deg] rounded-[42%_25%_35%_20%] bg-[#EFEAE0] dark:bg-[#24211D]"
            />

            {/* Decorative circles */}
            <div className="absolute right-[13%] top-[7%] size-20 rounded-full border border-primary/30" />
            <div className="absolute bottom-[12%] left-[7%] size-12 rounded-full bg-primary/10" />

            {/* Small annotation */}
            <div className="absolute left-[7%] top-[2%] z-20 -rotate-12">
              <p className="font-serif text-sm leading-tight italic text-foreground sm:text-base">
                Made from
                <br />
                your imagination.
              </p>
              <svg
                viewBox="0 0 75 55"
                fill="none"
                className="ml-7 mt-1 w-14"
                aria-hidden="true"
              >
                <path
                  d="M4 3C27 10 44 27 53 48M53 48L40 39M53 48L58 33"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Main product image */}
            <div className="absolute left-[12%] top-[15%] z-10 h-[72%] w-[72%] overflow-hidden rounded-2xl bg-[#E7E2D8] shadow-[0_25px_70px_rgba(0,0,0,0.14)] transition-transform duration-700 hover:rotate-[-2deg] hover:scale-[1.02] dark:bg-[#302C27]">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000&q=90"
                alt="T-shirt merchandise"
                className="h-full w-full object-cover"
              />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-md">
                YOUR DESIGN, YOUR WAY
              </div>
            </div>

            {/* Hoodie card */}
            <div className="absolute right-[1%] top-[5%] z-20 w-[32%] rotate-[7deg] rounded-xl border-[6px] border-white bg-white p-1 shadow-xl transition-transform duration-500 hover:rotate-2 dark:border-[#3B3833] dark:bg-[#3B3833]">
              <img
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=85"
                alt="Hoodie merchandise"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <p className="px-2 py-2 text-center text-[10px] font-semibold tracking-wider text-black">
                HOODIES
              </p>
            </div>

            {/* Tote bag card */}
            <div className="absolute right-[-1%] top-[39%] z-20 w-[30%] -rotate-[6deg] rounded-xl border-[6px] border-white bg-white p-1 shadow-xl transition-transform duration-500 hover:-rotate-2 dark:border-[#3B3833] dark:bg-[#3B3833]">
              <img
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=85"
                alt="Tote bag merchandise"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <p className="px-2 py-2 text-center text-[10px] font-semibold tracking-wider text-black">
                TOTE BAGS
              </p>
            </div>

            {/* Cap card */}
            <div className="absolute bottom-[1%] right-[13%] z-20 w-[34%] rotate-[5deg] rounded-xl border-[6px] border-white bg-white p-1 shadow-xl transition-transform duration-500 hover:rotate-0 dark:border-[#3B3833] dark:bg-[#3B3833]">
              <img
                src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=85"
                alt="Cap merchandise"
                className="aspect-[5/3] w-full rounded-sm object-cover"
              />
              <p className="px-2 py-2 text-center text-[10px] font-semibold tracking-wider text-black">
                CAPS
              </p>
            </div>

            {/* Orange decorative strokes */}
            <div className="absolute left-[1%] top-[36%] z-10 flex -rotate-45 flex-col gap-3">
              <span className="h-1 w-9 rounded-full bg-primary" />
              <span className="ml-3 h-1 w-7 rounded-full bg-primary" />
              <span className="ml-5 h-1 w-5 rounded-full bg-primary" />
            </div>

            {/* Bottom annotation */}
            <div className="absolute bottom-[1%] left-[1%] z-20 rotate-[-8deg]">
              <p className="font-serif text-sm italic text-foreground sm:text-base">
                From idea
                <br />
                to everyday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative border-t border-border/70 bg-card/60">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex items-center gap-4 py-7 sm:px-5 lg:py-9 ${
                  index !== 0
                    ? "border-t border-border/70 sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="size-[22px] text-primary" strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="text-sm font-bold tracking-tight">
                    {benefit.title}
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}