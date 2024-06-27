import React from 'react'
import ContactForm from './ContactForm'

function Contact({ services, title, formSettings }) {
    return (
        <>
            <section id='contact-us' className='px-6 lg:px-24 py-10 lg:py-20 '>
                <div className='text-center'>
                    <h1 className='text-4xl lg:text-6xl text-[#00004b] font-bold mb-4'>{title}</h1>
                </div>
                <ContactForm formSettings={formSettings} services={services} />
            </section>
        </>
    )
}

export default Contact