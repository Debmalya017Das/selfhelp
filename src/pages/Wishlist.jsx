import React, { useContext,useState } from 'react';
import NavBar from '../components/Nav';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext} from '../contexts/WishlistContext';

const ProductCard = ({ id,image, title, price, discountedPrice, rating, reviews, discount, isNew }) => {
  const { addToCart } = useContext(CartContext);
   const { removeFromWishlist } = useContext(WishlistContext);

 const handleRemove = () => {
    removeFromWishlist(id);
    alert(`Item will be removed from your wishlist.`);
  };
 const handleadd = () => {
    addToCart({ id,image, title, price, discountedPrice, rating, reviews, discount, isNew });
    alert(`Item has been added to your cart.`);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover mb-2" />
        {discount && <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">-{discount}%</span>}
        {isNew && <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">New</span>}
        <button className="absolute top-2 right-2 text-red-500 hover:text-red-700" onClick={handleRemove} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <div className="flex items-center mb-2">
        <span className="text-red-500 font-bold mr-2"><i className="fa fa-inr"></i>{discountedPrice || price}</span>
        {discountedPrice && <span className="text-gray-500 line-through text-sm"><i className="fa fa-inr"></i>{price}</span>}
      </div>
      {rating && (
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-600 text-sm ml-1">({reviews})</span>
        </div>
      )}
      <button
        className="w-full bg-black text-white py-2 mt-2 rounded hover:bg-gray-800"
        onClick={handleadd}
      >
        Add to Cart
      </button>
    </div>
  );
};


function WishlistPage() {
 
 const { wishlistItems } = useContext(WishlistContext);
  return ( 
    
    <>
      <NavBar />
       <div className="container mx-auto p-4 lg:px-12 my-12 font-montserrat">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Wishlist ({wishlistItems.length})</h2>
          {/* <button className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100" onClick={handleadd}>
            Move All To Bag
          </button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {wishlistItems.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="bg-red-500 w-1 h-6 mr-2"></span>
            Just For You
          </h2>
          <button className="text-black underline">See All</button>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedItems.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div> */}
      </div>
    </>
    
  );
}

export default WishlistPage;