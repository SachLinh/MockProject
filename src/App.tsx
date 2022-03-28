/** @format */

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
    // <div>
    //   <div className="App w-full flex flex-col">
    //     <Header />

    //     <Routes>
    //       <Route path="/" element={<Content />}></Route>
    //       <Route path="/Admin" element={<Admin />}></Route>
    //       <Route path="/QuanLyDanhMuc" element={<QuanLyDanhMuc />}>
    //       </Route>
    //       <Route path="/Update/:idDM" element={<UpdateDanhMuc />}>
    //         </Route>
    //       <Route path="/cart" element={<Cart />}></Route>
    //       <Route path="/payment" element={<Payment />}></Route>
    //       <Route path="/CuaHang" element={<CuaHang />}></Route>
    //       <Route path="/payment-info" element={<PaymentInfo />}></Route>
    //       <Route path="/complete-payment" element={<CompletePayment />}></Route>
    //       <Route path="/SearchOrder" element={<SearchOrder />}></Route>
    //       <Route path="/DanhMucSP/:idDM" element={<DanhMucSP />}></Route>
    //       <Route
    //         path="/DanhMucSPCon/:idDM/Loai/:idLoai"
    //         element={<DanhMucSPCon />}
    //       ></Route>
    //       <Route
    //         path="/product-detail/:idDM/Loai/:idLoai/SanPham/:idSP"
    //         element={<ProductDetail />}
    //       ></Route>
    //     </Routes>
    //     <Footer />
    //   </div>
    // </div>
  );
}
export default App;
