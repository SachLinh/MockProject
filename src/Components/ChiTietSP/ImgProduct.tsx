import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Images } from "./ModelPrdDetail";
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function ImgProduct() {
    useEffect(() => {
        getImg()
    },[]);
    const params = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [img, setImg] = useState<Images[]>([]);
    const getImg = async () => {
        const resImg = await axios.get(`https://6232e62e6de3467dbac2a7d6.mockapi.io/SanPham/${params.idSP}/ImgProd`)
        setImg(resImg.data)
    }
    return (
        <div>
            {img.map(item => {
                return (
                    <div key={item.SanPhamId}><Swiper className="w-[370px] border-[1px] rounded-xl text-center items-center"
                        loop={true}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}>
                        <SwiperSlide>
                            <img src={item.img1} alt="img1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item.img2} alt="img2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item.img3} alt="img3" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item.img4} alt="img4" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item.img5} alt="img5" />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper className="w-[300px] mt-6"
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}>
                            <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                                <img className="rounded-xl" src={item.img1} alt="img1" />
                            </SwiperSlide>
                            <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                                <img className="rounded-xl" src={item.img2} alt="img2" />
                            </SwiperSlide>
                            <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                                <img className="rounded-xl" src={item.img3} alt="img3" />
                            </SwiperSlide>
                            <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                                <img className="rounded-xl" src={item.img4} alt="img4" />
                            </SwiperSlide>
                            <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                                <img className="rounded-xl" src={item.img5} alt="img5" />
                            </SwiperSlide>
                        </Swiper></div>
                )
            })}
        </div>
    )
}