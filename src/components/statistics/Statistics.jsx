import React from 'react'
import TestimonialBox from './TestimonialBox'
import Image from 'next/image'

function Statistics({ statistics, bgImage }) {
    return (
        <>
            <section className={'py-32 relative ' + (bgImage ? '' : ' bg-[#00004b]')}>
                {
                    bgImage &&
                    <>
                        <div
                            className="absolute inset-0 parallax"
                            style={{ backgroundImage: `url(${bgImage})` }}
                        >
                            <Image
                                src={bgImage}
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                className="opacity-0" // Hides the Image component while keeping it for SEO and optimization
                            />
                        </div>
                        <div className="overlay"></div>
                    </>
                }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-24 gap-8 relative">
                    {
                        statistics?.map((stat, index) => (
                            <TestimonialBox
                                key={index}
                                number={stat.number}
                                label={stat.label}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Statistics