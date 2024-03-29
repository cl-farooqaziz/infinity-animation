"use client"
const CTA = ({ text, icon, bg, color, border, hover, href, iconCss }) => {
    return (
        <>
            <div dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="py-1 xl:py-2 px-3 2xl:px-6 rounded-md text-[16px] xl:text-[18px] font-normal font-sans flex items-center gap-x-2 ${color} ${bg} ${hover} ${border}"> 
                <span class="text-[16px] xl:text-[18px] font-normal">${text}</span>
                <img src=${icon} alt="Icons" class="w-[40px] object-contain ${iconCss}" />
                </a>`
            }} />
        </>
    );
}

export default CTA