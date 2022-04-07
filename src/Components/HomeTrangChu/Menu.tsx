/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { DanhMucType } from "../../TypeState/DanhMucType";
import axios from "axios";

export default function Menu() {
  const [thums, setThums] = useState<any>(null);
  // const listCatas = useAppSelector((state)=>state.listDanhMuc)
  // const dispatch = useDispatch()
  useEffect(() => {
    getListCata();
    //dispatch(AllDanhMucSlice)
  }, []);

  const [listCatas, setListCatas] = useState<DanhMucType[]>([]);
  const getListCata = async () => {
    try {
      const res = await axios.get(
        "https://6232e62e6de3467dbac2a7d6.mockapi.io/Loai"
      );
      setListCatas(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const showListCata = listCatas.map((item, index) => {
    return (
      <li
        className="w-full h-full hover:bg-[#d6d3d3]  p-[6px] first:rounded-t-2xl last:rounded-b-2xl pl-[10px] flex flex-row justify-between items-center group transition-transform-[0,25s]"
        key={index}
      >
        <Link className="w-full pl-[15px]" to={`/DanhMucSP/${item.id}`}>
          {item.name}
        </Link>
        <i className="fa-solid fa-angle-right pr-[15px]"></i>
      </li>
    );
  });

  //// render
  return (
    <div className="w-full lg:mt-[25px] xl:mt-[10px] sm:mt-[40px] mb-[20px] font-Roboto text-[14px] h-[376px]">
      <div className="flex flex-row justify-between w-full h-full">
        <div className="w-[15%] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]">
          <ul className="relative w-full h-full flex flex-col justify-between font-[500]">
            {showListCata}
          </ul>
        </div>
        <div className="rounded-2xl shadow-[#9e9c9c] w-[68%] shadow-[0_0px_5px_2px_#9b9a9a] -z-10">
          <Swiper
            className="w-full"
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            thumbs={{ swiper: thums }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          >
            
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/A53.png"
                alt=""
                className="w-full h-[304px] rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/mI_12.png"
                alt=""
                className="w-full h-[304px] rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/reno7.png"
                alt=""
                className="w-full h-[304px] rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/ASUS-690x300_T3300_222.jpg"
                alt=""
                className="w-full h-[304px] rounded-t-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/ipad_10.2_home.png"
                alt=""
                className="w-full h-[304px] rounded-t-2xl"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            className="w-full flex flex-row justify-between h-[72px] text-[12px] text-[#340a40]"
            onSwiper={setThums}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6] hover:rounded-b-2xl active:border-b-2 active:border-b-black">
              <Link to="">GALAXY A53</Link>
              <p>Ưu đãi siêu khủng</p>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6] ">
              <Link to="">XIAOMI 12 SERTIES</Link>
              <p>Quà cực xịn</p>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6] ">
              <Link to="">OPPO ZENO7 SERIES</Link>
              <p>Đặt trước nhiều quà</p>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6] ">
              <Link to="">VIVOBOOK 13 OLED</Link>
              <p>Mở bán quà ngon</p>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-[2px] hover:bg-[#f3f4f6]  hover:rounded-b-2xl ">
              <Link to="">IPAD 12.2 2021</Link>
              <p>Giá cực sốc</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[15%] flex flex-col justify-between items-start">
          <Link to="" className="w-full">
            <img
              src={require(`./Images/banner1.png`)}
              alt=""
              className="w-full h-[115px] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]"
            />
          </Link>
          <Link to="" className="w-full">
            <img
              src={require(`./Images/banner2.png`)}
              alt=""
              className="w-full h-[115px] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]"
            />
          </Link>
          <Link to="" className="w-full">
            <img
              src={require(`./Images/Right_banner_AW.png`)}
              alt="hinh anh"
              className="w-full h-[115px] rounded-2xl shadow-[0_0px_5px_2px_#9b9a9a]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
