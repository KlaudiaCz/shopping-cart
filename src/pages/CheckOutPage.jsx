import { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { LuLockKeyhole } from "react-icons/lu";
import "react-phone-number-input/style.css";
import PhoneInputField from "../components/PhoneInputField";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import RadioOptions from "../components/RadioOptions";
import InputField from "../components/InputField";
import CountrySelector from "../components/CountrySelector";
import InputFieldSmall from "../components/InputFieldSmall";
import DiscountInput from "../components/DiscountInput";

const CheckOutPage = () => {
  const [accepted, setAccepted] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  const { cart } = useCart();
  const subtotal = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0) // reduce is used to calculate the total price of items in the cart by iterating through each item and summing up the product of price and quantity
    .toFixed(2); // Calculate total price of items in the cart

  const randomizeCosts = () => {
    // shipping między 5 a 15$
    const shipping = Math.floor(Math.random() * 11) + 5;

    // discount między 5% a 20% od subtotal
    const discount = Math.floor(subtotal * (Math.random() * 0.15 + 0.05));

    setShippingCost(shipping);
    setDiscountAmount(discount);
  };

  const total = (parseFloat(subtotal) + shippingCost - discountAmount).toFixed(
    2,
  );

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen w-full">
      <Link
        to="/"
        className="absolute flex m-4 hover:underline hover:text-blue-500 transition"
      >
        <TiArrowBack className="h-5 w-5" />
        <p className="">Go Back</p>
      </Link>
      {/* Left Side */}
      <div className="w-full md:w-3/5 p-6 md:p-20">
        <h1 className="text-2xl md:text-4xl font-semibold mb-8">Checkout</h1>
        <h2 className="text-lg md:text-xl font-semibold mb-5">
          Shipping Information
        </h2>
        {/* Options */}
        <div className="flex flex-col sm:flex-row gap-4">
          <RadioOptions />
        </div>
        {/* Inputs/Form */}
        <div className="mt-4 flex flex-col gap-2">
          {/* Name */}
          <InputField
            label="name"
            name="Full name"
            placeholder="Enter full name..."
          />

          {/* Email */}
          <InputField
            label="email"
            name="Email address"
            placeholder="Enter email address"
          />

          {/* Phone */}
          <PhoneInputField />

          {/* Country */}
          <CountrySelector />

          {/* Rest inputs */}
          <div className="flex gap-2 md:gap-4">
            <InputFieldSmall
              label="city"
              name="City"
              placeholder="Enter city..."
            />
            <InputFieldSmall
              label="state"
              name="State"
              placeholder="Enter state..."
            />
            <InputFieldSmall
              label="code"
              name="ZIP Code"
              placeholder="Enter ZIP code..."
            />
          </div>
        </div>

        {/* Terms Checkbox */}
        <div>
          <label className="flex items-center gap-2 mt-3 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="w-4 h-4 border border-gray-300 rounded"
            />
            <span className="text-gray-700 text-sm">
              I have read and agree to the{" "}
              <Link to="/terms" className="text-blue-500 underline">
                Terms and Conditions.
              </Link>
            </span>
          </label>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/5 border border-gray-300 bg-gray-100 p-15 md:p-20">
        <h2 className="text-lg md:text-xl font-semibold mb-5">
          Review your cart
        </h2>
        {/* Mapping actual items in cart */}
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex gap-3 space-y-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-30 h-30 border border-gray-200 rounded-lg object-cover"
              />
              <div className="">
                <p>{item.name}</p>
                <p className="text-sm text-gray-400 mt-1">{item.qty}x</p>
                <p className="font-bold mt-12">${item.price}</p>
              </div>
            </div>
          ))
        )}
        {/* Discount input */}
        <DiscountInput randomizeCosts={() => randomizeCosts()}/>

        {/* Summary price */}
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">Subtotal</p>
            <p className="font-semibold text-sm">${subtotal}</p>
          </div>{" "}
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">Shipping</p>
            <p className="font-semibold text-sm">${shippingCost}</p>
          </div>{" "}
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">Discount</p>
            <p className="font-semibold text-sm">-${discountAmount}</p>
          </div>{" "}
          <div className="flex justify-between">
            <p className="text-md font-bold">Total</p>
            <p className="font-semibold text-md">${total}</p>
          </div>
        </div>

        {/* Pay Btn */}
        <button
          disabled={!accepted}
          className={`p-4 text-center w-full ${accepted ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer" : "bg-gray-400 text-gray-200 cursor-not-allowed"} transition-colors text-white font-semibold mt-8 rounded-lg`}
        >
          Pay Now
        </button>
        {/* Security Info */}
        <div className="mt-10">
          <div className="mb-3 flex items-center gap-3">
            <LuLockKeyhole className="h-6 w-6 text-blue-500" />
            <span className="font-semibold">
              Secure Checkout - SSL Encrypted
            </span>
          </div>
          <p className="text-sm text-gray-400 font-light">
            Ensuring your financial and personal details are secure during every
            transaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
