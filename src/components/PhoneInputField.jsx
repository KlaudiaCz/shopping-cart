import { useState } from "react";
import PhoneInput from "react-phone-number-input";

const PhoneInputField = () => {
  const [number, setNumber] = useState();

  return (
    <>
      <label htmlFor="">Phone number</label>
      <PhoneInput
        value={number}
        onChange={setNumber}
        placeholder="Enter phone number"
        className="p-3 border border-gray-300 rounded-lg mb-3"
      />
    </>
  );
};

export default PhoneInputField;
