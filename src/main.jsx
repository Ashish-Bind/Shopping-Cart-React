import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartItemProvider from './state/CartItemContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartItemProvider>
      <App />
    </CartItemProvider>
  </React.StrictMode>
)
