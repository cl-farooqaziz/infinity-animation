// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Contact from '@/components/contact/Contact';

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Contact Us </>),
        para: "You’ll Get A Response From The Infinity Animations Team Within 24-Hours",
        btnBg: "bg-prime",
    };
    return (
        <>
            <Hero content={hero} />
            <Review />
            <Contact />
        </>
    )
}