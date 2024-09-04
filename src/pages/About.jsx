import React from 'react';
import NavBar from '../components/Nav';

const features = [
    {
      icon: "🚚",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: "🎧",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: "✅",
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ];
const About = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 p-4">
        <div className="mx-6">
          <h1 className="font-montserrat font-bold text-3xl my-3">OUR STORY</h1>
          <p className="font-montserrat">
            Welcome to BookWormCorner, your ultimate destination for affordable books! Founded with a passion for literature and a mission to make reading accessible to everyone, we are dedicated to offering a wide selection of books at prices that won't break the bank.
          </p>
          
          <h3 className="font-montserrat font-bold text-2xl my-3">Our Mission</h3>
          <p className="font-montserrat">
            At BookWormCorner, we believe that knowledge and imagination should be within reach of every reader, regardless of budget constraints. Our mission is to democratize access to literature by curating a diverse collection of books spanning genres, interests, and ages, all at prices that are affordable for everyone.
          </p>

          <h3 className="font-montserrat font-bold text-2xl my-3">What We Offer</h3>
          <p className="font-montserrat">
            Discover a treasure trove of books ranging from timeless classics to contemporary bestsellers. Whether you're an avid reader, a student on a budget, or someone simply looking to explore new worlds through books, we have something for you. Our catalog includes:
          </p>
          <ul className="list-disc ml-8">
            <li>Fiction and non-fiction books</li>
            <li>Self-help and personal development</li>
            <li>And much more!</li>
          </ul>

          <h3 className="font-montserrat font-bold text-2xl my-3">Why Choose Us?</h3>
          <p className="font-montserrat">
            <ol className="list-decimal ml-8">
              <li>Affordability: We pride ourselves on offering some of the most competitive prices on the market, ensuring that you get the best value for your money.</li>
              <li>Quality: Every book in our collection is carefully selected to meet our standards of quality, ensuring that you receive books that are in excellent condition.</li>
              <li>Customer Satisfaction: Your satisfaction is our priority. From browsing our website to receiving your order, we strive to provide a seamless shopping experience backed by responsive customer service.</li>
            </ol>
          </p>

          <h3 className="font-montserrat font-bold text-2xl my-3">Our Promise</h3>
          <p className="font-montserrat">
            When you shop at BookWormCorner, you're not just buying books; you're joining a community of book lovers who believe in the power of storytelling and knowledge. We are committed to fostering a love for reading and making it accessible to all.
          </p>
        </div>
      </div>

       <div className="mt-10"><hr /></div>


          <div className="flex justify-center lg:space-x-24  py-10 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center w-64 font-montserrat">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
    </>
  );
};

export default About;
