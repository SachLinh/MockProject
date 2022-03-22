/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Content from './components/Home_TrangChu/Content';
import Cart from './components/cart-order/Cart';
import Header from './components/FooterAndHeader/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Content />}></Route>
				<Route path='/cart' element={<Cart />}></Route>
			</Routes>
		</div>
	);
}
export default App;
