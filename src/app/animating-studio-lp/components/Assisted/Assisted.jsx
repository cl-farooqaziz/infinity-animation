import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// ===== Images ===== //
import AssistedImage from "media/animating-studio/assited.png"

const Assisted = () => {
    return (
        <>
            <section className='bg-[#00C6F9] py-[70px] relative'>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-7">
                            <div className="py-[120px] relative z-50">
                                <h2 className='text-[50px] leading-[55px] font-bold font-sans mb-3'>We Have Assisted Various
                                    Successful Brands Worldwide!</h2>
                                <p className='text-[16px] font-sans leading-[20px] mb-3'>At Animating Studio, our proficient animators in video production have been instrumental in the success of numerous global companies. As a leading animated explainer video company, we excel in producing high-quality animated videos that captivate and wow your audience. Our animators at Animating Studio are driven by a commitment to provide exceptionally creative and stimulating custom explainer videos, ensuring your business enjoys the spotlight it deserves.</p>
                                <p className='text-[16px] font-sans leading-[20px] mb-3'>Crafting nuanced meanings and ideas with simplicity, our animated video production showcases top-tier proficiency and skills. Our animation company, equipped with a seasoned team of professionals in 3D, 2D, and whiteboard video animation, serves customers globally. We seamlessly blend cutting-edge techniques to create visually appealing videos. From whiteboard animation to 2D and 3D animation, we ensure your market entry is marked by excellence, helping you reach new heights.</p>

                                <div className="btn mt-8">
                                    <Link href="javascript:;" class="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-[320px] h-[44px] poppins flex items-center justify-center" >Make an Animation</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5">
                            <Image src={AssistedImage} alt='Assisted' className='absolute right-0 h-full top-0' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Assisted
