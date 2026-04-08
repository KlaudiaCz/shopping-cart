import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = ({ search, sort, category }) => {
  const { products, loading, error } = useContext(ProductContext); // Access products, loading, and error from ProductContext

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  )
  .filter((product) => 
    category === 'all' ? true : product.category === category
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "category-asc":
        return a.category.localeCompare(b.category);
      case "category-desc":
        return b.category.localeCompare(a.category);
    }
    return 0;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading && <p>Loading...</p>}
      {error && <div className="text-red-500">❌ {error}</div>}
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {sortedProducts.length === 0 && !loading && <p>No products found 😢</p>}
    </div>
  );
};

export default ProductList;
