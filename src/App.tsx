/** @format */


// import React, { useEffect, useState } from 'react';
// import { Route, Routes, useInRouterContext } from 'react-router-dom';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

// import ProductDetail from './Components/ChiTietSP/ProductDetail';
// import Cart from './Components/CartOrder/Cart';
// import Footer from './Components/FooterAndHeader/Footer';
// import Header from './Components/FooterAndHeader/Header';
// import Content from './Components/HomeTrangChu/Content';
// import SearchOrder from './Components/TraCuuDonHang/SearchOrder';
// import DanhMucSP from './Components/DanhMucSP/DanhMucSP';
// import DanhMucSPCon from './Components/DanhMucSP/DanhMucSPCon';
// import Payment from './Components/CartOrder/Payment';
// import PaymentInfo from './Components/CartOrder/PaymentInfo';
// import CompletePayment from './Components/CartOrder/CompletePayment';
// import Admin from './Components/Administrator/Admin';
// import Smember from './Components/SignIn/Smember';
// import SmemberMain from './Components/Smember/SmemberMain';

// // Configure Firebase.
// const config = {
//   apiKey: 'AIzaSyAHi4Jo0pqiI5hzX_F-hXbO2pecfQKA8Uk',
//   authDomain: 'mock-project-936ca.firebaseapp.com',
// };
// firebase.initializeApp(config);

// interface userData {
//   uid: string,
//   displayName: string,
//   email: string,
//   photoURL: string,
//   phoneNumber: string,
//   createdAt: string,
//   creationTime: string,
//   lastLoginAt: string,
//   lastSignInTime: string
// }

// function App() {

//   const [isSignedIn, setIsSignedIn] = useState<boolean>(false); // Local signed-in state.

//   // Listen to the Firebase Auth state and set the local state.
//   useEffect(() => {
//     const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user: any) => {
//       if (user !== null) {
//         setIsSignedIn(!!user);
//         console.log(user)
//         const userInfo: userData = {
//           uid: user._delegate.uid,
//           displayName: user._delegate.displayName,
//           email: user._delegate.email,
//           photoURL: user._delegate.photoURL,
//           phoneNumber: user._delegate.phoneNumber,
//           createdAt: user._delegate.metadata.createdAt,
//           creationTime: user._delegate.metadata.creationTime,
//           lastLoginAt: user._delegate.metadata.lastLoginAt,
//           lastSignInTime: user._delegate.metadata.lastSignInTime
//         }
//         localStorage.setItem('mock-project-signed-in', JSON.stringify(!!user));
//         localStorage.setItem('mock-project-smember', JSON.stringify(userInfo));
//       }
//       else {
//         localStorage.setItem('mock-project-signed-in', JSON.stringify(!!user));
//         localStorage.setItem('mock-project-smember', JSON.stringify(user));
//       }
//     });
//     return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
//   }, []);



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
