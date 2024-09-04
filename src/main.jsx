import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './contexts/CartContext.jsx'
import { WishlistProvider } from './contexts/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
     <WishlistProvider>
    <App />
    </WishlistProvider>
  </CartProvider>
  ,
)
