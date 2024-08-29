import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../components/firebase';
import { Link } from 'react-router-dom';
import NavBar from '../components/Nav2';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox.');
      setError('');
    } catch (error) {
      setError('Failed to send password reset email. ' + error.message);
      setMessage('');
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 flex justify-center items-center h-screen">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <input
              className="border border-0 border-b-2 border-slate-400 p-2 w-full my-4 focus:outline-none font-montserrat"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white p-2 w-full rounded font-montserrat"
            >
              Send Reset Email
            </button>
          </form>
          {message && <p className="text-green-500 mt-4">{message}</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <p className="font-montserrat text-black pt-8">
            Remember your password?{' '}
            <Link to="/login" className="text-blue-500">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;