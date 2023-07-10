import { useCartItemContext } from '../state/CartItemContext'
import { ACTIONS } from '../state/CartReducer'

function Modal() {
  const { dispatch } = useCartItemContext()
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all item from cart</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch({ type: ACTIONS.CLEAR_CART })
              dispatch({ type: ACTIONS.CLOSE_MODAL })
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch({ type: ACTIONS.CLOSE_MODAL })
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
