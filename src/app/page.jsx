import Header from "@/components/common/Header.jsx";
import storyImage1 from '@/images/story-img1.png'
import storyImage2 from '@/images/story-img2.png'
import storyImage3 from '@/images/story-img3.png'
import storyImage4 from '@/images/story-img4.png'
import storyImage5 from '@/images/story-img5.png'
import storyImage6 from '@/images/story-img6.png'
import storyImage7 from '@/images/story-img7.png'
import StoryCard from "@/components/core/Story.jsx";
import { SubNavbar } from "@/components/common/subNavbar.jsx";
import { TabNavigation } from "@/components/common/TabNavlinks.jsx";
import SideBarMain from "@/components/core/SideBarMain.jsx";


export default function Home() {

  const stories = [
    {
      "title": "Chez Pierre Restaurant in Monte Carlo by Vuidafieri",
      "date": "20 Sep 2022",
      "views": 428,
      "category": "BUSINESS",
      "imageUrl": storyImage1,
      "status": "Published"
    },
    {
      "title": "The Future of Green Business in Monaco",
      "date": "14 Oct 2023",
      "views": 1120,
      "category": "BUSINESS",
      "imageUrl": storyImage2,
      "status": "Draft"
    },
    {
      "title": "Political Landscape of Monaco: A Deep Dive",
      "date": "30 Jan 2023",
      "views": 657,
      "category": "Politics",
      "imageUrl": storyImage3,
      "status": "Published"
    },
    {
      "title": "Exploring the Monaco Real Estate Market",
      "date": "25 Mar 2022",
      "views": 892,
      "category": "BUSINESS",
      "imageUrl": storyImage4,
      "status": "Created"
    },
    {
      "title": "Monaco's Impact on International Politics",
      "date": "5 Feb 2024",
      "views": 1345,
      "category": "Politics",
      "imageUrl": storyImage5,
      "status": "Draft"
    },
    {
      "title": "Luxury Dining Experiences in Monte Carlo",
      "date": "12 Aug 2023",
      "views": 768,
      "category": "BUSINESS",
      "imageUrl": storyImage6,
      "status": "Published"
    },
    {
      "title": "Monaco's Political History: Key Events",
      "date": "19 Jul 2021",
      "views": 234,
      "category": "Politics",
      "imageUrl": storyImage7,
      "status": "Created"
    },
    {
      "title": "The Future of Sustainable Business Practices in Monaco",
      "date": "8 Dec 2022",
      "views": 520,
      "category": "BUSINESS",
      "imageUrl": storyImage5,
      "status": "Draft"
    }
  ]
  
  return (
    <div className="flex">
      {/*  ----- Slide bar  -----  */}
    <SideBarMain/>

      <div className="flex flex-col bg-gray-100 w-full gap-y-4">
        {/*  --------Header -------- */}
        <Header />
        {/*  -------SubNav-bar ------- */}
        <SubNavbar/>
         {/* ---------TabNavigation --------- */}
        <TabNavigation/>

        {/*  ------Story Container ------ */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 py-3 px-5">
          {stories?.length>0 && stories.map(((story,indx)=>{
            return <StoryCard key={indx} story={story} />
          }))}
        </div>


      </div>

    </div>
  );
}
