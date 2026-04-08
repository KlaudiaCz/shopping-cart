import { useCart } from "../context/useCart";
import { FaTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CartDropdown = () => {
  const { cart, removeFromCart, clearCart, addToCart, decreaseFromCart } = useCart();
  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0) // reduce is used to calculate the total price of items in the cart by iterating through each item and summing up the product of price and quantity
    .toFixed(2); // Calculate total price of items in the cart

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        ) : (
          <>
            <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
              {cart.map((item) => (
                <li className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">
                      {item.qty} x ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-between gap-2 w-20">
                    <button onClick={() => addToCart(item)} className="p-0.5 bg-blue-500 rounded-full text-white">
                      <MdKeyboardArrowLeft className="h-5 w-5" />
                    </button>
                    <span className="text-center">
                      {item.qty}
                    </span>
                    <button onClick={() => decreaseFromCart(item.id)} className="p-0.5 bg-blue-500 rounded-full text-white">
                      <MdKeyboardArrowRight className="h-5 w-5"/>
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 cursor-pointer"
                  >
                    <FaTrashAlt className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between font-semibold">
              <span>Total: </span>
              <span>${total}</span>
            </div>

            <button
              onClick={() => clearCart()}
              className="mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600"
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
