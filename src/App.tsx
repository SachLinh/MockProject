/** @format */

import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Menu from './Components/Home_TrangChu/Menu';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='pt-[70px]'>
				<Menu />
				<Footer />
			</div>
		</div>
	);
}

export default App;
