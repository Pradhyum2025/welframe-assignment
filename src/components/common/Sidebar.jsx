'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiHome5Line } from 'react-icons/ri';
import { HiOutlineDocument, HiOutlineUser } from 'react-icons/hi';
import { BsCheckSquare } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { IoAnalyticsOutline, IoSettingsOutline } from 'react-icons/io5';
import { BiImage } from 'react-icons/bi';
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiVipCrownLine } from 'react-icons/ri';
import { FiHeadphones } from 'react-icons/fi';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from 'react';

export const  Sidebar  = ({ setIsSlideBarOpen }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    { icon: RiHome5Line, label: 'Dashboard', href: '/' },
    { icon: HiOutlineDocument, label: 'Content', href: '/' },
    { icon: HiOutlineUser, label: 'User', href: '/' },
    { icon: BsCheckSquare, label: 'Task', href: '/' },
    { icon: TbWorld, label: 'App/Web', href: '/' },
    { icon: IoAnalyticsOutline, label: 'Analytics', href: '/' },
    { icon: BiImage, label: 'Media', href: '/' },
    { icon: AiOutlineAppstore, label: 'Customize', href: '/' },
    { icon: IoNotificationsOutline, label: 'Notifications', href: '/' },
    { icon: RiVipCrownLine, label: 'Subscription', href: '/' },
    { icon: IoSettingsOutline, label: 'Settings', href: '/' }
  ];

  return (

    <>
      <aside id="separator-sidebar" className="xl:w-64 h-full bg-white lg:h-auto  transition-transform  fixed z-20 lg:static lg:z-0" aria-label="Sidebar">

       

          {/*  --------slideba  --------*/}


          {/*  --------close side-bar -------- */}

          <button className='bg-gray-50 p-1 rounded hover:bg-gray-200 lg:hidden absolute top-0 right-2 mt-2'>
            <MdKeyboardDoubleArrowLeft
              onClick={() => setIsSlideBarOpen(() => false)}
              className='text-gray-900 font-bold text-2xl bg-[#24224E] text-white rounded' />
          </button>

          {/* --------- Side-bar btns  ---------*/}
          <nav className="h-full flex flex-col py-6 mt-10 pb-20">
            {/*  ------ All navigations  ------ */}
            <div className="space-y-1 flex-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    onClick={() => setActiveTab(item.label)}
                    key={item.label}
                    href={item.href}
                    className={`
                  flex items-center px-6 py-3 mx-3 text-sm font-medium transition-colors
                  ${activeTab === item.label
                        ? 'bg-[#24224E] text-white  rounded-lg'
                        : 'text-gray-600 hover:bg-gray-50'
                      }
                `}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/*  --------- Contact Support  ---------  */}
            <Link
              href="/"
              className="md:mx-3 flex items-center px-6 py-3 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <FiHeadphones className="w-5 h-5 mr-3" />
              <span >Contact Support</span>
            </Link>
          </nav>


        {/* </div> */}
      </aside>  {/*---------------- Aside slidebar end---------------- */}

    </>
  );
};
 