import React, { useState, useEffect, useContext } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../components/firebase';
import NavBar from '../components/Nav';
import sh from "./image/banner2.png";
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import { Link } from 'react-router-dom';


const features = [
  {
    icon: "🚚",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over 500"
  },
  {
    icon: "🎧",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    icon: "✅",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days"
  }
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [visibleRows, setVisibleRows] = useState(3); // Initial number of rows to show

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

 const fetchProducts = async () => {
    try {
      let q;
      if (selectedCategory === "All") {
        q = collection(db, "products");
      } else {
        q = query(collection(db, "products"), where("category", "==", selectedCategory.toLowerCase()));
      }
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("Added to cart");
  };

   const handleaddToWishlist = (product) => {
    addToWishlist(product);
    alert("Wishlisted");
  };
   const handleLoadMore = () => {
    setVisibleRows(prev => prev + 3); // Show 3 more rows upon clicking the button
  };

  const productsToShow = products.slice(0, visibleRows * 3); // Calculate products to show based on rows


  return (
    <>
      <NavBar />
      {/* Rest of the component remains the same */}
      <div className="w-full h-screen w-full h-[300px] sm:h-[100px] md:h-[500px] lg:h-screen shadow-lg mb-4">
        <img 
          src={sh}
          alt="Self-help literature"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="lg:mx-24 my-10">
         <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button className="bg-red-500 rounded px-3 py-5"></button>
            <h2 className="items-left pt-3 mx-3 text-black text-2xl font-semibold font-montserrat">Our Products</h2>
          </div>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Other">Other</option>
          </select>
        </div> 
  
        <div className="py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {productsToShow.map((product, index) => (
            <div
              key={product.id}
              className="relative product-card flex flex-col justify-between h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex-grow flex items-center border border-slate-300 justify-center bg-slate-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 md:mx-4 lg:mx-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-5/7 object-cover transition-opacity duration-300 rounded ${
                    hoveredIndex === index ? 'opacity-65' : 'opacity-full'
                  }`}
                />
              </div>
              <button
                className={`w-full bg-black text-white font-bold py-2 rounded-b-lg transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="bg-red-500 text-white font-bold py-2 mt-2 rounded transition-opacity duration-300"
                onClick={() => handleaddToWishlist(product)}
              >
                Add to Wishlist
              </button>
              <div className="flex flex-col items-left pt-1">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4"><i className="fa fa-inr"></i>{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleRows * 2 < products.length && (
          <div className="flex items-center justify-center m-2">
            <button
              className="bg-red-500 text-white align-center m-3 px-5 py-4 hover:bg-red-300 hover:text-slate-800 duration-300 rounded font-montserrat"
              onClick={handleLoadMore}
            >
              View all products
            </button>
          </div>
        )}
      </div>
        
        {/* Features section */}
        <div className="mt-10"><hr /></div>
        <div className="flex justify-center lg:space-x-24 py-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center w-64 font-montserrat">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;