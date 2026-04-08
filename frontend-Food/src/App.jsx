import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ComboPage from './pages/ComboPage';
import PromotionsPage from './pages/PromotionsPage';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/combo" element={<ComboPage />} />
      <Route path="/promotions" element={<PromotionsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/orders" element={<OrderHistoryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
