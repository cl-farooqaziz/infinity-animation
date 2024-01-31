"use client"
// Import Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import getIcon from "media/icons/btn-arr.png";
import liveChatIcon from "media/icons/chat.png";

const CTA = ({ text, icon1, icon2, color, link, border, hover, rounded }) => {
    return (
        <>
            <Link className={`${color} py-1 px-3 md:px-6 rounded-md text-[18px] font-normal font-sans flex flex-row items-center justify-between"} ${hover} ${border}`} href={link}>
                <span className="text-[16px] md:text-[18px] font-normal">{text}</span>
                {icon1 ? <Image className="w-[30px] ms-3 md:ms-5" src={getIcon} alt="getIcon" /> : null}
                {icon2 ? <Image className="w-[40px] ms-3 md:ms-5" src={liveChatIcon} alt="liveChatIcon" /> : null}
            </Link>
        </>
    );
}

export default CTA

