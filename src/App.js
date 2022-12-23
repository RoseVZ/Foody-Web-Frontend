import * as React from 'react';
import FirstPage from './Components/Pages/FirstPage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Checkout from './Components/Pages/CheckOut';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstPage />}>
        <Route index element={<FirstPage />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

