import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { ChatAlt2, Globe, Phone, User } from 'heroicons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// ==== Images 
import Payment from "media/video-explainer/payment-img.png"
import UpArrow from "media/video-explainer/up-arrow.png"

const Contact = () => {
    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/footer-bg.jpg")]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <h2 className='text-[#231f20] font-[700] montserrat text-[30px]'>Get in Touch Now!</h2>
                            <p className='text-[#231f20] text-[18px] montserrat font-[400] py-[17px] leading-[22px] pb-[60px]'>Its High Time to Showcase Your Store to the World</p>
                            <div className="form">
                                <form action="javascript:;">
                                    <div className="flex items-center gap-4 ">
                                        <div className="name relative w-full">
                                            <User className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                            <input type="text" placeholder='Enter your name' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[10px] font-[500]' />
                                        </div>
                                        <div className="email relative w-full">
                                            <EnvelopeIcon className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                            <input type="email" placeholder='Enter Email' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[10px] font-[500]' />
                                        </div>
                                    </div>
                                    <div className="phone relative">
                                        <Phone className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                        <input type="phone" minLength={7} maxLength={15} placeholder='Enter Phone Number' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[10px] font-[500]' />
                                    </div>
                                    <div className="message relative">
                                        <ChatAlt2 className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                        <textarea placeholder='Message' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[10px] font-[500]'></textarea>
                                    </div>
                                    <div className="btn mt-3">
                                        <button type='submit' className='py-[10px] px-[30px] border-0 text-white text-[16px] uppercase font-[600] bg-[#231f20] poppins'>
                                            Get Started
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-4">
                            <div className="address_detail">
                                <ul>
                                    <li className='py-[10px]'>
                                        <Link href="tel:+1-716-300-1135" className='text-[20px] text-white montserrat flex items-center gap-2'>
                                            <Phone className='bg-[#fc0] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> +1-716-300-1135
                                        </Link>
                                    </li>
                                    <li className='py-[10px]'>
                                        <Link href="mailto:queries@infinityanimations.com" className='text-[20px] text-white montserrat flex items-center gap-2'>
                                            <EnvelopeIcon className='bg-[#fc0] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> queries@infinityanimations.com
                                        </Link>
                                    </li>
                                    <li className='py-[10px]'>
                                        <Link href="https://infinityanimations.com" className='text-[20px] text-white montserrat flex items-center gap-2'>
                                            <Globe className='bg-[#fc0] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> www.infinityanimations.com
                                        </Link>
                                    </li>
                                </ul>
                                <Image src={Payment} alt='Payment-Methods' className='w-full mt-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright py-[20px]">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto relative">
                    <p className='text-[14px] pb-[12px] text-[#333] montserrat text-center'>Copyright © 2024, Infinity Animations All Rights Reserved</p>
                    <div className="top-icon absolute right-0 top-[-40px]">
                        <Link href="#" className='bg-[#18d689] w-[80px] h-[80px] text-center text-white font-[500] uppercase rounded-[60%] align-middle border-[5px] border-white  absolute right-0 flex flex-col justify-center items-center'>
                            <Image src={UpArrow} alt='upArrow' className='mx-auto' />
                            <p className='text-[14px] text-center poppins'>Top</p>
                        </Link>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Contact
