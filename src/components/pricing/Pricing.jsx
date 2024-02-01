"use client"
import Image from "next/image";
import Link from "next/link";
// Import Components
// Import Images
import star from "media/icons/star.png"
import chat from "media/icons/chat.png"
import arrow from "media/icons/arrow-w.png"
import arrowB from "media/icons/arrow-b.png"
import tickP from "media/icons/tick-p.png"
import tickW from "media/icons/tick-w.png"

// const packagesData = [
//     {
//         title: 'Classic Package',
//         price: '$195',
//         features: [
//             '60 Seconds Duration',
//             'Script Writing',
//             'Custom Artwork',
//             'Background Music',
//             'HD Format Video',
//             'Dedicated Support'
//         ],
//         isVisible: true
//     },
//     {
//         title: 'Startup Package',
//         price: '$499',
//         features: [
//             '60 Seconds Duration',
//             'Script Writing',
//             'Professional Voice-over & SFX',
//             'Hand-drawn Illustrations',
//             'Unlimited Revisions',
//             'HD Format Video',
//             'Dedicated Support',
//         ],
//         isVisible: true
//     },
//     {
//         title: 'Premium Package',
//         price: '$799',
//         features: [
//             '60 Seconds Duration',
//             'Script Writing',
//             'Professional Voice-over & SFX',
//             'Custom 2D Character Illustration',
//             'Unlimited Revisions',
//             'HD Format Video',
//             'Dedicated Support',
//         ],
//         isVisible: true
//     },
// ];

