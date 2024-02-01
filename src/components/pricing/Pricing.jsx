"use client"
import Image from "next/image";
import Link from "next/link";
// Import Components
// Import Images
import star from "media/icons/star.png"
import chat from "media/icons/chat.png"
import arrow from "media/icons/btn-arr.png"
import tickP from "media/icons/tick-p.png"
import tickW from "media/icons/tick-w.png"

const Pricing = ({ content }) => {
    const { title, para } = content;
    return (
        <>
            <section className={`w-full flex items-center justify-start py-16`}>
                <div className="container">
                    <div className='flex items-center justify-center'>
                        <div className='w-full'>
                            <h1 className="text-[40px] md:text-[50px] font-semibold font-sans text-center leading-tight mb-3">
                                {title}
                            </h1>
                            <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                            <div className="grid grid-cols-3 gap-10 mt-32">
                                <div className="relative bg-[#262626] flex flex-col justify-start py-12 px-6 rounded-[35px]">
                                    <div className="absolute top-[-9%] left-[15%] -z-10 bg-second rounded-t-3xl py-4 px-24 flex items-center justify-center">
                                        <Image src={star} className="w-[20%]" alt="Infinity Animation" />
                                    </div>
                                    <h3 className="text-[30px] font-extrabold font-sans leading-tight">Startup Package</h3>
                                    <h4 className="text-[60px] font-extrabold font-sans">$195</h4>
                                    <ul className="pt-4">
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>60 Seconds Duration</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Script Writing</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Custom Artwork</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Background Music</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>HD Format Video</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Dedicated Support</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider invisible">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Dedicated Support</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between mt-5 pt-4">
                                        <div>
                                            <p className="text-[16px] font-bold font-sans mb-1">Speak With Us</p>
                                            <Link href="#" className="font-sans">+1-000-000-0000</Link>
                                        </div>
                                        <div>
                                            <p className="text-[16px] font-bold font-sans mb-1">Want To Discuss</p>
                                            <Link href="#" className="font-sans">Live Chat Now</Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <Link href="#" className="flex items-center justify-between font-sans">
                                            <span>Get Started</span>
                                            <Image src={arrow} className="w-[30px]" alt="Infinity Animation" />
                                        </Link>
                                        <Link href="#" className="flex items-center justify-between font-sans">
                                            <span>Live Chat</span>
                                            <Image src={chat} className="w-[40px]" alt="Infinity Animation" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative bg-second flex flex-col justify-start py-12 px-6 rounded-[35px]">
                                    <div className="absolute top-[-9%] left-[14%] -z-10 bg-[#262626] rounded-t-3xl py-4 w-[70%] flex items-center justify-center gap-2">
                                        <Image src={star} className="w-[8%]" alt="Infinity Animation" />
                                        <Image src={star} className="w-[8%]" alt="Infinity Animation" />
                                    </div>
                                    <h3 className="text-[30px] font-extrabold font-sans leading-tight">Classic Package</h3>
                                    <h4 className="text-[60px] font-extrabold font-sans">$499</h4>
                                    <ul className="pt-4">
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>60 Seconds Duration</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Script Writing</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Professional Voice-over & SFX</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Hand-drawn Illustrations</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Unlimited Revisions</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>HD Format Video</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Dedicated Support</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between mt-5 pt-4">
                                        <div>
                                            <p className="text-[16px] font-bold font-sans mb-1">Speak With Us</p>
                                            <Link href="#" className="font-sans">+1-000-000-0000</Link>
                                        </div>
                                        <div>
                                            <p className="text-[16px] font-bold font-sans mb-1">Want To Discuss</p>
                                            <Link href="#" className="font-sans">Live Chat Now</Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <Link href="#" className="flex items-center justify-between font-sans">
                                            <span>Get Started</span>
                                            <Image src={arrow} className="w-[30px]" alt="Infinity Animation" />
                                        </Link>
                                        <Link href="#" className="flex items-center justify-between font-sans">
                                            <span>Live Chat</span>
                                            <Image src={chat} className="w-[40px]" alt="Infinity Animation" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative bg-[#262626] flex flex-col justify-start py-12 px-6 rounded-[35px]">
                                    <div className="absolute top-[-9%] left-[14%] -z-10 bg-second rounded-t-3xl py-4 w-[70%] flex items-center justify-center gap-2">
                                        <Image src={star} className="w-[8%]" alt="Infinity Animation" />
                                        <Image src={star} className="w-[8%]" alt="Infinity Animation" />
                                        <Image src={star} className="w-[8%]" alt="Infinity Animation" />
                                    </div>
                                    <h3 className="text-[30px] font-extrabold font-sans leading-tight">Premium Package</h3>
                                    <h4 className="text-[60px] font-extrabold font-sans">$799</h4>
                                    <ul className="pt-4">
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>60 Seconds Duration</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Script Writing</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Professional Voice-over & SFX</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Custom 2D Character Illustration</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Unlimited Revisions</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>HD Format Video</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Dedicated Support</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between mt-5 pt-4">
                                        <div>
                                            <p className="text-[16px] font-bold font-sans mb-1">Speak With Us</p>
                                            <Link href="#" className="font-sans">+1-000-000-0000</Link>
                                        </div>
                                        <div>
                                            <p className="text-[16px] font-bold font-sans mb-1">Want To Discuss</p>
                                            <Link href="#" className="font-sans">Live Chat Now</Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <Link href="#" className="flex items-center justify-between font-sans">
                                            <span>Get Started</span>
                                            <Image src={arrow} className="w-[30px]" alt="Infinity Animation" />
                                        </Link>
                                        <Link href="#" className="flex items-center justify-between font-sans">
                                            <span>Live Chat</span>
                                            <Image src={chat} className="w-[40px]" alt="Infinity Animation" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
