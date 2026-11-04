"use client";

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { ProductWithVariants } from "@/features/products/product.service";


export function ProductCard({ product }: { product: ProductWithVariants }) {
  const formattedPrice = product.basePrice.toLocaleString('en-US');
  
  return (
    <Link href={`/product/${product.slug}`} className="group block focus-visible:outline-none">
      <Card className="h-full pt-0 pb-1 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex h-full flex-col p-0">
          {/* Image — fixed aspect so every card is the same height */}
          <div className="relative aspect-[5/5] w-full overflow-hidden bg-muted">
            <Image
              src={product.colors[0]?.images[0] ?? "/https://picsum.photos/id/870/536/354?grayscale&blur=2"}
              alt={product.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col gap-1.5 p-4">
            <h3 className="line-clamp-2 text-sm font-medium text-foreground ">
              {product.title}
            </h3>

            <div className="mt-auto flex items-center justify-between pt-2">
              <p className="text-lg font-medium text-foreground">Rs {formattedPrice}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
