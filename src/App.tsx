/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from './Components/CartOrder/Cart';
import Header from './Components/FooterAndHeader/Header';
import Content from './Components/HomeTrangChu/Content';

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
