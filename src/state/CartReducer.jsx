import cartItems from '../cartItem'

export const ACTIONS = {
  INITIALIZE_ITEMS: 'initialize-items',
  CLEAR_CART: 'clear-cart',
  REMOVE_ITEM: 'remove-item',
  CALC_TOTAL: 'calc-total',
  INCREASE_AMOUNT: 'increse-amount',
  DECREASE_AMOUNT: 'decrese-amount',
  SHOW_MODAL: 'show-modal',
  CLOSE_MODAL: 'close-modal',
}

export function reducer(state, action) {
  const { type } = action
  if (type === ACTIONS.INITIALIZE_ITEMS) {
    return { ...state, cartItems: cartItems }
  }

  if (type === ACTIONS.REMOVE_ITEM) {
    const newItems = state.cartItems.filter(
      (item) => item.id !== action.payload.id
    )
    return { ...state, cartItems: newItems }
  }

  if (type === ACTIONS.CLEAR_CART) {
    return { ...state, cartItems: [] }
  }

  if (type === ACTIONS.CALC_TOTAL) {
    let calcAmount = 0
    let calcTotal = 0
    state.cartItems.forEach((item) => {
      calcAmount += item.amount
      calcTotal += item.amount * item.price
    })
    return { ...state, amount: calcAmount, total: calcTotal }
  }

  if (type === ACTIONS.INCREASE_AMOUNT) {
    const newItems = state.cartItems.map((item) => {
      return item.id === action.payload.id && item.amount > 0
        ? { ...item, amount: item.amount + 1 }
        : item
    })
    return { ...state, cartItems: newItems }
  }

  if (type === ACTIONS.DECREASE_AMOUNT) {
    const newItems = state.cartItems.map((item) => {
      return item.id === action.payload.id && item.amount > 1
        ? { ...item, amount: item.amount - 1 }
        : item
    })
    return { ...state, cartItems: newItems }
  }

  if (type === ACTIONS.SHOW_MODAL) {
    state.isModalOpen = true
    return { ...state }
  }

  if (type === ACTIONS.CLOSE_MODAL) {
    state.isModalOpen = false
    return { ...state }
  }
}
