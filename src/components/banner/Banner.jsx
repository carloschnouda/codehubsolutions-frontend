import React from 'react'
import styles from './banner.module.css'
import SwiperComponent from '@/components/swiper/SwiperComponent';

function Banner({ bannerTitle, bannerSubtitle, bannerText, bannerImages }) {
    return (
        <div className={styles.bannerWrapper}>
            <SwiperComponent bannerImages={bannerImages} />

            <div className={`${styles.bannerText} p-6 lg:px-24 w-full lg:w-[50%]`}>
                <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4'>{bannerTitle}</h1>
                <h2 className='text-2xl lg:text-4xl mb-2'>{bannerSubtitle}</h2>
                <p className='text-lg'>{bannerText}</p>
            </div>
        </div>
    )
}

export default Banner