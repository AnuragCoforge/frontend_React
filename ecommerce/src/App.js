import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { useReducer, useState } from 'react';
import { CartReducer } from './components/CartReducers';

function App() {
  const [cart, dispatch] = useReducer(CartReducer,[]);
  const totalItems = cart.reduce((sum, item) => sum+item.qty, 0)
  const totalPrice = cart.reduce((sum, items) => sum + item.qty * item.price, 0)
  const [showProducts, setShowProducts] = useState(true)
  const [showCart, setShowCart] = useState(true)
  const [showCheckout, setShowCheckout] = useState(true)
  

  return (
    <>
    <div>
      <NavBar></NavBar>
    </div>
    </>
  );
}

export default App;
