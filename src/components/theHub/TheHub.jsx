
import React from 'react'
import HubItem from './HubItem'

function TheHub({ theHubSections, TheHubTitle }) {
    return (
        <>
            <section id="the-hub" className='px-6 lg:px-24 py-10 lg:py-20 '>
                <div className='text-center'>
                    <h1 className='text-4xl lg:text-6xl text-[#00004b] font-bold mb-4'>{TheHubTitle}</h1>
                </div>
                {
                    theHubSections?.map((section, index) => (
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 mt-10' key={index}>
                            <HubItem index={index} title={section?.title} description={section?.description} image={section?.full_path?.image} key={index} />
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default TheHub