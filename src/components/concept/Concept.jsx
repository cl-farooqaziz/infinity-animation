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
                    <div className='lg:w-[550px] xl:w-[650px] ml-auto mt-0 lg:mt-48 py-8 md:py-16 lg:py-20'>
                        <div className="grid grid-cols-2 gap-12 relative">
                            <div className="absolute left-[50%] w-[1px] h-full bg-white text-white"></div>
                            <div className="absolute top-[50%] w-full h-[1px] bg-white text-white"></div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon1} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">01</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Consultation </h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">Our process begins with a thorough consultation to understand your vision and goals. We delve into the intricacies of your project, gathering insights that guide the creative direction. </p>
                                </div>
                            </div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon2} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">02</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Storyboarding </h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">Once the concept is crystallized, we move to the storyboard phase. Our expert team crafts a visual roadmap, outlining each scene and transition. </p>
                                </div>
                            </div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon3} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">03</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Animation </h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">With a solid plan in place, our skilled animators bring your project to life. Whether it's 2D or 3D animation, whiteboard sketches, or motion graphics, our team executes with precision and creativity.</p>
                                </div>
                            </div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon4} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">04</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-normal tracking-wide mb-2">Review </h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">Before finalizing the project, we invite you to review the animation in detail. This step allows for any necessary adjustments or fine-tuning to guarantee the end result meets your expectations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mt-7 sm:mt-4 sm:p-4">
                            <CTA
                                text="Get Started"
                                icon1={true}
                                href="#"
                                css="text-white hover:bg-transparent border-[#f5090b] hover:border-[#ffffff] sm:w-max md:w-[160px]"
                                bg="bg-prime"
                            />
                            <CTA
                                text="Live Chat"
                                icon2={true}
                                href="javascript:$zopim.livechat.window.show();"
                                css="text-white hover:bg-prime border-[#ffffff] hover:border-[#f5090b] sm:w-max md:w-[160px]"
                                bg="bg-transparent"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Concept
