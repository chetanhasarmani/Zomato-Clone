import React from 'react'
import {FaCaretRight} from 'react-icons/fa';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PervArrow from './PervArrow';

const settings = {
    
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PervArrow />
};



const DinningOutCollection = ({DinningOutData}) => {
 
  

  return (
    <div className='w-[100vw] pb-9 bg-[#F8F8F8]'>
        <div className='common-Props'>
            <p className='text-3xl pt-[26px] text-[#1C1C1C] pb-8 font-semibold'>Collections</p>

            <div className='flex justify-between mb-2 '>
                <div className='font-normal text-xl tracking-wide opacity-80 '>Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</div>
                <div className='text-[#FF7E8B] flex items-center cursor-pointer gap-2'> All Collections in Pune <FaCaretRight/></div>
            </div>

            <Slider {...settings}>
             {DinningOutData.map((item)=>{
              return (

              <div className='w-[260px] h-[320px] p-2      '>

                <div className='w-[100%] h-[100%] rounded-lg relative '>

                 <img className='w-[100%] h-[100%] object-cover rounded-lg ' src={item.cover}></img>
                 <div className='absolute bottom-0 rotate-180 rounded-lg top-0  h-[100%] w-[100%]  bg-gradient-to-b from-black via-transparent to-transparent'></div>

                </div>

                <div className='absolute bottom-12 text-lg  font-medium text-ellipsis overflow-hidden  text-white px-4  '>{ item.text.length>0  ? `${item.text.substring(0,21)} ...` : `${item.text}`}</div>
                <div className='absolute  flex bottom-[15px] mt-[3px] items-center gap-[6px] justify-center  mb-[10px] pl-[16px] text-white  '>{item.place} <FaCaretRight/></div>
              </div>)
             })}
            </Slider>

        </div>
      
    </div>
    
  );
};

export default DinningOutCollection;
