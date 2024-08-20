'use client'
import React, { forwardRef } from 'react'
import styles from './fileupload.module.css'

const UploadFileInput = forwardRef(function UploadFileInput({ currentValue, ...props }, ref) {
    return (
        <>
            <div
                className='bg-white overflow-hidden w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 flex'
                style={{ position: 'relative' }}>
                <label
                    className={styles.buttonUploadLabel}
                >
                    {currentValue}
                </label>
                <input
                    ref={ref}
                    {...props}
                    type="file"
                    style={{ opacity: 0, left: 0, top: 0, height: '100%', width: '100%', zIndex: 2, position: 'absolute', cursor: 'pointer', overflow: 'hidden'}} // NOTICE!
                />

            </div>
            <div>
                <p className="text-red-500 text-xs italic pt-1">
                    {props.errormessage}
                </p>
            </div>
        </>
    )
})

export default UploadFileInput