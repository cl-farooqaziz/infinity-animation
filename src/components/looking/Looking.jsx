"use client"
import Image from "next/image";
// Import Components
import CTA from "@/components/cta/CTA";

const Looking = ({ content }) => {
    const { title, para: { paraArray }, btnBg, btnColor, btnBorder, btnHover, flodImg } = content;
    return (
        <>
            <section className={`w-full flex items-center justify-start py-16 bg-none lg:bg-[url("../../public/images/fold-bg.png")] bg-no-repeat bg-center bg-cover`}>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row items-center justify-around'>
                        <div className="w-full lg:w-[500px]">
                            <Image src={flodImg} className="mx-auto" alt="trustPlatforms" />
                        </div>
                        <div className='w-full lg:w-[800px]'>
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-sans leading-tight mb-5">
                                {title}
                            </h1>
                            {paraArray.map((para, index) => (
                                <p key={index} className="text-[16px] font-normal font-sans leading-snug tracking-wider text-justify mb-5">
                                    {para}
                                </p>
                            ))}
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Looking
