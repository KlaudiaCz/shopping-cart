import { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { PiPackage } from "react-icons/pi"; 

const RadioOptions = () => {
  const [selected, setSelected] = useState();
  const options = [
    {
      id: "delivery",
      label: "Delivery",
      icon: <TbTruckDelivery className="w-6 h-6" />,
    },
    { id: "pickup", label: "Pickup", icon: <PiPackage className="w-6 h-6" /> },
  ];

  return (
    <>
      {options.map((opt) => (
        <div
          key={opt.id}
          onClick={() => setSelected(opt.id)}
          className={`flex items-center gap-3 p-4 border rounded-lg w-60 cursor-pointer
                        ${selected === opt.id ? "bg-blue-100 border-blue-500" : "border-gray-300"}`}
        >
          {/* Dot */}
          <div
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center
                          ${selected === opt.id ? "border-blue-500" : "border-gray-400"}`}
          >
            {selected === opt.id && (
              <div className="w-3 h-3 border-blue-500 border-4 rounded-full" />
            )}
          </div>

          {/* Icon & Label */}
          <div
            className={`flex items-center gap-2  ${selected === opt.id ? "text-blue-500" : "text-gray-700"}`}
          >
            {opt.icon}
            <span
              className={`${selected === opt.id ? "text-blue-500" : "text-gray-700"}`}
            >
              {opt.label}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default RadioOptions;
