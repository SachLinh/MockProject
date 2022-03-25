/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';

function Cart() {
	return (
		<div className='w-5/12 mx-auto mt-16'>
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
			<CartItem />
			<CartItem />
			<div className='border border-solid rounded-xl p-2 mt-3 shadow-lg'>
				<div className='grid grid-flow-row grid-cols-2 pb-2'>
					<p className='text-md font-bold'>Tổng tiền tạm tính:</p>
					<p className='text-md text-red-600 font-semibold text-right'>
						35.990.000 ₫
					</p>
				</div>
				<Link to="/payment-info">
					<div className='text-center bg-red-600 text-white font-bold py-5 rounded-md mb-2 cursor-pointer'>
						<p>TIẾN HÀNH ĐẶT HÀNG</p>
					</div>
				</Link>
				<Link to="/">
					<div className='border border-solid border-red-600 py-5 text-center text-red-600  font-bold rounded-md hover:bg-red-500 hover:text-white cursor-pointer transition-all'>
						<p>CHỌN THÊM SẢN PHẨM KHÁC</p>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Cart;
