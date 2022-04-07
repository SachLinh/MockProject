/** @format */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	let [open, setOpen] = useState(false);

	return (
		<nav className='w-full bg-[#d70018] fixed flex flex-col lg:justify-center justify-start items-center z-50'>
			<div
				className='2xl:w-[1500px] relative xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-[350px]
       z-50'>
				<div className='flex lg:flex-row flex-col justify-start lg:justify-between lg:items-center items-start text-white w-full text-[12px]'>
					<h2 className='lg:w-[15%] w-[30%] lg:mt-[0px]  lg:mb-[0px] text-[18px] font-extrabold text-[rgb(255,255,255)]'>
						<i className='fa-solid fa-bars'></i>
						<Link to=''> G1-UlTr Phone</Link>
					</h2>
					<div
						onClick={() => {
							setOpen(!open);
						}}
						className='text-3xl cursor-pointer absolute top-3 right-4 lg:hidden'>
						<i
							className={
								open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
							}></i>
					</div>
					<ul
						className={`lg:w-[85%] absolute lg:static transition-all duration-500 lg:bg-none w-full h-full flex lg:flex-row flex-col justify-starts lg:justify-between lg:items-center items-start ${
							open ? 'top-20 opacity-100' : 'top-[-490px]'
						}`}>
						<li className='h-full leading-[64px] flex flex-col justify-around items-center'>
							<div className='flex flex-row justify-around items-center bg-[#eb4a4a] rounded-xl'>
								<i className='fa-solid fa-location-dot pl-[5px] text-base'></i>
								<div className=' h-[40px] w-[100px] flex flex-col justify-center items-center'>
									<span className='inline-block h-[20px] text-[#fff] leading-[15px]'>
										Khu vực
									</span>
									<select className='outline-none text-[#fff] text-[14px] bg-[#eb4a4a] inline-block  rounded-xl'>
										<option className='bg-[#fff] text-[#000] rounded-xl w-[100px]'>
											Mien Nam
										</option>
										<option className=' bg-[#fff] text-[#000] rounded-xl'>
											Mien Bac
										</option>
									</select>
								</div>
							</div>
						</li>
						<li className='h-full leading-[64px]'>
							<input
								className='h-[40px] pl-3 rounded-xl p-[5px] outline-none text-[#020000] text-[14px] w-[300px]'
								placeholder='Bạn cần tìm gì?'
							/>
						</li>
						<li className='h-full leading-[64px] flex flex-col justify-around items-center'>
							<Link
								to=''
								className='flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl'>
								<i className='fa-solid fa-phone text-[25px] mr-2'></i>
								<div className='h-[50px] w-auto flex flex-col justify-start items-start'>
									<span className='h-[25px] leading-6'>
										Gọi mua hàng
									</span>
									<span className='h-[25px] leading-6'>1234.5678</span>
								</div>
							</Link>
						</li>
						<li className='h-full leading-[64px] flex flex-col justify-around items-center'>
							<Link
								to='/CuaHang'
								className='flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl'>
								<i className='fa-solid fa-location-dot text-[25px] mr-2'></i>
								<div className='h-[50px] w-auto flex flex-col justify-start items-start'>
									<span className='h-[25px] leading-6'>Cửa hàng</span>
									<span className='h-[25px] leading-6'>gần bạn</span>
								</div>
							</Link>
						</li>
						<li className='h-full leading-[64px] flex flex-col justify-around items-center'>
							<Link
								to='/SearchOrder'
								className='flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl'>
								<i className='fa-solid fa-truck text-[25px] mr-2'></i>
								<div className='h-[50px] w-auto flex flex-col justify-start items-start'>
									<span className='h-[25px] leading-6'>Tra cứu</span>
									<span className='h-[25px] leading-6'>đơn hàng</span>
								</div>
							</Link>
						</li>
						<li className='h-full leading-[64px] flex flex-col justify-around items-center'>
							<Link
								to='/cart'
								className='flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl'>
								<i className='fa-solid fa-bag-shopping text-[25px] mr-2'></i>
								<div className='h-[50px] w-auto flex flex-col justify-start items-start'>
									<span className='h-[50px] leading-[50px]'>
										Giỏ hàng
									</span>
								</div>
							</Link>
						</li>
						<li className='h-full leading-[64px] flex flex-col justify-around items-center'>
							<Link
								to='/Smember'
								className='h-[50px] flex flex-col justify-start items-center text-white p-[5px] hover:bg-[#eb4a4a] px-1 rounded-xl'>
								<i className='fa-solid fa-user text-[20px] h-[25px]'></i>
								<span className='inline-block h-[25px] leading-6'>
									Smember
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
