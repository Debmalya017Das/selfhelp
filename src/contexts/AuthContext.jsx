// src/components/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, googleProvider} from '../components/firebase';
import {  signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider} from 'firebase/auth';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

   const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error('Google sign-up error:', error.message);
      throw error;
    }
  };
  // const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

    const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error.message);
      throw error;
    }
  };

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);


  return (
    <AuthContext.Provider value={{ user, loginWithGoogle,  logout,signUpWithGoogle }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
