import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../components/firebase';
import NavBar from '../components/Nav';

function Other() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "products"), where("category", "==", "other"));
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
      <div className="container my-12">
        <h2 className='text-center font-montserrat text-3xl mb-8'>Other</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mx-8 md:mx-2 sm:mx-2">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h3 className="font-bold">{product.name}</h3>
              <p><i className="fa fa-inr"></i>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Other;