
import { Inter } from 'next/font/google'
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import { BiHash, BiHomeCircle, BiUser } from 'react-icons/bi'
import React from 'react'
import FeedCard from '@/components/FeedCard'


interface TwitterSidebarButton {
  title: string
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon:<BiHash/>
  },
  {
    title : "Notifications",
    icon : <BsBell/>,
  },
  {
    title : "Messages",
    icon : <BsEnvelope/>
  },
  {
    title : "Bookmarks",
    icon : <BsBookmark />
  },
  {
    title : "Profile",
    icon: <BiUser />
  }
]

export default function Home() {
  return (
    <div className='grid grid-cols-12 h-screen w-screen px-56'>
      <div className='  col-span-3 pt-8'>
        <div className="text-4xl h-fit hover:bg-gray-900 p-2 cursor-pointer rounded-full transition-all">
          <BsTwitter />
        </div>
        <div className='mt-1 text-xl font-normal pr-5'>
          <ul>
          {sideBarMenuItems.map(item => <li key={item.title} className='flex justify-start items-center gap-4 pl-4 py-3 w-fit pr-8 mt-5 hover:bg-gray-900 cursor-pointer rounded-full transition-all'>
            <span>{item.icon}</span>
            <span>{item.title}</span>
            </li>)}
          </ul>
          <div className='pr-14'>
          <button className='bg-[#1c9bef] font-semibold text-lg mt-7 p-3 rounded-full w-full '>Tweet</button>
          </div>
        </div>
      </div>
      <div className='col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll no-scrollbar border-gray-600'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className='col-span-4'></div>
    </div>

  )
}
