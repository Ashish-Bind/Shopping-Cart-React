import { CartIcon } from '../Icons'
import { useCartItemContext } from '../state/CartItemContext'

function Navbar() {
  const { state } = useCartItemContext()
  return (
    <nav>
      <div className="nav-center">
        <h3>Shopping Cart</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{state.amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
