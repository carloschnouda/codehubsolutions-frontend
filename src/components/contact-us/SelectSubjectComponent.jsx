'use client'
import React from 'react'
import { useController } from 'react-hook-form'
import Select from 'react-select'

function SelectSubjectComponent({ name, control, defaultValue, subjects, errormessage }) {
    const { field } = useController({ name, control, defaultValue })
    const options = subjects?.map((subject) => ({ value: subject?.id, label: subject?.title }))

    return (
        <div>
            <Select
                instanceId="subject-react-select"
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

export default SelectSubjectComponent