import React, { forwardRef } from 'react'

const CustomInput = forwardRef(function CustomInput({ label, ...props }, ref) {
    return (
        <>
            <div className={props.type === 'textarea' ? `sm:col-span-6` : `sm:col-span-3`}>
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-[#00004b]">
                    {label}
                </label>
                <div className="mt-2">
                    {
                        props.type === 'textarea'
                            ? <textarea
                                ref={ref}
                                {...props}
                                className={`w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 ${props.errorMessage ? 'ring-red-700' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'}`}
                            >
                            </textarea>
                            :

                            <input
                                ref={ref}
                                {...props}
                                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 sm:text-sm sm:leading-6 ${props.errorMessage ? 'ring-red-700' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'}`}
                            />
                    }
                </div>
                <div>
                    <p className="text-red-500 text-xs italic pt-1">
                        {props.errormessage}
                    </p>
                </div>
            </div>
        </>
    )
})

export default CustomInput