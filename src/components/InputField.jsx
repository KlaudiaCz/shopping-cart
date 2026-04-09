const InputField = ({label, name, placeholder="Enter..."}) => {
  return (
    <>
      <label htmlFor={label}>{name}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="p-3 border border-gray-300 rounded-lg mb-3"
        required
      />
    </>
  );
};

export default InputField;
