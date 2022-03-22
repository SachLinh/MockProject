/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Content from './Components/Home_TrangChu/Content';
import Cart from './Components/cart-order/Cart';
import Header from './Components/FooterAndHeader/Header';
import ProductDetail from './Components/ChiTietSP/ProductDetail';


function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Content />}></Route>
				<Route path='/cart' element={<Cart />}></Route>
				<Route path='/product-detail' element={<ProductDetail/>}></Route>
			</Routes>
		</div>
	);
}
export default App;
