import React from 'react';
import NavBar from '../components/Nav2';

export default function PrivacyPolicy() {
  return (
    <>
        <NavBar/>
      <div className="max-w-4xl mx-auto font-montserrat my-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Welcome to Bookwormcorner! Your privacy is important to us, and we are committed to protecting your personal information.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li><strong>Personal Information:</strong> When you create an account, make a purchase, or sign up for our website, we may collect personal information such as your name, email address, billing and shipping address, and payment details.</li>
        <li><strong>Usage Information:</strong> We automatically collect information about your device, browsing actions, and patterns.</li>
        <li><strong>Cookies:</strong> We use cookies to enhance your experience, remember your preferences, and analyze website traffic.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>To process and fulfill your orders.</li>
        <li>To communicate with you about your orders, new products, special offers, and updates.</li>
        <li>To improve our website, products, and services.</li>
        <li>To detect and prevent fraud or abuse.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Sharing Your Information:</h2>
      <p className="mb-4">We do not sell, trade, or share your personal information with third parties, except to comply with the law, protect our rights, or as part of the normal operation of our business.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>You have the right to access, correct, or delete your personal information.</li>
        <li>You can opt out of marketing communications at any time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us:</h2>
      <p>If you have any questions or concerns about our Privacy Policy, please contact us at contact@bookwormcorner.com.</p>
    </div>
    </>
  
  );
}