"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleDollarSign,
  Image as ImageIcon,
  Palette,
  Shirt,
  Sparkles,
  Truck,
  Upload,
} from "lucide-react";

const benefits = [
  {
    icon: ImageIcon,
    title: "Preview Before You Print",
    description: "See your idea before it becomes merch.",
  },
  {
    icon: BadgeCheck,
    title: "Made to Last",
    description: "Quality prints you'll actually want to wear.",
  },
  {
    icon: CircleDollarSign,
    title: "Straightforward Pricing",
    description: "No confusing surprises at checkout.",
  },
  {
    icon: Truck,
    title: "Delivered to You",
    description: "From our print table to your doorstep.",
  },
];

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Drop your idea",
    description:
      "Upload your artwork, logo, photo, or anything you want to turn into merch.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Play with it",
    description:
      "Choose your product, place your design, and see your idea come to life.",
  },
  {
    number: "03",
    icon: Shirt,
    title: "Make it real",
    description:
      "Once you're happy with it, we'll handle the printing and the rest.",
  },
];

const products = [
  {
    title: "T-Shirts",
    label: "THE EVERYDAY CANVAS",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=90",
  },
  {
    title: "Hoodies",
    label: "COMFORT, YOUR WAY",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=90",
  },
  {
    title: "Tote Bags",
    label: "TAKE YOUR IDEAS OUT",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=90",
  },
];

