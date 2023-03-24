import React from 'react';
import "../css/box.css";


function BlockDesign() {

  return (
    <div>
      <div className='relative top-[-6px] sm:left-[-100px] left-[-80px]'>
        <div className="left1 absolute w-[38px] h-[77px]  bg-[#15212D] "></div>
        <div className="right1 absolute w-[79px] h-[79px] bg-gradient-to-l from-[#B16131] via-[#9C5633] to-[#392019]   "></div>
        <div className="bottom1 absolute w-[80px] h-[19px] bg-gradient-to-l from-[#392019] via-[#392019] to-[#392019] "></div>
      </div>
      <div className='relative top-[95px] left-[60px]'>
        <div className="top2 absolute w-[81px] h-[57px] bg-gradient-to-l from-[#FFAB06] via-[#AC5E30] to-[#392D31]"></div>
        <div className="left2 absolute w-[70px] h-[80px] bg-gradient-to-r from-[#FFAB06] via-[#AC5E30] to-[#392D31]"></div>
        <div className="right2 absolute w-[77px] h-[80px] bg-[#2B2128]"></div>
        <div className="circle_one w-[30px] h-[30px] rounded-full bg-yellow-200 z-10 absolute top-[-70px] left-[50px] circle_light"></div>
        <div className="circle_two w-[30px] h-[30px] rounded-full bg-yellow-200 absolute top-[50px] left-[-140px] circle_light"></div>
      </div>
    </div>
  )
}

export default BlockDesign