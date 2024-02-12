"use client"

import Image from 'next/image';
import React, { useState } from 'react'

import arrowDown from "media/icons/arrow-down.png";
import arrowUp from "media/icons/arrow-up.png";
import { ArrowCircleDown } from 'heroicons-react';
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";

// Images 
import Faq from "media/video-explainer/faq-side-img.png"

const Faqs = ({ content }) => {

    const { accordionData, lists } = content;
    // Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? true : index));
    };

    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/faq-bg.jpg")]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <h2 className='text-[#231f20] font-[700] montserrat text-[30px]'>FAQS</h2>
                            <p className='text-[#231f20] text-[18px] montserrat font-[400] py-[17px] leading-[22px] pb-[60px]'>We have piled up a list of common questions that are usually asked by new clients who show their interest in hiring our services. You may get your answer to the following questions if you have any in your mind.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            {accordionData.map((item, index) => (
                                <div key={index} className={`py-1 ${activeIndex === index ? 'border-white' : ' border-white'} border-b-2`}>
                                    <div className={`flex space-x-3 items-center cursor-pointer p-[15px] rounded-[10px] h-[65px] ${activeIndex === index ? 'bg-[#003466] text-white' : 'text-black bg-[#e6e7e8]'}`}
                                        onClick={() => handleClick(index)}>
                                        <span>{activeIndex === index ? <HiChevronUp className='text-[20px] font-[900]' /> : <HiChevronDown className='text-[20px] font-[900]' />}</span>
                                        <h3 className={`text-[16px] font-[500] capitalize montserrat`}>{item.question}</h3>
                                    </div>
                                    {activeIndex === index && (
                                        <div className='pt-5'>
                                            <div className={` text-[14px] sm:text-[16px] font-normal montserrat text-black pb-1`}>{item.answer}</div>

                                            <ul>
                                                {accordionData.map((index) => (
                                                    <li key={index}>
                                                        <div className={`block text-[14px] font-normal montserrat text-black pb-1`}>{item.item1}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="col-span-5">
                            <Image src={Faq} alt='Faqs' className='w-full' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
