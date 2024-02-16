import React from 'react'
import Image from 'next/image'


// ==== Images 
import Logo from "media/video-explainer/logo.gif"
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className='pt-6'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="logo">
                            <Image src={Logo} alt='Logo ' width={150} className='ml-auto lg:ml-0 mr-auto' />
                        </div>
                        <ul className='flex items-center gap-x-7'>
                            <li className='md:block hidden'>
                                <Link href="tel:;" className='text-primary-100 poppins font-semibold text-[16px]'>Call Now: 123 456 7890</Link>
                            </li>
                            <li>
                                <Link href="javascript:;" className='text-[13px] sm:text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-[170px] sm:w-[206px] h-[44px] poppins flex items-center justify-center'>Get A Quote</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header