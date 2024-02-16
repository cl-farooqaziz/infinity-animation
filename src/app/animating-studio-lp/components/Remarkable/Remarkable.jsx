"use client"

import Image from 'next/image'
import React from 'react'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ===== Images
import Remark1 from "media/animating-studio/remark1.png"
import Remark2 from "media/animating-studio/remark2.png"
import Remark3 from "media/animating-studio/remark3.png"
import Remark4 from "media/animating-studio/remark4.png"
import Remark5 from "media/animating-studio/remark5.png"
import Remark6 from "media/animating-studio/remark6.png"
import Remark7 from "media/animating-studio/remark7.png"
import Remark8 from "media/animating-studio/remark8.png"
import Remark9 from "media/animating-studio/remark9.png"

const Remarkable = () => {
    // Slider Setting
    const remarkSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className='pb-[30px] lg:pb-[70px]'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 mb-5">
                            <h2 className='text-[30px] sm:text-[40px] lg:text-[55px] leading-tight font-bold font-sans text-center text-black mb-3'>How We Achieve Remarkable Outcomes</h2>
                            <p className='text-[13px] lg:text-[16px] leading-[21px] font-sans text-center text-black lg:w-10/12 mx-auto mb-4 md:mb-10'>At Animating Studio, our meticulous work process is intricately crafted to yield flawless outcomes, whether for large-scale endeavors or smaller projects. Every detail is considered in our comprehensive approach to ensure excellence in every animation project.</p>
                        </div>
                    </div>
                    <div className="sm:block hidden">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-7">
                                <div className="card bg-[#F4F4F4] rounded-[15px] px-7 py-10 h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-black leading-[60px]'>Concept and Storyboards</h4>
                                    <p className='text-[16px] text-black font-sans leading-[21px] mb-7'>Bringing ideas to life demands imagination and creativity, and our professionals are as imaginative as you desire. We then translate this creativity into detailed storyboards.</p>
                                    <Image src={Remark1} alt='remark' className='w-8/12 mx-auto' />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="card bg-[#0E80FC] rounded-[15px] px-7 py-10 relative h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>Texturing</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>Our professionals excel at overlaying 2D images, intricately designing and texturing them, seamlessly transforming them into intricate 3D models.</p>
                                    <Image src={Remark2} alt='remark' className='w-full absolute right-[-15px]' />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="card bg-gradient-to-t from-[#09B7E4] to-[#19EDDA] rounded-[15px] px-7 py-10 relative h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>Rigging</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-6'>The process of establishing a controllable skeleton for animation is known as rigging. It is at this stage that we breathe life into the character, making it come alive with movement and expression.</p>
                                    <Image src={Remark3} alt='remark' className='w-full h-[54%] lg:h-[65%] object-contain absolute left-0 lg:left-[-65px]' />
                                </div>
                            </div>
                            <div className="col-span-7">
                                <div className="card bg-gradient-to-t from-[#AA00FE] to-[#6B00FE] rounded-[15px] px-7 py-10 h-full relative">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>Lightings</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-7'>Illuminating the scene is referred to as lighting. Our aim is to make each scene compelling and virtually indistinguishable from reality by skillfully enhancing its visual appeal.</p>
                                    <Image src={Remark4} alt='remark' className='w-full h-full object-contain mt-[-60px] lg:mt-[-34px] mx-auto' />
                                </div>
                            </div>
                            <div className="col-span-7">
                                <div className="card bg-[#F4F4F4] rounded-[15px] px-7 py-10 h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-black leading-[60px]'>Animation</h4>
                                    <p className='text-[16px] text-black font-sans leading-[21px] mb-7'>Making an object to be presented as moving object is animation. Animation comes with a number of flavors and different ideas.</p>
                                    <Image src={Remark5} alt='remark' className='mb-[-59px] mx-auto' />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="card bg-gradient-to-t from-[#FFAB4A] to-[#FF8E0A] rounded-[15px] px-7 py-10 relative h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>Compositing and Special VFX</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>From editing to touch-ups and adding special effects, everything comes in composting.</p>
                                    <Image src={Remark6} alt='remark' className='w-full absolute right-0 lg:right-[-17px] xl:right-[-25px] max-h-[350px] min-w-[100%] lg:min-w-[570px] xl:min-w-[585px]' />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="card bg-gradient-to-t from-[#AA00FE] to-[#6B00FE] rounded-[15px] px-7 py-10 relative h-full min-h-[620px]">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>Music and Foley</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>In 3D animation, sound completes the visual narrative. Crafting soundtracks, adding effects, and fine-tuning are crucial steps in our production.</p>
                                    <Image src={Remark7} alt='remark' className='w-9/12 mx-auto absolute left-0 right-0 bottom-[-55px]' />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="card bg-gradient-to-t from-[#0E80FC] to-[#058EF8] rounded-[15px] px-7 py-10 relative h-full min-h-[620px]">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>Editing and Final Output</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>At this juncture, all elements align seamlessly, undergo thorough checks, and upon satisfaction, your animation is ready for deployment.</p>
                                    <Image src={Remark8} alt='remark' className='w-11/12 absolute right-0 bottom-[-26px]' />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="card bg-gradient-to-t from-[#FF2D4B] to-[#F71017] rounded-[15px] px-7 py-10 relative h-full min-h-[620px]">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>Rendering</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>Rendering marks the culmination of the 3D process. 'Done' and 'exported' are the pivotal words that signify the completion of this essential stage.</p>
                                    <Image src={Remark9} alt='remark' className='w-11/12 absolute left-0 bottom-[-20px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block sm:hidden">
                        <Slider {...remarkSlider} className="remarkSlider">
                            <div>
                                <div className="card bg-[#F4F4F4] rounded-[15px] px-7 py-10 h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-black leading-tight md:leading-[60px]'>Concept and Storyboards</h4>
                                    <p className='text-[13px] lg:text-[16px] text-black font-sans leading-[21px] mb-7'>Bringing ideas to life demands imagination and creativity, and our professionals are as imaginative as you desire. We then translate this creativity into detailed storyboards.</p>
                                    <Image src={Remark1} alt='remark' className='min-h-[300px] max-h-[300px] w-8/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div >
                                <div className="card bg-[#0E80FC] rounded-[15px] px-7 py-10 relative h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>Texturing</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-4'>Our professionals excel at overlaying 2D images, intricately designing and texturing them, seamlessly transforming them into intricate 3D models.</p>
                                    <Image src={Remark2} alt='remark' className='min-h-[300px] max-h-[300px] w-8/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div >
                                <div className="card bg-gradient-to-t from-[#09B7E4] to-[#19EDDA] rounded-[15px] px-7 py-10 relative h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>Rigging</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-6'>The process of establishing a controllable skeleton for animation is known as rigging. It is at this stage that we breathe life into the character, making it come alive with movement and expression.</p>
                                    <Image src={Remark3} alt='remark' className='min-h-[300px] max-h-[300px] w-8/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div>
                                <div className="card bg-gradient-to-t from-[#AA00FE] to-[#6B00FE] rounded-[15px] px-7 py-10 h-full relative">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>Lightings</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-7'>Illuminating the scene is referred to as lighting. Our aim is to make each scene compelling and virtually indistinguishable from reality by skillfully enhancing its visual appeal.</p>
                                    <Image src={Remark4} alt='remark' className='min-h-[300px] max-h-[300px] w-8/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div>
                                <div className="card bg-[#F4F4F4] rounded-[15px] px-7 py-10 h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-black leading-tight md:leading-[60px]'>Animation</h4>
                                    <p className='text-[13px] lg:text-[16px] text-black font-sans leading-[21px] mb-7'>Making an object to be presented as moving object is animation. Animation comes with a number of flavors and different ideas.</p>
                                    <Image src={Remark5} alt='remark' className='min-h-[300px] max-h-[300px] w-8/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div>
                                <div className="card bg-gradient-to-t from-[#FFAB4A] to-[#FF8E0A] rounded-[15px] px-7 py-10 relative h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>Compositing and Special VFX</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-4'>From editing to touch-ups and adding special effects, everything comes in composting.</p>
                                    <Image src={Remark6} alt='remark' className='min-h-[300px] max-h-[300px] w-8/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div>
                                <div className="card bg-gradient-to-t from-[#AA00FE] to-[#6B00FE] rounded-[15px] px-7 py-10 relative h-full min-h-[485px] lg:min-h-[620px]">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>Music and Foley</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-4'>In 3D animation, sound completes the visual narrative. Crafting soundtracks, adding effects, and fine-tuning are crucial steps in our production.</p>
                                    <Image src={Remark7} alt='remark' className='min-h-[300px] max-h-[300px] w-8/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div>
                                <div className="card bg-gradient-to-t from-[#0E80FC] to-[#058EF8] rounded-[15px] px-7 py-10 relative h-full min-h-[485px] lg:min-h-[620px]">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>Editing and Final Output</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-4'>At this juncture, all elements align seamlessly, undergo thorough checks, and upon satisfaction, your animation is ready for deployment.</p>
                                    <Image src={Remark8} alt='remark' className='min-h-[300px] max-h-[300px] w-8/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div>
                                <div className="card bg-gradient-to-t from-[#FF2D4B] to-[#F71017] rounded-[15px] px-7 py-10 relative h-full min-h-[485px] lg:min-h-[620px]">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>Rendering</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-4'>Rendering marks the culmination of the 3D process. 'Done' and 'exported' are the pivotal words that signify the completion of this essential stage.</p>
                                    <Image src={Remark9} alt='remark' className='min-h-[300px] max-h-[300px] w-8/12 mx-auto object-contain' />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Remarkable
