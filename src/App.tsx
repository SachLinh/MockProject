/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Content from './Components/Home_TrangChu/Content';
import Cart from './Components/cart-order/Cart';
import Header from './Components/FooterAndHeader/Header';
import SearchOrder from './Components/TraCuuDonHang/SearchOrder';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Content />}></Route>
				<Route path='/cart' element={<Cart />}></Route>
				<Route path='/SearchOrder' element={<SearchOrder />}></Route>
			</Routes>
		</div>
	);
}
export default App;
