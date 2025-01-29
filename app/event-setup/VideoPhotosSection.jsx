"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

export default function VideoPhotosSection() {
  const [mediaItems, setMediaItems] = useState([]);

  const handleMediaUpload = (event) => {
    const files = Array.from(event.target.files || []);
    const newMedia = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith("video/") ? "video" : "image",
    }));

    setMediaItems((prev) => [...prev, ...newMedia].slice(0, 3)); // Limit to 3 items
  };

  const removeMediaItem = (index) => {
    const updatedMediaItems = [...mediaItems];
    updatedMediaItems.splice(index, 1);
    setMediaItems(updatedMediaItems);
  };

  return (
    <div className="md:space-y-[30px] space-y-[15px]">
      <h2 className="lg:text-[24px] md:text-[20px] text-[18px] font-[800] text-[#000000BF] tracking-[10%]">
        VIDEO & PHOTOS
      </h2>
      <div className="flex gap-4 rounded-[31px]">
        {mediaItems.map((media, index) => (
          <div
            key={index}
            className="relative w-[159px] md:h-[264px] h-[200px] border border-[#0000001F] bg-[#F6F6F6] rounded-[31px] flex flex-col items-center justify-center"
          >
            {media.type === "video" ? (
              <video
                src={media.url}
                className="w-full h-full rounded-[31px] object-cover"
                controls
              />
            ) : (
              <img
                src={media.url || "/placeholder.svg"}
                alt="Uploaded media"
                className="w-full h-full rounded-[31px] object-cover"
              />
            )}
            <button
              className="absolute top-4 right-2 text-white rounded-full hover:text-red-500 group"
              onClick={() => removeMediaItem(index)}
            >
              <FaTrash className="text-red-600 group-hover:text-red-500 text-[20px] transition" />
            </button>
          </div>
        ))}

        {mediaItems.length < 3 && (
          <label htmlFor="media-upload">
            <div className="w-[159px] md:h-[264px] h-[200px] cursor-pointer hover:bg-gray-50 border border-[#0000001F] bg-[#F6F6F6] rounded-[31px] flex flex-col items-center justify-center">
              <div className="flex flex-col items-center md:gap-[24px] gap-4">
                <div className="md:w-[68.5px] w-[50px] md:min-w-[68.5px] min-w-[50px] md:h-[68.5px] h-[50px] backdrop-blur-[50px] bg-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <Image
                    src="/assets/upload.png"
                    alt="upload-icon"
                    width={68.5}
                    height={68.5}
                  />
                </div>
                <span className="text-[#909090] lg:text-[20px] md:text-[18px] text-base">
                  Upload
                </span>
              </div>
            </div>
          </label>
        )}
        <input
          type="file"
          id="media-upload"
          accept="image/*,video/*"
          className="hidden"
          onChange={handleMediaUpload}
          multiple
        />
      </div>
    </div>
  );
}
