import React from 'react'
import CTA from '../cta/CTA'

const Want = ({ content }) => {
    const { title, wantDesc, btnBg, btnColor, btnBorder, btnHover, } = content;

    return (
        <>
            <section className="bg-[url('../../public/images/talk-bg.png')] bg-no-repeat bg-[length:100%] h-screen relative">
                <div className="absolute right-[7.3%] top-[13%] xl:top-[15%] 2xl:top-[25%] w-[40%] mx-auto">
                    <h2 className='text-white text-[50px] font-bold font-sans text-center'>{title}</h2>
                    <p className='text-white text-[16px] font-normal font-sans text-center'>{wantDesc}</p>
                    <div className="flex gap-4 justify-center pt-6">
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
            </section>
        </>
    )
}

export default Want
