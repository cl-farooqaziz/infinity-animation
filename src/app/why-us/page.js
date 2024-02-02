// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/why-us/history-img.png";
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"
import Features from "@/components/features/Features";
import Partners from "@/components/partners/Partners";

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Your Chance To Choose <span className="text-primary-100">The Best</span> </>),
        para: "Partner with experts, lead the competition!",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "With a team of professional video animators, Infinity Animations is a Maryland-based company that has won clients' hearts by providing quality and flaw-free customer services. Leading the way as the top Video Animators in town, we help businesses spread the word through the most perfectly curated animation videos!",
    ];
    const looking = {
        title: (<> A Bit Of History </>),
        para: { paraArray },
        flodImg: LookingFlodImg
    };
    //=====Want Fold=====//
    const want = {
        title: "Want to Talk ?",
        wantDesc: "Are you ready to take the animation route? Call us now!"
    }
    //=====Testimonial Fold=====//
    const testiContent = [
        {
            profile: icon1,
            stars: icon2,
            name: 'Michael Gardner',
            message: 'Infinity Animations created a stunning promotional video for my startup. The attention to detail and animation definitely made a positive impact on our online presence and has set us apart from competitors.',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Sarah',
            message: 'Infinity Animations created a stunning promotional video for my startup. The attention to detail and animation definitely made a positive impact on our online presence and has set us apart from competitors.',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'John',
            message: 'Infinity Animations created a stunning promotional video for my startup. The attention to detail and animation definitely made a positive impact on our online presence and has set us apart from competitors.',
            company: 'ABC company',
        },
    ];
    const testimonial = {
        title: (<> The Ultimate Collection Of <br /> Our Incredible Customer Experiences </>),
        para: (<> Achieved 1000+ Impactful Results That Speak Volumes </>),
        btnBg: "bg-prime",
        testiContent: testiContent
    };
    return (
        <>
            <Hero content={hero} />
            <Review />
            <Looking content={looking} />
            <Features />
            <Partners />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}


