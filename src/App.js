import * as React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Checkout from './Components/Pages/CheckOut';
import FirstPage from './Components/Pages/FirstPage';
import CustomerPage from './Components/Pages/CustomerPage';
import Cart from './Components/Pages/Cart';
import DeliveryAgent from './Components/Pages/DeliveryAgent';
import Menu from './Components/Pages/Menu';
import RestaurantPage from './Components/Pages/RestuarantPage';
import InvalidPage from './Components/Pages/InvalidPage';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/customerpage" element={<CustomerPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<DeliveryAgent />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/restuarant" element={<RestaurantPage />} />
        <Route path="*" element={<InvalidPage />} />
    </Routes>
  </BrowserRouter>
  );
}

