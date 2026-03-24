import { getProduct } from "@/lib/holibob/api";
import BookingFlow from "@/components/BookingFlow";
import { notFound } from "next/navigation";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let product;
  try {
    product = await getProduct(id);
  } catch {
    notFound();
  }

  return (
    <div className="py-8 md:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingFlow
          productId={product.id}
          productName={product.name}
          productImage={product.imageList?.[0]?.url ?? null}
        />
      </div>
    </div>
  );
}
