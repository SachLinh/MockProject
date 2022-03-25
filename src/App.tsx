/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';



import ProductDetail from './Components/ChiTietSP/ProductDetail';
        
import Cart from './Components/CartOrder/Cart';
import Footer from './Components/FooterAndHeader/Footer';
import Header from './Components/FooterAndHeader/Header';
import Content from './Components/HomeTrangChu/Content';
import SearchOrder from './Components/TraCuuDonHang/SearchOrder';


function App() {
	return (
		<div className='App w-full flex flex-col'>
			<Header />
			<Routes>
				<Route path='/' element={<Content />}></Route>
				<Route path='/cart' element={<Cart />}></Route>

				<Route path='/SearchOrder' element={<SearchOrder />}></Route>

				<Route path='/product-detail/:idDM/Loai/:idLoai/SanPham/:idSP' element={<ProductDetail/>}></Route>

			</Routes>
			<Footer/>
		</div>
	);
}
export default App;
