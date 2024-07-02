'use client'
import React from 'react'
import { useController } from 'react-hook-form'
import Select from 'react-select'

function SelectServiceComponent({ name, control, defaultValue, services, errormessage }) {
    const { field } = useController({ name, control, defaultValue })
    const options = services?.map((service) => ({ value: service?.id, label: service?.title }))

    return (
        <div>
            <Select
                instanceId="service-react-select"
                ref={field.ref}
                classNamePrefix="service-react-select input-styling"
                options={options}
                onBlur={field.onBlur}
                onChange={(val) => field.onChange(val)} value={field.value} />
            <div>
                <p className="text-red-500 text-xs italic pt-1">
                    {errormessage}
                </p>
            </div>
        </div>
    )
}

export default SelectServiceComponent