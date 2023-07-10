import CartItem from './CartItem'
import { useCartItemContext } from '../state/CartItemContext'
import { useEffect } from 'react'
import { ACTIONS } from '../state/CartReducer'

function CartContainer() {
  const { state, dispatch } = useCartItemContext()

  useEffect(() => {
    dispatch({ type: ACTIONS.CALC_TOTAL })
  }, [state.cartItems])

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {state?.cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${state.total.toFixed(2)}</span>
          </h4>
        </div>
        {state.cartItems.length === 0 ? (
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch({ type: ACTIONS.INITIALIZE_ITEMS })
            }}
          >
            Initialize Cart
          </button>
        ) : (
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch({ type: ACTIONS.SHOW_MODAL })
            }}
          >
            Clear Cart
          </button>
        )}
      </footer>
    </section>
  )
}

export default CartContainer
