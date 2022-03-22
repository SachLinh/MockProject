/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Body from '../../component2Tuan/Body';
import Footer from '../Footer';
import Menu from './Menu';

export default function Content() {
	return (
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
	);
}
