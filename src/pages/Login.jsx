import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/Nav2';

const Login = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in Successfully")
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <>
      <NavBar/>
       <div>
        <div className="grid grid-cols-2 flex items-center justify-center">
          <img
            src="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-5588.jpg?w=996"
            alt="Shopping illustration"
          />
          <div className="container mx-auto px-4 flex justify-center items-center h-screen">
            <div className="max-w-md w-full">
              <h2 className="text-3xl font-bold mb-4 font-montserrat">Welcome Back</h2>
              <p className='font-bold font-montserrat'>Enter your details below</p>
              <form onSubmit={handleLogin}>
                <input
                  className="border border-0 border-b-2 border-slate-400 p-2 w-full my-4 focus:outline-none font-montserrat"
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
                <div className="flex justify-between items-center mb-4">
                  <Link to="/forgot-password" className="text-blue-500 font-montserrat">
                    Forgot Password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="bg-red-500 text-white p-2 w-full rounded font-montserrat"
                >
                  Login
                </button>
              </form>
              <button
                type="button"
                onClick={loginWithGoogle}
                className="bg-blue-500 text-white p-2 w-full rounded mt-2 font-montserrat"
              >
                Login with Google
              </button>
              <p className="font-montserrat text-black pt-8">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;