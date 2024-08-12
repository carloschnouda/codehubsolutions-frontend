'use client'
import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination';


function Testimonials({ posts, TestimonialTitle }) {
    return (
        <>
            <section id="testimonials" className='px-6 lg:px-24 py-10 lg:py-20'>
                <div className='text-center'>
                    <h1 className=' max-w-3xl m-auto text-4xl lg:text-6xl text-[#00004b] proxima-nova-ex-bold mb-4'>{TestimonialTitle}</h1>
                </div>

                <div className='mt-10'>

                    <Swiper
                        slidesPerView={1.3}
                        spaceBetween={10}
                        className="TestimonialSwiper mt-10"
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                        pagination={{
                            el: "#containerForBullets",
                            type: "bullets",
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                    >
                        {posts.map((post, index) => (
                            <SwiperSlide key={index} >
                                <TestimonialCard post={post} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div id="containerForBullets" className='text-center'></div>
                </div>
            </section>
        </>
    )
}

export default Testimonials