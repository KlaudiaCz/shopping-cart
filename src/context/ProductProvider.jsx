import { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";


export function ProductProvider({ children }) { // Accept children components as props
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook runs after component mounts
  useEffect(() => {
    // Define async function to fetch products from API
    const fetchProducts = async () => {
      try {
        // Fetch products from local JSON server on port 3001
        const res = await fetch("/api/products");
        // Check if response status is OK (200-299), if not throw error
        if (!res.ok) throw new Error("Failed to fetch products");
        // Parse response body as JSON
        const data = await res.json();
        // Update products state with fetched data
        setProducts(data);
      } catch (err) {
        // If any error occurs, update error state with error message
        setError(err.message);
      } finally {
        // Always execute after try/catch - set loading to false (data fetch complete)
        setLoading(false);
      }
    };

    // Call the async function to start fetching products
    fetchProducts();
  }, []); // Empty dependency array - run only once when component mounts

  return (
    // Provide products, loading, and error state to all child components via context
    <ProductContext.Provider value={{ products, loading, error }}> 
      {children}
    </ProductContext.Provider>
  )
};