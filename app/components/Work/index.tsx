"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ADHDModulePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="mt-10 mb-6">
        <h1 className="text-xl font-bold text-[#57585B]">
          Review The ADHD Module Draft
        </h1>
        <p className="text-[#7F7F7F]">
          Make Edits Or Approve The Content For Publishing
        </p>
      </div>

      {/* Content Highlights */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#8F6B55] mb-6">
          Content Highlights
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm relative">
              <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                Introduction
              </h3>
              <p className="text-sm text-gray-600">
                What is ADHD? <br />
                ADHD is a neurodevelopmental disorder characterized
                by patterns of inattention, hyperactivity, and impulsivity. It
                affects both children and adults and can impact academic,
                professional, and personal life.
              </p>
              <button
                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300"
                aria-label="Remove"
              >
                ×
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm relative">
              <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                Introduction
              </h3>
              <p className="text-sm text-gray-600">
                What is ADHD? <br />
                ADHD is a neurodevelopmental disorder characterized
                by patterns of inattention, hyperactivity, and impulsivity. It
                affects both children and adults and can impact academic,
                professional, and personal life.
              </p>
              <button
                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300"
                aria-label="Remove"
              >
                ×
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Trusted Sources */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#CBB59D] mb-4">
          Trusted Sources
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                  Expert Contributors
                </h3>
                <p className="text-sm text-gray-600">
                  Dr. Abby <br />
                  A globally recognized specialist in ADHD with years of clinical
                  and research experience.
                </p>
              </div>

              {/* Image Section */}
              <div className="w-30 h-20 ml-4">
                <img
                  src="/images/Banner/doctor.svg" // Update to the correct image path
                  alt="Dr. Abby"
                  className="w-35 h-35 object-cover"
                />
              </div>

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300"
                aria-label="Remove"
              >
                ×
              </button>
            </div>
          </SwiperSlide>


          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                  Additional Contributor
                </h3>
                <p className="text-sm text-gray-600">
                  Dr. John <br />
                  specializes in ADHD-related research and treatment, with
                  a focus on children and young adults.
                </p>
              </div>
               {/* Image Section */}
               <div className="w-30 h-20 ml-4">
                <img
                  src="/images/Banner/doctor.svg" // Update to the correct image path
                  alt="Dr. Abby"
                  className="w-35 h-35 object-cover"
                />
              </div>

              <button
                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300"
                aria-label="Remove"
              >
                ×
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <button className="bg-[#7A939E] text-white text-lg font-medium py-3 px-6 rounded-lg w-full text-center">
          Validate the Content
        </button>
      </div>
    </div>
  );
};

export default ADHDModulePage;
