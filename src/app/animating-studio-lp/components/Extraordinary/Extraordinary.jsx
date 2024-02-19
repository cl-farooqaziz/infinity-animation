"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//
import { useEffect, useRef } from "react";

import lottie from 'lottie-web';

import Animation from "media/animating-studio/animation.png"
import AnimationOne from "media/extraordinary-one.json"
import AnimationTwo from "media/extraordinary-two.json"

const Extraordinary = () => {
    const animeOne = useRef(null);
    const animeTwo = useRef(null);

    useEffect(() => {
        console.log("Inside useEffect");

        const containerOne = document.getElementById('animationOne');
        const containerTwo = document.getElementById('animationTwo');

        if (animeOne.current) {
            animeOne.current.destroy();
        }

        if (animeTwo.current) {
            animeTwo.current.destroy();
        }

        console.log("Container One:", containerOne);
        console.log("Container Two:", containerTwo);

        animeOne.current = lottie.loadAnimation({
            container: containerOne,
            animationData: AnimationOne,
            loop: true,
            autoplay: true,
            renderer: "svg",
        });

        animeTwo.current = lottie.loadAnimation({
            container: containerTwo,
            animationData: AnimationTwo,
            loop: true,
            autoplay: true,
            renderer: "svg",
        });

        return () => {
            if (animeOne.current) {
                animeOne.current.destroy();
            }
            if (animeTwo.current) {
                animeTwo.current.destroy();
            }
        };

    }, []);


    return (
        <>
            <section className='py-[30px] md:py-[70px]'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[30px] md:text-[40px] lg:text-[55px] leading-tight font-bold font-sans text-center text-black mb-3'>Let's Create Something Extraordinary.</h2>
                            <p className='text-[13px] sm:text-[17px] leading-[21px] font-sans text-center text-black lg:w-9/12 mx-auto mb-10'>Ready to embark on an animation adventure? Let's collaborate and weave magic into your ideas. Contact me to discuss your project, and together, we'll turn your vision into an animated masterpiece.</p>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <div className="btns">
                                    <Link class="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-[318px] h-[44px] poppins flex items-center justify-center" href="javascript:;">Make an Animation</Link>
                                </div>
                                <div className="btns">
                                    <Link class="text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] w-[318px] md:w-[214px] h-[44px] shadow-2xl poppins flex items-center justify-center" href="javascript:;">Live Chat</Link>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <div id="animationTwo" className='max-w-[170px] md:max-w-[400px] lg:max-w-[700px]'></div>
                                    <div id="animationOne"></div>
                                </div>
                                {/* <Image src={Animation} alt='Animation Studio' className='w-11/12 mx-auto' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Extraordinary
