import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

import { ProductCard } from "@/components/product-card";
import type { Product } from "@/data/products";

export function RelatedProducts({
  products,
  title = "You might also like",
}: {
  products: Product[];
  title?: string;
}) {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <Button asChild variant="link" className="group gap-2 text-foreground">
            <Link href="/shop">
              View all
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
