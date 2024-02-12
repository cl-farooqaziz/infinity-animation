import Image from 'next/image'
import React, { useEffect, useState } from 'react'

//===== CSS
import styles from './banner.module.css'

// ===== Images
import BannerLogos from "media/video-explainer/bnr-logo.png"
import chatIcon from "media/video-explainer/chat-icon.png"
import { CheckCircle } from 'heroicons-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Banner = () => {

    // form Start
    // const [ip, setIP] = useState("");
    // //creating function to load ip address from the API
    // const getIPData = async () => {
    //     const res = await Axios.get(
    //         "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
    //     );
    //     setIP(res.data);
    // };
    // useEffect(() => {
    //     getIPData();
    // }, []);

    // const [score, setScore] = useState("Get A Free Quote");

    // const router = useRouter();
    // const currentRoute = router.pathname;

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const data = {
    //         name: e.target.name.value,
    //         email: e.target.email.value,
    //         phone: e.target.phone.value,
    //         message: e.target.message.value,
    //         services: e.target.services.value,
    //         pageUrl: currentRoute,
    //     };

    //     const JSONdata = JSON.stringify(data);

    //     setScore("Sending Data");

    //     fetch("api/email/route", {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json, text/plain, */*",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSONdata,
    //     }).then((res) => {
    //         console.log(`Response received ${res}`);
    //         if (res.status === 200) {
    //             console.log(`Response Successed ${res}`);
    //         }
    //     });

    //     var currentdate = new Date().toLocaleString() + "";
    //     let headersList = {
    //         Accept: "*/*",
    //         "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    //         Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
    //         "Content-Type": "application/json",
    //     };

    //     let bodyContent = JSON.stringify({
    //         IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
    //         Brand: "BOOK-WRITING-EXPERT",
    //         Page: `${currentRoute}`,
    //         Date: currentdate,
    //         Time: currentdate,
    //         JSON: JSONdata,
    //     });
    //     await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
    //         method: "POST",
    //         body: bodyContent,
    //         headers: headersList,
    //     });

    //     const { pathname } = Router;
    //     if (pathname == pathname) {
    //         window.location.href = "https://www.bookwritingexperts.com/thank-you";
    //     }
    // };


    return (
        <>
            <section className='bg-cover bg-center bg-[url("../../public/video-explainer/banner.jpg")] h-[100%] lg:pt-[190px] lg:pb-[100px] lg:h-[720px] mt-[-75px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <h1 className='text-white text-[30px] font-[700] uppercase montserrat lg:w-10/12 leading-[35px] '>EXPAND YOUR BRAND’S REACH WITH AN ENGAGING CUSTOM EXPLAINER VIDEO</h1>
                            <p className='text-white text-[18px] font-[400] montserrat lg:w-11/12 leading-[25px] py-[25px]'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.</p>
                            <ul>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle />
                                    <span className='text-white font-[400] pb-[10px] montserrat'> Full HD Animations</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Appealing Designs</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Latest Technology</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Award-Winning Agency</span>
                                </li>
                            </ul>
                            <Image src={BannerLogos} alt='banner-logos' className='object-contain mt-4 mb-6' />
                            <div className="flex gap-x-2">
                                <div className="btn">
                                    <Link href="javascript:;" className='flex items-center text-[16px] text-black font-[700] montserrat bg-[#f6c501] py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Get Started
                                    </Link>
                                </div>
                                <div className="chat flex items-center gap-2">
                                    <Image src={chatIcon} alt='chat-icon' className='ml-[10px]' />
                                    <div className="text">
                                        <span className='block montserrat text-[14px] font-[400] text-[#ffcb05] leading-[14px]'>Talk to our Expert</span>
                                        <span className='text-white text-[16px] montserrat font-[700]'>Live Chat</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <form action="javascript:;" className='bg-[#003465] pt-[20px] mr-[98px] ml-[40px] relative border-[6px] border-white  lg:w-8/12'>
                                <h3 className='text-white text-[25px] leading-[30px] montserrat font-[700] text-left py-[10px] px-[20px]'>Share Your <br />
                                    <strong className='text-[30px] text-[#f6c501] ml-[2rem] font-extrabold '>
                                        Animation Idea
                                    </strong>
                                </h3>

                                <div className="form pt-[5px] px-[20px] pb-[30px]">
                                    <input type="text" name="name" placeholder='Enter your name' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#cecece] focus:outline-0 text-black' required />

                                    <input type="email" name='email' placeholder='Enter Email' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#cecece] focus:outline-0 text-black' required />

                                    <input type="tel" name='phone' minLength="10"
                                        maxLength="13"
                                        pattern="[0-9]*" placeholder='Enter Phone Number' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#cecece] focus:outline-0 text-black' required />

                                    <textarea type="text" placeholder='Message' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#cecece] focus:outline-0 text-black' required></textarea>

                                    <button type='submit' className='bg-[#231f20] hover:bg-[#1c2a49] text-white text-[16px] font-[700] montserrat uppercase mt-[10px] py-[13px] px-[8px] shadow-lg w-full duration-700 transition-all hover:duration-700 hover:transition-all '>Get a free quote</button>
                                </div>

                                <div className={`form_partical absolute top-[-7px] right-[12px] ${styles.discountbg}`}>
                                    <h6 className={`absolute font-[700] text-right uppercase left-[-33px] m-auto text-white top-[-20px] z-[1] text-[13px] rotate-[-8deg] right-[-58px] montserrat before:content-[''] before:absolute before:w-[135px] before:h-[52px] before:top-[-15px] before:left-[-17px] before:right-0 ${styles.headingParticle} before:rotate-[10deg] before:bg-cover before:bg-center before:z-[-1] w-[110px]`}>Special Offer</h6>
                                    <h4 className={`text-black relative m-0 top-[-2px] text-[30px] font-[700] right-[-32px] rotate-[-18deg] montserrat`}>50%</h4>
                                    <h5 className='m-0 text-black relative z-1 top-[-13px] text-[11px] montserrat font-[700] right-[-42px] rotate-[-18deg]'>Discount</h5>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner
