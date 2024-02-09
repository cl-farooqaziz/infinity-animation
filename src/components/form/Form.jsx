"use client"
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
// Import Images
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";

const socialLinks = [
    {
        icon: facebook,
        link: "https://www.facebook.com/"
    },
    {
        icon: twitter,
        link: "https://twitter.com/_"
    },
    {
        icon: instagram,
        link: "https://www.instagram.com/"
    },
    {
        icon: linkedin,
        link: "https://www.linkedin.com/"
    },
]

const Form = () => {
    const [ip, setIP] = useState('');
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Submit');

    const router = usePathname();
    const currentRoute = router.pathname;
    const [pagenewurl, setPagenewurl] = useState('');
    useEffect(() => {
        const pagenewurl = window.location.href;
        console.log(pagenewurl);
        setPagenewurl(pagenewurl);
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()
        var currentdate = new Date().toLocaleString() + ''

        const data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            message: e.target.message.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');
        console.log(JSONdata);


        fetch('api/emailapi/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "Bitswits",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,

        });

        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }
    }

    return (
        <>
            <form action="#" className="space-y-2 sm:space-y-4 md:space-y-8">
                <div>
                    <label htmlFor="subject" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal">Full Name*</label>
                    <input type="text" id="subject" className="block p-3 w-full font-sans tracking-wide text-sm text-gray-900 border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Type Full Name" required />
                </div>
                <div>
                    <label htmlFor="subject" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal">Phone*</label>
                    <input type="tel" id="subject" className="block p-3 w-full font-sans tracking-wide text-sm text-gray-900 border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="(000) 000-0000" required />
                </div>
                <div>
                    <label htmlFor="email" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal">Email Address*</label>
                    <input type="email" id="email" className="block p-3 w-full font-sans tracking-wide text-sm text-gray-900 border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Type Email" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal text-white">Details*</label>
                    <textarea id="message" rows="2" className="block p-3 w-full font-sans tracking-wide text-sm text-gray-900 border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent resize-none" placeholder="Type Full Details"></textarea>
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between pt-5">
                    <button type="submit" className="py-3 px-16 font-sans tracking-wide text-sm font-medium text-center text-white rounded-lg bg-prime w-full sm:w-fit hover:bg-primary-800 focus:outline-none">{score}</button>
                    <ul className="flex items-center justify-center sm:justify-start gap-4">
                        {
                            socialLinks.map((e, i) => {
                                return (
                                    <li key={i} className="bg-second hover:bg-[#22212D] w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
                                        <Link href={e.link}>
                                            <Image src={e.icon} className="w-[20px]" alt="Infinity Animation" />
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </form>
        </>
    )
}

export default Form
