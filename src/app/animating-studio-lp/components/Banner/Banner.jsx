import React from 'react'
import { Star } from 'heroicons-react'
import Image from 'next/image';

// ====== Images 
import PartiOne from "media/animating-studio/banner1.png"
import PartiTwo from "media/animating-studio/banner2.png"
import PartiThree from "media/animating-studio/banner-3.png"
import PartiFour from "media/animating-studio/banner-4.png"

// ===== Video 
const tabContents = [
    [
        "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
    ]
];

const Banner = () => {
    return (
        <>
            <section className='py-[70px] relative'>
                <Image src={PartiTwo} alt='Particle' height={625} width={517} className='absolute right-0 bottom-[-38px] w-4/12' />
                <Image src={PartiFour} alt='Particle' className='absolute right-0 bottom-[-45%] w-[9%]' />
                <div className="max-w-7xl mx-auto relative">
                    <Image src={PartiOne} alt='Particle One' className='absolute left-[40px] bottom-[-70px] w-[23%] z-20' />
                    <div className="flex items-center justify-center">
                        <div className="reviews flex items-center justify-center gap-x-1">
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                        </div>
                        <div className="content">
                            <p className='text-[16px] text-black font-sans ms-2'><strong>4.8 out of 5</strong> (review rating) Over 1,200+ reviews</p>
                        </div>
                    </div>
                    <h1 className='text-[50px] font-bold text-black font-sans text-center leading-[60px] pt-4 pb-5'>Ignite Sales With A Single Click. <br />
                        Craft Compelling Videos Instantly!</h1>
                    <p className='text-center text-[16px] font-sans text-black leading-[19px] pb-5'>Experience the magic of animation with Animating Studio. Where dreams unfold, and creativity <br /> takes flight. Unleash the extraordinary in every frame.</p>
                    <div className="video w-6/12 mx-auto">
                        {tabContents.map((item, index) => (
                            <div key={index}>
                                <video className={`rounded-2xl shadow-2xl w-full h-full`} muted="muted" autoPlay src={item}></video>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={PartiThree} alt='Particle' className='absolute left-0 bottom-[-28%] w-[7%]' />
            </section>
        </>
    )
}

export default Banner
