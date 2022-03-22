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

export default function ImgProduct() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <div>
            <Swiper className="w-[350px] border-[1px] rounded-xl" 
                loop={true}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}>
                <SwiperSlide>
                    <img src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-1_2_1.jpg " alt="img1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2_1.jpg" alt="img2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4_1.jpg" alt="img3"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-3_2_1.jpg" alt="img4"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-2_2_1.jpg" alt="img5"/>
                </SwiperSlide>
            </Swiper>
            <Swiper className="w-[300px] mt-6"
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}>
                <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                    <img className="rounded-xl" src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-1_2_1.jpg " alt="img1" />
                </SwiperSlide>
                <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                    <img className="rounded-xl" src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2_1.jpg" alt="img2"/>
                </SwiperSlide>
                <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                    <img className="rounded-xl" src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4_1.jpg" alt="img3"/>
                </SwiperSlide>
                <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                    <img className="rounded-xl" src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-3_2_1.jpg" alt="img4"/>
                </SwiperSlide>
                <SwiperSlide className="border-[1px] rounded-xl border-gray-400 p-1">
                    <img className="rounded-xl" src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-2_2_1.jpg" alt="img5"/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}