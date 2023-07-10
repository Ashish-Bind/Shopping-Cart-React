import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useCartItemContext } from './state/CartItemContext'
import Modal from './components/Modal'

function App() {
  const { state } = useCartItemContext()
  return (
    <>
      {state.isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  )
}

export default App
