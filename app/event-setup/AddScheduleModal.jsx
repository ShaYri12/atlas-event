"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { GoPlus } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineSchedule } from "react-icons/md";

export default function AddScheduleModal({ isOpen, onClose }) {
  const modalRef = useRef(null); // Reference for modal content

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close modal when click outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        ref={modalRef}
        className="flex flex-col items-center justify-center bg-white rounded-[25px] w-full max-w-[904px] mx-auto lg:px-[25px] md:px-[20px] px-[16px] py-[25px] max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex xl:mb-5 lg:mb-4 md:mb-3 mb-2 max-w-[822px] mx-auto w-full">
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoCloseSharp className="lg:w-[30px] w-[24px] lg:h-[30px] h-[24px] text-[#1C1B1F40]" />
          </button>
        </div>
        <div className="h-full overflow-y-auto w-full flex flex-col">
          <div className="max-w-[680px] mx-auto w-full">
            {/* Ticket Type Selection */}
            <div className="lg:mb-[25px] md:mb-[20px] sm:mb-4 mb-[14px]">
              <h2 className="text-[#2D2C3C] lg:text-[34px] md:text-[28px] text-[22px] font-[800] text-center flex-1">
                Schedule
              </h2>
            </div>

            {/* Form Fields */}
            <div className=" flex gap-2 lg:mb-[50px] md:mb-[40px] mb-[25px]">
              <input
                type="text"
                placeholder="Enter session information here"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-[#0F0F0F80] font-[600] lg:text-[22px] md:text-[18px] text-base"
              />
              <div className="flex items-center gap-4">
                <div className="lg:w-[66px] md:w-[60px] w-[50px] lg:min-w-[66px] md:min-w-[60px] min-w-[50px] lg:h-[66px] md:h-[60px] h-[50px] rounded-full flex justify-center items-center border border-[#ECECEC]">
                  <MdOutlineSchedule
                    size={37}
                    className="lg:w-[37px] md:w-[30px] w-[20px] text-blueish"
                  />
                </div>
                <input
                  type="time"
                  placeholder="Description"
                  className="w-full bg-transparent outline-none text-gray-700 placeholder-[#0F0F0F80] font-[600] xl:text-[24px] lg:text-[20px] md:text-[18px] text-base"
                />
              </div>
            </div>

            {/* Additional Options */}
            <div className="flex flex-wrap xl:gap-[28px] lg:gap-[24px] md:gap-[20px] sm:gap-4 gap-3 lg:mb-[40px] md:mb-[30px] mb-[20px]">
              <button className="flex items-center justify-center gap-1 md:py-3 py-[9px] lg:px-[28px] md:px-[22px] sm:px-[18px] px-[12px] md:text-[18px] sm:text-base text-[15px] text-[#2D2C3C] bg-[#F8F7FA] rounded-full hover:bg-gray-100 transition-colors">
                <span className="">
                  <GoPlus />
                </span>{" "}
                Add another
              </button>
            </div>
          </div>
          {/* Save Button */}
          <button className="w-full md:py-4 py-3 px-6 bg-blueish lg:text-[24px] md:text-[20px] text-[18px] font-[700] text-white rounded-[10px] hover:bg-blue-500 transition-colors max-w-[750px] mx-auto">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
