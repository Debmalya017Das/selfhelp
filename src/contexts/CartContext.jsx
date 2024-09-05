import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import { db } from '../components/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      fetchCart();
    } else {
      const savedCart = localStorage.getItem('cart');
      setCart(savedCart ? JSON.parse(savedCart) : []);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, currentUser]);

  const fetchCart = async () => {
    if (currentUser) {
      const cartRef = doc(db, 'carts', currentUser.uid);
      const cartSnap = await getDoc(cartRef);
      if (cartSnap.exists()) {
        setCart(cartSnap.data().items);
      } else {
        setCart([]);
      }
    }
  };

  const updateFirestoreCart = async (newCart) => {
    if (currentUser) {
      const cartRef = doc(db, 'carts', currentUser.uid);
      await setDoc(cartRef, { items: newCart });
    }
  };

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    if (currentUser) {
      updateFirestoreCart(newCart);
    }
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter(item => item.id !== itemId);
    setCart(newCart);
    if (currentUser) {
      updateFirestoreCart(newCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};