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
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            }
        ]
    };

    return (
        <>
            <section className="py-[70px] bg-[#FF2D4B] relative before:absolute before:content-[''] before:h-full before:w-[111px] before:right-0 before:top-0 before:bg-[#ff2d4c73] before:z-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12">
                            <h2 className='text-[55px] font-bold font-sans text-center text-white mb-3'>Words from Our Clients.</h2>
                            <p className='text-[16px] leading-[21px] font-sans text-center text-white mx-auto mb-10'>Hear What Our Clients Have to Say</p>
                        </div>
                        <div className="col-span-8">
                            <Image src={ClientImage} alt='Clients' className='mb-[-70px]' />
                        </div>
                        <div className="col-span-4">
                            <Slider {...ClientSlider} className='clientSlider w-5/12 bottom-[19%] right-0'>
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
                                    <p className='text-[16px] text-white font-sans leading-[30px] pt-2'>Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!</p>
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
                                    <p className='text-[16px] text-white font-sans leading-[30px] pt-2'>Working with Animating Studio was an absolute delight! Their creativity knows no bounds, and the animations they produced for our brand surpassed all expectations. From concept to execution, their team's professionalism and dedication were evident. We're proud to have collaborated with true visionaries in the animation realm.</p>
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
                                    <p className='text-[16px] text-white font-sans leading-[30px] pt-2'>Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!</p>
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
