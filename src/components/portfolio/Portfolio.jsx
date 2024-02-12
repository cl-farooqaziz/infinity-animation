"use client"
import { useState } from 'react';
import Image from "next/image";
// Import Css
import styles from "./PortFolio.module.css"
import CTA from '../cta/CTA';

const Portfolio = ({ content }) => {
    const { title, para, tabInfo, tabContents, tabsInfo, video } = content;
    //Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16`}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight my-2">
                                {title}
                            </h1>
                            <p className="w-full md:w-[80%] mx-auto text-[14px] sm:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`${tabsInfo ? "mt-8 md:mt-12" : "mt-0"}`}>
                        {tabsInfo ?
                            <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 lg:w-11/12 mx-auto">
                                {tabInfo.map((tab, index) => (
                                    <li key={index}
                                        className={`inline-block px-8 md:px-16 py-3 text-[16px] lg:text-[20px] font-normal font-sans text-white border rounded-[27px] cursor-pointer hover:border-primary-100 ${activeTab === index ? 'border-primary-100' : 'border-[#646464]'}`}
                                        onClick={() => handleTabClick(index)}>
                                        {tab.label}
                                    </li>
                                ))}
                            </ul> : null}
                        <div className="tabs-content pt-7 md:pt-12">
                            {tabContents[activeTab] && (
                                <div className='grid grid-cols-3 justify-center items-center gap-3 md:gap-5'>
                                    {tabContents.map((video, index) => (
                                        <div key={index} className={`${styles.shadow} w-full h-[300px]`}>
                                            {video.map((e, i) => (
                                                <video className='w-full h-[300px]' controls autoPlay key={i} src={e.src}></video>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {tabInfo ?
                            <div className='flex items-center justify-center lg:mt-8 mt-4'>
                                <CTA
                                    text="View All"
                                    icon1={true}
                                    href="#"
                                    css="text-white hover:bg-transparent border-[#f5090b] hover:border-[#ffffff] sm:w-max md:w-[160px]"
                                    bg="bg-prime"
                                />
                            </div>
                            : null
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
