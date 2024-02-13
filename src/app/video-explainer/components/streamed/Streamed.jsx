import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

// ==== Images 
import Image1 from "media/video-explainer/stream1.jpg"
import Image2 from "media/video-explainer/stream2.jpg"
import Image3 from "media/video-explainer/stream3.jpg"
import Image4 from "media/video-explainer/stream4.jpg"
import Image5 from "media/video-explainer/stream5.jpg"
import Image6 from "media/video-explainer/stream6.jpg"
import Image7 from "media/video-explainer/stream7.jpg"
import Image8 from "media/video-explainer/stream8.jpg"
import Image9 from "media/video-explainer/stream9.jpg"
import Image10 from "media/video-explainer/stream10.jpg"
import Image11 from "media/video-explainer/stream11.jpg"
import Image12 from "media/video-explainer/stream12.jpg"
import Image13 from "media/video-explainer/stream13.jpg"
import Image14 from "media/video-explainer/stream14.jpg"
import Image15 from "media/video-explainer/stream15.jpg"
import Image16 from "media/video-explainer/stream16.jpg"
import Image17 from "media/video-explainer/stream17.jpg"
import Image18 from "media/video-explainer/stream18.jpg"
import Image19 from "media/video-explainer/stream19.jpg"
import Image20 from "media/video-explainer/stream20.jpg"
import Image21 from "media/video-explainer/stream21.jpg"
import Image22 from "media/video-explainer/stream22.jpg"
import Image23 from "media/video-explainer/stream23.jpg"
import Image24 from "media/video-explainer/stream24.jpg"

const Streamed = () => {

    const [activeTab1, setActiveTab1] = useState("tab1");
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }

    return (
        <>
            <section className='py-[100px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Our Streamlined Projects</h2>
                            <ul className='flex-wrap flex items-center justify-center gap-y-4 pt-10'>
                                <li
                                    className={`inline-block px-5 md:px-8 xl:px-16 py-3 text-[15px] lg:text-[20px] font-[300] montserrat cursor-pointer ${activeTab1 === "tab1" ? "text-primary-100 border-b-2 border-primary-100 " : "text-[#000]"}`}>
                                    <Link onClick={() => fun1("tab1")}
                                        href="javascript:;">
                                        2D ANIMATION
                                    </Link>
                                </li>
                                <li
                                    className={`inline-block px-5 md:px-8 xl:px-16 py-3 text-[15px] lg:text-[20px] font-[300] montserrat cursor-pointer ${activeTab1 === "tab2" ? "text-primary-100 border-b-2 border-primary-100" : "text-[#000]"}`}>
                                    <Link onClick={() => fun1("tab2")}
                                        href="javascript:;">
                                        2D ANIMATION
                                    </Link>
                                </li>
                                <li
                                    className={`inline-block px-5 md:px-8 xl:px-16 py-3 text-[15px] lg:text-[20px] font-[300] montserrat cursor-pointer ${activeTab1 === "tab3" ? "text-primary-100 border-b-2 border-primary-100" : "text-[#000]"}`}>
                                    <Link onClick={() => fun1("tab3")}
                                        href="javascript:;">
                                        2D ANIMATION
                                    </Link>
                                </li>
                                <li
                                    className={`inline-block px-5 md:px-8 xl:px-16 py-3 text-[15px] lg:text-[20px] font-[300] montserrat cursor-pointer ${activeTab1 === "tab4" ? "text-primary-100 border-b-2 border-primary-100" : "text-[#000]"}`}>
                                    <Link onClick={() => fun1("tab4")}
                                        href="javascript:;">
                                        MOTION GRAPHICS
                                    </Link>
                                </li>

                            </ul>
                            <div className='mt-10'>
                                {activeTab1 == "tab1" && (
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image1} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image2} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image3} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image4} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image5} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image6} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab1 == "tab2" && (
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image7} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image8} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image9} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image10} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image11} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image12} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab1 == "tab3" && (
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image13} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image14} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image15} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image16} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image17} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image18} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab1 == "tab4" && (
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image19} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image20} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image21} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image22} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image23} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                            <div className="card relative group">
                                                <Image src={Image24} alt='tab-Image' className='w-full mx-auto' />
                                                <div className="text absolute bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center duration-700 transition-all opacity-0 group-hover:opacity-100">
                                                    <h2 className='text-white text-[20px] font-sans font-[700] uppercase'>Play Video</h2>
                                                </div>
                                                <span className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] duration-700 transition-all opacity-0 group-hover:opacity-100'></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Streamed
