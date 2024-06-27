'use client'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
function TestimonialBox({ number, label }) {
    const [inView, setInView] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.unobserve(ref.current)
                }
            },
            {
                threshold: 0.5,
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return (
        <>
            <div className="col-span-1" ref={ref}>
                <div className="text-[#00004b] bg-white rounded px-8 py-6 h-full flex flex-col justify-center">
                    <h1 className='text-xl mb-2'>{label}</h1>
                    {inView ? <CountUp className='text-3xl font-bold' end={number} duration={3} /> : '0'}
                </div>
            </div>
        </>
    )
}

export default TestimonialBox