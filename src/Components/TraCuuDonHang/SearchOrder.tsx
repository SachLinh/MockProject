/** @format */
import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function SearchOrder() {

    const [searchOrder, setSearchOrder] = useState<any>()
    const [checkOrder, setcheckOrder] = useState<any>();

    // useEffect(() => {
    //     getSearchOrder();
    // }, [])

    const getSearchOrder = async () => {
        const res = await axios.get(`https://6238109d0a54d2ceab702909.mockapi.io/HoaDon`);
        setSearchOrder(res.data[Number(checkOrder-1)]);
    }

    console.log("checkOrder", checkOrder);
    
    return(
        <div className="w-[1180px] h-[200px] pt-[80px] mx-auto">
            <div className="bg-[#eeeeee] text-[#444444] h-36 pt-[10px]">
                <div>
                    <h3 className="text-[22px] font-[700] leading-[26.4px] p-[10px 0] text-center">
                        KIỂM TRA THÔNG TIN ĐƠN HÀNG & TÌNH TRẠNG VẬN CHUYỂN
                    </h3>
                </div>
                <div className="text-center flex justify-center">
                    <label
                        className="mt-[30px] px-[10px] font-bold">
                            Mã đơn hàng:  </label> 
                    <input value={checkOrder} onChange={(e)=>setcheckOrder(e.target.value)} id="order_tracking_phone" placeholder="(Bắt buộc)"
                        className="w-[225px] h-[40px] border-[#dedede] rounded border-solid border mt-[25px] p-[8px] text-center leading-[18px]"
                    />
                    <label
                        className="mt-[30px] px-[10px] font-bold">
                            Số điện thoại: </label> 
                    <input id="order_tracking_phone" 
                        className="w-[225px] h-[40px] border-[#dedede] rounded border-solid border mt-[25px] p-[8px] text-center leading-[18px]"
                    />
                    <Link to="">
                        <button 
                            className="w-[150px] h-[39px] bg-[#e11b1e] border-[#e11b1e] rounded border-solid border-[1px] text-[#ffffff] font-bold ml-4 mt-6"
                        onClick={getSearchOrder}>
                            Kiểm tra
                        </button>
                    </Link>
                </div>
            </div>
            
            <div className="px-2 border border-solid">
                <div className="text-lg text-black font-bold grid grid-flow-row grid-cols-1 gap-y-3 border border-solid rounded-xl mx-1 my-3 px-3 pb-5 ">
                    <h2 className="text-center font-bold">Tình trạng đơn hàng</h2>
                    <p>Mã Đơn Hàng : <input value={searchOrder?.id} type="text"  /></p> 
                    <p>Người Nhận : <input value={searchOrder?.name} type="text" /></p>
                    <p>Số Điện Thoại : <input value={searchOrder?.phonenumber} type="text" /></p>
                    <p>Ngày nhận : <input value={searchOrder?.date} type="text" /></p>
                    <p>Nhận Sản Phẩm Tại : <input value={searchOrder?.addStress + "," + searchOrder?.addCity + "," + searchOrder?.addCountry} type="text" /></p>
                    <p>Tổng Tiền : <input value={searchOrder?.totalprice} type="text" /></p>
                </div>
                <div className="px-2 mt-3 ">
                    <div className="p-3 m-2 grid grid-flow-col grid-cols-3 border border-solid rounded-xl ">
                        <div className="">
                            <img src="https://cdn.cellphones.com.vn/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg" className="w-3/4" alt="product in cart" />
                        </div>
                        <div className="col-start-2 col-span-2">
                            <p className="font-bold">iPhone 13 Pro Max 128GB | Chính hãng VN/A</p>
                            <div className="grid grid-flow-row grid-cols-4">
                                <p className="text-sm text-red-600 font-semibold pt-1">29.990.000 ₫</p>
                                <p className="text-sm text-[#777] line-through font-light pt-1">34.990.000 ₫</p>
                            </div>
                            <p>Giá: 29.990.000 ₫</p>
                            <p>Số Lượng: 1</p>
                            <p>Tổng tiền: 29.990.000 ₫</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchOrder;