"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const LocationSearchBar = () => {
    const [selectedLocation, setSelectedLocation] = useState("Washington, DC");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const locations = [
        "Washington, DC",
        "New York, NY",
        "Los Angeles, CA",
        "Chicago, IL",
        "Houston, TX",
        "San Francisco, CA",
    ];

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setDropdownOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className="pt-9 pb-14 px-5 border-b border-[#00000026]">
            <div className="flex items-center max-w-[1130px] w-full mx-auto bg-white border-2 border-[#0000001F] rounded-full shadow-1">
                {/* Search Input */}
                <Image src="/assets/search-icon.svg" alt="search" loading="lazy" width={28} height={28} className="my-3 md:my-5 ml-4 md:ml-6 md:w-7 w-5 h-5 md:h-7" />

                <input
                    type="text"
                    placeholder="Search Events, Categories, Location..."
                    className="flex-1 w-full p-4 placeholder:text-[#5A5A5A80] h-full text-sm md:text-lg outline-none border-none"
                />

                {/* Location Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <div
                        className="flex items-center gap-3 cursor-pointer h-full py-3 md:py-5 px-4 md:px-6 max-w-[402px] w-full border-l border-[#5A5A5A99]"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <Image src="/assets/location-icon.svg" alt="location" width={22} height={30} className="w-auto h-5 md:h-[30px]" />

                        <p className="text-lg text-[#5A5A5A] font-semibold truncate w-full min-w-[160px] max-w-[160px] md:flex hidden">{selectedLocation}</p>

                        <Image
                            src="/assets/chevron-down.svg"
                            alt="chevron-down"
                            width={18}
                            height={9}
                            className={`transition-transform md:ml-4 w-auto h-2 md:h-[9px] ${dropdownOpen ? "rotate-180" : ""}`}
                        />
                    </div>

                    {/* Dropdown List */}
                    {dropdownOpen && (
                        <div className="absolute mt-1 right-0 bg-white border border-gray-200 rounded-md shadow-lg max-w-[200px] md:max-w-full w-[200px] md:w-full z-10">
                            {locations.map((location, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleLocationSelect(location)}
                                    className="px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm cursor-pointer"
                                >
                                    {location}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LocationSearchBar;
