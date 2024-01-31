"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Collapse, IconButton, MobileNav, Navbar } from "@material-tailwind/react";
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import logo from "../../../public/images/logo.png";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const navList = (
        <ul className="lg:flex lg:items-center gap-10 lg:h-full rounded-2xl bg-black lg:bg-transparent lg:rounded-none py-5 lg:py-0 px-5 lg:px-0">
            <li className="lg:h-full lg:flex lg:items-center">
                <Link href="/" className="font-sans text-lg font-normal leading-10">Home</Link>
            </li>
            <li className="lg:h-full lg:flex lg:items-center">
                <Link href="/about-us" className="font-sans text-lg font-normal leading-10">Why Us</Link>
            </li>
            <li className="lg:h-full lg:flex lg:items-center group relative">
                <button href="/" className="font-sans text-lg font-normal leading-10 flex items-center gap-3">
                    Services
                </button>
                {/* <div className="lg:absolute lg:flex lg:opacity-0 lg:invisible group-hover:visible group-hover:opacity-100 top-full w-full lg:w-[600px] lg:justify-between lg:left-[-200px]  xl:left-[-100px] rounded-2xl right-0 bg-white lg:p-3 lg:mt-[-20px]">
                    <ul className="hidden lg:block w-1/2">
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/logo-design-company">Logo Design</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/creative-copywriting-company">Creative Copywriting</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/digital-marketing-company">Digital Marketing</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/ecommerce-solutions">Ecommerce Web Solutions</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/website-development-company">Website Development</Link>
                        </li>
                    </ul>
                    <ul className="hidden lg:block w-1/2">
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/motion-graphic-design-company">Motion Graphics</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/illustration-design-company">Illustration Design</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/marketing-collateral-company">Marketing Collateral</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/mobile-app-design-company">App Design</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Link className="text-base" href="/seo-company">SEO Services</Link>
                        </li>
                    </ul>
                    <Collapse open={openSubMenu} className="block lg:hidden">
                        <ul>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/logo-design-company">Logo Design</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/creative-copywriting-company">Creative Copywriting</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/digital-marketing-company">Digital Marketing</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/ecommerce-solutions">Ecommerce Web Solutions</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/website-development-company">Website Development</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/motion-graphic-design-company">Motion Graphics</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/illustration-design-company">Illustration Design</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/marketing-collateral-company">Marketing Collateral</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/mobile-app-design-company">App Design</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Link className="text-base" href="/seo-company">SEO Services</Link>
                            </li>
                        </ul>
                    </Collapse>
                </div> */}
            </li>
            <li className="lg:h-full lg:flex lg:items-center">
                <Link href="/pricing" className="font-sans text-lg font-normal leading-10">Portfolio</Link>
            </li>
            <li className="lg:h-full lg:flex lg:items-center">
                <Link href="/pricing" className="font-sans text-lg font-normal leading-10">Process</Link>
            </li>
            <li className="lg:h-full lg:flex lg:items-center">
                <Link href="/pricing" className="font-sans text-lg font-normal leading-10">Pricing</Link>
            </li>
            <li className="lg:h-full lg:flex lg:items-center">
                <Link href="/pricing" className="font-sans text-lg font-normal leading-10">Blog</Link>
            </li>
            <li className="lg:h-full lg:flex lg:items-center">
                <Link href="/contact-us" className="font-sans text-lg font-normal leading-10">Contact Us</Link>
            </li>
        </ul>
    );
    return (
        <header>
            <Navbar className="max-w-none px-0 py-0 absolute top-0 left-0 z-[9999] rounded-none bg-transparent shadow-none backdrop-saturate-100 backdrop-blur-none border-none">
                <div className="container">
                    <div className="flex items-center justify-between h-24">
                        <Link href="/">
                            <Image src={logo} className="w-[50%]" alt="logo" />
                        </Link>
                        <div className="hidden lg:flex ml-auto h-full items-center gap-10">
                            {navList}
                            <CTA
                                text="Get Started"
                                icon1={true}
                                color={`bg-prime text-white`}
                                border={`border-2 border-[#f5090b]`}
                                hover={`hover:text-white hover:bg-transparent hover:border-[#ffffff]`}
                                link="#" />
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)} >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2} >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav} className="block xl:hidden">
                    <div className="container mx-auto">
                        {navList}
                    </div>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;