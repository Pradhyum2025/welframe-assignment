'use client';
import { useState } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";

export const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState({
    name: 'All', count: 4500
  });

  const [isOpen,setIsOpen]=useState(false);
  const tabs = [
    { name: 'All', count: 4500 },
    { name: 'Draft', count: 1203 },
    { name: 'Pending', count: 890 },
    { name: 'Published', count: 2432 },
    { name: 'Archived', count: 320 }
  ];

  return (
    <div className="flex space-x-2 py-4 px-5 relative">
      {/* ---- Tab btns ---- */}
      <div className='hidden md:flex items-center gap-x-3 '>
      {tabs.map((tab,index) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab({...tab})}
          className={`
            px-4 py-2 rounded-lg text-sm font-[500] flex items-center transition-colors cursor-pointer
            ${activeTab.name === tab.name
              ?
               'bg-[#24224E] text-white'
              : 
              'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }
          `}
        >
          {tab.name}
          <span className={`ml-2 ${activeTab.name === tab.name ? 'text-white' : 'text-gray-500'}`}>
            ({tab.count.toLocaleString()})
          </span>
        </button>
      ))}
      </div>

      {/*  --------- Responsive Navigation for small screen size ---------  */}
      <div className='md:hidden flex items-center gap-4'>

      <button
          className={`
            px-4 py-2 rounded-lg text-sm font-[500] flex items-center transition-colors cursor-pointer bg-[#24224E] text-white`}
        >
          {activeTab.name}
          <span className={`ml-2 text-white`}>
            ({activeTab.count.toLocaleString()})
          </span>
        </button>
 
     {/*  ----- 3-DOt Btn -----  */}
      <button 
      onClick={()=>setIsOpen(prev=>!prev)}
      className='md:hidden block px-4 py-3 rounded-lg text-sm font-[500] flex items-center transition-colors cursor-pointer text-gray-500 bg-[#24224E] text-white'>
       <HiOutlineDotsVertical/>
      </button>

    {/* ----------options ----------*/}
      <div className={`bg-gray-50 md:hidden flex ${isOpen?'flex':'hidden'} flex-col absolute top-[-7rem] left-[12.5rem] w-[7rem] py-0 rounded border-1 border-gray-200 bg-gray-100 `}>

       {
        tabs.map((tab,index)=>(
          <button key={index} 
          onClick={()=>{
            setActiveTab(tab);
            setIsOpen(()=>false)
          }}
          className='text-gray-400 flex justify-start px-3 text-gray-500 text-[1rem] font-medium 
          hover:bg-[#24224E] hover:text-white '>
            {tab.name}
          </button>
        ))
       }
        
      </div>

      </div>
    </div>
  );
};
