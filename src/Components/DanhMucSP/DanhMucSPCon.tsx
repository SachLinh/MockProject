import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LoaiSanPham from "../HomeTrangChu/LoaiSanPham";
import ThongTinSp from "../HomeTrangChu/ThongTinSp";

interface listLoaiSpType {
    name: string;
    id: string;
    DanhMucId: string;
}
interface TypeID{
    id: any,
}

export default function DanhMucSPCon() {
  const params = useParams();
//   useEffect(()=>{
//     getLoaiSp();
// },[])
// const[listLoaiSp, setListLoaiSp] = useState<listLoaiSpType[]>([]) ;
// const getLoaiSp= async()=>{
//     const res=await axios.get(`https://6238109d0a54d2ceab702909.mockapi.io/DanhMuc/${params.idDM}/Loai`);
//     setListLoaiSp(res.data);
// }
  return (
    <div className="w-full flex flex-row justify-center items-start mt-[100px]">
      <div className="w-[1200px]">
        <div className="w-full flex flex-row justify-between items-start">
          <Swiper
            className="w-[595px] h-[100px] rounded-xl shadow-[0_0px_5px_2px_#9b9a9a]"
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          >
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple_1.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Mi_12_Sliding_cate.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Redmi_10c-cate.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/iPhone-11---sale.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/reno_7.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/redmi-note-11-4g-64gb-hcm.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/13_series.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            className="w-[595px] h-[100px]   rounded-xl shadow-[0_0px_5px_2px_#9b9a9a]"
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          >
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/xiaomi-595-100-max.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Redmi_10c-cate.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Redmi_10c-cate.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/Mi_12_Sliding_cate.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/pk_mua_nhieu_giam_nhieu.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/11-lite-5g-ne-hcm-cate.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/595-100-9_pro_plus.png"
                alt=""
                className="w-full h-full rounded-t-2xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-[50px]">
            <ThongTinSp iddm={params.idDM} id={params.idLoai}/>
        </div>
      </div>
    </div>
  );
}
