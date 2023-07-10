/* eslint-disable react/prop-types */
import { ChevronDown, ChevronUp } from '../Icons'
import { useCartItemContext } from '../state/CartItemContext'
import { ACTIONS } from '../state/CartReducer'

function CartItem({ title, price, amount, img, id }) {
  const { dispatch } = useCartItemContext()

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id } })
          }}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch({ type: ACTIONS.INCREASE_AMOUNT, payload: { id } })
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id } })
              return
            }
            dispatch({ type: ACTIONS.DECREASE_AMOUNT, payload: { id } })
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
