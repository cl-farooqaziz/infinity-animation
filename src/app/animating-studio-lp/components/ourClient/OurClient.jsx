"use client"

import React from 'react'
import Image from 'next/image'
import { Star } from 'heroicons-react';

//   Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// // ===== Images
import ClientImage from "media/animating-studio/client.png"
import Client1 from "media/animating-studio/client1.png"
import Client2 from "media/animating-studio/client2.png"

const OurClient = () => {

    // Slider Start
    const ClientSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.3,
                    arrows: false,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <section className="py-[30px] md:py-[70px] bg-[#FF2D4B] relative sm:before:absolute sm:before:content-[''] sm:before:h-full sm:before:w-[111px] 3xl:before:w-[145px] sm:before:right-0 sm:before:top-0 sm:before:bg-[#ff2d4c73] sm:before:z-50 md:h-[70vh] lg:h-full">
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12">
                            <h2 className='text-[35px] sm:text-[45px] md:text-[55px] font-bold font-sans text-center text-white mb-3'>Words from Our Clients.</h2>
                            <p className='text-[13px] lg:text-[16px] leading-[21px] font-sans text-center text-white mx-auto mb-10'>Hear What Our Clients Have to Say</p>
                        </div>
                        <div className="col-span-4 lg:col-span-8">
                            <Image src={ClientImage} alt='Clients' className='mt-[-57px] lg:mt-0 lg:mb-[-70px] md:block hidden' />
                        </div>
                        <div className="col-span-12 md:col-span-8 lg:col-span-4">
                            <Slider {...ClientSlider} className='clientSlider w-12/12 md:w-7/12 lg:w-5/12 bottom-[7%] lg:bottom-[19%] right-0'>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[30px] text-white font-bold poppins'>Mark</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client2} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[30px] text-white font-bold poppins'>Sarah</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Working with Animating Studio was an absolute delight! Their creativity knows no bounds, and the animations they produced for our brand surpassed all expectations. From concept to execution, their team's professionalism and dedication were evident. We're proud to have collaborated with true visionaries in the animation realm.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[30px] text-white font-bold poppins'>Mark</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default OurClient
