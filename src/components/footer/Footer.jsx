"use client"
// Imports Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import logo from "media/images/logo.png";
import mapmarker from "media/icons/map.png";
import telephone from "media/icons/call.png";
import envelope from "media/icons/email.png";
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";

const Footer = () => {
    const quickLinks = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Why Us",
            link: "/about-us"
        },
        {
            text: "Video Animation",
            link: "/"
        },
        {
            text: "Portfolio",
            link: "/"
        },
        {
            text: "Pricing",
            link: "/pricing"
        },
        {
            text: "Contact Us",
            link: "/contact"
        },
    ];
    const servicesLinks = [
        {
            text: "Hire 2D Animator",
            link: "/"
        },
        {
            text: "Hire 3D Animator",
            link: "/"
        },
        {
            text: "Hire Animator",
            link: "/"
        },
        {
            text: "Hire Game Designer",
            link: "/"
        },
        {
            text: "Hire UI/UX Designer",
            link: "/"
        },
    ];
    const contactLinks = [
        {
            text: "+18328883694",
            link: "tel:+18328883694",
            icon: telephone
        },
        {
            text: "info@infinityanimations.com",
            link: "mailto:info@infinityanimations.com",
            icon: envelope
        },
        {
            text: "One World Trade Center, Suite 8500, New York, New York, 10007, United States",
            link: "/contact-us",
            icon: mapmarker
        },
    ];
    const otherLinks = [
        {
            text: "Terms of Services",
            link: "/terms-co",
        },
        {
            text: "Privacy Policy",
            link: "/privacy-policy",
        },
    ];
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
        <footer>
            <div className="pt-20">
                <div className="container">
                    <div className="flex gap-x-5 pb-8 border-b-[1px] border-[#707070] flex-wrap lg:flex-nowrap justify-between gap-y-5 lg:gap-y-0">
                        <div className="basis-full sm:basis-[48%] lg:basis-[30%]">
                            <Link href="/">
                                <Image src={logo} className="w-[50%]" alt="logo" />
                            </Link>
                            <p className="text-sm xl:text-base font-normal font-sans text-justify text-white mt-3 pr-5">Our talented animators will work closely with you to understand your narrative. Whether it's a product demonstration, explainer video, or promotional campaign, our team will work closely with you. With expert attention to detail and a passion for creativity, our services are tailored just for you. Plus, we guarantee that your satisfaction is our top priority.</p>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-[20%]">
                            <h4 className="text-3xl font-normal font-sans text-white leading-none mb-3">Company</h4>
                            <ul>
                                {
                                    quickLinks.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link} className="text-sm xl:text-base text-white font-sans font-normal hover:opacity-50 leading-8 xl:leading-8">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                            <h4 className="text-3xl font-normal font-sans text-white leading-none mb-3">Resource Augmentation</h4>
                            <ul>
                                {
                                    servicesLinks.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link} className="text-sm xl:text-base text-white font-sans font-normal hover:opacity-50 leading-8 xl:leading-8">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-1/4 flex flex-col justify-between">
                            <div>
                                <h4 className="text-3xl font-sans font-normal text-white leading-none mb-3">Contact Us</h4>
                                <ul>
                                    {
                                        contactLinks.map((e, i) => {
                                            return (
                                                <li key={i} className="flex items-center gap-2 mb-3 last:mb-0">
                                                    <Image src={e.icon} className="w-[20px]" alt={e.icon} />
                                                    <Link href={e.link} className="text-sm xl:text-base text-white font-sans font-normal hover:opacity-50">
                                                        {e.text}
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <ul className="flex items-center gap-4">
                                    {
                                        socialLinks.map((e, i) => {
                                            return (
                                                <li key={i} className="bg-[#22212D] hover:bg-second w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
                                                    <Link href={e.link}>
                                                        <Image src={e.icon} className="w-[20px]" alt={e.icon} />
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-5 py-5 flex-wrap sm:flex-nowrap gap-y-5 sm:gap-y-0 items-center border-b-[1px] border-[#707070]">
                        <div className="basis-full sm:basis-1/2">
                            <p className="text-sm font-sans text-white leading-6 text-center sm:text-left">
                                © Infinity Animations 2023. All Rights Reserved
                            </p>
                        </div>
                        <div className="basis-full sm:basis-1/2">
                            <ul className="flex items-center justify-center sm:justify-end gap-4">
                                {
                                    otherLinks.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link} className="text-sm xl:text-base text-white font-sans font-normal hover:opacity-50 leading-8 xl:leading-8">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;