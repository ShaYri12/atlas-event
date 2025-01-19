"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Swiper Links
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const events = [
    {
        id: 1,
        title: 'Tech Conference 2024',
        category: 'Technology & Innovation',
        date: 'Nov 22',
        time: '00:00 AM - 00:00 PM',
        venue: 'TechHub Conference Center',
        price: '$50',
        interested: '30',
        image: null,
    },
    {
        id: 2,
        title: 'Sports Fest 2024',
        category: 'Sports & Fitness',
        date: 'Dec 5',
        time: '02:00 PM - 05:00 PM',
        venue: 'Sports Arena',
        price: '$15',
        interested: '20',
        image: null,
    },
    {
        id: 3,
        title: null,
        category: 'Today',
        date: 'Dec 30',
        time: '09:00 AM - 12:00 PM',
        venue: 'Innovation Hub',
        price: '$30',
        interested: '50',
        image: null,
    },
    {
        id: 4,
        title: 'Weekend Yoga Retreat',
        category: 'This Weekend',
        date: 'Jan 6',
        time: '08:00 AM - 04:00 PM',
        venue: 'Serenity Yoga Center',
        price: '$60',
        interested: '25',
        image: null,
    },
    {
        id: 5,
        title: 'Free Coding Workshop',
        category: 'Free',
        date: 'Jan 15',
        time: '10:00 AM - 02:00 PM',
        venue: 'Tech Lab',
        price: 'Free',
        interested: '100',
        image: null,
    },
    {
        id: 6,
        title: 'Music Festival 2024',
        category: 'Music & Arts',
        date: 'Dec 10',
        time: '12:00 PM - 10:00 PM',
        venue: 'Festival Grounds',
        price: '$100',
        interested: '200',
        image: null,
    },
    {
        id: 7,
        title: 'Business Networking Event',
        category: 'Business & Networking',
        date: 'Dec 18',
        time: '06:00 PM - 09:00 PM',
        venue: 'Business Center',
        price: '$25',
        interested: '60',
        image: null,
    },
    {
        id: 8,
        title: 'Film Premiere: New Movie Release',
        category: 'Entertainment',
        date: 'Jan 3',
        time: '07:00 PM - 10:00 PM',
        venue: 'Cineplex Theater',
        price: '$20',
        interested: '150',
        image: null,
    },
];


const RelatedEvents = () => {
    const [favoritedEvents, setFavoritedEvents] = useState({});
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const router = useRouter();


    const handleFavoriteToggle = (eventId) => {
        setFavoritedEvents((prev) => ({
            ...prev,
            [eventId]: !prev[eventId],
        }));
    };

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <section className='px-4 pt-14 pb-20 md:pb-40'>
            <div className='max-w-[1660px] w-full mx-auto'>
                <h2 className='text-[#2D2C3C] font-bold text-2xl md:text-4xl pb-6 md:pb-10 max-w-[1450px] w-full mx-auto'>Other events you may like</h2>

                <div className='flex justify-between items-center gap-5 xl:gap-10'>
                    {/* Custom Navigation Prev Button */}
                    <button
                    type='button'
                        className={`custom-swiper-button-prev w-12 h-12 rounded-[10px] text-2xl border border-[#2B293D] text-[#2B293D] hidden md:flex items-center justify-center ${isBeginning ? "opacity-50 cursor-not-allowed" : "opacity-100"
                            }`}
                        disabled={isBeginning}
                    >
                        <FaArrowLeft />
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        navigation={{
                            nextEl: ".custom-swiper-button-next",
                            prevEl: ".custom-swiper-button-prev",
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={handleSlideChange}
                        breakpoints={{
                            10: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mySwiper max-w-[1450px] flex-1 w-full mx-auto rounded-3xl overflow-hidden"

                    >
                        {events.map((event) => (
                            <SwiperSlide
                                key={event.id}
                                className="rounded-xl overflow-hidden cursor-pointer"
                                onClick={(() => router.push('/eventdetails'))}
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-48 md:h-[254px] bg-[#B9B9B9] flex items-center justify-center">
                                    {event.image ? (
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center">
                                            <Image
                                                src="/assets/image-placeholer-icon.svg"
                                                alt="Placeholder"
                                                width={50}
                                                height={50}
                                                className="w-auto h-auto"
                                            />
                                        </div>
                                    )}

                                    {/* Favorite icon  */}
                                    <button type='button' onClick={() => handleFavoriteToggle(event.id)} className="absolute top-[14px] right-[14px] w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <Image
                                            src={
                                                favoritedEvents[event.id]
                                                    ? '/assets/fill-star.svg'
                                                    : '/assets/empty-star.svg'
                                            }
                                            alt="Favorite"
                                            width={22}
                                            height={22}
                                        />
                                    </button>

                                    <span className="text-sm md:text-lg leading-[24px] font-semibold text-white bg-[#658FFF] px-[10px] py-1 rounded-tr-md absolute bottom-0 left-0">
                                        {event.category}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className="py-5 px-3 md:px-5 flex items-start gap-5">
                                    {/* Date */}
                                    <div className="text-center border border-[#0000001F] rounded-[10px] p-[7px] space-y-1">
                                        <p className="text-[#658FFF] text-xl md:text-2xl font-extrabold uppercase">{event.date.split(' ')[0]}</p>
                                        <p className="text-[#2D2C3C] text-xl md:text-2xl font-bold">{event.date.split(' ')[1]}</p>
                                    </div>

                                    {/* Event Info  */}
                                    <div className='space-y-2 md:space-y-[10px]'>
                                        {/* Title */}
                                        <h3 className="text-lg md:text-2xl text-[#2D2C3C] font-semibold line-clamp-2">
                                            {event.title}
                                        </h3>

                                        {/* Venue  */}
                                        <p className="text-[#5A5A5A] text-base md:text-lg font-semibold">{event.venue}</p>

                                        {/* time  */}
                                        <p className="text-[#5A5A5A] text-base md:text-lg">{event.time}</p>

                                        <div className='flex items-center gap-2'>
                                            <div className="flex items-center gap-1 text-base md:text-lg font-semibold text-[#5A5A5A]">
                                                <Image
                                                    src="/assets/ticket-icon.svg"
                                                    alt="Price"
                                                    width={20}
                                                    height={20}
                                                />
                                                <span>{event.price}</span>
                                            </div>

                                            <div className='w-[5px] h-[5px] bg-[#5A5A5A] rounded-full'></div>

                                            <div className="flex items-center gap-1 text-base md:text-lg font-semibold text-[#5A5A5A]">
                                                <Image
                                                    src="/assets/interested-star-icon.svg"
                                                    alt="Interested"
                                                    width={20}
                                                    height={20}
                                                />
                                                <span>{event.interested} interested</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Next Button */}
                    <button
                    type='button'
                        className={`custom-swiper-button-next w-12 h-12 rounded-[10px] text-2xl  border border-[#2B293D] text-[#2B293D] hidden md:flex items-center justify-center ${isEnd ? "opacity-50 cursor-not-allowed" : "opacity-100"
                            }`}
                        disabled={isEnd}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RelatedEvents