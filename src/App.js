import * as React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Checkout from './Components/Pages/CheckOut';
// import FirstPage from './Components/Pages/FirstPage';
import CustomerPage from './Components/Pages/CustomerPage';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CustomerPage />}>
        <Route index element={<CustomerPage />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

