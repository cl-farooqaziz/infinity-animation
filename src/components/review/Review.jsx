"use client"
import Image from "next/image";
// Import Images
import trustPlatforms from "media/icons/partners.png";

const Review = () => {
    return (
        <>
            <section className="flex items-center justify-center py-16">
                <Image src={trustPlatforms} className="w-[80%]" alt="trustPlatforms" />
            </section>
        </>
    )
}

export default Review
