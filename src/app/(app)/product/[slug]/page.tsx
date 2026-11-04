
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/products/product-detail";
import { RelatedProducts } from "@/components/products/related-products";
import { getProduct, getRelatedProducts } from "@/features/products/product.service";

export default async function ProductPage(props: PageProps<"/product/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail product={product} />
      <RelatedProducts productSlug={slug} />
    </>
  );
}
