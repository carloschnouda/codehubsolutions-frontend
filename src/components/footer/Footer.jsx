import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import PhoneIcon from '@/assets/images/phone.svg'
import EmailIcon from '@/assets/images/mail.svg'


function Footer({ FooterSettings, Logo, socialMedia, footerDetails }) {
  return (
    <>
      <div className='py-6 px-6 lg:px-24 bg-[#00004b]'>
        <div className="grid grid-rows-1 md:grid-rows-2 gap-5 lg:gap-4">
          <div className="row-span-1 md:col-span-1 justify-self-center md:justify-self-start">
            <Image className={`object-contain ${styles.footerLogo}`} src={Logo} alt="logo" width={250} height={250} />
          </div>
          <div className="row-span-1 md:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
              <div className="col-span-1 border-b-violet-50 border-solid border-b md:border-none pb-3 ">
                <h1 className='text-2xl text-white mb-4 proxima-nova-bold'>{FooterSettings?.call_us_title}</h1>
                {
                  footerDetails?.map((item, index) => (
                    <div key={index}>
                      {
                        item?.phone_number &&
                        <div className='flex gap-4'>
                          <Image className={`object-contain`} src={PhoneIcon} alt="Phone" width={20} height={20} />
                          <a href={`tel:${item?.phone_number}`}>
                            <p className='text-white proxima-nova-regular'>+{item?.phone_number}</p>
                          </a>
                        </div>
                      }
                    </div>
                  ))
                }
              </div>

              <div className="col-span-1 border-b-violet-50 border-solid border-b md:border-none pb-3">
                <h1 className='text-2xl text-white mb-4 proxima-nova-bold'>{FooterSettings?.email_us_title}</h1>
                {
                  footerDetails?.map((item, index) => (
                    <div key={index}>
                      {
                        item?.email &&
                        <div className='flex gap-4'>
                          <Image src={EmailIcon} className='object-contain' alt='Email' width={20} height={20} />
                          <a href={`mailto:${item?.email}`}>
                            <p className='text-white proxima-nova-regular'>{item?.email}</p>
                          </a>
                        </div>
                      }
                    </div>
                  ))
                }
              </div>

              <div className="col-span-1 border-b-violet-50 border-solid border-b md:border-none pb-3">
                <h1 className='text-2xl text-white mb-4 proxima-nova-bold'>{FooterSettings?.working_hours_title}</h1>
                {
                  footerDetails?.map((item, index) => (
                    <div key={index}>
                      {
                        item?.working_hours &&
                        <p className='text-white proxima-nova-regular'>{item?.working_hours}</p>
                      }
                    </div>
                  ))
                }
              </div>
              <div className="col-span-1">
                <h1 className='text-2xl text-white mb-4 proxima-nova-bold'>{FooterSettings?.social_media_title}</h1>
                <div className='flex justify-start gap-3 align-middle mt-4'>
                  {
                    socialMedia?.map((item, index) => (
                      <a href={item?.url} key={index}>
                        <Image src={item?.full_path?.icon} className='object-contain' alt={item?.title} width={25} height={25} />
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <p className='text-white text-center proxima-nova-regular'>{FooterSettings?.copyright_text}</p>
        </div>
      </div>
    </>

  )
}

export default Footer