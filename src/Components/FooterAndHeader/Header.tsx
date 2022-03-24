/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-[#d70018] h-[64px] fixed flex flex-col justify-center items-center z-50">
      <div className="w-[1200px] z-50">
        <div className="flex flex-row justify-around items-center text-white w-full text-[12px] h-full leading-[64px]">
          <h2 className="text-[18px] font-extrabold text-[rgb(255,255,255)]">
            <i className="fa-solid fa-bars"></i>
            <Link to=""> G1-UlTr Phone</Link>
          </h2>
          <div className="flex flex-row justify-around items-center bg-[#eb4a4a] rounded-xl">
            <i className="fa-solid fa-location-dot pl-[5px] text-base"></i>
            <div className=" h-[40px] w-[100px] flex flex-col justify-center items-center">
              <span className="inline-block h-[20px] text-[#fff] leading-[15px]">
                Khu vực
              </span>
              <select className="outline-none text-[#fff] text-[14px] bg-[#eb4a4a] inline-block  rounded-xl">
                <option className="bg-[#fff] text-[#000] rounded-xl w-[100px]">
                  Mien Nam
                </option>
                <option className=" bg-[#fff] text-[#000] rounded-xl">
                  Mien Bac
                </option>
              </select>
            </div>
          </div>

          <input
            className="h-[40px] pl-3 rounded-xl p-[5px] outline-none text-[#020000] text-[14px] w-[300px]"
            placeholder="Bạn cần tìm gì?"
          />

          <Link
            to=""
            className="flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl"
          >
            <i className="fa-solid fa-phone text-[25px] mr-2"></i>
            <div className="h-[50px] w-20 flex flex-col justify-start items-start">
              <span className="h-[25px] leading-6">Gọi mua hàng</span>
              <span className="h-[25px] leading-6">1234.5678</span>
            </div>
          </Link>
          <Link
            to=""
            className="flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl"
          >
            <i className="fa-solid fa-location-dot text-[25px] mr-2"></i>
            <div className="h-[50px] w-20 flex flex-col justify-start items-start">
              <span className="h-[25px] leading-6">Cửa hàng</span>
              <span className="h-[25px] leading-6">gần bạn</span>
            </div>
          </Link>
          <Link
            to=""
            className="flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl"
          >
            <i className="fa-solid fa-truck text-[25px] mr-2"></i>
            <div className="h-[50px] w-20 flex flex-col justify-start items-start">
              <span className="h-[25px] leading-6">Tra cứu</span>
              <span className="h-[25px] leading-6">đơn hàng</span>
            </div>
          </Link>
          <Link
            to="/cart"
            className="flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl"
          >
            <i className="fa-solid fa-bag-shopping text-[25px] mr-2"></i>
            <div className="h-[50px] w-20 flex flex-col justify-start items-start">
              <span className="h-[50px] leading-[50px]">Giỏ hàng</span>
            </div>
          </Link>
          <Link
            to=""
            className="h-[50px] flex flex-col justify-start items-center text-white p-[5px] hover:bg-[#eb4a4a] px-1 rounded-xl"
          >
            <i className="fa-solid fa-user text-[20px] mr-2 h-[25px]"></i>
            <span className="inline-block h-[25px] leading-6">Smember</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
