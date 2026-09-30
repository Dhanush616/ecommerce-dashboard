import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { PRODUCTS } from './utils/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [orderId, setOrderId] = useState('');

  const addToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((items) => quantity < 1
      ? items.filter((item) => item.id !== productId)
      : items.map((item) => item.id === productId ? { ...item, quantity } : item));
  };

  const completeOrder = (newOrderId) => {
    setOrderId(newOrderId);
    setCartItems([]);
    setCurrentPage('home');
  };

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const renderPage = () => {
    if (currentPage === 'cart') {
      return <Cart items={cartItems} onQuantityChange={updateQuantity} onRemove={(id) => updateQuantity(id, 0)} onCheckout={() => setCurrentPage('checkout')} onContinue={() => setCurrentPage('products')} />;
    }
    if (currentPage === 'checkout') {
      return <Checkout items={cartItems} onComplete={completeOrder} onBack={() => setCurrentPage('cart')} />;
    }
    return <ProductList products={PRODUCTS} onAddToCart={addToCart} />;
  };

  return (
    <div className="App">
      <Header cartItemCount={cartItemCount} onCartClick={() => setCurrentPage('cart')} />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} cartItemCount={cartItemCount} />
      <main className="main-content">
        {orderId && <div className="order-confirmation"><span>Order confirmed</span><strong>{orderId}</strong><button onClick={() => setOrderId('')} aria-label="Dismiss confirmation">×</button></div>}
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
