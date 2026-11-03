import { ProductCard } from "@/components/products/product-card";
import { getProducts } from "@/features/products/product.service";
import { products } from "@/data/products";

export default async function ShopPage() {
  const products = await getProducts();
  return (
    <main className="min-h-screen bg-background">
      {/* Shop banner */}
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium text-primary">AafnoInk Shop</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Start with something worth making yours.
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Custom-printed apparel and accessories. Pick a canvas, add your design,
            and wear something that&apos;s unmistakably you.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
