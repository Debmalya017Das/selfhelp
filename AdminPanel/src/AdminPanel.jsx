import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    imageUrl: '',
    category: 'fiction' // Default category
  });

  useEffect(() => {
    fetchProducts();
  }, []);

   const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProducts(productsData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

    const handleRemoveProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts(); // Refresh the products list after deletion
  };


   const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl || !newProduct.category) {
      alert('Please fill all fields');
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        name: newProduct.name,
        price: newProduct.price,
        image: newProduct.imageUrl,
        category: newProduct.category
      });

      alert('Product added successfully!');
      setNewProduct({ name: '', price: '', imageUrl: '', category: 'fiction' });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product: ", error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block mb-2">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={newProduct.imageUrl}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
       <div className="mb-4">
          <label htmlFor="category" className="block mb-2">Category</label>
          <select
            id="category"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Product
        </button>
      </form>

     <h2 className="text-xl font-bold mb-4">Current Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.price}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2"
              onClick={() => handleRemoveProduct(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;