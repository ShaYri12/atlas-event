import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaArrowLeft } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import InfoTabs from './InfoTabs';
import RelatedEvents from './RelatedEvents';


const EventDetails = () => {
    return (
        <>
            {/* header  */}
            <Header />

            {/* sub header  */}
            <div className='px-4 pt-5 pb-10 hidden lg:flex'>
                <div className='max-w-[1660px] mx-auto w-full'>
                    <Link href="/"><FaArrowLeft size={24} /></Link>
                </div>
            </div>

            {/* event details  */}
            <section className='px-4 pt-5'>
                <div className='max-w-[1350px] w-full mx-auto flex lg:gap-10 xl:gap-28 flex-col lg:flex-row'>
                    {/* Left Side  */}
                    <div className='lg:px-10'>
                        <div className='w-full lg:max-w-[400px] z-50 relative'>
                            {/* title  */}
                            <h2 className='text-[#2D2C3C] font-extrabold text-3xl block lg:hidden pb-4'>Sound Of Christmas 2024</h2>

                            {/* event picture  */}
                            <div className='rounded-3xl h-48 md:h-[400px] max-w-[400px] w-full overflow-hidden'>
                                <img src="/assets/event-image.png" alt="event picture" className='w-full h-full object-cover' />
                            </div>

                            <div className='flex items-center justify-between gap-5 w-full fixed lg:relative bottom-0 left-0 right-0 bg-1 px-10 lg:px-0 pb-5 lg:pb-0 pt-12 lg:pt-12 text-white lg:text-black'>
                                <button className='flex flex-col items-center gap-y-3'>
                                    <div className='gradient-bg-1 rounded-full flex items-center justify-center w-16 md:w-24 h-16 md:h-24'>
                                        <Image src="/assets/local_activity.svg" alt='local-activity-icon' width={20} height={20} loading='lazy' className='h-6 md:h-10 w-auto' />
                                    </div>
                                    <p className='text-base md:text-xl font-semibold'>Get Tickets</p>
                                </button>

                                <button className='flex flex-col items-center gap-y-3'>
                                    <div className='gradient-bg-1 rounded-full flex items-center justify-center w-16 md:w-24 h-16 md:h-24'>
                                        <Image src="/assets/help.svg" alt='help-icon' width={20} height={20} loading='lazy' className='h-6 md:h-10 w-auto' />
                                    </div>
                                    <p className='text-base md:text-xl font-semibold'>Interested</p>
                                </button>

                                <button className='flex flex-col items-center gap-y-3'>
                                    <div className='gradient-bg-1 rounded-full flex items-center justify-center w-16 md:w-24 h-16 md:h-24'>
                                        <Image src="/assets/send.svg" alt='send-icon' width={20} height={20} loading='lazy' className='h-6 md:h-10 w-auto' />
                                    </div>
                                    <p className='text-base md:text-xl font-semibold'>Share</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side  */}
                    <div className='flex-1'>
                        {/* title  */}
                        <h2 className='text-[#2D2C3C] font-extrabold text-[50px] hidden lg:block'>Sound Of Christmas 2024</h2>

                        <ul className='space-y-3 md:space-y-6 pt-6 lg:pt-10'>
                            <li className='flex items-center gap-5'>
                                <div className='border border-[#00000033] flex items-center justify-center rounded-full w-12 md:w-16 h-12 md:h-16'>
                                    <Image src="/assets/calendar_clock.svg" alt='calendar clock' width={20} height={20} loading='lazy' className='w-auto h-6 md:h-7' />
                                </div>

                                <div className='flex-1 text-lg md:text-2xl text-[#0F0F0F]'>
                                    <h2 className='font-extrabold md:leading-[30px]'>Friday, Sep 26th</h2>
                                    <p className='font-semibold'>4:00 PM</p>
                                </div>
                            </li>

                            <li className='flex items-center gap-5'>
                                <div className='border border-[#00000033] flex items-center justify-center rounded-full w-12 md:w-16 h-12 md:h-16'>
                                    <Image src="/assets/distance.svg" alt='location icon' width={20} height={20} loading='lazy' className='w-auto h-6 md:h-8' />
                                </div>

                                <p className='text-base md:text-2xl font-semibold text-[#0F0F0F] flex-1'>386 W 42nd St, Washington DC</p>
                            </li>

                            <li className='flex items-center gap-5'>
                                <div className='border border-[#00000033] flex items-center justify-center rounded-full w-12 md:w-16 h-12 md:h-16'>
                                    <img src="/assets/hosted-logo.png" alt='hosted logo' loading='lazy' className='w-auto h-full object-contain' />
                                </div>

                                <div className='flex-1 text-lg md:text-2xl text-[#0F0F0F]'>
                                    <h2 className='font-extrabold md:leading-[30px]'>Hosted by:</h2>
                                    <p className='font-semibold'>WalkingTown DC</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Info Tabs  */}
            <InfoTabs />

            {/* Related Events  */}
            <RelatedEvents />

            {/* footer  */}
            <div className='pb-40 lg:pb-0 bg-[#F3F3F3]'>
                <Footer />
            </div>
        </>
    )
}

export default EventDetails