"use client"

import React from 'react'
import Image from 'next/image'

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Image 
import ServiceConcept from 'media/images/concept-img.png'
import ConceptParticle from "media/images/concept-bef.png"
import FoldBg from 'media/images/fold-bg.png'
import icon1 from "media/icons/concept-icon1.png"
import icon2 from "media/icons/concept-icon2.png"
import icon3 from "media/icons/concept-icon3.png"
import icon4 from "media/icons/concept-icon4.png"

const Servicesconcept = () => {

    // const { title, para, testiContent } = content;


    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className='xl:pt-36 pb-16 relative'>
                <Image src={FoldBg} alt='bg' className='absolute top-[-200px] right-0 w-full' />
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4">
                            <div className='relative -ml-6'>
                                <Image src={ServiceConcept} alt='ServiceConcept' quality={85} className='w-10/12' />
                                <div className='absolute bottom-[-100%] left-[6%]'>
                                    <Image src={ConceptParticle} alt='ConceptParticle' quality={85} className='w-full' />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 relative">
                            <h2 className='text-white text-[50px] font-sans font-bold'>How We Animate</h2>
                            <p className='text-white font-sans font-light text-[16px] lg:w-11/12'>As an industry-leading video animation company, we have a firm belief that innovation, when combined with dedication, helps the brand stand out through exceptional video production.</p>

                            <Slider {...testiSlider} className="servicesConcept mt-12">
                                <div>
                                    <div className="p-4">
                                        <div className="flex flex-wrap items-start justify-between mb-3">
                                            <Image src={icon1} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                            <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                                <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">01</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-[24px] xl:text-[30px] font-sans font-bold tracking-wide mb-2">Concept</h3>
                                            <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">No work of art or wonder can ever be brought to life without a concrete concept. </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-4">
                                        <div className="flex flex-wrap items-start justify-between mb-3">
                                            <Image src={icon2} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                            <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                                <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">02</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-[24px] xl:text-[30px] font-sans font-bold tracking-wide mb-2">Storyboarding</h3>
                                            <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">Next, we create storyboards that visually map out your video, displaying the sequence of animation events.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-4">
                                        <div className="flex flex-wrap items-start justify-between mb-3">
                                            <Image src={icon3} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                            <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                                <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">03</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-[24px] xl:text-[30px] font-sans font-bold tracking-wide mb-2">Creation</h3>
                                            <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">Using the storyboard as our guide, our animators bring your story to life with engaging visuals.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-4">
                                        <div className="flex flex-wrap items-start justify-between mb-3">
                                            <Image src={icon4} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                            <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                                <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">04</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-[24px] xl:text-[30px] font-sans font-bold tracking-wide mb-2">Concept</h3>
                                            <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">No work of art or wonder can ever be brought to life without a concrete concept. </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <hr className='border-[#707070] border mt-[40px] w-[75%] 2xl:w-[80%] ml-[11%] 2xl:ml-[8%]' />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Servicesconcept
