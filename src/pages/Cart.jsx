import React from 'react';
import NavBar from '../components/Nav3';
import { NavLink } from 'react-router-dom';

function CartPage() {
  return (
    <>
    <NavBar/>
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
          <tr className="border-b">
            <td className="py-4 flex items-center">
              <img src="https://m.media-amazon.com/images/I/A1-zhBf7MoL.jpg" alt="LCD Monitor" className="w-16 h-16 mr-4" />
              <span>LCD Monitor</span>
            </td>
            <td>$650</td>
            <td>
              <select className="border p-1">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </td>
            <td className="text-right">$650</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 flex items-center">
              <img src="https://cdns3.thecosmicbyte.com/wp-content/uploads/white-2.jpg" alt="H1 Gamepad" className="w-16 h-16 mr-4" />
              <span>H1 Gamepad</span>
            </td>
            <td>$550</td>
            <td>
              <select className="border p-1">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </td>
            <td className="text-right">$1100</td>
          </tr>
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
            <span>$1750</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold mb-4">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <NavLink to="/billing"><button className="bg-red-500 text-white w-full py-2 rounded">Process to checkout</button></NavLink>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default CartPage;