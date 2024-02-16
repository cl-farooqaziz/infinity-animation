import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Brand = ({ content }) => {

    const { title, subtitle, desc, branImage, isBranImage } = content
    return (
        <>
            <section className='py-[30px] md:py-[70px] my-[30px] md:my-[90px]'>
                <div className="mx-4 lg:max-w-7xl xl:mx-auto bg-[#EE8526] rounded-[40px] py-10 px-4 sm:px-7 relative">
                    <div className="grid grid-cols-12">
                        {isBranImage ?
                            <div className="col-span-12 md:col-span-7">
                                <h2 className='text-white font-bold font-sans text-[25px] md:text-[40px] leading-[35px] md:leading-[51px] mb-[20px]'>{title}</h2>
                                <h5 className='text-white font-bold font-sans leading-[31px] text-[18px] md:text-[25px] lg:w-11/12 pb-[5px]'>{subtitle}</h5>
                                <p className='text-[17px] text-white font-sans leading-[22px]'>{desc}</p>
                                <div className="btn mt-6">
                                    <Link class="text-[13px] md:text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] w-full md:w-[410px] h-[44px] poppins flex items-center justify-center" href="javascript:;">Let's Begin Your Animated Journey Together!</Link>
                                </div>
                            </div> :
                            <div className="col-span-12 md:col-span-6">
                                <h2 className='text-white font-bold font-sans text-[35px] md:text-[50px] xl:text-[70px] leading-tight xl:leading-[70px] mb-[20px]'>{title}</h2>
                                <h5 className='text-white font-bold font-sans leading-[31px] text-[25px] lg:w-11/12 pb-[5px]'>{subtitle}</h5>
                                <p className='text-[17px] text-white font-sans leading-[22px]'>{desc}</p>
                                <div className="btn mt-6">
                                    <Link class="text-[13px] md:text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] w-full md:w-[410px] h-[44px] poppins flex items-center justify-center" href="javascript:;">Let's Begin Your Animated Journey Together!</Link>
                                </div>
                            </div>}

                        {isBranImage ?
                            <div className="col-span-5">
                                <div className="img absolute top-[-110px] right-[57px] md:block hidden">
                                    <Image src={branImage} alt='brandShine' height={622} width={389} className='w-full lg:w-10/12 h-full' quality={85} />
                                </div>
                            </div> :
                            <div className="col-span-6">
                                <div className="img absolute bottom-0 right-0 xl:right-[-27px] md:block hidden">
                                    <Image src={branImage} alt='brandShine' height={622} width={389} className='w-full h-full' quality={85} />
                                </div>
                            </div>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand
