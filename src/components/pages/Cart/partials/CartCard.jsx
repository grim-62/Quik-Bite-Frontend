import React from 'react';

const CartCard = ({ item }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg p-4 my-4 border-y-4 border-zinc-200">
      {/* Image Section */}
      <div className="sm:w-1/4 w-full mb-4 sm:mb-0">
        <img
          src={item.image}
          alt={item.name}
          className="rounded-lg w-full object-cover h-32 sm:h-auto"
        />
      </div>

      {/* Info Section */}
      <div className="sm:w-2/4 w-full sm:pl-6">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center mt-4">
          <button className="px-2 py-1 bg-gray-300 rounded-l-lg">-</button>
          <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
          <button className="px-2 py-1 bg-gray-300 rounded-r-lg">+</button>
        </div>
      </div>

      {/* Price & Remove Section */}
      <div className="sm:w-1/4 w-full sm:text-right flex flex-col justify-between">
        <div>
          <p className="text-lg font-semibold">${item.price}</p>
        </div>
        <button className="text-red-500 mt-4 sm:mt-0 hover:text-red-700">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
