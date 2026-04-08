import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = ({ search, sort }) => {
  const { products, loading, error } = useContext(ProductContext); // Access products, loading, and error from ProductContext

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
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

    // if (sort === "price-asc") return a.price - b.price;
    // if (sort === "price-desc") return b.price - a.price;
    // if (sort === "name-asc") return a.name.localeCompare(b.name);
    // if (sort === "name-desc") return b.name.localeCompare(a.name);
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
