/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Body from './component2Tuan/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Menu from './Components/Home_TrangChu/Menu';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='pt-[70px]'>
				<Menu />
				<div className='px-[75px] w-full h-[75px] mt-[15px] mb-[25px]'>
					<Link to=''>
						<img
							src='https://cdn.cellphones.com.vn/media/wysiwyg/Banner/1200-75-max.png'
							alt=''
						/>
					</Link>
				</div>
				<Body />
				<Footer />
			</div>
		</div>
	);
}
export default App;
