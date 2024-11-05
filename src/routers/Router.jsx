import { Route, Routes } from 'react-router';

import CartPage from '../components/pages/Cart/CartPage';
import AuthPage from '../components/pages/auth/AuthPage';
import Home from '../components/pages/home/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<AuthPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default Router;
