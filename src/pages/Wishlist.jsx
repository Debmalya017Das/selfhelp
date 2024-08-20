import React, { useContext } from 'react';
import NavBar from '../components/Nav3';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ image, title, price, discountedPrice, rating, reviews, discount, isNew }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover mb-2" />
        {discount && <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">-{discount}%</span>}
        {isNew && <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">New</span>}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <div className="flex items-center mb-2">
        <span className="text-red-500 font-bold mr-2">${discountedPrice || price}</span>
        {discountedPrice && <span className="text-gray-500 line-through text-sm">${price}</span>}
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
        onClick={() => addToCart({ image, title, price, discountedPrice, rating, reviews, discount, isNew })}
      >
        Add to Cart
      </button>
    </div>
  );
};


function WishlistPage() {
  const wishlistItems = [
    { image: 'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1699551158/724612_9C2ST_8746_002_095_0000_Light-Gucci-Savoy-large-duffle-bag.jpg', title: 'Gucci duffle bag', price: 1160, discountedPrice: 960, discount: 39 },
    { image: 'https://i5.walmartimages.com/seo/360mm-CPU-Water-Cooler-ARGB-Liquid-Cooler-AIO-All-Intel-AMD-Compatible-High-Efficiency-Radiator-3-120mm-PWM-Fan-Cooling-System-LGA-1700-Ready_aefbcf0d-63e6-49ce-91fe-dafd04808f97.ccf672f5bd17955c1278e9d3c1b18859.jpeg', title: 'RGB liquid CPU Cooler', price: 1960 },
    { image: 'https://cdns3.thecosmicbyte.com/wp-content/uploads/white-2.jpg', title: 'GP11 Shooter USB Gamepad', price: 550 },
    { image: 'https://www.voganow.com/cdn/shop/files/BBGJ-1108-014_2_copy.jpg?v=1702101740', title: 'Quilted Satin Jacket', price: 750 },
  ];

  const recommendedItems = [
    { image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=99ac&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true', title: 'ASUS FHD Gaming Laptop', price: 1160, discountedPrice: 960, rating: 5, reviews: 65, discount: 50 },
    { image: 'https://images.samsung.com/is/image/samsung/p6pim/in/lc34g55twwwxxl/gallery/in-odyssey-g5-34g5-lc34g55twwwxxl-467164436?$650_519_PNG$', title: 'IPS LCD Gaming Monitor', price: 1160, rating: 5, reviews: 65 },
    { image: 'https://www.amkette.com/cdn/shop/files/evofoxonecontrollerheroimage.png?v=1707458313', title: 'HAVIT HV-G92 Gamepad', price: 560, rating: 5, reviews: 65, isNew: true },
    { image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/desktop-keyboard/w/l/6/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpeg?q=20&crop=false', title: 'AK-900 Wired Keyboard', price: 200, rating: 4, reviews: 65 },
  ];

  return (
    
    <>
      <NavBar />
      <div className="container mx-auto p-4 lg:px-12 my-12 font-montserrat">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Wishlist (4)</h2>
        <button className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100">Move All To Bag</button>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendedItems.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
    </>
    
  );
}

export default WishlistPage;