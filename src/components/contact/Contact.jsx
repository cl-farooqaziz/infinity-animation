"use client"
import Image from "next/image";
// Import Components
import Form from "../form/Form";
// Import Images
import contactBg from "media/images/fold-bg.png";
import contactImg from "media/contact/contact-img.png";
// Import Images
import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <>
            <section className={`w-full h-full mt-8 md:mt-16 mb-10 flex items-center justify-star relative`}>
                <Image src={contactBg} className="absolute w-full top-[-12%] left-[-12%] sm:block hidden" alt="Infinity Animation" />
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight my-2">
                                Reach Out
                            </h1>
                            <p className="w-[80%] mx-auto text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                Engage, share and traverse with us
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 md:mt-4 bg-black'>
                        <div className="px-6 py-8 md:py-12 border rounded-[30px]">
                            <Form />
                        </div>
                        <div className={`${styles.imgBefore} relative lg:block hidden`}>
                            <Image src={contactImg} className="absolute right-[-3.5%] xl:right-[-4%] 2xl:right-[-4%] xxl:right-[-15%] 3xl:right-[-29.5%] top-[-14.5%]" alt="Infinity Animation" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
