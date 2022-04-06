/** @format */

import React from 'react';
import Body from './Body';
import Menu from './Menu';

export default function Content() {
	return (
		<div className='w-full flex flex-col justify-start items-center'>
			<div className=' 2xl:w-[1200px] 2xl:pt-[70px] xl:w-[1200px] lg:w-[1200px] md:w-[800px] sm:w-[700px] w-full'>
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
