/** @format */

import React from 'react';
import Body from './Body';
import Menu from './Menu';

export default function Content() {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<div className='pt-[70px] w-[1200px] '>
				<Menu />
				<div className='w-full h-[75px] mt-[15px] mb-[25px] flex flex-row justify-center items-center'>
					<a target={'_blank'} href='https://cellphones.com.vn/apple'>
						<img
							src='https://cdn.cellphones.com.vn/media/wysiwyg/Banner/1200-75-max.png'
							alt=''
							className='w-full'
						/>
					</a>
				</div>
				<Body />
			</div>
		</div>
	);
}
