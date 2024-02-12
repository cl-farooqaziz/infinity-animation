import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



// ==== Images 
import UK from "media/video-explainer/flag-icon.png"
import CTAPart from "media/video-explainer/cta-rht-img.png"


const Brands = ({ content }) => {
    const { title, subTitle, desc, isBtn } = content;

    return (
        <>
            <section className='py-[80px] bg-cover bg-center bg-no-repeat bg-[url("../../public/video-explainer/cta-bg.jpg")] relative'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="content">
                            <h2 className='text-[#231f20] font-[700] montserrat text-[30px] leading-[35px]'>
                                {title} <br />
                                <span>{subTitle}</span>
                            </h2>
                            <p className='text-[#231f20] text-[18px] montserrat font-[400] py-[20px] leading-[20px]'>
                                {desc}
                            </p>
                        </div>
                        <div className="btns flex items-center gap-5 mt-6">
                            <div className="btn">
                                <Link href="javascript:;" className='flex items-center text-[16px] text-white font-[600] montserrat bg-[#003466] py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                    Get Started
                                </Link>
                            </div>
                            <div className="btn">
                                <Link href="javascript:;" className='flex items-center text-[16px] text-white font-[600] montserrat bg-black py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                    Live Chat
                                </Link>
                            </div>
                            {isBtn ? <div className="btn">
                                <Link href="tel:+1-716-300-1135" className='flex items-center'>
                                    <Image src={UK} alt='UK' className='object-contain' />
                                    <span className='text-[20px] text-black py-[10px] px-[8px] font-bold montserrat'>
                                        +1-716-300-1135
                                    </span>
                                </Link>
                            </div> : null}
                        </div>
                    </div>
                </div>
                <div className="partical absolute right-[30px] top-[-75px] animation">
                    <Image src={CTAPart} alt='particale-Image' />
                </div>
            </section>
        </>
    )
}

export default Brands
