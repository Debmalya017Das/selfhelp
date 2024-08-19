import React from 'react';
import NavBar from '../components/Nav3';

function BillingPage() {
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
      <div className="w-full md:w-1/3 mt-8 md:mt-0 ">
        <div className="p-4 rounded border border-black shadow-lg">
          <h3 className="font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <img src="https://m.media-amazon.com/images/I/A1-zhBf7MoL.jpg" alt="LCD Monitor" className="w-12 h-12 object-cover mr-2" />
              <span>LCD Monitor</span>
            </div>
            <span>$650</span>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <img src="https://cdns3.thecosmicbyte.com/wp-content/uploads/white-2.jpg" alt="H1 Gamepad" className="w-12 h-12 object-cover mr-2" />
              <span>H1 Gamepad</span>
            </div>
            <span>$1100</span>
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <input type="radio" id="bank" name="payment" className="mr-2" />
              <label htmlFor="bank">Bank</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="card" name="payment" className="mr-2" />
              <label htmlFor="card" className="flex items-center">
                <span className="mr-2">Card</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK-ExH64w4vaz6r2HY7kpEc0SEZKmpq7CKg&s" alt="Visa" className="w-8 h-6 mr-1" />
                <img src="https://www.mastercard.com/content/dam/public/mastercardcom/in/en/logos/mastercard-og-image.png" alt="Mastercard" className="w-8 h-6" />
              </label>
            </div>
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600">Place Order</button>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default BillingPage;