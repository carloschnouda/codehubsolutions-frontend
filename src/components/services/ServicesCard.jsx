import React from 'react'

function ServicesCard({ service }) {
    return (
        <>
            <div className="col-span-1 bg-white rounded-md shadow-md p-6 h-full">
                <div>
                    <div className='flex items-center justify-between mb-4'>
                        <h3 className='text-3xl font-bold text-[#00004b]'>{service?.title}</h3>
                    </div>
                    <div className='text-lg text-[#00004b]' dangerouslySetInnerHTML={{ __html: service?.description }} ></div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard