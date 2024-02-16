import React from 'react'
import { Star } from 'heroicons-react'
import Image from 'next/image';

// ====== Images 
import PartiOne from "media/animating-studio/banner1.png"
import PartiTwo from "media/animating-studio/banner2.png"
import PartiThree from "media/animating-studio/banner-3.png"
import PartiFour from "media/animating-studio/banner-4.png"

// ===== Video 
const banVideo = [
    [
        "https://player.vimeo.com/progressive_redirect/playback/913401765/rendition/1080p/file.mp4?loc=external&log_user=0&signature=e204ee64eae124e8132a001ea8e6081354f808be093857e5fde05c5b63cacc96",
    ]
];

const Banner = () => {
    return (
        <>
            <section className='py-[30px] md:py-[70px] relative'>
                <Image src={PartiTwo} alt='Particle' height={625} width={517} className='absolute right-0 bottom-[-38px] w-4/12 lg:block hidden' />
                <Image src={PartiFour} alt='Particle' className='absolute right-0 bottom-[-45%] w-[9%] lg:block hidden' />
                <div className="px-5 lg:max-w-7xl mx-auto relative">
                    <Image src={PartiOne} alt='Particle One' className='absolute left-[40px] bottom-[-70px] w-[23%] z-20 lg:block hidden' />
                    <div className="flex items-center justify-center">
                        <div className="reviews flex items-center justify-center gap-x-1">
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                        </div>
                        <div className="content">
                            <p className='text-[13px] sm:text-[16px] text-black font-sans ms-2'><strong>4.8 out of 5</strong> (review rating) Over 1,200+ reviews</p>
                        </div>
                    </div>
                    <h1 className='text-[30px] sm:text-[35px] lg:text-[50px] font-bold text-black font-sans text-center leading-[35px] sm:leading-[45px] lg:leading-[60px] pt-2 md:pt-4 pb-2 md:pb-5'>Ignite Sales With A Single Click. <br className='md:block hidden' />
                        Craft Compelling Videos Instantly!</h1>
                    <p className='text-center text-[13px] sm:text-[16px] font-sans text-black leading-[19px] pb-5'>Experience the magic of animation with Animating Studio. Where dreams unfold, and creativity <br /> takes flight. Unleash the extraordinary in every frame.</p>
                    <div className="video w-full lg:w-6/12 mx-auto">
                        {banVideo.map((item, index) => (
                            <div key={index}>
                                <video className={`rounded-2xl shadow-2xl w-full h-full`} muted="muted" autoPlay src={item}></video>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={PartiThree} alt='Particle' className='absolute left-0 bottom-[-28%] w-[7%] lg:block hidden' />
            </section>
        </>
    )
}

export default Banner
