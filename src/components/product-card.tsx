"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ProductCardData {
  id: string;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isPopular?: boolean;
}

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <Link href={product.href} className="group block focus-visible:outline-none">
      <Card className="h-full pt-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex h-full flex-col p-0">
          {/* Image — fixed aspect so every card is the same height */}
          <div className="relative aspect-[5/5] w-full overflow-hidden bg-muted">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {(product.isNew || product.isPopular) && (
              <Badge
                className="absolute right-3 top-3 shadow-sm"
                variant={product.isNew ? "default" : "secondary"}
              >
                {product.isNew ? "New" : "Popular"}
              </Badge>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col gap-1.5 p-4">
            <h3 className="line-clamp-1 text-sm font-medium text-foreground">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground">{product.color}</p>

            <div className="mt-auto flex items-center justify-between pt-2">
              <p className="text-sm font-semibold text-foreground">{product.price}</p>
              <div className="flex items-center gap-1">
                <Star className="size-3.5 fill-primary text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({product.reviewCount})
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
