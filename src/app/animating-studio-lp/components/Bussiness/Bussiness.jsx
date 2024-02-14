"use client"

import React from 'react'
import Image from 'next/image';

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ===== Images ====== //
import Slide1 from "media/animating-studio/slide1.png"
import Slide2 from "media/animating-studio/slide2.png"
import Slide3 from "media/animating-studio/slide3.png"
import Slide4 from "media/animating-studio/slide4.png"
import Slide5 from "media/animating-studio/slide5.png"
import Slide6 from "media/animating-studio/slide6.png"
import Slide7 from "media/animating-studio/slide7.png"
import Slide8 from "media/animating-studio/slide8.png"
import Slide9 from "media/animating-studio/slide9.png"

const Bussiness = () => {


    const desc = [
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
        "Interface Animations",
    ]

    const bussiness = {
        slide1: Slide1,
        slide2: Slide2,
        slide3: Slide3,
        slide4: Slide4,
        slide5: Slide5,
        slide6: Slide6,
        slide7: Slide7,
        slide8: Slide8,
        slide9: Slide9,
        para: desc,
    }

    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 6.2,
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
            <section className='py-[70px]'>
                <div className="max-w-7xl mx-auto">
                    <div className="grid-cols-1">
                        <div className="content">
                            <h2 className='text-[50px] font-sans font-bold text-center text-black mb-6'>Elevate Your Business With Standout Videos.</h2>
                        </div>
                    </div>
                </div>

                {/* slider start */}
                <Slider {...testiSlider} className="testiSlider">
                    {Object.values(bussiness).map((slides, index) => (
                        <div key={index} className='px-3'>
                            <Image src={slides} alt='Slides ' height={201} width={240} className='w-full h-[201px] object-contain' />
                            <p className='text-[18px] font-bold font-sans text-center text-black'>{slides.para}</p>
                        </div>
                    ))}
                </Slider>
                {/* slider End */}
            </section >
        </>
    )
}

export default Bussiness
