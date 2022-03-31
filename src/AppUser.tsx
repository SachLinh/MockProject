/** @format */

import React, { useEffect, useState } from "react";
import { Outlet, Route, Router, Routes } from "react-router-dom";

import ProductDetail from "./Components/ChiTietSP/ProductDetail";

import Cart from "./Components/CartOrder/Cart";
import Footer from "./Components/FooterAndHeader/Footer";
import Header from "./Components/FooterAndHeader/Header";
import Content from "./Components/HomeTrangChu/Content";
import SearchOrder from "./Components/TraCuuDonHang/SearchOrder";
import DanhMucSP from "./Components/DanhMucSP/DanhMucSP";
import DanhMucSPCon from "./Components/DanhMucSP/DanhMucSPCon";
import Payment from "./Components/CartOrder/Payment";
import PaymentInfo from "./Components/CartOrder/PaymentInfo";
import CompletePayment from "./Components/CartOrder/CompletePayment";
import CuaHang from "./Components/CuaHang/CuaHang";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import MemberInfo from "./Components/Smember/MemberInfo";
import { json } from "stream/consumers";
import Smember from "./Components/SignIn/Smember";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAHi4Jo0pqiI5hzX_F-hXbO2pecfQKA8Uk",
  authDomain: "mock-project-936ca.firebaseapp.com",
};
firebase.initializeApp(config);
function AppUser() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user:any) => {
        setIsSignedIn(!!user);
        localStorage.setItem(
          "mock-project-signed-in",
          JSON.stringify(isSignedIn)
        );
        localStorage.setItem("mock-project-smember", JSON.stringify(user));
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <div>
      <div className="App w-full flex flex-col">
        <Header />

        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path='/Smember' element={<Smember />}></Route>
  				<Route path='/Smember/thong-tin' element={<MemberInfo />}></Route>
          <Route path="/CuaHang" element={<CuaHang />}></Route>
          <Route path="/payment-info" element={<PaymentInfo />}></Route>
          <Route path="/complete-payment" element={<CompletePayment />}></Route>
          <Route path="/SearchOrder" element={<SearchOrder />}></Route>
          <Route path="/DanhMucSP/:idDM" element={<DanhMucSP />}></Route>
          <Route
            path="/DanhMucSPCon/:idDM/Loai/:idLoai"
            element={<DanhMucSPCon />}
          ></Route>
          <Route
            path="/product-detail/:idDM/Loai/:idLoai/SanPham/:idSP"
            element={<ProductDetail />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default AppUser;