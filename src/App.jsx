import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">🛒 Product Catalog</h1>
        {/* Search Bar and Filters */}
        <div className="">
          <div>
            <input
              className="p-2 border w-full rounded-xl mb-4 border-gray-500 placeholder-gray-500/50 text-black"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search for products..."
            />
          </div>
        </div>
        <ProductList search={search}/>
      </div>
    </>
  );
};

export default App;
