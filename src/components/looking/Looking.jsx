"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';

// Import Components
import CTA from "@/components/cta/CTA";

const Looking = ({ content }) => {
    const { title, para: { paraArray }, btnBg, btnColor, btnBorder, btnHover, flodImg } = content;

    const router = usePathname();

    let lookinImage;
    let lookingSecCol;
    switch (router) {
        case '/why-us':
            lookinImage = 'lg:min-w-[1000px] mr-auto'
            lookingSecCol = 'md:absolute right-[54px] top-[18%]'
            break;
        default:
            break;
    }

    return (
        <>
            <section className={`w-full flex items-center justify-start py-8 sm:py-16 bg-none lg:bg-[url("../../public/images/fold-bg.png")] bg-no-repeat bg-center bg-cover relative`}>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-y-7'>
                        <div className={`w-full lg:w-[500px] ${lookinImage}`}>
                            <Image src={flodImg} className="w-9/12 lg:w-full mx-auto" alt="Infinity Animation" />
                        </div>
                        <div className={`w-full lg:w-[800px] ${lookingSecCol}`}>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-5">
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
