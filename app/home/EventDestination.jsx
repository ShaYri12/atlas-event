import Image from 'next/image'
import React from 'react'

const EventDestination = () => {
    return (
        <section className='bg-[#6F94F7] w-full pt-[60px] pb-10 px-5'>
            <div className='max-w-[962px] w-full mx-auto'>
                <h2 className='text-white text-3xl sm:text-[40px] sm:leading-[54px] font-bold text-center pb-4'>Personalized events & destinations await you</h2>

                <p className='text-white font-normal text-lg sm:text-2xl text-center'>Download the app to hear first about pop-ups and events, new restaurants, and get rewarded for visting your favorite spots</p>

                <div className='max-w-[620px] w-full mx-auto grid grid-cols-2 gap-3 xsm:gap-5 pt-10'>
                    <button className="text-white flex items-center gap-[10px] rounded-[10px] h-[60px] sm:h-20 justify-center p-4 font-semibold text-lg sm:text-3xl transition-all duration-300 ease-out transform hover:opacity-90 group">
                        Get Started
                        <Image
                            src="/assets/right-arrow-w.svg"
                            alt="right-arrow icon"
                            width={100}
                            height={100}
                            loading="lazy"
                            className="w-5 sm:w-[30px] h-5 sm:h-[26px] transition-all duration-300 ease-out group-hover:ml-2"
                        />
                    </button>

                    <button className="bg-white text-[#6F94F7] flex items-center gap-[10px] rounded-[10px] h-[60px] sm:h-20 justify-center p-4 font-semibold text-lg sm:text-3xl transition-all duration-300 ease-out transform hover:opacity-90 group">
                        Get Started
                        <Image
                            src="/assets/right-arrow.svg"
                            alt="right-arrow icon"
                            width={100}
                            height={100}
                            loading="lazy"
                            className="w-5 sm:w-[30px] h-5 sm:h-[26px] transition-all duration-300 ease-out group-hover:ml-2"
                        />
                    </button>


                </div>

            </div>
        </section>
    )
}

export default EventDestination