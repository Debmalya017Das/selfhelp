import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../components/firebase';
import NavBar from '../components/Nav';
import sh from "./image/image.png";

const features = [
  {
    icon: "🚚",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
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

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const ProductCard = ({ product, index }) => (
    <div 
      className="relative product-card flex flex-col justify-between h-full"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex-grow flex items-center border border-slate-300 justify-center bg-slate-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
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
      >
        Add to Cart
      </button>
      <div className="flex flex-col items-left pt-1">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.price}</p>
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center py-8">
        <img 
          src={sh}
          alt="Self-help literature"
          className="w-full h-full m-4 lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm"
        />
      </div>

      <div className="lg:mx-24 my-10">
        <div className="items-left flex">
          <button className="bg-red-500 rounded px-3 py-5"></button>
          <h2 className="items-left pt-3 mx-3 text-red-500 font-semibold font-montserrat">Our Products</h2>
        </div>        

        <div className="py-8">
          <h2 className="text-2xl font-bold mb-4 font-montserrat pb-4">Explore Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="flex items-center justify-center m-2">
            <button className="bg-red-500 text-white align-center m-3 px-5 py-4 hover:bg-red-300 hover:text-slate-800 duration-300 rounded font-montserrat">View all products</button>
          </div>
        </div>
        
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