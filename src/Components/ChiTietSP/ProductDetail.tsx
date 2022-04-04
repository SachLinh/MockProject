/** @format */

import { ImGift } from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import ImgProduct from "./ImgProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailProduct } from "./ModelPrdDetail";
import { Link, useParams } from "react-router-dom";
import React from "react";

function ProductDetail() {
	const params = useParams();
	useEffect(() => {
		getData();
	}, []);
	const [detailProduct, setDetailProduct] = useState<DetailProduct>();
	const keyLocal = "data"
	var dataString = JSON.parse(localStorage.getItem(keyLocal) || '""')
	let local = [...dataString, detailProduct]
	const getData = async () => {
		const resDetail = await axios.get(
			`https://6232e62e6de3467dbac2a7d6.mockapi.io/SanPham/${params.idSP}`
		);
		setDetailProduct(resDetail.data)
	};
	const storage = () => {
		localStorage.setItem(keyLocal, JSON.stringify(local))
	}
	return (
		<div key={detailProduct?.id} className="font-sans ">
			<div className="py-[10px] border-solid ml-2 mt-[65px] flex justify-center">
				<h3 className="font-bold text-[18px] w-[1200px]">
					{detailProduct?.name}
				</h3>
			</div>
			<div className="border-[1px] pb-5 shadow-md shadow-gray-300 border-stone-300 flex justify-center">
				<div className="w-[1200px] grid grid-cols-3 gap-5 mt-5">
					<div className="mt-3 mr-2">
						<div className="flex justify-center ">
							{/* <ImgProduct /> */}
						</div>
						<div className="flex justify-center">
							<img
								className="mt-5 rounded-lg w-full"
								src="https://cdn.cellphones.com.vn/media/wysiwyg/Banner/400-100-product.png"
								alt=""
							/>
						</div>
					</div>
					<div className="">
						<div className="w-[90px] text-center text-[14px] text-red-600 bg-red-100 border-[1px] border-red-500 rounded-lg ">
							<p className="">Trả góp 0%</p>
						</div>
						<div className="flex my-4 text-center">
							<p className="text-[18px] font-bold text-red-500">
								{detailProduct?.cost}
								<span className="text-[14px]">₫</span>
							</p>
							<p className="text-[14px] text-gray-400 ml-4 mt-[2px] line-through">
								{detailProduct?.oldCost}
								<span className="text-[14px]">₫</span>
							</p>
						</div>
						<div></div>
						<div className="mt-7 border-[1px] rounded-xl">
							<div className="flex  text-red-600 bg-red-200 py-[5px] px-3 rounded-t-xl">
								<div className="mt-1">
									<ImGift />
								</div>
								<p className="ml-1 text-[18px] font-bold ">
									Khuyến mại
								</p>
							</div>
							<div className="hover:text-red-500 px-3 py-2">
								<a href="/">
									Thu cũ lên đời - Trợ giá 1 triệu{" "}
									<span className="text-red-500">(xem chi tiết)</span>
								</a>
							</div>
						</div>
						<div className="mt-5">
							<Link to={"/cart"}>
								<div className="text-center bg-red-600 rounded-xl py-2 text-white cursor-pointer" onClick={storage}> 
									<h1 className="font-bold text-[18px]">
										MUA NGAY
									</h1>
									<p>(Giao tận nơi hoặc lấy tại cửa hàng)</p>
								</div>
							</Link>
							<div>
								<div className="grid grid-cols-2 gap-3 text-center text-white mt-3 ">
									<div className="bg-blue-500 rounded-xl py-2 cursor-pointer">
										<h1 className="font-bold text-[16px]">
											TRẢ GÓP 0%
										</h1>
										<p className="text-[15px]">
											(Xét duyệt qua điện thoại)
										</p>
									</div>
									<div className="bg-blue-500 rounded-xl py-2 cursor-pointer">
										<h1 className="font-bold text-[16px]">
											TRẢ GÓP QUA THẺ
										</h1>
										<p className="text-[15px]">
											(Visa, Master Card, JCB))
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-3 border-[1px] rounded-xl border-gray-300">
							<div className="bg-gray-300 px-2 py-1 font-bold text-gray-700 rounded-t-xl">
								<p>ƯU ĐÃI THÊM</p>
							</div>
							<div className="my-3 mx-2">
								<div className="flex">
									<BsCheckCircle className="text-green-600 mt-1 text-[17px] " />
									<p className="text-[14px] ml-2">
										Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy
										sản phẩm)
									</p>
								</div>
								<div className="flex">
									<BsCheckCircle className="text-green-600 mt-1 text-[15px]" />
									<p className="text-[14px] ml-2">
										Mở thẻ tín dụng Shinhanbank, nhận voucher đến
										2.000.000đ
									</p>
								</div>
								<div className="flex">
									<BsCheckCircle className="text-green-600 mt-1 text-[17px]" />
									<p className="text-[14px] ml-2">
										Giảm thêm 5% (tối đa 500k) khi thanh toán qua ví
										Moca trên ứng dụng Grab
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="rounded-xl border-[1px] h-fit">
						<p className="text-[18px] font-bold py-1 px-1 text-gray-600">
							Thông số kỹ thuật
						</p>
						<div className=" text-[16px] m-3 border-[1px] border-gray-300 rounded-xl">
							<div className="grid grid-cols-3 py-2 px-2 bg-gray-200 rounded-t-xl">
								<div>
									Kích thước
									<br /> màn hình
								</div>
								<div className="col-span-2 ">{detailProduct?.kichThuoc}</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 ">
								<div>
									Công nghệ
									<br /> màn hình
								</div>
								<div className="col-span-2 ">
									{detailProduct?.congNghemanhinh}
								</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
								<div>Camera sau</div>
								<div className="col-span-2 ">{detailProduct?.cameraSau}</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 ">
								<div>Camera trước</div>
								<div className="col-span-2 "> {detailProduct?.cameraTruoc}</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
								<div>Chipset</div>
								<div className="col-span-2 ">{detailProduct?.loaiCpu}</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 ">
								<div>Dung lượng RAM</div>
								<div className="col-span-2 ">{detailProduct?.RAM}</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
								<div>Bộ nhớ trong</div>
								<div className="col-span-2 ">{detailProduct?.ROM}</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 ">
								<div>Pin</div>
								<div className="col-span-2 ">{detailProduct?.thoiLuongpin}</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
								<div>Thẻ SIM</div>
								<div className="col-span-2 ">{detailProduct?.SIM}</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 ">
								<div>Hệ điều hành</div>
								<div className="col-span-2 ">{detailProduct?.heDieuHanh}</div>
							</div>
							<div className="grid grid-cols-3 py-2 px-2 bg-gray-200 rounded-xl">
								<div>
									Độ phân giải
									<br />
									màn hình
								</div>
								<div className="col-span-2 ">{detailProduct?.cameraSau}</div>
							</div>
						</div>
						<div className="flex justify-center py-2 border-[1px] border-gray-400 m-3 rounded-lg hover:border-red-500 hover:text-red-600 hover:bg-red-100 cursor-pointer">
							<p>Xem cấu hình chi tiết </p>
							<MdKeyboardArrowDown className="ml-2 mt-1 font-bold" />
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
}
export default ProductDetail;
