import React from 'react'
import styles from './services.module.css'

function ServicesCard({ service }) {
    return (
        <>
            <div className="flex flex-col col-span-1 bg-white rounded-md shadow-md px-6 py-6 h-full">
                <div className='flex-1'>
                    <div className='text-center text-lg text-[#0000ee] proxima-nova-bold'>
                        <h1>{service?.services_category?.title}</h1>
                    </div>
                    <div className='flex items-center mb-4 justify-center'>
                        <h3 className='text-3xl font-bold text-[#00004b]'>{service?.title}</h3>
                    </div>
                    <div className={styles.cardDescription + ` text-lg text-[#00004b] proxima-nova-regular`} dangerouslySetInnerHTML={{ __html: service?.description }} ></div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard