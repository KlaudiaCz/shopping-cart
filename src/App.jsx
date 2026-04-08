import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOutPage from "./pages/CheckOutPage";

const App = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 p-6">
              <h1 className="text-3xl font-bold mb-6">🛒 Product Catalog</h1>
              {/* Search Bar and Filters */}
              <div className="flex gap-4">
                {/* Search Bar */}
                <div className="flex-1">
                  <input
                    className="p-2 border w-full rounded-xl mb-4 border-gray-500 placeholder-gray-500/50 text-black"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Search for products..."
                  />
                </div>
                {/* SortBy */}
                <div>
                  <label htmlFor="sort">Sort By: </label>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    id="sort"
                    className="p-2 border rounded-xl"
                  >
                    <option value="">---</option>
                    <option value="price-asc">Price ↑</option>
                    <option value="price-desc">Price ↓</option>
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                    <option value="category-asc">Category A-Z</option>
                    <option value="category-desc">Category Z-A</option>
                  </select>
                </div>
                {/* Category Selector */}
                <div>
                  <label htmlFor="category">Category: </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border rounded-xl"
                  >
                    <option value="all">All</option>
                    <option value="Audio">Audio</option>
                    <option value="Adapters">Adapters</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Charging">Charging</option>
                    <option value="Creative">Creative</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Health">Health</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Office">Office</option>
                    <option value="Storage">Storage</option>
                    <option value="Networking">Networking</option>
                    <option value="Smart Home">Smart Home</option>
                    <option value="Streaming">Streaming</option>
                    <option value="Wearables">Wearables</option>
                    <option value="Photography">Photography</option>
                    <option value="Displays">Displays</option>
                    <option value="Home">Home</option>
                  </select>
                </div>
              </div>
              <ProductList search={search} sort={sort} category={category} />
            </div>
          }/>
          <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
