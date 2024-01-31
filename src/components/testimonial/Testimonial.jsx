"use client"
import Image from "next/image";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = ({ content }) => {
    const { title, para, testiContent } = content;
    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className={`w-full flex py-16`}>
                <div className="container">
                    <div className='flex items-start justify-between'>
                        <div className='w-full text-center'>
                            <h1 className="text-[40px] md:text-[60px] font-semibold font-sans leading-tight mb-3">
                                {title}
                            </h1>
                            <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`w-[50%] mx-auto bg-[url("../../public/images/testimonial-bg.png")] bg-no-repeat bg-center bg-cover p-[75px] pb-[105px]`}>
                        <Slider {...testiSlider} className="testiSlider">
                            {testiContent.map((testimonial, index) => (
                                <div key={index}>
                                    <div className="flex flex-col items-center">
                                        <Image src={testimonial.profile} className="w-[10%] mb-3" alt='Concept Icon' />
                                        <Image src={testimonial.stars} className="w-[16%] mb-3" alt='Concept Icon' />
                                        <h3 className="text-[24px] font-semibold font-sans leading-tight mb-3">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                            {testimonial.message}
                                        </p>
                                        <h5 className="text-[20px] font-semibold font-sans leading-tight mb-3">
                                            {testimonial.company}
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
