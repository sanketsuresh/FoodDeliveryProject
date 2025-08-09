import React, { useState } from 'react';
import { Header } from './components/Header';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { OrderSuccess } from './components/OrderSuccess';
import { AdminPanel } from './components/AdminPanel';
import { useAuth } from './hooks/useAuth';
import { useCart } from './hooks/useCart';
import { foodItems } from './data/foodItems';
import { Order } from './types';

type View = 'register' | 'login' | 'menu' | 'admin';

function App() {
  const [currentView, setCurrentView] = useState<View>('register');
  const [showCart, setShowCart] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  const { currentUser, isAdmin, register, login, logout } = useAuth();
  const { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    getTotalItems 
  } = useCart();

  const handleRegister = (username: string, email: string, password: string) => {
    const success = register(username, email, password);
    if (success) {
      alert('Registration successful! Please login.');
      setCurrentView('login');
    }
    return success;
  };

  const handleLogin = (email: string, password: string) => {
    const success = login(email, password);
    if (success) {
      if (email === 'admin@fooddelivery.com') {
        setCurrentView('admin');
      } else {
        setCurrentView('menu');
      }
    }
    return success;
  };

  const handleLogout = () => {
    logout();
    clearCart();
    setCurrentView('register');
    setShowCart(false);
    setShowOrderSuccess(false);
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    const order: Order = {
      id: Date.now().toString(),
      userId: currentUser?.id || '',
      username: currentUser?.username || '',
      email: currentUser?.email || '',
      items: [...cartItems],
      total: getTotalPrice(),
      date: new Date().toISOString(),
      status: 'pending'
    };

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    setOrderTotal(getTotalPrice());
    clearCart();
    setShowCart(false);
    setShowOrderSuccess(true);
  };

  // Show appropriate view based on authentication state
  if (!currentUser && !isAdmin) {
    return currentView === 'register' ? (
      <Registration 
        onRegister={handleRegister}
        onSwitchToLogin={() => setCurrentView('login')}
      />
    ) : (
      <Login 
        onLogin={handleLogin}
        onSwitchToRegister={() => setCurrentView('register')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentUser={currentUser}
        isAdmin={isAdmin}
        cartItemCount={getTotalItems()}
        onCartClick={() => setShowCart(true)}
        onLogout={handleLogout}
      />

      {isAdmin ? (
        <AdminPanel />
      ) : (
        <Menu 
          foodItems={foodItems}
          onAddToCart={addToCart}
        />
      )}

      <Cart
        cartItems={cartItems}
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onPlaceOrder={handlePlaceOrder}
        totalPrice={getTotalPrice()}
      />

      <OrderSuccess
        isOpen={showOrderSuccess}
        onClose={() => setShowOrderSuccess(false)}
        orderTotal={orderTotal}
      />
    </div>
  );
}

export default App;