import React, { useState, useEffect } from 'react';
import NavBar from '../components/Nav';
import { db } from '../components/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contactForms'), formData);
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form: ', error);
      setSubmitMessage('Error sending message. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <>
    <NavBar />
    <div className="container mx-auto my-24 p-4 flex flex-col md:flex-row gap-8 font-montserrat lg:px-12">
      <div className="md:w-1/2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-8">
            <h2 className="flex items-center text-xl font-bold mb-2">
              <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call To Us
            </h2>
            <p className="mb-2">We are available 24/7, 7 days a week.</p>
            <p>Phone:</p>
            <p className="font-bold">+91(9646951315)</p>
          </div>
          <hr />
          <div className='mt-4'>
            <h2 className="flex items-center text-xl font-bold mb-2">
              <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Write To Us
            </h2>
            <p className="mb-2">Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails:  contact@bookwormcorner.com</p>
          </div>
        </div>
      </div>
     <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full p-2 border rounded bg-slate-100"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
              />
              <input
                className="w-full p-2 border rounded bg-slate-100"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
              />
              <input
                className="w-full p-2 border rounded bg-slate-100"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone *"
                required
              />
              <textarea
                className="w-full p-2 border rounded h-32 bg-slate-100"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && <p className="text-green-600">{submitMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact