'use client'
import LeftArrow from '@/figma-icons/LeftArrow';
import Image from 'next/image';
import ProfileImage from '@/images/Profile-img.png'
import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

export default function Header({setIsSlidebarOpen}) {
  return (
    <div className='w-full bg-white flex items-center justify-between py-2 px-1 md:px-4 md:px-10 pt-4 md:pt-2'>
       
      {/* --- story back btn --- */}
      <button className='text-gray-900 flex items-center gap-1 md:gap-3 font-bold text-xl md:text-3xl'>
        <LeftArrow  />
        <span>
          Stories
        </span>
      </button>


      {/* ---- profile tab ----- */}
      <div className='flex items-center justify-between bg-[#FCFCFD] gap-x-[2rem] md:gap-[3rem] rounded-[8px] text-gray-600 border-[1px] border-[#E8EFF7] px-1 md:px-3 py-2 w-4xs md:w-2xs'>

        {/*----- Image and userName ---- */}
        <div className='flex gap-2'>

          {/* Profile - Image */}
          <div className='w-[2.1rem] h-[2.2rem] relative'>
            <Image alt='Profile-Image' src={ProfileImage} fill />
          </div>

          {/* User-name */}
          <div>
            <p className='text-[#373B5C] text-xs font-[500]'>Welcome back</p>
            <p className='text-[#373B5C]  text-[1.1rem]'>Akshita Patel</p>
          </div>

        </div>

        {/* ---  Account Switch down arrow ---  */}
        <MdKeyboardArrowDown className='text-[#1E2875] text-2xl cursor-pointer hover:bg-gray-200 rounded-md' />

      </div>

    </div>
  )
}
