// Import Page Components
import Blog from "@/components/blogs/Blog";
import Contact from "@/components/blogsContact/Contact";
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";


export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> The Infinity Animations Blog </>),
        para: "Every week, we post the latest news, updates, and insights on projects, people, and places that move us.",
        btnBg: "bg-prime",
    };

    return (
        <>
            <Hero content={hero} />
            <Review />
            <Blog />
            <Contact />
        </>
    )
}