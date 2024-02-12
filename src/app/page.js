// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import StoryLine from '@/components/storyline/StoryLine';
import Portfolio from '@/components/portfolio/Portfolio';
import Concept from '@/components/concept/Concept';
import Boost from '@/components/boost/Boost';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
//==== Looking Images
import LookingFlodImg from "media/home/looking-img.png";
//==== StoryLine Images
import StoryLine1 from "media/home/storyline1.png";
import StoryLine2 from "media/home/storyline2.png";
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
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Let Our <span className='text-primary-100'>Animations</span><br /> Tell Your Story </>),
        para: "Whether you're a brand seeking to captivate your audience, an educator aiming to simplify complex concepts, or a content creator in pursuit of visual brilliance, our animation services are designed to elevate your storytelling. With a perfect blend of technical expertise and artistic flair, we breathe life into every frame, crafting animations that transcend the ordinary. ",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "Our team is dedicated to bringing your ideas to life with a perfect blend of creativity and technical expertise. With a commitment to excellence and a passion for innovation, we go beyond animation – we craft immersive experiences that resonate with your audience. ",

        "Unleash your narrative, say it loud and proud, let the world know and take note!"
    ];
    const looking = {
        title: (<> Looking For a Professional Video Animation Company? </>),
        para: { paraArray },
        isCTA: true,
        isBtns: true,
        flodImg: LookingFlodImg
    };
    //=====StoryLine Fold=====//
    const accordionData = [
        {
            question: '2D Animations',
            answer: "Bring your ideas to life with our dynamic 2D animations. From character-driven stories to engaging motion graphics, our animations captivate and convey your message with vibrant visuals.",
            StoryLineImg: StoryLine1,
        },
        {
            question: '3D Animations',
            answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Whiteboard',
            answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Motion Graphics',
            answer: "Transform your content into visual masterpieces with our motion graphics. Every movement is a brushstroke of dynamic storytelling, enhancing your brand's visual appeal.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Video Editing',
            answer: "Refine your raw footage into cinematic brilliance with our video editing services. Every cut and transition is a stroke of storytelling precision, enhancing your visual narratives.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Logo Animations',
            answer: "Make your brand memorable with our logo animation services. Dynamic animations breathe life into your logo, adding a touch of sophistication to your brand identity.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Architectural Visualization',
            answer: "Visualize spaces in breathtaking detail with our architectural visualization services. From realistic renders to immersive walkthroughs, bring your architectural visions to life.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'CGI-VFX',
            answer: "Experience cinematic brilliance with our CGI and VFX services. Elevate your projects with lifelike animations and visual effects that push the boundaries of imagination.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Infographics',
            answer: "Transform data into compelling visuals with our infographics services. Each design tells a story, making complex information accessible and visually engaging.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Hybrid & Cel',
            answer: "Blend tradition with innovation through our Hybrid & Cel Animation services. Each frame is a symphony of timeless artistry and contemporary brilliance, adding a unique charm to your animation.",
            StoryLineImg: StoryLine2
        },
    ];
    const storyLine = {
        subtitle: (<> Visuals to Entice & Excite </>),
        title: (<> Unparalleled Storytelling with Visual Mastery </>),
        para: "As a premier video animation company, we specialize in transforming concepts into captivating visual narratives that defy the ordinary, and formulaic. We are not afraid to push the envelope!",
        accordionData: accordionData
    };
    //=====Portfilio Fold=====//
    const tabInfo = [
        { label: "2D Animations", index: 0 },
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
        title: (<> Our Exceptional Portfolio for Video Animation </>),
        para: (<> A visual journey through a kaleidoscope of creativity, where each project tells a unique story of brand elevation and visual excellence. </>),
        tabContents: tabContents,
        tabsInfo: true,
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
            heading: "Strategic Conceptualization",
            text: "We kick off by delving deep into your brand ethos, understanding your goals, and strategically conceptualizing visuals that align with your narrative. ",
        },
        {
            icon: boosticon2,
            heading: "Creative Mastery",
            text: "Our team of seasoned creatives then breathe life into these concepts, leveraging cutting-edge techniques and artistic finesse. ",
        },
        {
            icon: boosticon3,
            heading: "Audience Connection",
            text: "Impact isn't just about visuals; it's about connection. We ensure that every animation, every narrative beat, is a bridge between your brand and your audience. ",
        },
    ];
    const boost = {
        title: (<> Get Them Talking </>),
        para: (<> Leave an indelible mark on your audience's consciousness. We craft impactful visual experiences that resonate. </>),
        btnBg: "bg-prime",
        boostContent: boostContent,
        flodImg: BoostFlodImg
    };
    //=====Testimonial Fold=====//
    const testiContent = [
        {
            profile: icon1,
            stars: icon2,
            name: 'Grace Turner, Marketing Strategist',
            message: 'Choosing this animation team was a game-changer for our marketing campaigns. Their creativity and attention to detail brought our brand stories to life in ways we never imagined. Exceptional work!',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Alex Mitchell, Educational Content Creator',
            message: 'Working with this animation team elevated the educational content on my platform. The animations were not only visually engaging but also simplified complex concepts for my audience. Highly recommend for anyone in the education space.',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Olivia Bennett, Architectural Designer',
            message: "The architectural visualization provided by this team surpassed our expectations. The animations brought our designs to life with incredible detail and realism. A fantastic experience from start to finish!",
            company: 'ABC company',
        },
    ];
    const testimonial = {
        title: (<> An Who’s Who of Industry Leading Clients </>),
        para: (<> If you can’t trust us, try trusting them.</>),
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


