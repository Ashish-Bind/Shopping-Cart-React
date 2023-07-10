import { createContext, useContext, useReducer } from 'react'
import { reducer } from './CartReducer'
import cartItems from '../cartItem'

const CartItemContext = createContext()

// Custom Hook
export function useCartItemContext() {
  return useContext(CartItemContext)
}

export default function CartItemProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
    isModalOpen: false,
  })

  return (
    <CartItemContext.Provider value={{ state, dispatch }}>
      {children}
    </CartItemContext.Provider>
  )
}
