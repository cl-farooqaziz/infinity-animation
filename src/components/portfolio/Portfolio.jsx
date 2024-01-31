"use client"
import { useState } from 'react';
import Image from "next/image";
// Import Css
import styles from "./PortFolio.module.css"

const Portfolio = ({ content }) => {
    const { title, para, tabInfo, tabContents } = content;
    //Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <>
            <section className={`w-full flex items-center justify-start py-16`}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-sans leading-tight my-2">
                                {title}
                            </h1>
                            <p className="w-[80%] mx-auto text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-6">
                            {tabInfo.map((tab, index) => (
                                <li key={index}
                                    className={`inline-block px-14 py-3 text-[16px] font-normal font-sans text-white border rounded-[20px] cursor-pointer hover:border-primary-100 ${activeTab === index ? 'border-primary-100' : ''}`}
                                    onClick={() => handleTabClick(index)}>
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                        <div className="tabs-content pt-12">
                            {tabContents[activeTab] && (
                                <div className='flex justify-center items-center gap-10'>
                                    {tabContents[activeTab].map((item, index) => (
                                        <div key={index}>
                                            {Array.isArray(item) ? (
                                                item.map((innerImage, innerIndex) => (
                                                    <Image key={innerIndex} src={innerImage} className={`my-4 ${styles.shadow}`} alt='Infinity Animation' />
                                                ))
                                            ) : (
                                                <Image src={item} className={styles.shadow} alt='Infinity Animation' />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
