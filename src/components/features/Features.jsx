import React from 'react'
import Image from 'next/image'


//====== Images
import Icon1 from 'media/icons/core-icon1.png'
import Icon2 from 'media/icons/core-icon2.png'
import Icon3 from 'media/icons/core-icon3.png'
import Icon4 from 'media/icons/core-icon4.png'
import Icon5 from 'media/icons/core-icon5.png'
import coreImage from 'media/why-us/core-bg.png'

const Features = () => {
    return (
        <>
            <section className='relative pb-8 lg:pb-16'>
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-4">
                        <div className="col-span-12">
                            <div className="mb-3 lg:mb-[150px]">
                                <h2 className='text-[40px] md:text-[60px] font-semibold font-sans leading-tight text-center mb-3'>The Core Features</h2>
                                <p className='text-[16px] font-normal font-sans leading-snug tracking-wider text-center lg:w-8/12 mx-auto'>Customers have always been and will remain the prime focus of  Infinity Animations. Prioritizing customer reviews and feedback has enriched our platform and helped us improve our services to ensure sustainable growth and satisfied customers. </p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="grid grid-cols-12 gap-4 relative z-50">
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon1} alt='icon 1' width={64} height={67} />
                                        <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Creative Mindset</h3>
                                        <p className='text-white text-[14px] font-sans font-light'>Customers have always been and will remain the prime focus of  Infinity Animations. Prioritizing customer reviews and feedback has enriched our platform and helped us improve our services to ensure sustainable growth and satisfied customers.</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon2} alt='icon 1' width={64} height={67} />
                                        <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Clean Approach</h3>
                                        <p className='text-white text-[14px] font-sans font-light'>A clean Approach is a critical factor in all our developments & operations. Precision is our modus- operandi.</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon3} alt='icon 1' width={64} height={67} />
                                        <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Customer is Our
                                            Priority</h3>
                                        <p className='text-white text-[14px] font-sans font-light'>Customers have always been and will remain the prime focus of  Infinity Animations. Prioritizing customer reviews and feedback has enriched our platform and helped us improve our services to ensure sustainable growth and satisfied customers.</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon4} alt='icon 1' width={64} height={67} />
                                        <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Tested Methodology</h3>
                                        <p className='text-white text-[14px] font-sans font-light'>Extensive quality assurance is carried out before the work is shared with the client!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="absolute right-0 lg:right-[170px] top-[18%] -z-1 md:block hidden">
                                <Image src={coreImage} alt='Core Image' width={1030} height={811} />
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="col-span-6">
                                <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                    <Image src={Icon5} alt='icon 1' width={64} height={67} />
                                    <h3 className='text-white text-[30px] font-bold font-sans mb-2 mt-2'>Teamwork Efforts</h3>
                                    <p className='text-white text-[14px] font-sans font-light'>Teamwork is always a ticket to success for  Infinity Animations. We work closely with great astuteness to ensure that you have one big extended team that moves you towards your goal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
