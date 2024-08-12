import Image from 'next/image'
import React from 'react'

function HubItem({ title, description, image, index }) {
  return (
    <>

      <div className={`col-span-1 relative min-h-[300px] md:min-h-auto ` + (index % 2 === 0 ? ' order-1' : ' order-1 md:order-2')}>
        <Image className={`object-cover  rounded `} src={image} alt={title} fill />
      </div>
      <div className={`col-span-1` + (index % 2 === 0 ? ' order-2' : ' order-1')}>
        <div className='text-md lg:text-lg text-[#00004b]'>
          <h1 className=' mb-4 text-2xl lg:text-4xl text-[#00004b] proxima-nova-bold'>{title}</h1>
          <div className='text-md lg:text-lg text-[#00004b] proxima-nova-regular' dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      </div>

    </>
  )
}

export default HubItem