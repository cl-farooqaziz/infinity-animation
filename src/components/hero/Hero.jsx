"use client"
import Image from "next/image";
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import trustPlatforms from "media/icons/trust.png";

const Hero = ({ content }) => {
    const { title, para, btnBg, btnColor, btnBorder, btnHover, } = content;
    return (
        <>
            <section className={`w-full h-[100vh] flex items-center lg:items-end justify-start pb-5 bg-none lg:bg-[url("../../public/home/banner-img.png")] bg-no-repeat bg-[length:100%_70%] bg-bottom`}>
                <div className="container">
                    <div className='flex'>
                        <div className='w-[600px]'>
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-sans leading-none mb-5">
                                {title}
                            </h1>
                            <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-justify mb-5">
                                {para}
                            </p>
                            <div className="flex gap-6">
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
                            <Image src={trustPlatforms} className="mt-10 md:mt-20" alt="trustPlatforms" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
