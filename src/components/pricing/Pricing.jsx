"use client"
import Image from "next/image";
import Link from "next/link";
// Import Images
import star from "media/icons/star.png"
import chat from "media/icons/chat.png"
import arrow from "media/icons/arrow-w.png"
import arrowB from "media/icons/arrow-b.png"
import tickP from "media/icons/tick-p.png"
import tickW from "media/icons/tick-w.png"

const packages = [
    {
        name: 'Startup Package',
        price: '$195',
        backgroundColor: '#2f2f2fd1',
        tickImage: tickP,
        features: [
            '60 Seconds Duration',
            'Script Writing',
            'Custom Artwork',
            'Background Music',
            'HD Format Video',
            'Dedicated Support',
            { text: 'Invisible Point', isVisible: true },
        ],
        buttons: [
            { text: 'Get Started', color: 'bg-prime', image: arrow },
            { text: 'Live Chat', color: 'bg-black border border-white', image: chat },
        ],
    },
    {
        name: 'Classic Package',
        price: '$499',
        backgroundColor: '#262626',
        tickImage: tickW,
        mblSpc: 'my-10 md:my-0',
        features: [
            '60 Seconds Duration',
            'Script Writing',
            'Professional Voice-over & SFX',
            'Hand-drawn Illustrations',
            'Unlimited Revisions',
            'HD Format Video',
            'Dedicated Support',
        ],
        buttons: [
            { text: 'Get Started', color: 'bg-white text-black', image: arrowB },
            { text: 'Live Chat', color: 'bg-black border border-white', image: chat },
        ],
    },
    {
        name: 'Premium Package',
        price: '$799',
        backgroundColor: '#2f2f2fd1',
        tickImage: tickP,
        features: [
            '60 Seconds Duration',
            'Script Writing',
            'Professional Voice-over & SFX',
            'Custom 2D Character Illustration',
            'Unlimited Revisions',
            'HD Format Video',
            'Dedicated Support',
        ],
        buttons: [
            { text: 'Get Started', color: 'bg-prime', image: arrow },
            { text: 'Live Chat', color: 'bg-black border border-white', image: chat },
        ],
    },
];

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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 md:mt-32">
                                {packages.map((pkg, index) => (
                                    <div key={index} className={`relative ${pkg.mblSpc}`}>
                                        <div key={index} className={`absolute top-[-7%] md:top-[-10%] lg:top-[-7%] xl:top-[-8%] left-[12%] h-[115px] w-[75%] -z-10 rounded-3xl flex items-start justify-center pt-4 gap-2 ${index === 1 ? 'bg-[#262626]' : 'bg-third'}`}>
                                            {Array.from({ length: index + 1 }).map((_, i) => (
                                                <Image key={i} src={star} className="w-[6%]" alt="Infinity Animation" />
                                            ))}
                                        </div>
                                        <div className={`relative ${pkg.backgroundColor === '#262626' ? 'bg-second' : 'backdrop-blur-sm bg-[#2f2f2fd1]/75'} flex flex-col justify-start py-12 h-auto rounded-[35px]`}>
                                            <div className="border-b-2 px-6 pb-4">
                                                <h3 className="text-[30px] font-extrabold font-sans leading-tight mb-2">{pkg.name}</h3>
                                                <h4 className={`text-[60px] font-extrabold font-sans ${pkg.backgroundColor === '#2f2f2fd1' ? 'text-secondary-100' : ''}`}>{pkg.price}</h4>
                                            </div>
                                            <ul className="pt-4 px-6">
                                                {pkg.features.map((feature, i) => (
                                                    typeof feature === 'string' ? (
                                                        <li key={i} className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                                            <Image src={pkg.tickImage} className="w-[3%]" alt="Infinity Animation" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ) : (
                                                        (feature.isVisible && (
                                                            <li key={i} className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider invisible">
                                                                <Image src={pkg.tickImage} className="w-[3%]" alt="Infinity Animation" />
                                                                <span>{feature.text}</span>
                                                            </li>
                                                        ))
                                                    )
                                                ))}
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
                                                {pkg.buttons.map((button, i) => (
                                                    <Link key={i} href="#" className={`flex items-center justify-between font-sans ${button.color} py-2 px-3 xl:px-5 w-[45%] xl:w-[40%] rounded-lg`}>
                                                        <span>{button.text}</span>
                                                        <Image src={button.image} className={button.text === 'Get Started' ? 'w-[30px]' : 'w-[40px]'} alt="Infinity Animation" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