export function Hero() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="relative isolate">
        {/* Soft background atmosphere */}
        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[550px] w-[550px] rounded-full bg-primary/[0.045] blur-3xl" />



        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-5 px-6 py-10 sm:px-10 sm:py-11 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:px-16 mt-0">
          {/* Hero content */}
          <div className="relative z-20 flex flex-col items-start lg:-translate-y-3">
            <h1 className="max-w-[680px] text-[clamp(3rem,6vw,4.7rem)] font-extrabold leading-[0.95] tracking-[-0.07em]">
              Your Design.
              <br />
              Your Merch.
              <br />
              <span className="text-primary">Made Easy.</span>
            </h1>

            <p className="mt-7 max-w-[480px] text-base leading-8 text-muted-foreground sm:text-lg">
              Turn the ideas sitting in your head into something you can
              actually wear. Custom merch made around your creativity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/design"
                className="group inline-flex h-14 items-center gap-3 rounded-xl bg-primary px-7 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Start Designing
              </Link>

              <Link
                href="/shop"
                className="inline-flex h-14 items-center rounded-xl border border-border bg-card px-6 text-sm font-semibold transition-all duration-300 hover:bg-primary/[0.02]"
              >
                Explore Products
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-[#E9D7C5] text-xs font-bold text-[#654B37]">
                  I
                </div>
                <div className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-[#D7E0D1] text-xs font-bold text-[#40513C]">
                  N
                </div>
                <div className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-[#E8D5D8] text-xs font-bold text-[#724B55]">
                  K
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold">
                  Made for your kind of creativity
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Your Design. Your Wear.
                </p>
              </div>
            </div>
          </div>

          {/* Hero visual composition */}
          <div className="relative mx-auto h-[480px] w-full max-w-[650px] sm:h-[540px] lg:h-[580px] lg:-translate-y-4">
            
            {/*Blobs */}
            <div className="absolute inset-x-0 top-[6%] h-[84%] rotate-[-18deg] rounded-[42%_58%_35%_65%/_40%_55%_45%_60%] bg-[#F1ECE3] dark:bg-primary/5" />

            <div className="absolute bottom-[10%] left-[8%] size-12 animate-pulse-soft rounded-full bg-primary/10"/>

            <div className="absolute left-[7%] top-[0%] z-20 -rotate-12">
              <p className="font-sans text-sm leading-tight italic sm:text-base">
                Made from
                <br />
                your imagination.
              </p>
  
              <svg
                viewBox="0 0 75 55"
                fill="none"
                className="ml-7 mt-1 w-14"
              >
                <path
                  d="M4 3C27 10 44 27 53 48M53 48L40 39M53 48L58 33"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Main product */}
            <div className="absolute left-[12%] top-[12%] z-10 h-[74%] w-[72%] overflow-hidden rounded-2xl bg-[#E7E2D8] shadow-[0_25px_70px_rgba(0,0,0,0.14)] transition-transform duration-700 hover:rotate-[1deg] dark:bg-carda -rotate-3">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000&q=90"
                alt="Custom T-shirt"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-secondary/35 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-secondary-foreground backdrop-blur-md">
                YOUR DESIGN, YOUR WEAR
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute right-[1%] top-[3%] z-20 w-[32%] rotate-[7deg] animate-float-slow rounded-xl border-[6px] border-background bg-background p-1 shadow-xl transition-transform duration-700 hover:rotate-[-1deg]">
              <img
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=85"
                alt="Custom hoodie"
                className="aspect-[4/5] w-full rounded-sm object-cover "
              />
              <p className="px-2 py-2 text-center text-[9px] font-bold tracking-[0.15em] text-foreground">
                HOODIES
              </p>
            </div>

            <div className="absolute right-[-1%] top-[39%] z-20 w-[30%] -rotate-[6deg] animate-float-delayed rounded-xl border-[6px] border-background bg-background p-1 shadow-xl transition-transform duration-700 hover:rotate-[-1deg]">
              <img
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=85"
                alt="Custom tote bag"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <p className="px-2 py-2 text-center text-[9px] font-bold tracking-[0.15em] text-foreground">
                TOTE BAGS
              </p>
            </div>

            <div className="absolute left-[1%] top-[36%] z-10 flex -rotate-45 flex-col gap-3">
              <span className="h-1 w-9 rounded-full bg-primary" />
              <span className="ml-3 h-1 w-7 rounded-full bg-primary" />
              <span className="ml-5 h-1 w-5 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BENEFITS
      ============================================================ */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex items-center gap-4 py-7 transition-colors sm:px-5 ${
                  index !== 0
                    ? "border-t border-border sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 hover:scale-110">
                  <Icon className="size-5 text-primary" />
                </div>

                <div>
                  <h2 className="text-sm font-bold">{benefit.title}</h2>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          CREATIVE MANIFESTO
      ============================================================ */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-[22vw] font-black leading-none tracking-[-0.09em] text-foreground/[0.025]">
          YOURS
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Visual */}
            <div className="relative mx-auto h-[440px] w-full max-w-[520px] sm:h-[500px]">
              <div className="absolute inset-[7%] rotate-6 rounded-[2.5rem] bg-primary/10 animate-float-slow" />

              <div className="absolute left-[4%] top-[8%] h-[70%] w-[72%] overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1000&q=90"
                  alt="Creative fashion"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="absolute right-[2%] top-[12%] flex size-22 animate-float-delayed rotate-12 flex-col items-center justify-center rounded-full bg-primary text-center text-primary-foreground shadow-xl">
                <Sparkles className="size-6" />
                <span className="mt-1 text-[10px] font-black leading-tight">
                  MADE
                  <br />
                  BY YOU
                </span>
              </div>

              <div className="absolute bottom-[4%] right-[5%] max-w-[210px] -rotate-3 rounded-2xl border border-border bg-background p-5 shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <p className="text-xs font-bold text-primary">NO BORING MERCH.</p>
                <p className="mt-2 text-sm font-semibold leading-6">
                  Express yourself with what you wear
                </p>
              </div>

            </div>

            {/* Text */}
            <div className="lg:pl-10">

              <h2 className="mt-7 max-w-2xl text-4xl font-extrabold leading-[1.03] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                The best things
                <span className="text-primary">
                  {" "}don&apos;t look like everyone else&apos;s.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                AafnoInk is built to turn your ideas into reality. Make your memory a part of your everyday life.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  "Made around your creativity",
                  "Preview before you print",
                  "Products you'll actually wear",
                  "Simple from start to finish",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Check className="size-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS
      ============================================================ */}
      <section className="relative overflow-hidden border-y border-border bg-[#F5F2EC] py-24 dark:bg-card/30 lg:py-32">

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">

              <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
                Three steps.
                <br />
                <span className="text-primary">One very personal result.</span>
              </h2>
            </div>

            <p className="max-w-sm text-base leading-7 text-muted-foreground">
              We made the process simple so you can spend less time figuring
              things out and more time making something cool.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`group relative overflow-hidden rounded-[1.75rem] border border-border bg-background p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                    index === 1 ? "md:translate-y-8" : ""
                  }`}
                >

                  <div className="relative flex items-center justify-between">
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:rotate-6">
                      <Icon className="size-6" />
                    </div>

                    <span className="text-xl font-black tracking-[0.15em] text-primary">
                      {step.number}
                    </span>
                  </div>

                  <div className="relative mt-10">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative mt-8 h-px w-full overflow-hidden bg-border">
                    <div className="absolute inset-y-0 left-0 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          PICK YOUR CANVAS — LIGHT & WARM
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#F8F6F1] py-24 dark:bg-background lg:py-32">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-24 top-10 size-80 animate-float-slow rounded-full border border-primary/10" />
        <div className="pointer-events-none absolute left-[7%] top-[48%] text-primary/50 animate-float">
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">

              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Start with something
                <br />
                <span className="text-primary">worth making yours.</span>
              </h2>
            </div>

            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore the collection
              <span className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Product cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Link
                key={product.title}
                href="/shop"
                className={`group relative min-h-[300px] overflow-hidden rounded-2xl border border-border/70 bg-background shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute right-5 top-5 rounded-full bg-background/80 px-2.5 py-1 text-[9px] font-bold tracking-[0.18em] text-foreground backdrop-blur-sm">
                  0{index + 1}
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.2em] text-primary">
                      {product.label}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {product.title}
                    </h3>
                  </div>

                  <div className="flex size-9 items-center justify-center rounded-full bg-background text-foreground transition-all duration-300 group-hover:-rotate-45 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="relative px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-16 text-primary-foreground shadow-xl shadow-primary/10 sm:px-12 lg:px-20 lg:py-20">
            <div className="absolute -left-20 -top-20 size-64 animate-float-slow rounded-full border-[30px] border-white/10" />
            <div className="absolute -bottom-28 -right-16 size-80 animate-pulse-soft rounded-full border-[45px] border-white/10" />
            <div className="absolute right-[13%] top-10 rotate-12 text-7xl text-white/10 animate-float">
              ✦
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">
              <div className="max-w-3xl">

                <h2 className="mt-7 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                  That idea in your head?
                  <br />
                  Let&apos;s put it on something.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-primary-foreground/80 sm:text-lg">
                  Don&apos;t save it for later. Open the canvas, play around, and
                  make something that feels completely yours.
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 lg:items-end">
                <Link
                  href="/design"
                  className="group inline-flex h-14 items-center gap-3 rounded-xl bg-background px-7 text-sm font-bold text-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Start Creating
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}