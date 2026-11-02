"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { Product, ProductImage, ProductColor, ProductSize } from "@/data/products";

const FALLBACK_IMAGE: ProductImage = { src: "", alt: "" };
const FALLBACK_COLOR: ProductColor = { name: "", class: "", selectedClass: "" };
const FALLBACK_SIZE: ProductSize = { name: "", inStock: false };

const sizingChartData = [
  ["XS", "32–34", "26–28", "34–36"],
  ["S",  "34–36", "28–30", "36–38"],
  ["M",  "36–38", "30–32", "38–40"],
  ["L",  "38–40", "32–34", "40–42"],
  ["XL", "40–42", "34–36", "42–44"],
  ["XXL","42–44", "36–38", "44–46"],
];

export function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colors[0] ?? FALLBACK_COLOR
  );
  const [selectedSize, setSelectedSize] = useState<ProductSize>(
    product.sizes[2] ?? product.sizes[0] ?? FALLBACK_SIZE
  );
  const [selectedImage, setSelectedImage] = useState<ProductImage>(
    product.images[0] ?? FALLBACK_IMAGE
  );
  const [isSizingOpen, setIsSizingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/shop" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="size-3.5" />
            Back to shop
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={1067}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  aria-label={`View ${image.alt}`}
                  className={cn(
                    "relative aspect-[3/4] overflow-hidden rounded-xl transition-all",
                    selectedImage.src === image.src
                      ? "ring-2 ring-primary ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold text-foreground">{product.price}</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "size-4",
                          i < Math.round(product.rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        )}
                      />
                    ))}
                  </div>
                  <Link
                    href="#reviews"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    {product.reviewCount} reviews
                  </Link>
                </div>
              </div>
            </div>

            <Separator />

            {/* Color picker */}
            <div>
              <h3 className="mb-3 text-sm font-medium">
                Color: <span className="text-muted-foreground font-normal">{selectedColor.name}</span>
              </h3>
              <RadioGroup
                value={selectedColor.name}
                onValueChange={(value) =>
                  setSelectedColor(
                    product.colors.find((c) => c.name === value) ?? FALLBACK_COLOR
                  )
                }
                className="flex gap-3"
              >
                {product.colors.map((color) => (
                  <div key={color.name} className="flex items-center">
                    <RadioGroupItem
                      value={color.name}
                      id={`color-${color.name}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`color-${color.name}`}
                      className={cn(
                        "relative flex size-8 cursor-pointer items-center justify-center rounded-full p-0.5 ring-2 ring-offset-1 transition-all",
                        selectedColor.name === color.name
                          ? "ring-primary"
                          : "ring-transparent hover:ring-muted-foreground/40"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "size-6 rounded-full border border-black/10",
                          color.class
                        )}
                      />
                      <span className="sr-only">{color.name}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Size picker */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium">
                  Size: <span className="text-muted-foreground font-normal">{selectedSize.name}</span>
                </h3>
                <Dialog open={isSizingOpen} onOpenChange={setIsSizingOpen}>
                  <DialogTrigger asChild>
                    <Button variant="link" className="h-auto p-0 text-sm text-primary">
                      Size guide
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Sizing Chart</DialogTitle>
                      <DialogDescription>Measurements in inches (Chest / Waist / Hip)</DialogDescription>
                    </DialogHeader>
                    <div className="overflow-hidden rounded-lg border">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-muted">
                            {["Size", "Chest", "Waist", "Hip"].map((h) => (
                              <th key={h} className="px-4 py-2.5 text-left font-medium text-foreground">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sizingChartData.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? "" : "bg-muted/30"}>
                              {row.map((cell, ci) => (
                                <td key={ci} className="px-4 py-2.5 text-muted-foreground">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <RadioGroup
                value={selectedSize.name}
                onValueChange={(value) =>
                  setSelectedSize(
                    product.sizes.find((s) => s.name === value) ?? FALLBACK_SIZE
                  )
                }
                className="grid grid-cols-6 gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size.name}>
                    <RadioGroupItem
                      value={size.name}
                      id={`size-${size.name}`}
                      className="peer sr-only"
                      disabled={!size.inStock}
                    />
                    <Label
                      htmlFor={`size-${size.name}`}
                      className={cn(
                        "flex h-10 cursor-pointer items-center justify-center rounded-lg border text-sm font-medium transition-all",
                        "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary",
                        "peer-disabled:cursor-not-allowed peer-disabled:opacity-40",
                        "hover:border-primary/50 hover:bg-muted/50"
                      )}
                    >
                      {size.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* CTA */}
            <Button size="lg" className="w-full text-base font-semibold">
              Add to cart
            </Button>

            <Separator />

            {/* Product details */}
            <div className="space-y-5">
              <div>
                <h3 className="mb-1.5 text-sm font-semibold">Description</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-semibold">Fabric & Care</h3>
                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  {product.fabricCare.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border bg-card p-4 text-center">
                  <p className="text-sm font-semibold">International delivery</p>
                  <p className="mt-1 text-xs text-muted-foreground">Delivered to your door</p>
                </div>
                <div className="rounded-xl border bg-card p-4 text-center">
                  <p className="text-sm font-semibold">Free returns</p>
                  <p className="mt-1 text-xs text-muted-foreground">30-day return window</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
