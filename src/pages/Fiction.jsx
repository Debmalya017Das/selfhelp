import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../components/firebase';
import NavBar from '../components/Nav';

function Fiction() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "products"), where("category", "==", "fiction"));
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <NavBar/>
      <div className="container my-36">  
        <h2 className='text-center font-montserrat text-3xl mb-8'>Fiction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h3 className="font-bold">{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Fiction;