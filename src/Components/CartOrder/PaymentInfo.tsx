import React from 'react';
import { Link } from 'react-router-dom';

function PaymentInfo() {
    return (
        <div className="w-5/12 mx-auto mt-16">
            <div className="grid grid-flow-row grid-cols-2 place-content-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span className="text-lg font-semibold text-red-600 cursor-pointer hover:underline">Trở về</span>
                </div>
                <h3 className="text-lg font-bold text-red-600">Thông tin đặt hàng</h3>
            </div>
            <div className="grid grid-flow-row grid-cols-4 bg-[#f6f6f6] px-5 py-4 text-red-600 text-center">
                <div>
                    <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </div>
                    <p className="text-sm">Chọn sản phẩm</p>
                </div>
                <div>
                    <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </div>
                    <p className="text-sm">Thông tin đặt hàng</p>
                </div>
                <div>
                    <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-sm">Thanh toán</p>
                </div>
                <div>
                    <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-sm">Hoàn tất đặt hàng</p>
                </div>
            </div>
            <div className="px-2 border border-solid shadow-lg rounded-xl">
                <div className="pt-2">
                    <h3 className="text-md font-bold mb-2">Thông tin khách hàng</h3>
                    <div className="grid grid-flow-row grid-cols-1 gap-y-2">
                        <input type="text" placeholder="Họ và tên (bắt buộc)" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                        <input type="text" placeholder="Số điện thoại (bắt buộc)" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                        <input type="text" placeholder="Email (Vuui long nhập email để nhận háo đơn)" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="text-md font-bold mb-2">Chọn cách thức giao hàng</h3>
                    <form className="text-md mb-3">
                        <input type="radio" id="store" name="place" defaultValue="HTML" className="mr-2 checked:bg-red-500" />
                        <label htmlFor="store" className="mr-2">Nhận tại cửa hàng</label>
                        <input type="radio" id="home" name="place" defaultValue="CSS" className="mr-2" />
                        <label htmlFor="home">Giao hàng tận nơi</label>
                    </form>
                    <div className="grid grid-flow-row grid-cols-2 gap-x-2 gap-y-2 p-3 bg-[#f0ebeb] rounded-lg">
                        <select className="border border-gray-400 py-1 pl-2 rounded-lg">
                            <option value="nam">Miền Nam</option>
                            <option value="bac">Miền Bắc</option>
                        </select>
                        <select className="border border-gray-400 py-1 pl-2 rounded-lg">
                            <option value="nam">Hà Nội</option>
                            <option value="bac">Bình Dương</option>
                        </select>
                        <input type="text" placeholder="Quận/Huyện" className="border border-gray-400 py-1 pl-2 rounded-lg col-start-1 col-span-2" />
                        <input type="text" placeholder="Chọn địa chỉ cửa hàng" className="border border-gray-400 py-1 pl-2 rounded-lg col-start-1 col-span-2" />
                    </div>
                    <div className="mt-3">
                        <input type="text" placeholder="Yêu cầu khác" className="w-full border border-gray-400 py-1 pl-2 rounded-lg" />
                    </div>
                </div>
            </div>
            <div className="border border-solid rounded-xl p-2 mt-3 shadow-lg">
                <div className="grid grid-flow-row grid-cols-2 pb-2">
                    <p className="text-md font-bold">Tổng tiền tạm tính:</p>
                    <p className="text-md text-red-600 font-semibold text-right">35.990.000 ₫</p>
                </div>
                <Link to="/payment">
                    <div className="text-center bg-red-600 text-white font-bold py-4 rounded-md mb-2 cursor-pointer">
                        <p>TIẾP TỤC</p>
                    </div>
                </Link>
                <Link to="/">
                    <div className="border border-solid border-red-600 py-4 text-center text-red-600  font-bold rounded-md hover:bg-red-500 hover:text-white cursor-pointer transition-all">
                        <p>CHỌN THÊM SẢN PHẨM KHÁC</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default PaymentInfo;