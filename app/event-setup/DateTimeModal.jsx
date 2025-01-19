"use client";

import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export default function DateTimeModal({ isOpen, onClose, onSave }) {
  const modalRef = useRef(null); // Reference for modal content
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const times = [
    "5:00PM",
    "5:15PM",
    "5:30PM",
    "5:45PM",
    "6:00PM",
    "6:15PM",
    "6:30PM",
    "6:45PM",
    "7:15PM",
    "7:30PM",
    "7:45PM",
    "8:00PM",
    "8:15PM",
    "8:30PM",
    "8:45PM",
    "9:00PM",
    "9:15PM",
    "9:30PM",
    "9:45PM",
    "10:00PM",
    "10:15PM",
    "10:30PM",
    "10:45PM",
    "11:00PM",
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Previous month days (Fill before the first day of the month)
    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
      });
    }

    // Only fill the row where the current month ends
    const remainingSlots = 7 - (days.length % 7);
    if (remainingSlots < 7) {
      for (let i = 1; i <= remainingSlots; i++) {
        days.push({
          day: i,
          isCurrentMonth: false, // Next month
        });
      }
    }

    return days;
  };

  const handlePrevMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1)
    );
  };

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
        className="relative flex flex-col items-center justify-center bg-white rounded-[25px] w-full max-w-[900px] mx-auto lg:px-[25px] md:px-[20px] px-[16px] py-[25px] max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-center xl:mb-7 lg:mb-6 md:mb-6 mb-5 w-full text-center">
          <button
            onClick={onClose}
            className="absolute lg:left-[25px] md:left-[20px] left-[16px] p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoCloseSharp className="lg:w-[30px] w-[24px] lg:h-[30px] h-[24px] text-[#1C1B1F40]" />
          </button>
          <h2 className="text-[#2D2C3C] lg:text-[34px] md:text-[28px] text-[22px] font-[800] text-center flex-1">
            Date & Time
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row md:gap-8 gap-6 items-center justify-between h-full max-w-[678px] mx-auto w-full overflow-y-auto">
          {/* Calendar Section */}
          <div className="flex-1 overflow-y-auto custom-scrollbar max-w-[420px]">
            {/* Month/Year Navigation */}
            <div className="max-w-[378px] w-full">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handlePrevMonth}
                  className="w-[44px] h-[44px] flex items-center justify-center hover:bg-gray-50 rounded-full shadow-md"
                >
                  <IoChevronBack className="w-6 h-6 text-black" />
                </button>
                <div className="flex gap-2 items-center xl:text-[24px] lg:text-[20px] md:text-[18px] text-sm text-[#141414] font-[700]">
                  <span className="">{months[selectedDate.getMonth()]}</span>
                  <span className="">{selectedDate.getFullYear()}</span>
                </div>
                <button
                  onClick={handleNextMonth}
                  className="w-[44px] h-[44px] flex items-center justify-center hover:bg-gray-50 rounded-full shadow-md"
                >
                  <IoChevronForward className="w-6 h-6" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Days of week */}
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center lg:text-[18px] md:text-[16px] text-sm text-[#1F1F1F] font-[500] py-2 mb-3"
                  >
                    {day}
                  </div>
                ))}

                {/* Calendar days */}
                {generateCalendarDays().map((day, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedDate(
                        new Date(
                          selectedDate.getFullYear(),
                          selectedDate.getMonth(),
                          day.day
                        )
                      )
                    }
                    className={`
                  lg:py-[13px] py-[10px] py-[7px] lg:px-[17px] md:px-[14px] px-[12px]  flex items-center justify-center rounded-[6px] lg:text-[18px] md:text-[16px] text-sm font-[600]
                  ${!day.isCurrentMonth ? "text-[#00175426]" : "shadow-md"}
                  ${
                    selectedDate.getDate() === day.day && day.isCurrentMonth
                      ? "bg-[#0047FF] text-white hover:bg-[#0047FF] shadow-md"
                      : ""
                  }
                `}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Time Selection */}
          <div className="relative h-[50vh] flex flex-col items-center">
            {/* Fading Effect - Top */}
            <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable Content */}
            <div className="w-32 md:pl-4 flex-1 overflow-y-auto custom-scrollbar py-[100px] relative">
              <div className="flex flex-col items-center justify-center text-center">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
            w-fit text-left px-3 py-2 rounded lg:text-[20px] md:text-[17px] text-[14px] font-[700]
            ${
              selectedTime === time
                ? "text-white bg-blueish"
                : "hover:bg-gray-50"
            }
          `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Fading Effect - Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
        {/* Save Button */}
        <button
          onClick={() => {
            if (selectedTime) {
              onSave(`${selectedDate.toLocaleDateString()} ${selectedTime}`);
              onClose();
            }
          }}
          className="w-full md:py-4 py-3 px-6 bg-blueish lg:text-[24px] md:text-[20px] text-[18px] font-[700] text-white rounded-[10px] hover:bg-blue-500 transition-colors max-w-[750px] mx-auto lg:mt-[40px] md:mt-[30px] mt-[20px]"
        >
          Save
        </button>
      </div>
    </div>
  );
}
