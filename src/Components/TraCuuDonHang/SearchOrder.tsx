/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BillType, Product } from "../../TypeState/BillType";

function SearchOrder() {
    const [searchOrder, setSearchOrder] = useState<BillType>();
    const [checkOrder, setcheckOrder] = useState<string>();
    const [show, setShow] = useState<boolean>(false);

    const getSearchOrder = async () => {
        await axios.get(`https://6232e62e6de3467dbac2a7d6.mockapi.io/HoaDon/${checkOrder}`)
            .then(res => {
                setSearchOrder(res.data.billInfo);
                setShow(true);
            })
            .catch(error => {
                setShow(false);
                console.log(error)
            });
    }
    const formatPrice = (price: number|undefined) => {
        if(price)
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
    }

    return (
        <div className="
            2xl:w-[1180px] 2xl:h-[200px]
            xl:w-[1180px] xl:h-[200px]
            lg:w-[700px] lg:h-[200px]
            md:w-[500px] md:h-[200px]
            sm:w-[300px] sm:h-[200px]
        w-[1180px] h-[200px] pt-[80px] mx-auto mb-[700px]">
            <div className="
            2xl:w-[1180px] 2xl:h-[144px]
            xl:w-[1180px] xl:h-[144px]
            lg:w-[700px] lg:h-[190px]
            md:w-[450px] md:h-[270px]
            sm:w-[300px] sm:h-[420px]
        bg-[#eeeeee] text-[#444444] h-36 pt-[10px]">
                <div>
                    <h3 className="text-[22px] font-[700] leading-[26.4px] p-[10px 0] text-center">
                        KIỂM TRA THÔNG TIN ĐƠN HÀNG & TÌNH TRẠNG VẬN CHUYỂN
                    </h3>
                </div>
                <div className="
                lg:flex-wrap
                md:flex-wrap md:flex-col
                sm:flex-wrap sm:flex-col
            box-border flex flex-row justify-center">
                    <label
                        className="mt-[30px] px-[10px] font-bold" id="madonhang">
                        Mã đơn hàng:  </label>
                    <input value={checkOrder} onChange={(e) => setcheckOrder(e.target.value)} placeholder="(Bắt buộc)"
                        className="w-[225px] h-[40px] border-[#dedede] rounded border-solid border mt-[25px] p-[8px] text-center leading-[18px]"
                    />
                    <label
                        className="mt-[30px] px-[10px] font-bold">
                        Số điện thoại: </label>
                    <input placeholder="(Không bắt buộc)"
                        className="w-[225px] h-[40px] border-[#dedede] rounded border-solid border mt-[25px] p-[8px] text-center leading-[18px]"
                    />
                    <Link to="">
                        <button
                            className="w-[150px] h-[39px] bg-[#e11b1e] border-[#e11b1e] rounded border-solid border-[1px] text-[#ffffff] font-bold ml-4 mt-6"
                            onClick={() => {
                                getSearchOrder();
                            }}
                        >
                            Kiểm tra
                        </button>
                    </Link>
                </div>
            </div>

            {show && <div className="px-2 border border-solid">
                <div className="text-lg text-black font-bold grid grid-flow-row grid-cols-1 gap-y-3 border border-solid rounded-xl mx-1 my-3 px-3 pb-5 ">
                    <h2 className="text-center font-bold">Tình trạng đơn hàng</h2>
                    <p>Mã Đơn Hàng : {searchOrder?.id}</p>
                    <p>Người Nhận : {searchOrder?.customerName}</p>
                    <p>Số Điện Thoại : {searchOrder?.customerPhoneNumber}</p>
                    <p>Ngày Đặt : {searchOrder?.date}</p>
                    <p>Nhận Sản Phẩm Tại : {searchOrder?.cutomerAddress}</p>
                    <p>Tổng Tiền : {formatPrice(searchOrder?.totalPrice)}</p>
                </div>
            </div>}
        </div>

    );

}

export default SearchOrder;
