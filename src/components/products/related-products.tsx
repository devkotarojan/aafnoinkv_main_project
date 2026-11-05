import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

import { ProductCard } from "@/components/products/product-card";
import { getRelatedProducts } from "@/features/products/product.service";

export async function RelatedProducts({
  productSlug,
  title = "You might also like",
}: {
  productSlug: string,
  title?: string;
}) {
  const products = await getRelatedProducts(productSlug);
  
  return (
  <section className="bg-background py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <Button asChild variant="link" className="hidden sm:block group gap-2 text-foreground">
          <Link href="/shop">
            View all
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>

      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <Button asChild variant="link" className="md:hidden group gap-2 text-foreground">
          <Link href="/shop">
            View all
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
  );
}
