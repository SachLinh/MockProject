/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
	return (
		<div className='w-5/12 h-96 mx-auto pt-[70px] mb-[100px]'>
			<div className='grid grid-flow-row grid-cols-2 place-content-center'>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 inline text-red-600'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fill-rule='evenodd'
							d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
							clip-rule='evenodd'
						/>
					</svg>
					<span className='text-lg font-semibold text-red-600 cursor-pointer hover:underline'>
						<Link to='/'>Trở về</Link>
					</span>
				</div>
				<h3 className='text-lg font-bold text-red-600'>Giỏ hàng</h3>
			</div>
			<div className='mt-3 px-2 py-3 grid grid-flow-row grid-cols-3 border border-solid rounded-xl  relative shadow-lg'>
				<div className=''>
					<img
						src='https://image.cellphones.com.vn/200x/media/catalog/product/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611_2.jpg'
						alt='product in cart'
					/>
				</div>
				<div className='col-start-2 col-span-2'>
					<p className='font-bold'>Samsung Galaxy Z Fold3 5G-Bạc</p>
					<div className='grid grid-flow-row grid-cols-4'>
						<p className='text-sm text-red-600 font-semibold pt-1'>
							35.990.000 ₫
						</p>
						<p className='text-sm text-[#777] line-through font-light pt-1'>
							41.990.000 ₫
						</p>
						<div className='bg-red-600 w-10/12 p-1 rounded-lg'>
							<p className='text-sm text-white font-semibold'>
								Giảm 14%
							</p>
						</div>
					</div>
					<div>
						<span>Chọn số lượng:</span>
					</div>
					<div className='bg-[#f6f6f6] mt-2 pt-2 pb-4 pl-2 rounded-lg'>
						<p className=''>- Chương trình khuyến mại:</p>
						<ul className='pl-4 text-red-500'>
							<li className='list-disc text-[15px] text-black'>
								Gói dịch vụ ưu tiên cao cấp và phòng chờ hạng thương gia
							</li>
						</ul>
					</div>
				</div>
				<div className='absolute top-1 right-1'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-gray-500 font-bold cursor-pointer'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fill-rule='evenodd'
							d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
							clip-rule='evenodd'
						/>
					</svg>
				</div>
			</div>
			<div className='border border-solid rounded-xl p-2 mt-3 shadow-lg'>
				<div className='grid grid-flow-row grid-cols-2 pb-2'>
					<p className='text-md font-bold'>Tổng tiền tạm tính:</p>
					<p className='text-md text-red-600 font-semibold text-right'>
						35.990.000 ₫
					</p>
				</div>
				<div className='text-center bg-red-600 text-white font-bold py-5 rounded-md mb-2 cursor-pointer'>
					<p>TIẾN HÀNH ĐẶT HÀNG</p>
				</div>
				<div className='border border-solid border-red-600 py-5 text-center text-red-600  font-bold rounded-md hover:bg-red-500 hover:text-white cursor-pointer transition-all'>
					<p>CHỌN THÊM SẢN PHẨM KHÁC</p>
				</div>
			</div>
		</div>
	);
}

export default Cart;
