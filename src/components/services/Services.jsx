'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ServicesCard from './ServicesCard'
import styles from './services.module.css'

function Services({ servicesTitle, servicesSubtitle, services }) {
    return (
        <>
            <section id="services" className='px-6 lg:px-24 py-10 lg:py-20 bg-gray-100'>
                <div className='text-center'>
                    <h1 className='text-4xl lg:text-6xl text-[#00004b] proxima-nova-ex-bold mb-4'>{servicesTitle}</h1>
                    <h3 className='text-xl lg:text-4xl text-[#00004b] font-bold'>{servicesSubtitle}</h3>
                </div>
                {/* <div className=' hidden md:grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10'>
                    {
                        services?.map((service, index) => (
                            <ServicesCard key={index} service={service} />
                        ))
                    }
                </div> */}

                <div>
                    <Swiper
                        slidesPerView={1.2}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.3,
                                spaceBetween: 10,
                            },
                            991: {
                                slidesPerView: 3.4,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                        spaceBetween={10}
                        className={`${styles.ServicesSwiper} mt-10 `}
                    >
                        {
                            services?.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <ServicesCard service={service} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Services