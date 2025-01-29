"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdLockOutline, MdPublic, MdVisibilityOff } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";

export default function EventPrivacyDropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Private");
  const dropdownRef = useRef(null);

  const options = ["Public", "Private", "Unlisted"];
  const icons = {
    Public: <MdPublic />,
    Private: <MdLockOutline />,
    Unlisted: <MdVisibilityOff />,
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between lg:gap-4 gap-2 lg:px-[14px] px-[10px] lg:py-[21px] md:py-4 py-2 lg:text-[20px] sm:text-[18px] text-[15px] font-bold text-[#2D2C3C] md:rounded-[15px] rounded-[10px] border border-[#5A5A5A40] hover:bg-gray-50 transition-colors"
      >
        {icons[selectedOption]}
        <span className="sm:text-[18px] text-[15px]">{selectedOption}</span>
        <GoChevronDown
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              {icons[option]} {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
