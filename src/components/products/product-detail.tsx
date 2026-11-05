"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { ProductWithVariants } from "@/features/products/product.service";
import { formatPrice } from "@/lib/utils";


const COLOR_SWATCHES: Record<string, string> = {
  BLACK: "#171717",
  WHITE: "#ffffff",
  RED: "#dc2626",
  BLUE: "#2563eb",
  NAVY: "#1e3a5f",
  GREEN: "#15803d",
  YELLOW: "#facc15",
  PINK: "#ec4899",
  GRAY: "#9ca3af",
  GREY: "#9ca3af",
  BROWN: "#78350f",
  PURPLE: "#9333ea",
};

const sizingChartData = [
  ["XS", "32–34", "26–28", "34–36"],
  ["S", "34–36", "28–30", "36–38"],
  ["M", "36–38", "30–32", "38–40"],
  ["L", "38–40", "32–34", "40–42"],
  ["XL", "40–42", "34–36", "42–44"],
  ["XXL", "42–44", "36–38", "44–46"],
];


export function ProductDetail({ product, }: { product: ProductWithVariants; }) {
  //First color that has a variant in stock
  const initialColor =
    product.colors.find((color) =>
      color.variants.some((variant) => variant.stock > 0)
    ) ?? product.colors[0];

  //First variant that is in stock from that color
  const initialVariant =
    initialColor?.variants.find((variant) => variant.stock > 0) ??
    initialColor?.variants[0];

  const [selectedVariantId, setSelectedVariantId] = useState( initialVariant?.id ?? "");
  const [selectedImage, setSelectedImage] = useState( initialColor?.images[0] ??
    "https://randomimageurl.com/assets/images/local/sample-2_compressed_q80.jpeg");
    
  // Derive the selected color from the selected variant.
  const selectedColor = product.colors.find((color) => 
    color.variants.some((variant) => variant.id === selectedVariantId)
  );

  // Derive the selected variant.
  const selectedVariant = selectedColor?.variants.find(
    (variant) => variant.id === selectedVariantId
  );

  // Derive available colors from the product's color relations.
  const colors = product.colors.map((color) => color.name);

  // Only show sizes belonging to the selected color.
  const availableSizes = selectedColor?.variants ?? [];

  const selectedColorName = selectedColor?.name ?? "";

  function handleColorChange(colorName: string) {
    const nextColor = product.colors.find(
      (color) => color.name === colorName
    );

    if (!nextColor) return;

    // Find an available variant for the newly selected color.
    const nextVariant =
      nextColor.variants.find((variant) => variant.stock > 0) ??
      nextColor.variants[0];

    if (nextVariant) {
      setSelectedVariantId(nextVariant.id);
    } else {
      setSelectedVariantId("");
    }

    // Update the main image when the color changes.
    setSelectedImage(
      nextColor.images[0] ??
      "https://randomimageurl.com/assets/images/local/sample-2_compressed_q80.jpeg"
    );
  }

  function handleSizeChange(size: string) {
    const nextVariant = availableSizes.find(
      (variant) => variant.size === size
    );

    if (nextVariant) {
      setSelectedVariantId(nextVariant.id);
    }
  }

  const isOutOfStock =
    !selectedVariant || selectedVariant.stock <= 0;

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link
            href="/shop"
            className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-3.5" />
            Back to shop
          </Link>

          <span className="text-muted-foreground">/</span>

          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Image gallery */}
          <div className="grid grid-cols-[80px_1fr] gap-4">

            {/* Vertical thumbnails */}
            {product.colors.length > 0 && (
              <div className="flex flex-col gap-3">
                {product.colors
                  .flatMap((color) => color.images)
                  .map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      aria-label={`View product image ${index + 1}`}
                      aria-pressed={selectedImage === image}
                      className={cn(
                        "relative aspect-square w-full overflow-hidden rounded-xl transition-all",
                        selectedImage === image
                          ? "ring-2 ring-primary ring-offset-2"
                          : "opacity-70 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${product.title} image ${index + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
              </div>
            )}

            {/* Main image */}
            <div className="relative aspect-[7/8] overflow-hidden rounded-2xl bg-muted">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  No product image available
                </div>
              )}
            </div>
        </div>

          {/* Product information */}
          <div className="space-y-6">

            {/* Title and price */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                {product.title}
              </h1>

              <p className="text-2xl font-semibold text-foreground">
                {formatPrice(product.basePrice)}
              </p>
            </div>

            <Separator />

            {/* Color picker */}
            {colors.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm font-medium">
                  Color:{" "}
                  <span className="font-normal text-muted-foreground">
                    {selectedColorName}
                  </span>
                </h3>

                <RadioGroup
                  value={selectedColorName}
                  onValueChange={handleColorChange}
                  className="flex flex-wrap gap-3"
                >
                  {colors.map((color) => (
                    <div key={color} className="flex items-center">
                      <RadioGroupItem
                        value={color}
                        id={`color-${color}`}
                        className="sr-only"
                      />

                      <Label
                        htmlFor={`color-${color}`}
                        title={color}
                        className={cn(
                          "flex size-9 cursor-pointer items-center justify-center rounded-full p-1 ring-2 ring-offset-2 transition-all",
                          selectedColorName === color
                            ? "ring-primary"
                            : "ring-transparent hover:ring-muted-foreground/40"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className="size-7 rounded-full border border-black/10"
                          style={{
                            backgroundColor:
                              COLOR_SWATCHES[color.toUpperCase()] ??
                              "#d4d4d4",
                          }}
                        />

                        <span className="sr-only">{color}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Size picker */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium">
                  Size:{" "}
                  <span className="font-normal text-muted-foreground">
                    {selectedVariant?.size ?? "Unavailable"}
                  </span>
                </h3>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-sm text-primary"
                    >
                      Size guide
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Sizing Chart</DialogTitle>
                      <DialogDescription>
                        Measurements in inches (Chest / Waist / Hip)
                      </DialogDescription>
                    </DialogHeader>

                    <div className="overflow-hidden rounded-lg border">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-muted">
                            {["Size", "Chest", "Waist", "Hip"].map(
                              (heading) => (
                                <th
                                  key={heading}
                                  className="px-4 py-2.5 text-left font-medium text-foreground"
                                >
                                  {heading}
                                </th>
                              )
                            )}
                          </tr>
                        </thead>

                        <tbody>
                          {sizingChartData.map((row) => (
                            <tr
                              key={row[0]}
                              className={
                                row[0] === selectedVariant?.size
                                  ? "bg-primary/5"
                                  : ""
                              }
                            >
                              {row.map((cell, index) => (
                                <td
                                  key={index}
                                  className="px-4 py-2.5 text-muted-foreground"
                                >
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
                value={selectedVariant?.size ?? ""}
                onValueChange={handleSizeChange}
                className="grid grid-cols-6 gap-2"
              >
                {availableSizes.map((variant) => (
                  <div key={variant.id}>
                    <RadioGroupItem
                      value={variant.size}
                      id={`size-${variant.id}`}
                      disabled={variant.stock <= 0}
                      className="peer sr-only"
                    />

                    <Label
                      htmlFor={`size-${variant.id}`}
                      className={cn(
                        "flex h-10 cursor-pointer items-center justify-center rounded-lg border text-sm font-medium transition-all",
                        "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary",
                        "peer-disabled:cursor-not-allowed peer-disabled:opacity-40",
                        "hover:border-primary/50 hover:bg-muted/50"
                      )}
                    >
                      {variant.size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Stock information */}
            <p className="text-sm text-muted-foreground">
              {!selectedVariant
                ? "No variants available for this product."
                : selectedVariant.stock > 0
                  ? `${selectedVariant.stock} available`
                  : "This combination is currently out of stock."}
            </p>

            {/* Add to cart */}
            <Button
              size="lg"
              className="w-full text-base font-semibold"
              disabled={isOutOfStock}
            >
              {isOutOfStock ? "Out of stock" : "Add to cart"}
            </Button>

            <Separator />


            {/* Product description */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Description</h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description || "No description available."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
