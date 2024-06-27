'use client'

import React, { useState } from 'react'
import SelectServiceComponent from './SelectServiceComponent'
import UploadFileInput from './UploadFileInput'
import CustomInput from './CustomInput'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from "axios";

function ContactForm({ services, formSettings }) {
    const { register, handleSubmit, control, watch, setError, formState: { errors }, reset } = useForm({
        defaultValues:
        {
            name: '',
            email: '',
            phone_number: '',
            subject: '',
            service: null,
            file: null,
            message: '',
        },
    })

    const ContactFormMutation = useMutation({
        mutationFn: async (data) => {
            const fn = new FormData()

            if (data?.file) {
                fn.append('file', data.file[0])
            }
            fn.append('name', data.name)
            fn.append('phone_number', data.phone_number)
            fn.append('subject', data.subject)
            fn.append('service_id', data?.service_id ? data?.service_id : '')
            fn.append('message', data.message)
            fn.append('email', data.email)

            return await axios.post('http://127.0.0.1:8000/api/submit', fn, { headers: { "Content-Type": 'multipart/form-data' } })
        },
        onSuccess: _ => {
            reset();
            setTimeout(() => {
                ContactFormMutation.reset()
            }, 5000)
        },
        onError: (err) => {
            if (err.response?.data?.errors) {
                const serverErrors = err.response.data.errors;
                Object.keys(serverErrors).forEach((field) => {
                    setError(field, {
                        type: 'server',
                        message: serverErrors[field][0],
                    });
                });
            }
        }
    })



    function onSubmit(data) {
        ContactFormMutation.mutate({ ...data, service_id: data?.service?.value });
    }

    const handlePhoneInput = (e) => {
        e.target.value = e.target.value
            .replace(/[^0-9.]/g, '')
            .replace(/(\..*?)\..*/g, '$1')
            .replace(/^0[^.]/, '0');
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12 px-6 lg:px-24 xl:px-64">
                    <div className="pb-12">

                        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-6">
                            <CustomInput
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                label={formSettings?.name_label}
                                errormessage={errors?.name?.message}
                                {...register('name')}
                            />
                            <CustomInput
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                label={formSettings?.email_label}
                                errormessage={errors?.email?.message}
                                {...register('email')}
                            />
                            <CustomInput
                                id="phone_number"
                                name="phone_number"
                                onInput={handlePhoneInput}
                                type="text"
                                autoComplete="phone_number"
                                label={formSettings?.phone_label}
                                errormessage={errors?.phone_number?.message}
                                {...register('phone_number')}
                            />
                            <CustomInput
                                type="text"
                                name="subject"
                                id="subject"
                                autoComplete="subject"
                                label={formSettings?.subject_label}
                                errormessage={errors?.subject?.message}
                                {...register('subject')}
                            />
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-[#00004b]">
                                    {formSettings?.service_label}
                                </label>
                                <div className="mt-2">
                                    <SelectServiceComponent errormessage={errors?.service_id?.message} services={services} control={control} name="service" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="phone_number" className="mb-2 block text-sm font-medium leading-6 text-[#00004b]">
                                    {formSettings?.file_label}
                                </label>
                                <UploadFileInput {...register('file')}
                                    className='px-2'
                                    errormessage={errors?.file?.message}
                                    currentValue={
                                        watch('file')
                                            ? (watch('file'))[0]?.name
                                            : `${formSettings.file_placeholder}`
                                    } />
                            </div>

                            <CustomInput
                                type="textarea"
                                name="message"
                                id="message"
                                autoComplete="message"
                                label={formSettings?.message_label}
                                rows={6}
                                cols={100}
                                errormessage={errors?.message?.message}
                                {...register('message')}
                            />
                        </div>
                    </div>
                </div>

                {!ContactFormMutation?.isSuccess && <div className="flex items-center justify-center gap-x-6 px-6 lg:px-24 xl:px-64">
                    <button
                        type="submit"
                        className="rounded-3xl bg-[#00004b] px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#0000b8] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {ContactFormMutation.isLoading ? 'Loading ...' : formSettings?.button_text}
                    </button>
                </div>}

                <div className='px-6 lg:px-24 xl:px-64'>
                    {ContactFormMutation?.isSuccess && (
                        <div className="text-center text-sm font-medium text-green-600 mt-4 bg-green-100 p-6 rounded-md w-fit m-auto">
                            {formSettings?.success_message}
                        </div>
                    )}
                </div>
            </form>
        </>
    )
}

export default ContactForm