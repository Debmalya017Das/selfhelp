import React from 'react';
import NavBar from '../components/Nav';

export default function ShippingPolicy() {
  return (
    <>
    <NavBar/>
     <div className="max-w-4xl mx-auto font-montserrat my-8">
      <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
      <p className="mb-4">We aim to deliver your books in a timely and secure manner. Please read our Shipping Policy for more details.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Shipping Rates:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>We offer free standard shipping on orders over Rs 500.</li>
        <li>For orders below Rs 500, shipping rates are calculated at checkout based on your location and order size.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Shipping Times:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li><strong>Standard Shipping:</strong> 5-7 business days</li>
        <li><strong>Express Shipping:</strong> 2-3 business days (extra charges apply)</li>
        <li>Please note that shipping times may vary depending on your location and external factors beyond our control.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Order Processing:</h2>
      <p className="mb-4">Orders are processed within 1-2 business days. You will receive a confirmation email once your order is shipped, including a tracking number.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Lost or Damaged Items:</h2>
      <p className="mb-4">If your order arrives damaged or is lost in transit, please contact us immediately with your order details, and we will assist you in resolving the issue.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us:</h2>
      <p>If you have any questions or concerns about shipping, please contact our customer service team at contact@bookwormcorner.com.</p>
    </div>
    </>
   
  );
}