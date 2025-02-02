"use client";

import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { GoChevronDown, GoPlus } from "react-icons/go";
import Header from "../components/Header";
import { MdLockOutline } from "react-icons/md";
import Image from "next/image";
import AddTicketsModal from "./AddTicketModal";
import AddFAQModal from "./AddFAQModal";
import AddTagsModal from "./AddTagsModal";
import CustomFieldModal from "./CustomFieldModal";
import AddSpeakerModal from "./AddSpeakerModal";
import AddScheduleModal from "./AddScheduleModal";
import DateTimeModal from "./DateTimeModal";
import VideoPhotosSection from "./VideoPhotosSection";
import EventPrivacyDropdown from "./EventPrivacyDropdown";
import Link from "next/link";

export default function EventCreator() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = useState(false);
  const [isTagsModalOpen, setIsTagsModalOpen] = useState(false);
  const [isCustomFieldModalOpen, setIsCustomFieldModalOpen] = useState(false);
  const [isAddSpeakerModalOpen, setIsAddSpeakerModalOpen] = useState(false);
  const [isAddScheduleModalOpen, setIsAddScheduleModalOpen] = useState(false);
  const [isDateTimeModalOpen, setIsDateTimeModalOpen] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [eventPrivacy, setEventPrivacy] = useState("Private");

  // Handle main image selection
  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMainImage(imageUrl);
    }
  };

  const options = [
    "Add Speakers",
    "Add Tickets",
    "Add Schedule",
    "Add FAQ",
    "Add Tags",
    "Custom Field",
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex xl:flex-row flex-col items-start">
        {/* Header */}
        <div className="flex items-center justify-between xl:px-6 lg:px-4 px-2 lg:py-4 xl:mt-2">
          <button className="hover:bg-gray-100 rounded-full p-2 transition-colors">
            <IoArrowBack color="#2B293D" className="w-[40px] h-[40px]" />
          </button>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="max-w-[1350px] mx-auto lg:px-6 px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image and Video/Photos */}
            <div className="md:space-y-[50px] space-y-[35px]">
              {/* Main Image Upload */}
              <div className="max-w-[400px] w-full md:h-[400px] h-[300px] rounded-2xl">
                <label htmlFor="main-image-upload">
                  <div
                    className="relative max-w-[400px] w-full md:h-[400px] h-[300px] rounded-2xl overflow-hidden bg-[#00000033] backdrop-blur-[4px] cursor-pointer"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #00000033 0%, #658FFF 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))",
                    }}
                  >
                    {mainImage ? (
                      <img
                        src={mainImage || "/placeholder.svg"}
                        alt="Event"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute right-4 bottom-[25px] flex items-center justify-center">
                        <div className="xl:w-[86px] lg:w-[70px] md:w-[60px] w-[55px] xl:min-w-[86px] lg:min-w-[70px] md:min-w-[60px] min-w-[55px] xl:h-[86px] lg:h-[70px] md:h-[60px] h-[55px] backdrop-blur-[50px] bg-[#FFFFFF40] rounded-full flex justify-center items-center">
                          <Image
                            src="/assets/add-photo.png"
                            alt="pin-icon"
                            width={48}
                            height={48}
                            className="xl:h-[48px] lg:h-[40px] h-[30px] xl:w-[48px] lg:w-[40px] w-[30px]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  id="main-image-upload"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={handleMainImageUpload}
                />
              </div>

              {/* Video & Photos */}
              <div className="md:block hidden">
                <VideoPhotosSection />
              </div>
            </div>

            <div>
              <div className="md:space-y-[32px] space-y-[20px]">
                {/* Event Details */}
                <div className="space-y-[6px]">
                  <div className="flex flex-wrap sm:flex-row flex-col justify-between sm:items-center items-start sm:gap-2 gap-4 w-full mb-[10px]">
                    <div className="flex-1 mx-0">
                      <input
                        type="text"
                        placeholder="Event Name"
                        className="w-full min-w-[200px] xl:text-[48px] lg:text-[40px] md:text-[30px] text-[20px] font-[800] bg-transparent border-none outline-none text-[#000000BF] placeholder-[#2D2C3C80]"
                      />
                    </div>
                    <div className="md:block hidden">
                      <EventPrivacyDropdown
                        onSelect={(option) => setEventPrivacy(option)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="lg:w-[66px] md:w-[60px] w-[50px] lg:min-w-[66px] md:min-w-[60px] min-w-[50px] lg:h-[66px] md:h-[60px] h-[50px] rounded-full flex justify-center items-center border border-[#ECECEC]">
                      <Image
                        src="/assets/calendar_clock.png"
                        alt="pin-icon"
                        width={38}
                        height={41}
                        className="lg:w-[38px] md:w-[30px] w-[22px]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Add date/time"
                      value={selectedDateTime}
                      onClick={() => setIsDateTimeModalOpen(true)}
                      readOnly
                      className="w-full bg-transparent outline-none text-gray-700 placeholder-[#0F0F0F80] font-[600] xl:text-[24px] lg:text-[20px] md:text-[18px] text-base cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="lg:w-[66px] md:w-[60px] w-[50px] lg:min-w-[66px] md:min-w-[60px] min-w-[50px] lg:h-[66px] md:h-[60px] h-[50px] rounded-full flex justify-center items-center border border-[#ECECEC]">
                      <Image
                        src="/assets/distance.png"
                        alt="pin-icon"
                        width={29.04}
                        height={43.56}
                        className="lg:w-[29.04px] md:w-[25px] w-[20px]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Add Location"
                      className="w-full bg-transparent outline-none text-gray-700 placeholder-[#0F0F0F80] font-[600] xl:text-[24px] lg:text-[20px] md:text-[18px] text-base"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="lg:w-[66px] md:w-[60px] w-[50px] lg:min-w-[66px] md:min-w-[60px] min-w-[50px] lg:h-[66px] md:h-[60px] h-[50px] rounded-full flex justify-center items-center border border-[#ECECEC]">
                      <Image
                        src="/assets/distance.png"
                        alt="pin-icon"
                        width={29.04}
                        height={43.56}
                        className="lg:w-[29.04px] md:w-[25px] w-[20px]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Hosted By"
                      className="w-full bg-transparent outline-none text-gray-700 placeholder-[#0F0F0F80] font-[600] xl:text-[24px] lg:text-[20px] md:text-[18px] text-base"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="lg:w-[66px] md:w-[60px] w-[50px] lg:min-w-[66px] md:min-w-[60px] min-w-[50px] lg:h-[66px] md:h-[60px] h-[50px] rounded-full flex justify-center items-center border border-[#ECECEC]">
                      <Image
                        src="/assets/distance.png"
                        alt="pin-icon"
                        width={29.04}
                        height={43.56}
                        className="lg:w-[29.04px] md:w-[25px] w-[20px]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Description"
                      className="w-full bg-transparent outline-none text-gray-700 placeholder-[#0F0F0F80] font-[600] xl:text-[24px] lg:text-[20px] md:text-[18px] text-base"
                    />
                  </div>
                </div>

                {/* Additional Options */}
                <div className="flex flex-wrap xl:gap-[28px] lg:gap-[24px] md:gap-[20px] sm:gap-4 gap-3">
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        option === "Add Tickets"
                          ? setIsTicketModalOpen(true)
                          : option === "Add FAQ"
                          ? setIsFAQModalOpen(true)
                          : option === "Add Tags"
                          ? setIsTagsModalOpen(true)
                          : option === "Custom Field"
                          ? setIsCustomFieldModalOpen(true)
                          : option === "Add Speakers"
                          ? setIsAddSpeakerModalOpen(true)
                          : option === "Add Schedule"
                          ? setIsAddScheduleModalOpen(true)
                          : ""
                      }
                      className="flex items-center justify-center gap-1 md:py-3 py-[9px] lg:px-[28px] md:px-[22px] sm:px-[18px] px-[12px] md:text-[18px] sm:text-base text-[15px] text-[#2D2C3C] bg-[#F8F7FA] rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <span className="">
                        <GoPlus />
                      </span>{" "}
                      {option}
                    </button>
                  ))}
                </div>
                {/* Video & Photos */}
                <div className="md:hidden block">
                  <VideoPhotosSection />
                </div>
              </div>

              {/* Save Button */}
              <Link href="/eventdetails">
                <button className="w-full md:py-4 py-3 px-6 bg-blueish text-white rounded-[10px] hover:bg-blue-500 transition-colors lg:text-[24px] md:text-[20px] text-[18px] font-[700] md:mt-[50px] mt-[30px]">
                  Save Draft
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Date Time Modal */}
        <DateTimeModal
          isOpen={isDateTimeModalOpen}
          onClose={() => setIsDateTimeModalOpen(false)}
          onSave={(dateTime) => setSelectedDateTime(dateTime)}
        />

        <AddTicketsModal
          isOpen={isTicketModalOpen}
          onClose={() => setIsTicketModalOpen(false)}
        />
        <AddFAQModal
          isOpen={isFAQModalOpen}
          onClose={() => setIsFAQModalOpen(false)}
        />
        <AddTagsModal
          isOpen={isTagsModalOpen}
          onClose={() => setIsTagsModalOpen(false)}
        />
        <CustomFieldModal
          isOpen={isCustomFieldModalOpen}
          onClose={() => setIsCustomFieldModalOpen(false)}
        />
        <AddSpeakerModal
          isOpen={isAddSpeakerModalOpen}
          onClose={() => setIsAddSpeakerModalOpen(false)}
        />
        <AddScheduleModal
          isOpen={isAddScheduleModalOpen}
          onClose={() => setIsAddScheduleModalOpen(false)}
        />
      </div>
    </>
  );
}
