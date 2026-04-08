import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/useCart";
import CartDropdown from "./CartDropdown";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  const { cart } = useCart(); // Access the cart from the context
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0); // Calculate total quantity of items in the cart
  
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-800">Shop Mate</h1>
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="cursor-pointer"
        >
          <FaShoppingCart className="text-2xl text-gray-700" />
          {itemCount > 0 && (
            // Display the item count as a badge on the cart icon
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>

        {showDropdown && (
          <CartDropdown />
        )}
      </div>
    </header>
  );
};

export default Header;
