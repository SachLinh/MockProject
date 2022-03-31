/** @format */


// import React, { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import ProductDetail from './Components/ChiTietSP/ProductDetail';
// import Cart from './Components/CartOrder/Cart';
// import Footer from './Components/FooterAndHeader/Footer';

// import SearchOrder from './Components/TraCuuDonHang/SearchOrder';
// import DanhMucSP from './Components/DanhMucSP/DanhMucSP';
// import DanhMucSPCon from './Components/DanhMucSP/DanhMucSPCon';
// import Payment from './Components/CartOrder/Payment';
// import PaymentInfo from './Components/CartOrder/PaymentInfo';
// import CompletePayment from './Components/CartOrder/CompletePayment';
// import Admin from './Components/Administrator/Admin';
// import Smember from './Components/SignIn/Smember';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import MemberInfo from './Components/Smember/MemberInfo';
// import { json } from 'stream/consumers';

import React from "react";
import { Route, Routes } from "react-router-dom";

import Admin from "./Components/Administrator/Admin";

import AppUser from "./AppUser";


function App() {
  return (
       <Routes>
        <Route path='/*' element={<AppUser />} />
        <Route path='/Admin/*' element={<Admin />} />
      </Routes>
  );
}
export default App;
