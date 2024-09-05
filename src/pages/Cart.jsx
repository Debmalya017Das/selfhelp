import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import NavBar from '../components/Nav';
import { NavLink } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);
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

  // Delivery fee logic
  const deliveryFee = subtotal >= 500 ? 0 : 20; // Assuming <i class="fa fa-inr"></i>20 as default delivery fee

  // Total including delivery fee
  const total = subtotal + deliveryFee;

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
              <th className="text-right pb-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">Your cart is empty</td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 flex items-center">
                    <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
                    <span>{item.title}</span>
                  </td>
                  <td><i class="fa fa-inr"></i>{item.discountedPrice || item.price}</td>
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
                  <td className="text-right"><i class="fa fa-inr"></i>{(item.discountedPrice || item.price) * (quantities[index] || 1)}</td>
                  <td className="text-right">
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex justify-between mb-8">
          <NavLink to="/" className="border border-black px-4 py-2 rounded">Return To Shop</NavLink>
          {/* <button className="border border-black px-4 py-2 rounded">Update Cart</button> */}
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
              <span><i class="fa fa-inr"></i>{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery fee:</span>
              <span><i class="fa fa-inr"></i>{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span><i class="fa fa-inr"></i>{total.toFixed(2)}</span>
            </div>
            <NavLink to="/billing">
              <button className="bg-red-500 text-white w-full py-2 rounded">Proceed to checkout</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
