import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/product-detail";
import { RelatedProducts } from "@/components/related-products";
import { getProduct, getRelatedProducts } from "@/data/products";

export default async function ProductPage(props: PageProps<"/shop/[id]">) {
  const { id } = await props.params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail product={product} />
      <RelatedProducts products={getRelatedProducts(id, 4)} />
    </>
  );
}
