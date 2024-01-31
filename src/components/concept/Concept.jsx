"use client"
import Image from "next/image";
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import icon1 from "media/icons/concept-icon1.png"
import icon2 from "media/icons/concept-icon2.png"
import icon3 from "media/icons/concept-icon3.png"
import icon4 from "media/icons/concept-icon4.png"


const Concept = ({ content }) => {
    const { btnBg, btnColor, btnBorder, btnHover, } = content;
    return (
        <>
            <section className={`w-full h-full flex items-center justify-star bg-none lg:bg-[url("../../public/home/concept-bg.png")] bg-no-repeat bg-center bg-[length:100%_100%]`}>
                <div className="container">
                    <div className='lg:w-[550px] xl:w-[650px] ml-auto mt-48 py-20 xl:py-12'>
                        <div className="grid grid-cols-2 gap-12 relative">
                            <div className="absolute left-[50%] w-[1px] h-full bg-white text-white"></div>
                            <div className="absolute top-[50%] w-full h-[1px] bg-white text-white"></div>
                            <div className="p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon1} className="w-[20%] xl:w-auto" alt='Concept Icon' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">01</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Concept</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">We first brainstorm and refine your ideas into a solid concept, ensuring a strong narrative foundation.</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon2} className="w-[20%] xl:w-auto" alt='Concept Icon' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">02</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Storyboarding</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">Next, we create storyboards that visually map out your video, displaying the sequence of animation events.</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon3} className="w-[20%] xl:w-auto" alt='Concept Icon' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">03</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Creation</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">Using the storyboard as our guide, our animators bring your story to life with engaging visuals.</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon4} className="w-[20%] xl:w-auto" alt='Concept Icon' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">04</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Delivery</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">Lastly, we perfect and polish the animation through editing and deliver you the best result on time.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-4 p-4">
                            <CTA
                                text="Get Started"
                                icon1={true}
                                color={`${btnBg ?? "bg-prime"} text-white`}
                                border={`border-2 ${btnBorder ?? "border-[#f5090b]"}`}
                                hover={`hover:text-white ${btnHover ?? "hover:bg-transparent"} hover:border-[#ffffff]`}
                                link="#" />
                            <CTA
                                text="Live Chat"
                                icon2={true}
                                color={`${btnColor ?? "text-white"} bg-transparent`}
                                border={`border-2 ${btnBorder ?? "border-[#ffffff]"}`}
                                hover="hover:bg-prime hover:border-[#f5090b]"
                                link="javascript:$zopim.livechat.window.show();" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Concept
