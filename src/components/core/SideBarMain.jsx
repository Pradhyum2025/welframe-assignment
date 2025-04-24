'use client'
import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowRight} from "react-icons/md";
import { Sidebar } from '../common/Sidebar.jsx';

export default function SideBarMain() {
  const [isSlideBarOpen, setIsSlideBarOpen] = useState(false);
  const [width, setWidth] = useState(0);
  // for sidebar responsiveness
  useEffect(() => {
    setIsSlideBarOpen(window.innerWidth > 760);
  }, []);


  return (
    <>
      {isSlideBarOpen ?
        <Sidebar setIsSlideBarOpen={setIsSlideBarOpen} />
        :
        <button
          onClick={() => setIsSlideBarOpen(() => true)}
          className='xl:hidden  h-[2.3rem] w-[3rem] rounded-tr-lg rounded-br-lg  flex items-center justify-end p-2 fixed z-20 bg-[#24224E] text-white '>
            <MdKeyboardDoubleArrowRight className='text-[1.5rem] text-white' />
        </button>
      }
    </>
  )
}
