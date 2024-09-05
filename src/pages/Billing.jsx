import React , {useContext}from 'react';
import NavBar from '../components/Nav3';
import { CartContext } from '../contexts/CartContext';

function BillingPage() {
  const { cart } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <>
        <NavBar />
        <div className="container mx-auto p-4 lg:px-12 my-12 font-montserrat">
          <h2 className="text-2xl font-bold text-center my-12">No items to checkout</h2>
        </div>
      </>
    );
  }
const subtotal = cart.reduce((acc, item) => acc + (item.discountedPrice || item.price), 0);
  return (
    <>
    <NavBar/>
        <div className="container mx-auto p-4 flex flex-col md:flex-row lg:px-12 my-12 font-montserrat">
      <div className="w-full md:w-2/3 pr-0 md:pr-8 mx-10 ">
        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">First Name*</label>
            <input type="text" className="w-full p-2 border  bg-slate-100 border-black rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">Company Name</label>
            <input type="text" className="w-full p-2 border bg-slate-100 border-black rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">Street Address*</label>
            <input type="text" className="w-full p-2 border bg-slate-100 border-black rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">Apartment, floor, etc. (optional)</label>
            <input type="text" className="w-full p-2 border bg-slate-100 border-black rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">Town/City*</label>
            <input type="text" className="w-full p-2 border bg-slate-100 border-black rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">Phone Number*</label>
            <input type="tel" className="w-full p-2 border  bg-slate-100 border-black rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">Email Address*</label>
            <input type="email" className="w-full p-2 border bg-slate-100 border-black rounded" required />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Save this information for faster check-out next time</span>
            </label>
          </div>
        </form>
      </div>
      <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="p-4 rounded border border-black shadow-lg">
            <h3 className="font-bold mb-4">Order Summary</h3>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-12 h-12 object-cover mr-2" />
                  <span>{item.title}</span>
                </div>
                <span><i className="fa fa-inr"></i>{item.discountedPrice || item.price}</span>
              </div>
            ))}
            <div className="border-t pt-2">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span><i className="fa fa-inr"></i>{subtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span><i className="fa fa-inr"></i>{subtotal}</span>
              </div>
            </div>
            {/* Payment Options */}
            <button className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600">Place Order</button>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default BillingPage;