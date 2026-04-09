const InputFieldSmall = ({label, name, placeholder, }) => {
    return ( 
        <div className="flex flex-col w-45 md:w-60 gap-1">
              <label htmlFor={label}>{name}</label>
              <input
                type="text"
                placeholder={placeholder}
                className="p-3 border border-gray-300 rounded-lg mb-3"
                required
              />
            </div>
     );
}
 
export default InputFieldSmall;