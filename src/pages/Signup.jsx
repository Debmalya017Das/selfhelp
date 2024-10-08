import React, { useState,useContext } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../components/firebase';
import { useNavigate,Link  } from 'react-router-dom';
import { AuthContext} from '../contexts/AuthContext';
import NavBar from '../components/Nav2';
import { doc, setDoc } from 'firebase/firestore';
import { useUser } from '../hooks/useUser';
import {Modal} from '../components/Modal';

const SignUp = () => {
  const { setCurrentUser } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUpWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', type: '' });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name,
        email,
        createdAt: new Date(),
      });

      setCurrentUser(userCredential.user);
      setModalContent({
        title: 'Success!',
        message: 'Your account has been created successfully.',
        type: 'success'
      });
      setModalOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Signup error:', error.message);
      setModalContent({
        title: 'Signup Failed',
        message: error.message,
        type: 'error'
      });
      setModalOpen(true);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signUpWithGoogle();
      setCurrentUser(result.user);
      setModalContent({
        title: 'Success!',
        message: 'Your account has been created successfully with Google.',
        type: 'success'
      });
      setModalOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Google sign-up error:', error.message);
      setModalContent({
        title: 'Signup Failed',
        message: error.message,
        type: 'error'
      });
      setModalOpen(true);
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
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        message={modalContent.message}
        type={modalContent.type}
      />
    </>
  );
};

export default SignUp;