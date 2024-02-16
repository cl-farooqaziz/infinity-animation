import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Assisted = () => {
    const banVideo = [
        [
            "https://player.vimeo.com/progressive_redirect/playback/913404582/rendition/720p/file.mp4?loc=external&log_user=0&signature=fb7ea9f370c1d99717d02f8e809c585e0668181fdd1411f3d4322da785685a8a",
        ]
    ];
    return (
        <>
            <section className='bg-[#00C6F9] py-[30px] md:py-[70px] relative'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="lg:py-[70px] xl:py-[120px] relative z-50">
                                <h2 className='text-[25px] sm:text-[40px] lg:text-[50px] leading-[40px] lg:leading-[55px] font-bold font-sans mb-3'>We Have Assisted Various
                                    Successful Brands Worldwide!</h2>
                                <p className='text-[13px] sm:text-[16px] font-sans leading-[20px] mb-3'>At Animating Studio, our proficient animators in video production have been instrumental in the success of numerous global companies. As a leading animated explainer video company, we excel in producing high-quality animated videos that captivate and wow your audience. Our animators at Animating Studio are driven by a commitment to provide exceptionally creative and stimulating custom explainer videos, ensuring your business enjoys the spotlight it deserves.</p>
                                <p className='text-[13px] sm:text-[16px] font-sans leading-[20px] mb-3'>Crafting nuanced meanings and ideas with simplicity, our animated video production showcases top-tier proficiency and skills. Our animation company, equipped with a seasoned team of professionals in 3D, 2D, and whiteboard video animation, serves customers globally. We seamlessly blend cutting-edge techniques to create visually appealing videos. From whiteboard animation to 2D and 3D animation, we ensure your market entry is marked by excellence, helping you reach new heights.</p>

                                <div className="btn mt-8">
                                    <Link href="javascript:;" class="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-full sm:w-[320px] h-[44px] poppins flex items-center justify-center" >Make an Animation</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            {banVideo.map((item, index) => (
                                <div key={index}>
                                    <video className='lg:absolute right-0 h-full top-0' muted="muted" autoPlay src={item}></video>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Assisted
