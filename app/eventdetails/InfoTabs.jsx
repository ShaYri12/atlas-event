"use client";
import React, { useState } from 'react';

const InfoTabs = () => {
    const [activeTab, setActiveTab] = useState('About');

    const tabs = [
        { label: 'About', key: 'About' },
        { label: 'Schedule', key: 'Schedule' },
        { label: 'Directions', key: 'Directions' },
        { label: 'Facilities', key: 'Facilities' },
    ];

    const tabContent = {
        About: (
            <div>
                {/* Info Section */}
                <div className="space-y-4 md:space-y-7 text-base md:text-2xl text-[#5A5A5A] font-normal">
                    <p>
                        Get ready to kick off the Christmas season in Mumbai with{' '}
                        <span className="font-bold">
                            SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!
                        </span>
                    </p>
                    <p className="italic">
                        City Youth Movement invites you to the 4th edition of our annual
                        Christmas festivities - by the youth and for the youth! Feat. your
                        favourite worship leaders, carols, quizzes and some exciting
                        surprises!
                    </p>
                    <p>
                        Bring your family and friends and sing along your favourite
                        Christmas carols on the 2nd of December, 6:30 PM onwards at the
                        Balgandharva Rang Mandir, Bandra West. Book your tickets now!
                    </p>
                    <h3 className="font-bold">3 Reasons to attend the event:</h3>
                    <ol className="list-decimal pl-5 md:pl-7 space-y-1">
                        <li>The FIRST Christmas concert of Mumbai!</li>
                        <li>A special Christmas Choir!</li>
                        <li>Special Dance performances and many more surprises!</li>
                    </ol>
                </div>

                {/* Gallery Section */}
                <div className="pt-6 md:pt-16">
                    <h3 className="text-[#2D2C3C] text-2xl md:text-2xl font-extrabold pb-6">
                        Gallery
                    </h3>
                    <div className="flex overflow-x-auto gap-4 md:gap-8 hiddenscrollbar">
                        {['gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg'].map((img, index) => (
                            <img
                                key={index}
                                src={`/assets/${img}`}
                                alt={`gallery-${index + 1}`}
                                className="w-[150px] md:w-[218px] h-[250px] md:h-[364px] rounded-xl md:rounded-3xl object-cover"
                            />
                        ))}
                    </div>
                </div>

                {/* Tags Section */}
                <div className="pt-6 md:pt-16">
                    <h3 className="text-[#2D2C3C] text-2xl md:text-2xl font-extrabold pb-6">
                        Tags
                    </h3>
                    <ul className="flex flex-wrap gap-4 md:gap-7 max-w-[1150px] w-full">
                        {[
                            'Holiday Concert',
                            'Live Performance',
                            'Seasonal Event',
                            'Family-Friendly',
                            '#Christmas_Spirit',
                            '#Christmas_Carols',
                        ].map((tag, index) => (
                            <li
                                key={index}
                                className="text-[#2D2C3C] text-center text-sm md:text-lg font-normal bg-[#F8F7FA] py-2 md:py-3 px-5 md:px-7 rounded-full w-fit"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ),
        Schedule: (
            <div>
                <p className="text-[#5A5A5A] text-base md:text-3xl font-normal">
                    This is the Schedule section content.
                </p>
            </div>
        ),
        Directions: (
            <div>
                <p className="text-[#5A5A5A] text-base md:text-3xl font-normal">
                    This is the Directions section content.
                </p>
            </div>
        ),
        Facilities: (
            <div>
                <p className="text-[#5A5A5A] text-base md:text-3xl font-normal">
                    This is the Facilities section content.
                </p>
            </div>
        ),
    };

    return (
        <section className="px-4 mt-10 md:mt-20">
            <div className="max-w-[1350px] w-full mx-auto border-y-2 border-[#00000026] py-10 md:py-20">
                {/* Tabs */}
                <div className="flex gap-8 md:gap-12 overflow-x-auto hiddenscrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`w-fit whitespace-nowrap transition-all duration-300 pt-3 pb-1 text-xl md:text-2xl font-bold ${activeTab === tab.key
                                    ? 'text-black font-extrabold border-b-[5px] border-[#658FFF]'
                                    : 'text-[#7A808B] border-b-[5px] border-transparent'
                                } hover:text-black`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="pt-6 md:pt-16">{tabContent[activeTab]}</div>
            </div>
        </section>
    );
};

export default InfoTabs;
