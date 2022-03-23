/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
export default function Menu() {
	const [thums, setThums] = useState<any>(null);
	return (
		<div className='w-full mt-[10px] mb-[20px] font-Roboto text-[14px] h-[376px]'>
			<div className='px-[75px] flex flex-row justify-between w-full h-full'>
				<div className='w-[20%] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]'>
					<ul className='w-full h-full flex flex-col justify-between '>
						<li className='relative w-full hover:bg-[#d6d3d3]  p-[6px] first:rounded-t-2xl pl-[10px] flex flex-row justify-between items-center group'>
							<Link className='w-full' to=''>
								Điện thoại
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
							<div className='absolute w-full left-[100%] top-[0%] bg-[#fff] opacity-0 group-hover:opacity-100'>
								<ul className='w-full h-full flex flex-col justify-between'>
									<li className='w-full hover:bg-[#d6d3d3]  p-[6px] pl-[10px]'>
										<Link className='w-full' to=''>
											SamSung
										</Link>
									</li>
									<li className='w-full hover:bg-[#d6d3d3]  p-[6px] pl-[10px]'>
										<Link className='w-full' to=''>
											Apple
										</Link>
									</li>
									<li className='w-full hover:bg-[#d6d3d3]  p-[6px] pl-[10px]'>
										<Link className='w-full' to=''>
											Nokia
										</Link>
									</li>
									<li className='w-full hover:bg-[#d6d3d3]  p-[6px] pl-[10px]'>
										<Link className='w-full' to=''>
											Realme
										</Link>
									</li>
									<li className='w-full hover:bg-[#d6d3d3]  p-[6px] pl-[10px]'>
										<Link className='w-full' to=''>
											Oppo
										</Link>
									</li>
									<li className='w-full hover:bg-[#d6d3d3]  p-[6px] pl-[10px]'>
										<Link className='w-full' to=''>
											XiaoMi
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Laptop, PC, Màn hình
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Tablet
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Âm thanh
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Đồng hồ
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Nhà thông minh
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Phụ kiện
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Thu cũ
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Hàng cũ
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Điện máy
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center'>
							<Link className='w-full' to=''>
								Tin công nghệ
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
						<li className='w-full  hover:bg-[#d6d3d3]  p-[4px] pl-[10px] flex flex-row justify-between items-center last:rounded-b-2xl'>
							<Link className='w-full' to=''>
								Khuyến mại
							</Link>
							<i className='fa-solid fa-angle-right pr-[15px]'></i>
						</li>
					</ul>
				</div>
				<div className='rounded-2xl shadow-[#9e9c9c] w-[55%] shadow-[0_0px_5px_2px_#9b9a9a]'>
					<Swiper
						className='w-full'
						loop={true}
						spaceBetween={10}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						thumbs={{ swiper: thums }}
						modules={[FreeMode, Navigation, Thumbs, Autoplay]}>
						<SwiperSlide>
							<img
								src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/A53.png'
								alt=''
								className='w-full h-[304px] rounded-t-2xl'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/mI_12.png'
								alt=''
								className='w-full h-[304px] rounded-t-2xl'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/reno7.png'
								alt=''
								className='w-full h-[304px] rounded-t-2xl'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/ASUS-690x300_T3300_222.jpg'
								alt=''
								className='w-full h-[304px] rounded-t-2xl'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/ipad_10.2_home.png'
								alt=''
								className='w-full h-[304px] rounded-t-2xl'
							/>
						</SwiperSlide>
					</Swiper>
					<Swiper
						className='w-full flex flex-row justify-between h-[72px] text-[12px] text-[#340a40]'
						onSwiper={setThums}
						loop={true}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}>
						<SwiperSlide className='w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6] hover:rounded-b-2xl active:border-b-2 active:border-b-black'>
							<Link to=''>GALAXY A53</Link>
							<p>Ưu đãi siêu khủng</p>
						</SwiperSlide>
						<SwiperSlide className='w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6] '>
							<Link to=''>XIAOMI 12 SERTIES</Link>
							<p>Quà cực xịn</p>
						</SwiperSlide>
						<SwiperSlide className='w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6] '>
							<Link to=''>OPPO ZENO7 SERIES</Link>
							<p>Đặt trước nhiều quà</p>
						</SwiperSlide>
						<SwiperSlide className='w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6] '>
							<Link to=''>VIVOBOOK 13 OLED</Link>
							<p>Mở bán quà ngon</p>
						</SwiperSlide>
						<SwiperSlide className='w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6]  hover:rounded-b-2xl '>
							<Link to=''>IPAD 12.2 2021</Link>
							<p>Giá cực sốc</p>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className='w-[20%] flex flex-col justify-between items-start'>
					<Link to=''>
						<img
							src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/13_series_right_desk.png'
							alt=''
							className='w-[265px] h-[115px] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]'
						/>
					</Link>
					<Link to=''>
						<img
							src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/RightBanner_Desktop_S22.png'
							alt=''
							className='w-[265px] h-[115px] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]'
						/>
					</Link>
					<Link to=''>
						<img
							src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/dell_latitude.png'
							alt=''
							className='w-[265px] h-[115px] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
