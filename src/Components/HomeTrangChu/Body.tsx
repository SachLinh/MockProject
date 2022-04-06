/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ThongTinSp from './ThongTinSp';

export default function Body() {
	interface listDanhMucType {
		name: string;
		id: string;
	}
	useEffect(() => {
		getListDanhMuc();
		console.log('abc');
	}, []);

	const [listDanhMucSp, setListDanhMucSp] = useState<listDanhMucType[]>([]);

	const getListDanhMuc = async () => {
		try {
			const res = await axios.get(
				'https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai',
			);
			setListDanhMucSp(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	const ShowSanPham = listDanhMucSp.map((item, index) => {
		if (
			item.name === 'Apple' ||
			item.name === 'SamSung' ||
			item.name === 'Oppo' ||
			item.name === 'XiaoMi'
		) {
			return (
				<div key={index} className='w-full'>
					<h4 className='inline-block no-underline 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center text-center font-bold ... hover:underline ... '>
						{item.name}
					</h4>
					{/* Menu */}
					<div className='mt-[15px] flex-1 text-right w-full'>
						<ul className='mb-[10px]'>
							<ThongTinSp id={item.id} />
						</ul>
						{/* List Điện thoại 1 */}
					</div>
				</div>
			);
		}
	});
	return (
		<div className='w-full'>
			<div className='sanPham w-full'>
				<div className='dienThoai w-full flex flex-col justify-start items-start'>
					{ShowSanPham}
				</div>
				<div className='mt-[20px] w-full '>
					<h3 className='m-2 no-underline text-left font-bold ... hover:underline ... '>
						CHUYÊN GIA THƯƠNG HIỆU
					</h3>
					<div className='flex flex-row'>
						<div className='w-1/4 m-2  '>
							<img
								alt=''
								src='https://cellphones.com.vn/media/icons/banner/banner-sis-apple-homepage.png'
								className='rounded-lg'></img>
						</div>
						<div className='w-1/4 m-2  '>
							<img
								alt=''
								src='https://cellphones.com.vn/media/icons/banner/banner-sis-samsung-homepage.png'
								className='rounded-lg'></img>
						</div>
						<div className='w-1/4 m-2  '>
							<img
								alt=''
								src='https://cellphones.com.vn/media/icons/banner/banner-sis-asus-homepage.png'
								className='rounded-lg'></img>
						</div>
						<div className='w-1/4 m-2  '>
							<img
								alt=''
								src='https://cellphones.com.vn/media/icons/banner/banner-sis-xiaomi-homepage.png'
								className='rounded-lg'></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
