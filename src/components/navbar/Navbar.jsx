'use client'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import menuIcon from '@/assets/images/menu.png'
import Image from 'next/image'
import Link from 'next/link'

function Navbar({ menuItems, Logo }) {

    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            const sections = menuItems.map(item => document.getElementById(item.slug));
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.clientHeight > scrollPosition) {
                    setActiveSection(section.id)
                    break
                } else {
                    setActiveSection('')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [menuItems])

    const handleLinkClick = (event) => {
        event.preventDefault()
        const targetId = event.currentTarget.getAttribute('href')
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            })
        }

        setActiveSection(targetId)
        setMobileMenuOpen(false)
    }

    return (
        <>
            <div>
                <div>
                    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#00004b] shadow-lg' : 'bg-transparent'}`}>
                        <nav className="flex items-center justify-between py-6 px-6 lg:px-24" aria-label="Global">
                            <div className="flex ">
                                <div className="-m-1.5 p-1.5">
                                    <Link href={'/'}>
                                        <Image width={150} height={150} src={Logo} alt="Desktop Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                                    onClick={() => {
                                        setMobileMenuOpen(true);
                                        const htmlElement = document.querySelector('html');
                                        const bodyElement = document.querySelector('body');
                                        htmlElement.classList.add('overflow-hidden');
                                        bodyElement.classList.add('overflow-hidden');
                                    }}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <div className="h-6 w-6" aria-hidden="true">
                                        <Image src={menuIcon} alt="menuIcon" />
                                    </div>
                                </button>
                            </div>
                            <div className="hidden lg:flex lg:gap-x-12">
                                {menuItems.map((item) => (
                                    <div key={item.title}
                                        href={item.slug}
                                        onClick={handleLinkClick}
                                        className={`${styles.navbarLinks} text-md font-semibold leading-6 text-white ${activeSection === item.slug ? `${styles.navbarLinkActive}` : ''} hover:cursor-pointer`}>
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        </nav>

                        <div className="lg:hidden">
                            <div className=" inset-0 z-50" />
                            <div className={`${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-full transition-all duration-500 ease-in-out fixed inset-y-0 px-6 right-0 z-50 overflow-y-auto bg-[#00004b]  py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
                                <div className="flex items-center justify-between">
                                    <div className="-m-1.5 p-1.5">
                                        <Link href={'/'}>
                                            <Image src={Logo} alt="Mobile logo" width={150} height={150} />
                                        </Link>
                                    </div>
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => {
                                            setMobileMenuOpen(false)
                                            const htmlElement = document.querySelector('html');
                                            const bodyElement = document.querySelector('body');
                                            htmlElement.classList.remove('overflow-hidden');
                                            bodyElement.classList.remove('overflow-hidden');
                                        }
                                        }
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <div className="h-6 w-6 text-white text-2xl" aria-hidden="true" >
                                            X
                                        </div>
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6">
                                        <div className="space-y-2 py-6">
                                            {menuItems.map((item) => (
                                                <div
                                                    key={item.title}
                                                    onClick={handleLinkClick}
                                                    href={item.slug}
                                                    className={` ${activeSection === item.slug ? `${styles.mobileMenuLinkActive}` : ''} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#00004b] hover:cursor-pointer`}                                            >
                                                    {item.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <div className={`${mobileMenuOpen ? 'mobileMenuOverlay' : ''}`}></div>
        </>
    )
}

export default Navbar