// const PackageItem = ({ title, price, features, isVisible }) => (
//     <div className={`relative bg-[#262626] flex flex-col justify-between py-12 rounded-[35px] ${isVisible ? '' : 'invisible'}`}>
//         <div className="absolute top-[-7%] xl:top-[-8%] left-[12%] py-4 w-[75%] -z-10 bg-second rounded-t-3xl flex items-center justify-center">
//             <Image src={star} className="w-[7%]" alt="Infinity Animation" />
//         </div>
//         <div className="border-b-2 border-[#000000] px-6 pb-4">
//             <h3 className="text-[30px] font-extrabold font-sans leading-tight mb-2">{title}</h3>
//             <h4 className="text-[60px] font-extrabold font-sans text-secondary-100">{price}</h4>
//         </div>
//         <ul className="pt-4 px-6">
//             {features.map((feature, index) => (
//                 <li key={index} className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
//                     <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
//                     <span>{feature}</span>
//                 </li>
//             ))}
//         </ul>
//         <div>
//             <div className="flex justify-between px-6 mt-5 pt-4">
//                 <div>
//                     <p className="text-[15px] font-bold font-sans">Speak With Us</p>
//                     <Link href="#" className="font-sans text-[14px]">+1-000-000-0000</Link>
//                 </div>
//                 <div>
//                     <p className="text-[15px] font-bold font-sans">Want To Discuss</p>
//                     <Link href="#" className="font-sans text-[14px]">Live Chat Now</Link>
//                 </div>
//             </div>
//             <div className="flex justify-between px-6 mt-5">
//                 <Link href="#" className="flex items-center justify-between font-sans bg-prime py-2 px-5 w-[40%] rounded-lg">
//                     <span>Get Started</span>
//                     <Image src={arrow} className="w-[30px]" alt="Infinity Animation" />
//                 </Link>
//                 <Link href="#" className="flex items-center justify-between font-sans bg-black border border-white py-2 px-5 w-[40%] rounded-lg">
//                     <span>Live Chat</span>
//                     <Image src={chat} className="w-[40px]" alt="Infinity Animation" />
//                 </Link>
//             </div>
//         </div>
//     </div>
// );

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
                                {/* {packagesData.map((packageData, index) => (
                                    <PackageItem key={index} {...packageData} />
                                ))} */}

                                <div className="relative bg-[#262626] flex flex-col justify-start py-12 rounded-[35px]">
                                    <div className="absolute top-[-7%] xl:top-[-8%] left-[12%] py-4 w-[75%] -z-10 bg-second rounded-t-3xl flex items-center justify-center">
                                        <Image src={star} className="w-[7%]" alt="Infinity Animation" />
                                    </div>
                                    <div className="border-b-2 border-[#000000] px-6 pb-4">
                                        <h3 className="text-[30px] font-extrabold font-sans leading-tight mb-2">Startup Package</h3>
                                        <h4 className="text-[60px] font-extrabold font-sans text-secondary-100">$195</h4>
                                    </div>
                                    <ul className="pt-4 px-6">
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>60 Seconds Duration</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Script Writing</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Custom Artwork</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Background Music</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>HD Format Video</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Dedicated Support</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider invisible">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Dedicated Support</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between px-6 mt-5 pt-4">
                                        <div>
                                            <p className="text-[15px] font-bold font-sans">Speak With Us</p>
                                            <Link href="#" className="font-sans text-[14px]">+1-000-000-0000</Link>
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-bold font-sans">Want To Discuss</p>
                                            <Link href="#" className="font-sans text-[14px]">Live Chat Now</Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-between px-6 mt-5">
                                        <Link href="#" className="flex items-center justify-between font-sans bg-prime py-2 px-5 w-[40%] rounded-lg">
                                            <span>Get Started</span>
                                            <Image src={arrow} className="w-[30px]" alt="Infinity Animation" />
                                        </Link>
                                        <Link href="#" className="flex items-center justify-between font-sans bg-black border border-white py-2 px-5 w-[40%] rounded-lg">
                                            <span>Live Chat</span>
                                            <Image src={chat} className="w-[40px]" alt="Infinity Animation" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative bg-second flex flex-col justify-start py-12 rounded-[35px]">
                                    <div className="absolute top-[-7%] xl:top-[-8%] left-[12%] py-4 w-[75%] -z-10 bg-[#262626] rounded-t-3xl flex items-center justify-center gap-2">
                                        <Image src={star} className="w-[7%]" alt="Infinity Animation" />
                                        <Image src={star} className="w-[7%]" alt="Infinity Animation" />
                                    </div>
                                    <div className="border-b-2 px-6 pb-4">
                                        <h3 className="text-[30px] font-extrabold font-sans leading-tight mb-2">Classic Package</h3>
                                        <h4 className="text-[60px] font-extrabold font-sans">$499</h4>
                                    </div>
                                    <ul className="pt-4 px-6">
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>60 Seconds Duration</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Script Writing</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Professional Voice-over & SFX</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Hand-drawn Illustrations</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Unlimited Revisions</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>HD Format Video</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickW} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Dedicated Support</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between px-6 mt-5 pt-4">
                                        <div>
                                            <p className="text-[15px] font-bold font-sans">Speak With Us</p>
                                            <Link href="#" className="font-sans text-[14px]">+1-000-000-0000</Link>
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-bold font-sans">Want To Discuss</p>
                                            <Link href="#" className="font-sans text-[14px]">Live Chat Now</Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-between px-6 mt-5">
                                        <Link href="#" className="flex items-center justify-between font-sans bg-white text-black py-2 px-5 w-[40%] rounded-lg">
                                            <span>Get Started</span>
                                            <Image src={arrowB} className="w-[30px]" alt="Infinity Animation" />
                                        </Link>
                                        <Link href="#" className="flex items-center justify-between font-sans bg-transparent border-2 border-white py-2 px-5 w-[40%] rounded-lg">
                                            <span>Live Chat</span>
                                            <Image src={chat} className="w-[40px]" alt="Infinity Animation" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative bg-[#262626] flex flex-col justify-start py-12 rounded-[35px]">
                                    <div className="absolute top-[-7%] xl:top-[-8%] left-[12%] py-4 w-[75%] -z-10 bg-second rounded-t-3xl flex items-center justify-center gap-2">
                                        <Image src={star} className="w-[7%]" alt="Infinity Animation" />
                                        <Image src={star} className="w-[7%]" alt="Infinity Animation" />
                                        <Image src={star} className="w-[7%]" alt="Infinity Animation" />
                                    </div>
                                    <div className="border-b-2 border-[#000000] px-6 pb-4">
                                        <h3 className="text-[30px] font-extrabold font-sans leading-tight mb-2">Premium Package</h3>
                                        <h4 className="text-[60px] font-extrabold font-sans text-secondary-100">$799</h4>
                                    </div>
                                    <ul className="pt-4 px-6">
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>60 Seconds Duration</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Script Writing</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Professional Voice-over & SFX</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Custom 2D Character Illustration</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Unlimited Revisions</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>HD Format Video</span>
                                        </li>
                                        <li className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                            <Image src={tickP} className="w-[3%]" alt="Infinity Animation" />
                                            <span>Dedicated Support</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between px-6 mt-5 pt-4">
                                        <div>
                                            <p className="text-[15px] font-bold font-sans">Speak With Us</p>
                                            <Link href="#" className="font-sans text-[14px]">+1-000-000-0000</Link>
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-bold font-sans">Want To Discuss</p>
                                            <Link href="#" className="font-sans text-[14px]">Live Chat Now</Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-between px-6 mt-5">
                                        <Link href="#" className="flex items-center justify-between font-sans bg-prime py-2 px-5 w-[40%] rounded-lg">
                                            <span>Get Started</span>
                                            <Image src={arrow} className="w-[30px]" alt="Infinity Animation" />
                                        </Link>
                                        <Link href="#" className="flex items-center justify-between font-sans bg-black border border-white py-2 px-5 w-[40%] rounded-lg">
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
