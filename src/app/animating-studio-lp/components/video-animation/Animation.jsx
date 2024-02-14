"use client"

import React from 'react'


// swiper start
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Animation = () => {



    return (
        <>
            <section className='py-[70px]'>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="content">
                                <h2 className='text-[50px] font-sans font-bold text-black text-center'>Mastering the Art of Video Animation</h2>
                                <p className='text-black text-[16px] font-sans text-center'>Unlocking a Diverse Range of Animation Services to Achieve Your Branding Goals with Success.</p>
                            </div>

                            <div className="slider">
                                <Swiper>
                                    <SwiperSlide>
                                        
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Animation
