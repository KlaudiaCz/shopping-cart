import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const App = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">🛒 Product Catalog</h1>
        {/* Search Bar and Filters */}
        <div className="flex gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <input
              className="p-2 border max-w-lg w-full rounded-xl mb-4 border-gray-500 placeholder-gray-500/50 text-black"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search for products..."
            />
          </div>
          {/* SortBy */}
          <div>
            <label htmlFor="sort">Sort By: </label>
            <select value={sort} onChange={(e) => setSort(e.target.value)} id="sort" className="p-2 border rounded-xl">
              <option value="">---</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="category-asc">Category A-Z</option>
              <option value="category-desc">Category Z-A</option>
            </select>
          </div>
        </div>
        <ProductList search={search} sort={sort} />
      </div>
    </>
  );
};

export default App;
