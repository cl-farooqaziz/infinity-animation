"use client"
import Image from "next/image";
// Import Components
import CTA from "@/components/cta/CTA";

const Boost = ({ content }) => {
    const { title, para, btnBg, btnColor, btnBorder, btnHover, flodImg, boostContent } = content;
    return (
        <>
            <section className={`w-full flex pt-32 pb-16`}>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row items-start justify-between'>
                        <div className='w-full lg:w-[1000px]'>
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-sans leading-tight mb-3">
                                {title}
                            </h1>
                            <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-justify mb-5">
                                {para}
                            </p>
                            <div className="grid grid-cols-3 gap-10 my-8 xl:my-12">
                                {boostContent.map((item, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute left-[-10%] w-[1px] h-full bg-white text-white"></div>
                                        <Image src={item.icon} className="w-[18%] h-[22%] mb-3" alt='Concept Icon' />
                                        <h3 className="text-[18px] xl:text-[20px] font-sans font-bold tracking-wide mb-2">{item.heading}</h3>
                                        <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line">{item.text}</p>
                                    </div>
                                ))}
                            </div>
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
                        </div>
                        <div className="w-full lg:w-[500px]">
                            <Image src={flodImg} className="mx-auto" alt="Infinity Animation" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Boost
