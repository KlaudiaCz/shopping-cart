import { useCart } from "../context/useCart";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return ( 
        <div
          className="bg-white rounded-lg shadow p-4 flex flex-col"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-40 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold mt-4">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="font-bold">${product.price.toFixed(2)}</p>

          <button onClick={() => addToCart(product)} className="bg-blue-600 text-white mt-3 px-4 py-2 rounded transition hover:bg-blue-700 cursor-pointer">Add To Cart</button>
        </div>
     );
}
 
export default ProductCard;