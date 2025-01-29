"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EventPrivacyDropdown from "../event-setup/EventPrivacyDropdown";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const isEventSetupPage = pathname === "/event-setup";
  const [eventPrivacy, setEventPrivacy] = useState("Private");

  return (
    <header className="h-16 md:h-24 px-4 flex items-center">
      <div className="max-w-[1660px] mx-auto w-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-auto h-9 md:h-auto -ml-4 md:-ml-6"
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* Hide these buttons only on small screens if on event-setup page */}
          <Link
            href="/event-setup"
            className={`py-2 md:py-[10px] px-4 md:px-5 text-center text-base md:text-xl font-medium bg-transparent ${
              isEventSetupPage ? "hidden md:flex" : "flex"
            }`}
          >
            Create An Event
          </Link>
          <button
            className={`py-2 md:py-[10px] px-4 md:px-5 text-center text-base md:text-xl font-medium bg-[#658FFF] text-white rounded-[10px] transition-all duration-300 ease-out transform hover:opacity-90 ${
              isEventSetupPage ? "hidden md:flex" : "flex"
            }`}
          >
            Sign In
          </button>

          {/* Show "Event Privacy Dropdown" only on small screens when on /event-setup */}
          {isEventSetupPage && (
            <div className="md:hidden">
              <EventPrivacyDropdown
                onSelect={(option) => setEventPrivacy(option)}
              />
            </div>
          )}

          <div
            className={
              isEventSetupPage ? "hidden md:flex" : "flex items-center gap-3"
            }
          >
            {/* Mobile Icons */}
            <button className="sm:hidden flex items-center justify-center rounded-full border border-[#0000001F] w-9 h-9">
              <Image
                src="/assets/ios_share.svg"
                alt="share-icon"
                width={16}
                height={22}
                loading="lazy"
              />
            </button>

            <button className="sm:hidden flex items-center justify-center rounded-full border border-[#0000001F] w-9 h-9">
              <Image
                src="/assets/map.svg"
                alt="map-icon"
                width={18}
                height={18}
                loading="lazy"
              />
            </button>

            <button className="sm:hidden flex items-center justify-center rounded-full border border-[#0000001F] w-9 h-9">
              <Image
                src="/assets/favorite.svg"
                alt="favorite-icon"
                width={20}
                height={18}
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
