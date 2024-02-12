import { QuestionMarkCircleOutline, Star } from 'heroicons-react'
import Image from 'next/image'
import React from 'react'

// Images 
import Testi1 from "media/video-explainer/testi-img1.png"
import Testi2 from "media/video-explainer/testi-img2.png"
import Testi3 from "media/video-explainer/testi-img3.png"
import TestiBf from "media/video-explainer/testi-bf.png"

const ClientThinking = () => {
    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[url(../../public/video-explainer/testi-bg.jpg)] relative'>
                <Image src={TestiBf} alt='Particle Image' className='w-[245px] h-[585px] object-contain absolute left-[15px] bottom-0 z-0 testi' />
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-white text-center font-[700] montserrat text-[30px]'>How Our Clients Are Thanking Us</h2>
                            <p className='text-white text-[18px] montserrat font-[400] py-[17px] text-center pb-[60px]'>Our experts leave no stone unturned in providing the desired outcome of our clients</p>
                        </div>
                        <div className="col-span-4">
                            <div className="card bg-white rounded-[3px] shadow-lg mx-[12px] relative p-0 duration-700 hover:top-[-20px] hover:duration-700">
                                <span className='text-[#222] text-[75px] relative left-[18px] top-[20px] '>"</span>
                                <p className='mb-[20px] p-[20px] text-[15px] text-[#333] montserrat lg:w-11/12'>From start to finish, the process was incredibly easy. It was a pleasure to work
                                    with the Infinity Animations squad. </p>

                                <div className="card-bottom flex items-center p-[20px] bg-[#f1f0f0]">
                                    <div className="img">
                                        <Image src={Testi1} alt='testi1' className='img-fluid' />
                                    </div>
                                    <div className="content pl-[15px]">
                                        <h4 className='text-[18px] font-[600] montserrat text-black'>Jennifer Aswat</h4>
                                        <div className="reviews flex items-center">
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="card bg-white rounded-[3px] shadow-lg mx-[12px] relative p-0 duration-700 hover:top-[-20px] hover:duration-700">
                                <span className='text-[#222] text-[75px] relative left-[18px] top-[20px] '>"</span>
                                <p className='mb-[20px] p-[20px] text-[15px] text-[#333] montserrat lg:w-11/12'>The story of the business relationship started with a 30 second video in 2019,
                                    now Infinity Animations team has produced 27 videos for our multiple brands for
                                    us. Glad to get a reliable company in the US</p>

                                <div className="card-bottom flex items-center p-[20px] bg-[#f1f0f0]">
                                    <div className="img">
                                        <Image src={Testi2} alt='testi1' className='img-fluid' />
                                    </div>
                                    <div className="content pl-[15px]">
                                        <h4 className='text-[18px] font-[600] montserrat text-black'>David Manks</h4>
                                        <div className="reviews flex items-center">
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="card bg-white rounded-[3px] shadow-lg mx-[12px] relative p-0 duration-700 hover:top-[-20px] hover:duration-700">
                                <span className='text-[#222] text-[75px] relative left-[18px] top-[20px] '>"</span>
                                <p className='mb-[20px] p-[20px] text-[15px] text-[#333] montserrat lg:w-11/12'>The whole team of Infinity Animations was extremely responsive and helpful. The
                                    videos were produced on time. The creatives were excellent and I personally
                                    liked the concept. Highly recommended. </p>

                                <div className="card-bottom flex items-center p-[20px] bg-[#f1f0f0]">
                                    <div className="img">
                                        <Image src={Testi3} alt='testi1' className='img-fluid' />
                                    </div>
                                    <div className="content pl-[15px]">
                                        <h4 className='text-[18px] font-[600] montserrat text-black'>Jason Gawkwad</h4>
                                        <div className="reviews flex items-center">
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ClientThinking
