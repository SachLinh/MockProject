/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../FooterAndHeader/Footer';
import Body from './Body';
import Menu from './Menu';

export default function Content() {
	return (
		<div className='pt-[70px]'>
			<Menu />
			<div className='w-full px-[75px] h-[75px] mt-[15px] mb-[25px] flex flex-row justify-center items-center'>
				<Link to=''>
					<img
						src='https://cdn.cellphones.com.vn/media/wysiwyg/Banner/1200-75-max.png'
						alt=''
						className='w-full'
					/>
				</Link>
			</div>
			<Body />
			<Footer />
		</div>
	);
}
