// Import Page Components
import Header from '@/components/header/Header';
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import StoryLine from '@/components/storyline/StoryLine';
import Portfolio from '@/components/portfolio/Portfolio';
import Concept from '@/components/concept/Concept';
import Boost from '@/components/boost/Boost';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/footer';
// Import Images
import LookingFlodImg from "media/home/looking-img.png";
//==== StoryLine Images
import StoryLineFold from "media/home/storyline1.png";
//==== Portfolio Images
import polio1 from "media/home/portfolio1.png"
import polio2 from "media/home/portfolio2.png"
import polio3 from "media/home/portfolio3.png"
import polio4 from "media/home/portfolio4.png"
//==== Boost Images
import BoostFlodImg from "media/images/boost-img.png";
import boosticon1 from "media/icons/boost-icon1.png"
import boosticon2 from "media/icons/boost-icon2.png"
import boosticon3 from "media/icons/boost-icon3.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Let Our <span className='text-primary-100'>Animations</span><br /> Share Your Story </>),
        para: "Creativity knows no bounds at Infinity Animations, where we specialize in delivering exclusive Infinity Animations services to our customers. Our team of skilled animators and storytellers work tirelessly to bring ideas to life. With an eye for detail and a passion for innovation, we strive to exceed expectations and deliver animations that resonate with viewers on an emotional level.",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "Look no further. Infinity Animations is a pioneering video animation company that uses creative video content to bring brands to life and assist them in their growth. From explainers to corporate videos, we deliver all types of video content for brands.",
        "Use videos as a potent tool for propelling your brands ahead with Infinity Animations."
    ];
    const looking = {
        title: (<> Looking For A Professional Video Animation Company? </>),
        para: { paraArray },
        flodImg: LookingFlodImg
    };
    //=====StoryLine Fold=====//
    const accordionData = [
        {
            question: '2D Animations',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold,
        },
        {
            question: '3D Animations',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold
        },
        {
            question: 'Whiteboard',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold
        },
        {
            question: 'Motion Graphics',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold
        },
        {
            question: 'Video Editing',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold
        },
        {
            question: 'Logo Animations',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold
        },
        {
            question: 'Architectural Visualization',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold
        },
        {
            question: 'CGI-VFX',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold
        },
        {
            question: 'Infographics',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold
        },
        {
            question: 'Hybrid & Cel',
            answer: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
            StoryLineFold: StoryLineFold
        },
    ];
    const storyLine = {
        subtitle: (<> Experience The Power Of Visual </>),
        title: (<> Storytelling With Our Innovative Video Animation </>),
        para: "Our commitment to pushing boundaries and exploring new creative frontiers enables us to constantly evolve and adapt our approach to best serve your brand's unique identity. Our team strives for creative animation.",
        accordionData: accordionData
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
    //=====Concept Fold=====//
    const concept = {
        btnBg: "bg-prime",
    };
    //=====Boost Fold=====//
    const boostContent = [
        {
            icon: boosticon1,
            heading: "Strategic Distribution",
            text: "We provide expertise in strategic video distribution, ensuring your animations reach the right audience at the right time across various platforms, maximizing exposure and engagement for optimal results.",
        },
        {
            icon: boosticon2,
            heading: "Custom Curation",
            text: "Our team creates visually stunning animations tailored to your unique vision, ensuring your content stands out with a professional look that grabs attention and makes a lasting impression on your audience.",
        },
        {
            icon: boosticon3,
            heading: "Improve Brand Awareness",
            text: "We enhance brand visibility through compelling storytelling and striking visuals, building an emotional connection with viewers that fosters brand loyalty and sets you apart in the competitive market.",
        },
    ];
    const boost = {
        title: (<> Boost Engagement And Sales <br /> With Our Animated Videos </>),
        para: (<> If you're not completely thrilled with the final product, we'll make it right at no extra cost! <br /> Let's collaborate on turning your story into an extraordinary visual masterpiece today. </>),
        btnBg: "bg-prime",
        boostContent: boostContent,
        flodImg: BoostFlodImg
    };
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
    //=====Connect Fold=====//

    return (
        <>
            <Header />
            <Hero content={hero} />
            <Review />
            <Looking content={looking} />
            <StoryLine content={storyLine} />
            <Portfolio content={portfolio} />
            <Concept content={concept} />
            <Boost content={boost} />
            <Testimonial content={testimonial} />
            <Contact />
            <Footer />
        </>
    )
}


