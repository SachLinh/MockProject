/** @format */
import React from 'react';
import Body from './Body';
import Menu from './Menu';

export default function Content() {
	return (
		<div className='w-full flex flex-col justify-start items-center'>
			<div
				className=' 2xl:w-[1300px]  xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-[350px]
			2xl:pt-[70px] xl:pt-[70px] lg:pt-[50px] md:pt-[30px] pt-[25px] 
			'>
				<Menu />
				<div className='w-full h-[75px] mt-[15px] mb-[25px]'>
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
