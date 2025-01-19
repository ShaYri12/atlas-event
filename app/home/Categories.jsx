"use client"
import React, { useState } from "react";
import { LuPalette } from "react-icons/lu";
import { MdOutlineTheaterComedy, MdOutlineFlight } from "react-icons/md";
import { BsBookmarkStar } from "react-icons/bs";
import { MdDirectionsRun, MdOutlineHandshake } from "react-icons/md";
import { TbBolt } from "react-icons/tb";
import Image from "next/image";

const CategoriesBar = () => {
    const [activeCategory, setActiveCategory] = useState(1);

    const categories = [
        { id: 1, title: "Cultural & Arts", icon: <LuPalette /> },
        { id: 2, title: "Entertainment", icon: <MdOutlineTheaterComedy /> },
        { id: 3, title: "Education", icon: <BsBookmarkStar /> },
        { id: 4, title: "Sports & Fitness", icon: <MdDirectionsRun /> },
        { id: 5, title: "Tech", icon: <TbBolt /> },
        { id: 6, title: "Networking", icon: <MdOutlineHandshake /> },
        { id: 7, title: "Travel", icon: <MdOutlineFlight /> },
    ];

    const handleCategoryClick = (id) => {
        setActiveCategory(id); 
    };

    return (
        <section className="px-4 pb-20 pt-5">
            <div className="max-w-[1660px] w-full mx-auto">
                <div className="flex items-center gap-2 md:gap-4 w-full">
                    <div className="flex gap-6 overflow-x-auto">
                        {categories.map(({ id, title, icon }) => (
                            <div
                                key={id}
                                onClick={() => handleCategoryClick(id)}
                                className={`flex flex-col pt-3 pb-2 min-w-[100px] md:min-w-[150px] w-[100px] md:w-[150px] items-center justify-between gap-0 md:gap-5 cursor-pointer ${activeCategory === id ? "text-[#1C1B1F] border-b-4 border-black" : "text-[#767676] border-b-4 border-transparent"
                                    } hover:text-[#1C1B1F]`}
                            >
                                <div className="h-10 flex items-center justify-center">
                                    <span className="text-4xl md:text-[40px]">{icon}</span>
                                </div>

                                <p className="text-sm md:text-lg text-[#2D2C3C] font-bold text-center">{title}</p>

                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center flex-col gap-5 px-3 md:px-5 py-2 md:py-[14px] border-2 rounded-2xl md:rounded-3xl cursor-pointer border-[#0000001F]">
                        <Image src="/assets/action_key.svg" alt="filter icon" width={28} height={28} className="pt-4" />
                        <span className="text-sm md:text-lg font-bold">Filters</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesBar;
