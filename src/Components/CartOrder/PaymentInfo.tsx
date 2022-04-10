import React, { useEffect, useState } from 'react';
import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
} from 'recoil';
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { totalPriceState } from './Cart';
import { BillType } from '../../TypeState/BillType';
import { billInfoState, userInfoState, cartProductState } from '../../Recoil/RecoilState';
import { CartProduct } from '../../TypeState/CartProduct';

function PaymentInfo() {
    const userInfo = useRecoilValue(userInfoState);
    const totalPrice = useRecoilValue(totalPriceState);
    const billInfo = useSetRecoilState(billInfoState);
    const listProduct = useRecoilValue(cartProductState);

    const [customerName, setCusotmerName] = useState<string>();
    const [customerPhoneNumber, setCusotmerPhoneNumber] = useState<string>();
    const [customerEmail, setCusotmerEmail] = useState<string>();
    const [city, setCity] = useState<string>();
    const [district, setDisrict] = useState<string>();
    const [commune, setCommune] = useState<string>();
    const [address, setAddress] = useState<string>();

    const setName = (e: any) => {
        setCusotmerName(e.target.value);
    }
    const setPhone = (e: any) => {
        setCusotmerPhoneNumber(e.target.value)
    }
    const setEmail = (e: any) => {
        setCusotmerEmail(e.target.value)
    }
    const setCityData = (e: any) => {
        const ct: string = e.target.value;
        setCity(ct);
    }
    const setDistrictData = (e: any) => {
        setDisrict(e.target.value);
    }
    const setCommuneData = (e: any) => {
        setCommune(e.target.value);
    }
    const setAddressData = (e: any) => {
        setAddress(e.target.value);
    }
    const setBillData = () => {
        const uid = userInfo ? userInfo.uid : "null";
        const d = new Date();
        const productList: CartProduct[] = [];
        listProduct.map(value => {
            const product: CartProduct = {
                id: value.id,
                image: value.image,
                name: value.name,
                price: value.price,
                oldPrice: value.oldPrice,
                count: value.count
            }
            productList.push(product);
        })
        const bill: BillType = {
            id: d.getDate() + "" + (d.getMonth() + 1) + d.getFullYear() + d.getHours() + d.getMinutes() + d.getSeconds(),
            productLists: productList,
            customerName: customerName,
            customerPhoneNumber: customerPhoneNumber,
            customerEmail: customerEmail,
            cutomerAddress: city + "" + district + commune + address,
            uid: uid,
            date: d.getDate() +"/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
            totalPrice: totalPrice
        }
        billInfo(bill);
    }


    return (
        <div className="w-5/12 mx-auto mt-16">
            <div className="grid grid-flow-row grid-cols-2 place-content-center">
                <Link to="/cart">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-red-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold text-red-600 cursor-pointer hover:underline">Trở về</span>
                    </div>
                </Link>
                <h3 className="text-lg font-bold text-red-600">Thông tin đặt hàng</h3>
            </div>
            <div className="grid grid-flow-row grid-cols-4 bg-[#f6f6f6] px-4 py-4 text-red-600 text-center">
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
                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-sm">Thanh toán</p>
                </div>
                <div>
                    <div className="border border-solid border-red-600 w-max p-1 rounded-full mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-sm">Hoàn tất đặt hàng</p>
                </div>
            </div>
            <div className="px-2 border border-solid shadow-lg rounded-xl">
                <div className="pt-2">
                    <h3 className="text-md font-bold mb-2">Thông tin khách hàng</h3>
                    <div className="grid grid-flow-row grid-cols-1 gap-y-2">
                        <input onChange={setName} placeholder="Họ và tên (bắt buộc)" className="border border-gray-400 py-1 pl-2 rounded-lg" ></input>
                        <input onChange={setPhone} placeholder="Số điện thoại (bắt buộc)" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                        <input onChange={setEmail} placeholder="Email (Vui long nhập email để nhận hóa đơn)" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="text-md font-bold mb-2">Địa chỉ nhận hàng</h3>
                    <div className="grid grid-flow-row grid-cols-2 gap-x-2 gap-y-2 p-3 bg-[#f0ebeb] rounded-lg">
                        <input onChange={setCityData} placeholder="Thành phố" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                        <input onChange={setDistrictData} placeholder="Quận/Huyện" className="border border-gray-400 py-1 pl-2 rounded-lg" />
                        <input onChange={setCommuneData} placeholder="Xã/Phường" className="border border-gray-400 py-1 pl-2 rounded-lg col-start-1 col-span-2" />
                        <input onChange={setAddressData} placeholder="Địa chỉ chi tiết" className="border border-gray-400 py-1 pl-2 rounded-lg col-start-1 col-span-2" />
                    </div>
                    <div className="my-3">
                        <input placeholder="Yêu cầu khác" className="w-full border border-gray-400 py-1 pl-2 rounded-lg" />
                    </div>
                </div>
            </div>
            <div className="border border-solid rounded-xl p-2 mt-3 shadow-lg">
                <div className="grid grid-flow-row grid-cols-2 pb-2">
                    <p className="text-md font-bold">Tổng tiền tạm tính:</p>
                    <p className="text-md text-red-600 font-semibold text-right">{totalPrice} ₫</p>
                </div>
                <Link to="/payment">
                    <div onClick={setBillData} className="text-center bg-red-600 text-white font-bold py-4 rounded-md mb-2 cursor-pointer w-full">
                        <p>Tiếp tục</p>
                    </div>
                </Link>
                <Link to="/">
                    <div className="border border-solid border-red-600 py-4 text-center text-red-600 font-bold rounded-md hover:bg-red-500 hover:text-white cursor-pointer transition-all">
                        <p>CHỌN THÊM SẢN PHẨM KHÁC</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default PaymentInfo;