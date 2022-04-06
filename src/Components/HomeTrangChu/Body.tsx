/** @format */

import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoaiSanPham from "./LoaiSanPham";
import ThongTinSp from "./ThongTinSp";

export default function Body() {
  interface listDanhMucType {
    name: string;
    id: string;
  }
  useEffect(() => {
    getListDanhMuc();
    console.log("abc");
    
  }, []);

  const [listDanhMucSp, setListDanhMucSp] = useState<listDanhMucType[]>([]);

  const getListDanhMuc = async () => {
    try {
      const res = await axios.get(
        "https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai"
      );
      setListDanhMucSp(res.data);
    } catch (error) {
      console.log(error);
      
    }
  };
  const ShowSanPham = listDanhMucSp.map((item, index) => {
   if(item.name === "Apple" || item.name === "SamSung" || item.name === "Oppo" || item.name === "XiaoMi"){
    return (
      <div key={index} className="relative">
        <h4 className=" m-1 no-underline text-left font-bold ... hover:underline ... ">
          {item.name}
        </h4>
        {/* Menu */}
        <div className="mt-[15px] flex-1 text-right w-[1200px]">
          <ul className="mb-[10px]">
            <ThongTinSp id={item.id}/>
          </ul>
          {/* List Điện thoại 1 */}
        </div>
      </div>
    )
   }
  });

  return (
    <div className="text-center justify-start">
      <div className="sanPham text-center justify-start">
          {/* <div className="dienThoai text-center justify-start">{ShowSanPham}</div> */}
          <div className="mt-[100px] text-center justify-start">
            <h3 className=" m-2 no-underline text-left font-bold ... hover:underline ... ">
              CHUYÊN GIA THƯƠNG HIỆU
            </h3>
            <div className=" md:flex flex-row text-center justify-start items-center ">
              <div className="md: mt-[15px] m-[5px]">
                <img
                  alt=""
                  src="https://cellphones.com.vn/media/icons/banner/banner-sis-apple-homepage.png"
                  className="rounded-lg w-full"
                ></img>
              </div>
              <div className="md: mt-[15px]">
                <img
                  alt=""
                  src="https://cellphones.com.vn/media/icons/banner/banner-sis-samsung-homepage.png"
                  className="rounded-lg"
                ></img>
              </div>
              <div className="md: mt-[15px]">
                <img
                  alt=""
                  src="https://cellphones.com.vn/media/icons/banner/banner-sis-asus-homepage.png"
                  className="rounded-lg"
                ></img>
              </div>
              <div className="md: mt-[15px]">
                <img
                  alt=""
                  src="https://cellphones.com.vn/media/icons/banner/banner-sis-xiaomi-homepage.png"
                  className="rounded-lg"
                ></img>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
