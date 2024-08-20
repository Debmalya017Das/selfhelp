// import React, { useContext } from 'react';
// import { CartContext } from '../contexts/CartContext';
// import NavBar from '../components/Nav3';
// import { NavLink } from 'react-router-dom';

// function CartPage() {
//   const { cart } = useContext(CartContext);

//    if (!cart) {
//     // Handle the case where cart is undefined
//     return <div>Error: Cart is not defined.</div>;
//   }
//   // Calculate totals (for simplicity, here it's hardcoded)
//   const subtotal = cart.reduce((acc, item) => acc + (item.discountedPrice || item.price), 0);

//   return (
//     <>
//       <NavBar />
//       <div className="container mx-auto p-4 lg:px-12 my-12 font-montserrat">
//         {/* Cart Table */}
//         <table className="w-full mb-8">
//           <thead>
//             <tr className="border-b">
//               <th className="text-left pb-2">Product</th>
//               <th className="text-left pb-2">Price</th>
//               <th className="text-left pb-2">Quantity</th>
//               <th className="text-right pb-2">Subtotal</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item, index) => (
//               <tr key={index} className="border-b">
//                 <td className="py-4 flex items-center">
//                   <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
//                   <span>{item.title}</span>
//                 </td>
//                 <td>${item.discountedPrice || item.price}</td>
//                 <td>
//                   <select className="border p-1">
//                     <option>01</option>
//                     <option>02</option>
//                     <option>03</option>
//                   </select>
//                 </td>
//                 <td className="text-right">${item.discountedPrice || item.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Buttons */}
//         <div className="flex justify-between mb-8">
//           <button className="border border-black px-4 py-2 rounded">Return To Shop</button>
//           <button className="border border-black px-4 py-2 rounded">Update Cart</button>
//         </div>

//         {/* Coupon and Cart Total */}
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="mb-4 md:mb-0">
//             <div className="flex">
//               <input type="text" placeholder="Coupon Code" className="border p-2 mr-2" />
//               <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
//             </div>
//           </div>
//           <div className="border border-black rounded p-4 w-full md:w-1/3">
//             <h2 className="font-bold mb-4">Cart Total</h2>
//             <div className="flex justify-between mb-2">
//               <span>Subtotal:</span>
//               <span>${subtotal}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Shipping:</span>
//               <span>Free</span>
//             </div>
//             <div className="flex justify-between font-bold mb-4">
//               <span>Total:</span>
//               <span>${subtotal}</span>
//             </div>
//             <NavLink to="/billing">
//               <button className="bg-red-500 text-white w-full py-2 rounded">Process to checkout</button>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CartPage;

// src/pages/CartPage.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import NavBar from '../components/Nav3';
import { NavLink } from 'react-router-dom';

function CartPage() {
  const { cart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item, index) => {
      acc[index] = 1; // Default quantity
      return acc;
    }, {})
  );

  const handleQuantityChange = (index, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: quantity,
    }));
  };

  const subtotal = cart.reduce((acc, item, index) => {
    const quantity = quantities[index] || 1;
    return acc + (item.discountedPrice || item.price) * quantity;
  }, 0);

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4 lg:px-12 my-12 font-montserrat">
        {/* Cart Table */}
        <table className="w-full mb-8">
          <thead>
            <tr className="border-b">
              <th className="text-left pb-2">Product</th>
              <th className="text-left pb-2">Price</th>
              <th className="text-left pb-2">Quantity</th>
              <th className="text-right pb-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">Your cart is empty</td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 flex items-center">
                    <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
                    <span>{item.title}</span>
                  </td>
                  <td>${item.discountedPrice || item.price}</td>
                  <td>
                    <select
                      className="border p-1"
                      value={quantities[index]}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </td>
                  <td className="text-right">${(item.discountedPrice || item.price) * (quantities[index] || 1)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex justify-between mb-8">
          <button className="border border-black px-4 py-2 rounded">Return To Shop</button>
          <button className="border border-black px-4 py-2 rounded">Update Cart</button>
        </div>

        {/* Coupon and Cart Total */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <div className="flex">
              <input type="text" placeholder="Coupon Code" className="border p-2 mr-2" />
              <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
            </div>
          </div>
          <div className="border border-black rounded p-4 w-full md:w-1/3">
            <h2 className="font-bold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
            <NavLink to="/billing">
              <button className="bg-red-500 text-white w-full py-2 rounded">Process to checkout</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;

