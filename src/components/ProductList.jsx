import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = ({ search }) => {
  const { products, loading, error } = useContext(ProductContext); // Access products, loading, and error from ProductContext

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading && <p>Loading...</p>}
      {error && <div className="text-red-500">❌ {error}</div>}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {filteredProducts.length === 0 && !loading && <p>No products found 😢</p>}
    </div>
  );
};

export default ProductList;
