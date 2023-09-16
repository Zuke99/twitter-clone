import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 border-l-0 border-r-0 border-b-0 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
        <Image
          src="https://media.licdn.com/dms/image/D5603AQHabfqmYfYH3g/profile-displayphoto-shrink_400_400/0/1693570579380?e=1700092800&v=beta&t=vwMvUOYaJm93Gw04vhZjMnbUHlf0j-lhl653k8Pg6rM"
          alt="myImage"
          height={50}
          width={50}
        />
        </div>
        <div className="col-span-11">
            <h5>Dheeraj</h5>
            <p className="font-white">
            I learnt that programmers prefer using the dark mode because light attracts bugs.
How true is that??? 
            </p>
            <div className="flex justify-between pr-10 mt-5 text-xl items-center w-[90%]">
              <div>
              <BiMessageRounded/>
              </div>
              <div>
              <FaRetweet/>
              </div>
              <div>
              <AiOutlineHeart/>
              </div>
              <div>
              <BiUpload/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
