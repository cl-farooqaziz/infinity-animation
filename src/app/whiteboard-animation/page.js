// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Portfolio from '@/components/portfolio/Portfolio';
import Boost from '@/components/boost/Boost';
import Servicesconcept from '@/components/servicesconcept/Servicesconcept';
import Pricing from "@/components/pricing/Pricing";
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/whiteboard/looking-img.png";
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
// ==== Service Concept Images
import ServiceConcept from 'media/images/concept-img.png'
import ConceptParticle from "media/images/concept-bef.png"
import FoldBg from 'media/images/fold-bg.png'
import conceptIcon1 from "media/icons/concept-icon1.png"
import conceptIcon2 from "media/icons/concept-icon2.png"
import conceptIcon3 from "media/icons/concept-icon3.png"
import conceptIcon4 from "media/icons/concept-icon4.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Whiteboard <span className='text-primary-100'>Animation</span><br /> Services </>),
        para: "Whiteboard Videos Combine Simplicity With Modernism!",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "You’ve probably seen your fair share of whiteboard animated videos on the Internet, but have you ever thought about how this video marketing plan can boost ROI? Also known as the whiteboard explainer video, this format shows static images drawn on the screen alongside narrations that walk the audience through the story. Whiteboard videos may be simple, but there’s no denying that they boost the attention and retention of the audience notably.",

        "Cloud Animations is a whiteboard animation company that provides whiteboard animation services that humanize your brand. Each whiteboard animated video can be tailored to the subject to connect with the audience and reduce bounce rate. Create your whiteboard explainer video to describe a system or sell a product; the possibilities are endless!"
    ];
    const looking = {
        title: (<> Whiteboard Animation </>),
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
    const conceptContent = [
        {
            ImageOne: conceptIcon1,
            sliderNumber: 1,
            slideTitle: "Concept",
            sliderDesc: "We first brainstorm and refine your ideas into a solid concept, ensuring a strong narrative foundation."
        },
        {
            ImageOne: conceptIcon2,
            sliderNumber: 2,
            slideTitle: "Storyboarding",
            sliderDesc: "Next, we create storyboards that visually map out your video, displaying the sequence of animation events."
        },
        {
            ImageOne: conceptIcon3,
            sliderNumber: 3,
            slideTitle: "Creation",
            sliderDesc: "Using the storyboard as our guide, our animators bring your story to life with engaging visuals."
        },
        {
            ImageOne: conceptIcon4,
            sliderNumber: 4,
            slideTitle: "Concept",
            sliderDesc: "We first brainstorm and refine your ideas into a solid concept, ensuring a strong narrative foundation."
        },
    ]
    const concept = {
        title: "How We Animate",
        para: "As an industry-leading video animation company, we have a firm belief that innovation, when combined with dedication, helps the brand stand out through exceptional video production.",
        Servicesconcept: ServiceConcept,
        ConceptParticle: ConceptParticle,
        conceptContent: conceptContent,
        foldBg: FoldBg,
        btnBg: "bg-prime",
    };
    //=====Pricing Fold=====//
    const pricing = {
        title: (<> Pricing Plans </>),
        para: (<> Bringing you the best, in a price that is better than the rest </>),
    };
    //=====Want Fold=====//
    const want = {
        title: "Want to Talk ?",
        wantDesc: "Are you ready to take the animation route? Call us now!",
        bgPrime: true,
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
            <Portfolio content={portfolio} />
            <Boost content={boost} />
            <Servicesconcept content={concept} />
            <Pricing content={pricing} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}