import Image from 'next/image';
import Views from '@/figma-icons/Views';
import Growth from '@/figma-icons/Growth';
import { HiDotsHorizontal } from "react-icons/hi";

const StoryCard = ({story}) => {

  const setStatusColor = (color) => {
    switch (color) {
      case color = 'Published': return 'bg-green-100 text-[#0DAD82] border-[#0DAD82] border-1';
      case color = 'Created': return 'bg-[#DAF1FB] text-[#58A4FF] border-[#58A4FF] border-1';
      case color = 'Draft': return 'bg-[#F4F4F4] text-[#A0A3BD] border-[#A0A3BD] border-1';
    }
  }

  return (
    <div className="relative rounded-xl overflow-hidden bg-white  h-lg z-0">
      {/* Image Container */}
      <div className="relative h-[400px] w-full">
        <Image
          src={story.imageUrl}
          alt={story.title}
          fill
          className="object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

        {/* Top stats */}
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          {/* Views of story */}
          <div className="bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 flex items-center gap-[5px]">
            <Views />
            <span className="text-xs text-[#1C1442]  font-[600]">{story.views}</span>
          </div>

          {/*  ------ Story growth icons / Status Up icon ------  */}
          <button className="bg-white/80 backdrop-blur-sm rounded-md p-1 px-2 rounded-full">
            <Growth />
          </button>

        </div>
      </div>

      {/* -----  Content -----  */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xl font-[500] text-white">{story.title}</h3>
        <div className="flex items-center justify-between space-x-2 mb-3">
          <span className="text-xs font-semibold text-gray-200 ">{story.category}</span>
          <span className="text-gray-300">&#8226;</span>
          <span className="text-xs text-[#A0A3BD] font-[600]">{story.date}</span>

          {/*  ----- Status of story -----   */}
          <button className={`${setStatusColor(story.status)} rounded-[5px] px-1 md:px-3 py-1 font-[400] text-[1rem] cursor-pointer`}>
          {story.status}
          </button>

        </div>

        <div className='flex items-center justify-between w-full gap-3'>
          {/*  ------ View btn ------  */}
          <button className="px-6 py-3 text-sm font-semibold text-lg text-[#1C1442] bg-[#E8E9FF] rounded-[10px] hover:bg-gray-50 transition-colors w-[80%] cursor-pointer">
            View
          </button>
         
         {/* ------  Treepal Dots btn  ------ */}
          <button className='px-2 py-3 text-sm font-semibold text-lg text-[#1C1442]  rounded-[10px] bg-gray-50 hover:bg-[#E8E9FF] transition-colors w-[18%] flex  justify-center items-center cursor-pointer'>
            <HiDotsHorizontal className='text-xl' />
          </button>
        </div>

      </div>
    </div>
  );
};

export default StoryCard; 