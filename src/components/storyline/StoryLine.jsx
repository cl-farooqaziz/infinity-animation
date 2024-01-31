"use client"
import { useState } from "react";
import Image from "next/image";
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

    return (
        <>
            <section className={`w-full flex items-center justify-start py-16`}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h3 className="text-[30px] font-semibold font-sans text-secondary-100 leading-tight">
                                {subtitle}
                            </h3>
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-sans leading-tight my-2">
                                {title}
                            </h1>
                            <p className="w-[80%] mx-auto text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-12">
                        <div className="w-[700px]">
                            <div className="grid">
                                {accordionData.map((item, index) => (
                                    <div key={index} className={`py-1 ${activeIndex === index ? 'border-primary-100' : ' border-white'} border-b-2`}>
                                        <div className="flex justify-between items-center cursor-pointer"
                                            onClick={() => handleClick(index)}>
                                            <h3 className="text-[20px] font-normal font-sans">{item.question}</h3>
                                            <span>{activeIndex === index ? <Image src={arrowUp} alt="arrowUp" /> : <Image src={arrowDown} alt="arrowDown" />}</span>
                                        </div>
                                        {activeIndex === index && (
                                            <div className={`text-[16px] font-normal font-sans pb-1 ${styles.ani}`}>{item.answer}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            {activeIndex !== null && (
                                <figure className="relative">
                                    <Image className="w-[90%] ml-auto" src={accordionData[activeIndex].StoryLineFold} alt="Infinity Animation" />
                                    <figcaption className={`w-[90%] ml-auto text-[30px] font-normal font-sans tracking-wider text-center mt-[-75px]`}>
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