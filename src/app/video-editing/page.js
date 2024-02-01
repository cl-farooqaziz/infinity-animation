// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Portfolio from '@/components/portfolio/Portfolio';
import Boost from '@/components/boost/Boost';
import Pricing from "@/components/pricing/Pricing";
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/video-editing/looking-img.png";
//==== Portfolio Images
import polio1 from "media/home/portfolio1.png"
import polio2 from "media/home/portfolio2.png"
import polio3 from "media/home/portfolio3.png"
import polio4 from "media/home/portfolio4.png"
//==== Boost Images
import BoostFlodImg from "media/images/boost-img.png";
import boosticon1 from "media/icons/boost-icon4.png"
import boosticon2 from "media/icons/boost-icon5.png"
import boosticon3 from "media/icons/boost-icon6.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Video Editing <br /> Services </>),
        para: "Move Past The 'Edit My Video' Fiasco.",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "Pre-production, production, and post-production are three critical phases of making a video. While it may not seem apparent, since most of it happens behind the scenes, video editors blend sounds and images to present films that turn into excellent marketing tools for companies worldwide. The correct approach to video editing can attract newer audiences, get prospects to convert, and retain existing customers for a brand.",
        "A great majority of consumers agree that a brand’s video makes it easier for them to decide whether or not to buy a particular product or service. Sign up to Cloud Animations, a leading video editing agency that guarantees easy transitions, smooth flow, perfect cuts, and seamless sound editing when combining different portions of the film. We ensure that your message doesn’t get lost in transition."
    ];
    const looking = {
        title: (<> Video Editing </>),
        para: { paraArray },
        flodImg: LookingFlodImg
    };
    //=====Portfilio Fold=====//
    const tabInfo = [
        { label: "2D Animation", index: 0 },
        { label: "3D Animation", index: 1 },
        { label: "Whiteboard", index: 2 },
        { label: "Explainer Videos", index: 3 },
        { label: "Typographic", index: 4 },
    ];
    const tabContents = [
        [polio1, [polio2, polio3], polio4],
        [polio4, [polio2, polio3], polio1],
        [polio1, [polio2, polio3], polio4],
        [polio4, [polio2, polio3], polio1],
        [polio1, [polio2, polio3], polio4],
    ];
    const portfolio = {
        title: (<> Our Portfolio of Creative Video Animations </>),
        para: (<> We take pride in crafting stunning 2D animation videos, whiteboard animations, 3D animations, <br /> typographic animations, and more for our valued clientele. </>),
        tabContents: tabContents,
        tabInfo: tabInfo
    };
    //=====Boost Fold=====//
    const boostContent = [
        {
            icon: boosticon1,
            heading: "Capture the Attention",
            text: "Turn heads, let your ideas come to life and interact with your viewers and capture their imagination.",
        },
        {
            icon: boosticon2,
            heading: "Clicks and More Clicks",
            text: "Motion graphic videos are synonymous with clickable visual content.",
        },
        {
            icon: boosticon3,
            heading: "Multi-purpose Animations",
            text: "Whether it’s explanatory or garnering hype, motion graphics videos can do it all.",
        },
    ];
    const boost = {
        title: (<> Time to Turn Heads </>),
        para: (<> There’s nothing more effective than a motion graphics animation that grabs attention. Here are a few of them: </>),
        btnBg: "bg-prime",
        boostContent: boostContent,
        flodImg: BoostFlodImg
    };
    //=====Service Concept Fold=====//
    const concept = {
        btnBg: "bg-prime",
    };
    //=====Pricing Fold=====//
    const pricing = {
        title: (<> Pricing Plans </>),
        para: (<> Bringing you the best, in a price that is better than the rest </>),
    };
    //=====Want Fold=====//
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
            <Portfolio content={portfolio} />
            <Boost content={boost} />
            {/* Service Concept */}
            <Pricing content={pricing} />
            {/* want */}
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}


