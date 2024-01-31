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
            <section className={`w-full h-full mt-16 mb-10 flex items-center justify-star relative`}>
                <Image src={contactBg} className="absolute w-full top-[-12%] left-[-12%]" alt="Infinity Animation" />
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-sans leading-tight my-2">
                                Connect With Us
                            </h1>
                            <p className="w-[80%] mx-auto text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                Let’s engage, share ideas, and explore together
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-12 bg-black'>
                        <div className="px-6 py-12 border rounded-[30px]">
                            <Form />
                        </div>
                        <div className={`${styles.imgBefore} relative`}>
                            <Image src={contactImg} className="absolute right-[-3.5%] top-[-19%]" alt="Infinity Animation" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
