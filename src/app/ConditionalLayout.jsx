"use client"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import { usePathname } from "next/navigation"
import React from "react"

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
            {pathname !== '/video-explainer-lp' && <Header />}
            {children}
            {pathname !== '/video-explainer-lp' && <Footer />}
        </>
    )
}

export default ConditionalLayout