"use client"
// Import Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import getIcon from "media/icons/arrow-w.png";
import liveChatIcon from "media/icons/chat.png";

const CTA = ({ text, href, bg, css, icon1, icon2 }) => {
    return (
        <>
            {/* <Link className={`${color} py-1 px-3 2xl:px-6 rounded-md text-[18px] font-normal font-sans flex flex-row items-center justify-between"} ${hover} ${border}`} href={link}>
                <span className="text-[16px] md:text-[18px] font-normal">{text}</span>
                {icon1 ? <Image className="w-[30px] ms-3 md:ms-5" src={getIcon} alt="Infinity Animation" /> : null}
                {icon2 ? <Image className="w-[40px] ms-3 md:ms-5" src={liveChatIcon} alt="Infinity Animation" /> : null}
            </Link> */}

            <div className="w-full sm:w-max" dangerouslySetInnerHTML={{
                __html: `
                <a href=${href} class=" text-center px-5 h-[50px] ${bg} border-2 text-[18px] font-normal font-sans tracking-wider rounded-md block leading-[48px] ${css} transition-all">
                    ${text}
                </a>`
            }} />
        </>
    );
}

export default CTA

