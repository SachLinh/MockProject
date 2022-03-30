/** @format */

import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoaiSanPham from "./LoaiSanPham";
import LoaiSPNho from "./LoaiSPNho";
import ThongTinSp from "./ThongTinSp";

export default function Body() {
  interface listDanhMucType {
    name: string;
    id: string;
  }
  useEffect(() => {
    getListDanhMuc();
  }, []);
  const [listDanhMucSp, setListDanhMucSp] = useState<listDanhMucType[]>([]);

  const getListDanhMuc = async () => {
    try {
      const res = await axios.get(
        "https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc"
      );
      setListDanhMucSp(res.data);
    } catch (error) {
      console.log(error);
      
    }
  };
  const ShowSanPham = listDanhMucSp.map((item, index) => {
    if (item.id === "1" || item.id === "2" || item.id === "5") {
      return (
        <div key={index} className="relative">
          <h4 className="absolute m-1 no-underline text-left font-bold ... hover:underline ... ">
            {item.name}
          </h4>
          {/* Menu */}
          <div className="flex-1 text-right w-[1200px]">
            <ul className="">
              <LoaiSanPham id={item.id} />
            </ul>
            {/* List Điện thoại 1 */}
          </div>
        </div>
      );
    }
    if (item.id === "6" || item.id === "7") {
      return (
        <div key={index} className="relative">
          <h4 className=" absolute m-1 no-underline text-left font-bold ... hover:underline ... ">
            {item.name}
          </h4>
          {/* Menu */}
          <div className="flex-1 text-right w-[1200px]">
            <ul className="">
              <LoaiSPNho id={item.id} />
            </ul>
            {/* List Điện thoại 1 */}
          </div>
        </div>
      );
    }
  });

  return (
    <div className="w-[1200px]">
      <div className="sanPham">
          <div className="dienThoai w-[1200px]">{ShowSanPham}</div>
          <div className="mt-[20px] w-[1200px] ">
            <h3 className="m-2 no-underline text-left font-bold ... hover:underline ... ">
              CHUYÊN GIA THƯƠNG HIỆU
            </h3>
            <div className="flex flex-row">
              <div className="w-1/4 m-2  ">
                <img
                  alt=""
                  src="https://cellphones.com.vn/media/icons/banner/banner-sis-apple-homepage.png"
                  className="rounded-lg"
                ></img>
              </div>
              <div className="w-1/4 m-2  ">
                <img
                  alt=""
                  src="https://cellphones.com.vn/media/icons/banner/banner-sis-samsung-homepage.png"
                  className="rounded-lg"
                ></img>
              </div>
              <div className="w-1/4 m-2  ">
                <img
                  alt=""
                  src="https://cellphones.com.vn/media/icons/banner/banner-sis-asus-homepage.png"
                  className="rounded-lg"
                ></img>
              </div>
              <div className="w-1/4 m-2  ">
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
