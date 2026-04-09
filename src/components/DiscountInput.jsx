import { useState } from "react";
import { BiSolidDiscount } from "react-icons/bi";

const DiscountInput = ({ randomizeCosts }) => {
  const [code, setCode] = useState("");

  return (
    <div className="relative w-full mt-4">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <BiSolidDiscount className="w-6 h-6" />
      </div>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Discount code"
        className="w-full pl-10 pr-24 p-3 border border-gray-300 rounded-lg"
      />
      <button
        onClick={randomizeCosts}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600 px-4 py-2"
      >
        Apply
      </button>
    </div>
  );
};

export default DiscountInput;
