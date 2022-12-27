import * as React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Checkout from './Components/Pages/CheckOut';
import FirstPage from './Components/Pages/FirstPage';
import CustomerPage from './Components/Pages/CustomerPage';
import Cart from './Components/Pages/Cart';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/customerpage" element={<CustomerPage />} />
        <Route path="*" element={<Cart />} />
    </Routes>
  </BrowserRouter>
  );
}

