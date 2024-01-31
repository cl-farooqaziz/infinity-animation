"use client"
import Image from "next/image";
import Link from "next/link";
// Import Images
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";

const Form = () => {

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

    return (
        <>
            <form action="#" class="space-y-8">
                <div>
                    <label for="subject" class="block mb-2 font-sans tracking-wide text-[16px] font-normal">Full Name*</label>
                    <input type="text" id="subject" class="block p-3 w-full font-sans tracking-wide text-sm text-gray-900 border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Type Full Name" required />
                </div>
                <div>
                    <label for="subject" class="block mb-2 font-sans tracking-wide text-[16px] font-normal">Phone*</label>
                    <input type="tel" id="subject" class="block p-3 w-full font-sans tracking-wide text-sm text-gray-900 border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="(000) 000-0000" required />
                </div>
                <div>
                    <label for="email" class="block mb-2 font-sans tracking-wide text-[16px] font-normal">Email Address*</label>
                    <input type="email" id="email" class="block p-3 w-full font-sans tracking-wide text-sm text-gray-900 border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Type Email" required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 font-sans tracking-wide text-[16px] font-normal text-gray-900 dark:text-gray-400">Details*</label>
                    <textarea id="message" rows="2" class="block p-3 w-full font-sans tracking-wide text-sm text-gray-900 border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent resize-none" placeholder="Type Full Details"></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" class="py-3 px-16 font-sans tracking-wide text-sm font-medium text-center text-white rounded-lg bg-prime sm:w-fit hover:bg-primary-800 focus:outline-none ">Submit</button>
                    <ul className="flex items-center gap-4">
                        {
                            socialLinks.map((e, i) => {
                                return (
                                    <li key={i} className="bg-second hover:bg-[#22212D] w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
                                        <Link href={e.link}>
                                            <Image src={e.icon} className="w-[20px]" alt={e.icon} />
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
