import React from 'react'
import Image from 'next/image'
import Animation from '../animation/Animation'


function About({ aboutTitle, aboutDescription, aboutImage }) {
    return (
        <>
            <section id='about-us' className='px-6 lg:px-24 py-10 lg:py-20'>
                <h1 className='text-4xl lg:text-6xl text-[#00004b] font-bold underline-offset-8 underline'>{aboutTitle}</h1>
                <div className='mt-10 grid gap-6 grid-cols-1 lg:grid-cols-2'>
                    <div className="col-span-1">
                        <div className='text-md lg:text-lg text-[#00004b]' dangerouslySetInnerHTML={{ __html: aboutDescription }}>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <Image className={`h-full w-full object-cover aspect-video  rounded`} src={aboutImage} alt="aboutImage" width={500} height={500} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default About