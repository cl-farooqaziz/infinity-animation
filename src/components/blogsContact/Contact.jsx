import React from 'react'


//===== Images 
import ButtonIcon from 'media/icons/arrow-right.png'
import Image from 'next/image'

const Contact = () => {
    return (
        <>
            <section className='container py-16'>
                <div className='bg-cover bg-center bg-primary-100 lg:bg-[url("../../public/blogs/update-bg.png")]'>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="px-4 py-[40px] xl:py-[60px] 2xl:py-[76px]">
                                <h2 className='text-white text-[35px] xl:text-[50px] leading-[55px] font-bold font-sans mb-7 xl:w-11/12'>Give Us Your E-Mail So We
                                    Can Give You Update</h2>
                                <form action="javascript:;" className='flex items-center'>
                                    <input type="text" placeholder='Type your email' className='w-8/12 border-2 border-white rounded-l-[5px] h-[50px] bg-transparent placeholder:opacity-[0.6] font-sans  px-4 placeholder:font-[400]' />
                                    <button type='submit' className='bg-white rounded-r-[5px] text-[16px] text-primary-100 font-sans h-[50px] w-[170px] flex items-center justify-center gap-3'>
                                        Subscribe
                                        <Image src={ButtonIcon} alt='button-icon' width={45} height={45} className='' />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-6"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
