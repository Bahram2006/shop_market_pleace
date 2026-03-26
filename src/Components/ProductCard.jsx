function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded"/>
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Satyb alyň
      </button>
    </div>
  );
}

export default ProductCard;