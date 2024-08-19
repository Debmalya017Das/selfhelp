import React from 'react';

const Wishlist = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">Wishlist (4)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProductCard title="Gucci Duffle Bag" price="$960" discount="$1600" />
        <ProductCard title="RGB Liquid CPU Cooler" price="$1960" />
        <ProductCard title="GP11 Shooter USB Gamepad" price="$550" />
        <ProductCard title="Quilted Satin Jacket" price="$750" />
      </div>
    </div>
  );
};

const ProductCard = ({ title, price, discount }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src="/path-to-image" alt={title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{price}</p>
      {discount && <p className="text-red-500 line-through">{discount}</p>}
    </div>
  );
};

export default Wishlist;
