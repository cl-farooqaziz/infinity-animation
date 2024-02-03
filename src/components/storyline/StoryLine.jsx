"use client"
import { useState } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Images
import arrowDown from "media/icons/arrow-down.png";
import arrowUp from "media/icons/arrow-up.png";
// Import CSS
import styles from "./StoryLine.module.css"

const StoryLine = ({ content }) => {
    const { subtitle, title, para, accordionData } = content;
    // Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    // Set styling
    const router = usePathname();
    let main;
    let headings;
    let row;
    let text;
    let padding;
    let accImg;
    switch (router) {
        case "/process":
            main = 'pt-0'
            headings = 'hidden'
            row = 'items-start'
            text = 'text-[34px]'
            padding = 'py-8'
            accImg = 'border rounded-3xl'
            break;
        default:
            break;
    }
    return (
        <>
            <section className={`w-full flex items-center justify-start py-8 sm:py-16 ${main}`}>
                <div className="container">
                    <div className={`flex items-center justify-around ${headings}`}>
                        <div className='w-full text-center'>
                            <h3 className="text-[20px] sm:text-[30px] font-semibold font-sans text-secondary-100 leading-tight">
                                {subtitle}
                            </h3>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight my-2">
                                {title}
                            </h1>
                            <p className="sm:w-[80%] mx-auto text-[14px] sm:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`flex flex-col lg:flex-row items-center gap-y-8 justify-between mt-7 sm:mt-12 ${row}`}>
                        <div className="w-full md:w-[700px]">
                            <div className="grid">
                                {accordionData.map((item, index) => (
                                    <div key={index} className={`py-1 ${padding} ${activeIndex === index ? 'border-primary-100' : ' border-white'} border-b-2`}>
                                        <div className="flex justify-between items-center cursor-pointer"
                                            onClick={() => handleClick(index)}>
                                            <h3 className={`text-[18px] sm:text-[20px] font-normal font-sans ${text}`}>{item.question}</h3>
                                            <span>{activeIndex === index ? <Image src={arrowUp} alt="Infinity Animation" /> : <Image src={arrowDown} alt="Infinity Animation" />}</span>
                                        </div>
                                        {activeIndex === index && (
                                            <div className={`text-[14px] sm:text-[16px] font-normal font-sans pb-1 ${styles.ani}`}>{item.answer}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            {activeIndex !== null && (
                                <figure className="relative">
                                    <Image className={`w-full lg:w-[90%] lg:ml-auto ${accImg}`} src={accordionData[activeIndex].StoryLineImg} alt="Infinity Animation" />
                                    <figcaption className={`w-[90%] ml-auto text-[30px] font-normal font-sans tracking-wider text-center mt-[-75px] ${headings}`}>
                                        {accordionData[activeIndex].question}
                                    </figcaption>
                                </figure>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StoryLine