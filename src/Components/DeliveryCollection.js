import React from 'react'

import PervArrow from './PervArrow';
import NextArrow from './NextArrow'
import Slider from 'react-slick';
import DeliveryItemsData2 from './DeliveryItemsData2';


const delivaryitems = [
    {
        id: 1 ,
        title:"Pizza", 
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id: 2 ,
        title:"Burger", 
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id: 3 ,
        title:"Biryani", 
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:4,
        title : "Sandwich",
        cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    },
    {
        id:5,
        title : "Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id:6,
        title : "Chicken",
        cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id:7,
        title : "Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },

    {
        id:8,
        title : "North Indian",
        cover:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },

    {
        id:9,
        title : "Thali",
        cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },

    {
        id:10,
        title : "Momos",
        cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
    },
    {
        id:11,
        title : "Dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },

    {
        id:12,
        title : "Noodles",
        cover:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
    },


]

const settings = {
    
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PervArrow />
  };



const DeliveryCollection = () => {
  return (
    <div className='w-[100vw] overflow-hidden  '>
        <div className='  bg-[#F8F8F8] mx-auto   h-[336px] p-10 '>
            <p className='common-Props text-3xl text-[#1C1C1C] pb-8 font-semibold '>Inspiration for your first order</p>
            <Slider className='max-w-[1080px]  mx-auto ' {...settings}> 
                {delivaryitems.map((item)=>{
                    return(<  DeliveryItemsData2 key={item.id} item={item}/>)
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollection;
