"use client"

import React from 'react'
import Image from 'next/image';

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ===== Images ====== //
import Slide1 from "media/animating-studio/bussiness1.png"
import Slide2 from "media/animating-studio/bussiness2.png"
import Slide3 from "media/animating-studio/bussiness3.png"
import Slide4 from "media/animating-studio/bussiness4.png"
import Slide5 from "media/animating-studio/bussiness5.png"
import Slide6 from "media/animating-studio/bussiness6.png"
import Slide7 from "media/animating-studio/bussiness7.png"
import Slide8 from "media/animating-studio/bussiness8.png"
import Slide9 from "media/animating-studio/bussiness9.png"
import Slide10 from "media/animating-studio/bussiness10.png"
import Slide11 from "media/animating-studio/bussiness11.png"
import Slide12 from "media/animating-studio/bussiness12.png"
import Slide13 from "media/animating-studio/bussiness13.png"
import Slide14 from "media/animating-studio/bussiness14.png"
import Slide15 from "media/animating-studio/bussiness15.png"
import Slide16 from "media/animating-studio/bussiness16.png"
import Slide17 from "media/animating-studio/bussiness17.png"


const Bussiness = () => {

    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 6.3,
        slidesToScroll: 1,
        rtl: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const BussinessSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 6.3,
        slidesToScroll: 1,
        cssEase: 'linear',
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className='py-[30px] md:py-[70px]'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid-cols-1">
                        <div className="content">
                            <h2 className='text-[30px] md:text-[50px] leading-tight font-sans font-bold text-center text-black mb-2 sm:mb-6'>Elevate Your Business With Standout Videos.</h2>
                        </div>
                    </div>
                </div>

                {/* slider start */}
                <Slider {...testiSlider} className="bussinessSlider my-[20px]">
                    <div className="slide px-4 max-h-[180px] min-h-[180px]">
                        <Image src={Slide1} alt='Slide' className='max-h-[150px] min-h-[150px]' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Interface Animations</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[180px] min-h-[180px]">
                        <Image src={Slide2} alt='Slide' className='max-h-[150px] min-h-[150px]' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>YouTube Content</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[180px] min-h-[180px]">
                        <Image src={Slide3} alt='Slide' className='max-h-[150px] min-h-[150px]' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Picture-in-Picture</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[180px] min-h-[180px]">
                        <Image src={Slide4} alt='Slide' className='max-h-[150px] min-h-[150px]' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Lower Thirds</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[180px] min-h-[180px]">
                        <Image src={Slide5} alt='Slide' className='max-h-[150px] min-h-[150px]' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Explainers</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[180px] min-h-[180px]">
                        <Image src={Slide6} alt='Slide' className='max-h-[150px] min-h-[150px]' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Doodles</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[180px] min-h-[180px]">
                        <Image src={Slide7} alt='Slide' className='max-h-[150px] min-h-[150px]' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Endcards</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[180px] min-h-[180px]">
                        <Image src={Slide8} alt='Slide' className='max-h-[150px] min-h-[150px]' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Scroll Stoppers</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[180px] min-h-[180px]">
                        <Image src={Slide9} alt='Slide' className='max-h-[150px] min-h-[150px]' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Logo Reveals</p>
                        </div>
                    </div>
                </Slider>

                <Slider {...BussinessSlider} className="bussinessSlider my-[20px]">
                    <div className="slide px-4 max-h-[205px] sm:max-h-[180px] min-h-[205px] sm:min-h-[180px]">
                        <Image src={Slide10} alt='Slide' className='w-full' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Stories</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[205px] sm:max-h-[180px] min-h-[205px] sm:min-h-[180px]">
                        <Image src={Slide11} alt='Slide' className='w-full' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Slideshows</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[205px] sm:max-h-[180px] min-h-[205px] sm:min-h-[180px]">
                        <Image src={Slide12} alt='Slide' className='w-full' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Social Posts</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[205px] sm:max-h-[180px] min-h-[205px] sm:min-h-[180px]">
                        <Image src={Slide13} alt='Slide' className='w-full' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Video Ads</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[205px] sm:max-h-[180px] min-h-[205px] sm:min-h-[180px]">
                        <Image src={Slide14} alt='Slide' className='w-full' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Real Estate</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[205px] sm:max-h-[180px] min-h-[205px] sm:min-h-[180px]">
                        <Image src={Slide15} alt='Slide' className='w-full' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Bobble Heads</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[205px] sm:max-h-[180px] min-h-[205px] sm:min-h-[180px]">
                        <Image src={Slide16} alt='Slide' className='w-full' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Promotional Videos</p>
                        </div>
                    </div>
                    <div className="slide px-4 max-h-[205px] sm:max-h-[180px] min-h-[205px] sm:min-h-[180px]">
                        <Image src={Slide17} alt='Slide' className='w-full' />
                        <div className="content">
                            <p className='text-[18px] font-bold font-sans text-center text-black pt-2'>Stomp Teasers</p>
                        </div>
                    </div>
                </Slider>
                {/* slider End */}
            </section >
        </>
    )
}

export default Bussiness
