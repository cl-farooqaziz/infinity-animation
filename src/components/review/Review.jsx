"use client"
import Image from "next/image";
// Import Images
import trustPlatforms from "media/icons/partners.png";

const Review = () => {
    return (
        <>
            <section className="flex items-center justify-center pt-5 pb-16">
                <Image src={trustPlatforms} className="w-[80%]" alt="Infinity Animation" />
            </section>
        </>
    )
}

export default Review
