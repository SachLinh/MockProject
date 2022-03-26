/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';



import ProductDetail from './Components/ChiTietSP/ProductDetail';
        
import Cart from './Components/CartOrder/Cart';
import Footer from './Components/FooterAndHeader/Footer';
import Header from './Components/FooterAndHeader/Header';
import Content from './Components/HomeTrangChu/Content';
import SearchOrder from './Components/TraCuuDonHang/SearchOrder';
import DanhMucSP from './Components/DanhMucSP/DanhMucSP';
import DanhMucSPCon from './Components/DanhMucSP/DanhMucSPCon';
import Payment from './Components/CartOrder/Payment';
import PaymentInfo from './Components/CartOrder/PaymentInfo';
import CompletePayment from './Components/CartOrder/CompletePayment';
import Admin from './Components/Administrator/Admin';
import CuaHang from './Components/CuaHang/CuaHang';


function App() {
	return (
		<div className='App w-full flex flex-col'>
			<Header />
			<Routes>
				<Route path='/' element={<Content />}></Route>
				<Route path='/Admin' element={<Admin />}></Route>				
				<Route path='/cart' element={<Cart />}></Route>
				<Route path='/payment' element={<Payment />}></Route>
				<Route path='/CuaHang' element={<CuaHang />}></Route>
				<Route path='/payment-info' element={<PaymentInfo />}></Route>
				<Route path='/complete-payment' element={<CompletePayment />}></Route>
				<Route path='/SearchOrder' element={<SearchOrder />}></Route>
				<Route path='/DanhMucSP/:idDM' element={<DanhMucSP />}></Route>
				<Route path='/DanhMucSPCon/:idDM/Loai/:idLoai' element={<DanhMucSPCon />}></Route>
				<Route path='/product-detail/:idDM/Loai/:idLoai/SanPham/:idSP' element={<ProductDetail/>}></Route>
			</Routes>
			<Footer/>
		</div>
	);
}
export default App;
