'use client'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";

import styles from './swiper.module.css'
import Image from "next/image";

export default function SwiperComponent({ bannerImages }) {
    return (
        <Swiper
            className={`${styles.swiperOverlay} h-[80vh] lg:h-[100vh] w-full`}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={true}
            speed={1000}
            autoplay={{ delay: 3000 }}
        >
            {
                bannerImages?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image fill src={image} alt="Image" className={`${styles.swiperImage}`} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
