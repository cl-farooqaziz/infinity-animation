// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import StoryLine from '@/components/storyline/StoryLine';
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
//==== StoryLine Images
import StoryLine1 from "media/home/storyline1.png";
import StoryLine2 from "media/home/storyline2.png";
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> The Process <br /> <span className='text-primary-100'>Efficient</span>, Effective <br /> & Dynamic </>),
        para: "A simple yet efficient  Infinity Animations process.",
        btnBg: "bg-prime",
    };
    //=====StoryLine Fold=====//
    const accordionData = [
        {
            question: 'Art Of Storytelling',
            answer: "Animation video makers at  Infinity Animations believe scripts are the soul of a video. We turn your vision into reality with a team of creative minds who excel at characterization and storyboarding. We make extensive efforts to create a storyboard, helping you visualize the final product, share your feedback, and make alterations if needed.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Clear & Crisp Audio',
            answer: "3D animation, a world of infinite possibilities, sculpts dreams into reality. With lifelike characters and immersive worlds, it transports us to new dimensions where imagination knows no bounds.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Vision To Animation',
            answer: "Whiteboard animation, a fascinating blend of simplicity and storytelling, unravels ideas with an artistic touch. Black ink dances on a white canvas, breathing life into concepts and turning knowledge into art.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'The Finessing Touch',
            answer: "Motion graphics, the symphony of movement, and design orchestrate visuals into a hypnotic dance. With fluidity and precision, it transforms data and concepts into dynamic narratives that enthrall and inform.",
            StoryLineImg: StoryLine1
        },
    ];
    const storyLine = {
        accordionData: accordionData
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
            <StoryLine content={storyLine} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}