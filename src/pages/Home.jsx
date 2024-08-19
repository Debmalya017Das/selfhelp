import { useState } from "react";
import sh from "./image/image.png";
import NavBar from '../components/Nav';

const products = [
  { id: 1, name: 'Dog Food', price: '$100', image: 'https://www.cesar.com/sites/g/files/fnmzdf2476/files/migrate-product-files/images/gone6g2rinqavmwb4jxc.png' },
  { id: 2, name: 'DSLR Camera', price: '$360', image: 'https://www.kindpng.com/picc/m/6-66307_dslr-camera-png-transparent-image-canon-dslr-camera.png' },
  { id: 3, name: 'Gaming Laptop', price: '$700', image: 'https://p4-ofp.static.pub/fes/cms/2022/09/26/5thcrfw8dcfqh8mp5n6ip4m79zirl1162581.png' },
  { id: 4, name: 'Skincare Set', price: '$500', image: 'https://m.media-amazon.com/images/I/61bhQ1Ji16L.jpg' },
  { id: 5, name: 'Electric Car', price: '$960', image: 'https://www.cnet.com/a/img/resize/ce957fcc2b9b41c24e068763b5da1eb20ecd04dd/hub/2023/06/07/a6cb0266-09c3-4543-9f7d-e23c14b996d2/volvo-ex30-2025-debut-vendor-7.jpg?auto=webp&width=1200' },
  { id: 6, name: 'Soccer Cleats', price: '$1160', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFicOp_Dwz5GGfhHm9eJGSh120EwnOHXeTw&s' },
  { id: 7, name: 'Gamepad', price: '$660', image: 'https://www.amkette.com/cdn/shop/files/evofoxonecontrollerheroimage.png?v=1707458313' },
  { id: 8, name: 'Jacket', price: '$660', image: 'https://m.media-amazon.com/images/I/511q8CTd0QL._AC_UY1000_.jpg' },
];

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
  const [hoveredIndex, setHoveredIndex] = useState(null);

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


          <div className="flex justify-center lg:space-x-24  py-10">
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
