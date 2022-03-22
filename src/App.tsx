/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Content from './Components/Home_TrangChu/Content';
import Cart from './pages/cart-order/Cart';

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
