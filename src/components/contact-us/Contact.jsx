import React from 'react'
import ContactForm from './ContactForm'

function Contact({ services, title, formSettings, subjects }) {
    return (
        <>
            <section id='contact-us' className='px-6 lg:px-24 py-10 lg:py-20 '>
                <div className='text-center'>
                    <h1 className='text-4xl lg:text-6xl text-[#00004b] proxima-nova-ex-bold mb-4'>{title}</h1>
                </div>
                <ContactForm formSettings={formSettings} services={services} subjects={subjects} />
            </section>
        </>
    )
}

export default Contact