import { useRouter } from "next/navigation";
import { products, hotBeverages, coldBeverages, pastries, breakfasts, snacks, desserts } from "../../api/data";
import Image from "next/image";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Aggregate all products into one array
  const allProducts = [
    ...products,
    ...hotBeverages,
    ...coldBeverages,
    ...pastries,
    ...breakfasts,
    ...snacks,
    ...desserts,
  ];

  // Find the product by ID
  const product = allProducts.find((item) => item.id === parseInt(id as string));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={300} height={300} />
      <p className="mt-2 text-lg">{product.description}</p>
      <p className="mt-4 text-xl font-semibold">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
