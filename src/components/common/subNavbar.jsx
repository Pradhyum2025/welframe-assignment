import { Calender } from '@/figma-icons/calender';
import Filter from '@/figma-icons/Filter';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";

export const SubNavbar = () => {
  return (
    <div className="flex items-center justify-between md:justify-end gap-x-3 md:gap-x-15 py-3 px-2 md:px-10 bg-white rounded mx-2">

      {/* --- Search-bar div --- */}
      <div className="w-[60%] mx-1 md:mx-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CiSearch className='text-gray-700 text-lg'/>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
          />
        </div>
      </div>
       
       {/* -----  Add Filter calender btns -----  */}
      <div className="flex items-center gap-x-2">
        {/*--- Filter Btn--- */}
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
        <Calender/>
        </button>

        {/* --- filter Btn ---*/}
        <button className="p-2    text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
        <Filter/>
        </button>

        {/* ---- Add New Story Btn ---- */}
        <button className="px-4 py-2 bg-[#24224E] text-white rounded-lg text-sm font-medium hover:bg-[#1d1b3f] transition-colors cursor-pointer">
          <span className='hidden md:inline' >
          Add New Story
          </span>
          <MdOutlineAdd className='block md:hidden'/>
        </button>
      </div>

    </div>
  );
};
