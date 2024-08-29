import React from 'react';
import NavBar from '../components/Nav';

export default function PaymentsRefund() {
  return (
    <>
    <NavBar/>
    <div className="max-w-4xl mx-auto font-montserrat my-8">
      <h1 className="text-3xl font-bold mb-4">Payments and Refund Policy</h1>
      <p className="mb-4">At Bookwormcorner, we strive to provide a seamless shopping experience. Please read our Payments and Refund Policy carefully.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Payment Methods:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>We accept major credit/debit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods.</li>
        <li>All payments are processed securely through trusted payment gateways to protect your personal and financial information.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Refunds and Returns:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Returns: We accept returns of unopened and undamaged books within 30 days of purchase. The customer is responsible for return shipping costs unless the return is due to our error.</li>
        <li>Refunds: Once we receive and inspect your returned item, we will notify you of the status of your refund. Approved refunds will be processed within 7-10 business days.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cancellations:</h2>
      <p className="mb-4">Orders can be cancelled within 24 hours of purchase. After this period, the order may already be in the shipping process and cannot be cancelled.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Exchanges:</h2>
      <p className="mb-4">We do not offer direct exchanges. If you wish to exchange an item, please return the original item and place a new order.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us:</h2>
      <p>For payment or refund inquiries, please contact our customer service team at contact@bookwormcorner.com.</p>
    </div>
    
    </>
    
  );
}