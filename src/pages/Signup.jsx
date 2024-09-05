import React, { useState, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/Nav2';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUpWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully");
      // You might want to store the user's name in a database or user profile here
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error.message);
      // Handle error (e.g., display error message to user)
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();
      alert("Account created successfully");
      navigate('/');
      alert("Account created successfully");
    } catch (error) {
      console.error('Google sign-up error:', error.message);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <>
      <NavBar />
      <div className='grid grid-cols-2 flex items-center justify-center'>
        <img src="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-5588.jpg?w=996" alt="Shopping illustration" />
        <div className="container mx-auto px-4 flex justify-center items-center h-screen">
          <div className="max-w-md w-full">
            <h2 className="text-3xl font-bold mb-4 font-montserrat">Create an account</h2>
            <p className='font-bold font-montserrat'>Enter your details below</p>
            <form onSubmit={handleSignUp}>
              <input
                className="border border-0 border-b-2 border-slate-400 p-2 w-full my-4 focus:outline-none font-montserrat"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="border border-0 border-b-2 border-slate-400 p-2 w-full mb-4 focus:outline-none font-montserrat"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border border-0 border-b-2 border-slate-400 p-2 w-full mb-4 focus:outline-none font-montserrat"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-500 text-white p-2 w-full rounded font-montserrat"
              >
                Create Account
              </button>
            </form>
            <button
              onClick={handleGoogleSignUp}
              className="bg-blue-500 text-white p-2 w-full rounded mt-2 font-montserrat"
            >
              Sign up with Google
            </button>
            
            <p className='font-montserrat text-black pt-8'>
              Already have an account? <Link to="/login" className="text-blue-500">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;