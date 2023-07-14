import React from 'react'

import DinningOutCollection from './DinningOutCollection'
import {FaSlidersH,FaAngleDown} from 'react-icons/fa';
import Filter from './Filter';
import FilterItems from './FilterItems';
import ExploreSection from './ExploreSection';
import {ResturantData2} from '../DinningOutResturantData';




const DinningOutData= [
  {
      id:1,
      cover : "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252825.jpg",
      text:"11 Best Insta-worthy Places",
      place : "11 Places"

  },

  {
      id:2,
      cover : "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg",
      text : "16 Best Bars & Pubs",
      place : "15 Places"
  },
  {
      id:3,
      cover : "https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg",
      text : "13 Serene Rooftop Places",
      place : "11 Places"
  }
  ,
  {
      id:4,
      cover : "https://b.zmtcdn.com/data/collections/8ea321c04135aacaac89eddb10ef64bd_1688552904.jpg",
      text : "7 Pure Veg Places",
      place : "7 Places"
  },
  {
      id:5,
      cover : "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054253.jpg",
      text : "18 Blissful Breakfast Places",
      place : "20 Places"
  },
  {
      id:6,
      cover: "https://b.zmtcdn.com/data/collections/5fee3cb5e97bbf2cfae4caced1d25686_1674839495.jpg",
      text :"8 Great Buffets",
      place:"9 Places"
  },
  {
      id:7,
      cover: "https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
      text :"Winners of Zomato Restaurant Awards",
      place:"11 Places"
      
  },
  {
      id:8,
      cover: "https://b.zmtcdn.com/data/collections/ff8a739dbb06a879e54e7e4797dc8033_1684638549.png",
      text :"12 Places for Chai Lovers",
      place:"11 Places"
      
  }
]
const diningData =[
  {
      id : 1,
      icon :<FaSlidersH/>,
      title : "Filter",

  },
  {   
      id:2,
   
      title:"Gold",
  },
  {
      id : 3,
      title : "Rating : 4.0+",
  },
  {
      id:4,
      title : "Outdoor Seating",
      
  },
  {
    id:5,
    title:"Serve Alcohol"
  },
  {
    id:6,
    title:"Open Now",
  }
  
]

const DiningOut = () => {
  return (
    <div>
     
     <DinningOutCollection DinningOutData = {DinningOutData}/>
     <div className='common-Props '>
     <Filter delivaryData={diningData} />
     </div>
     <div className='common-Props rounded-md '>
      <img className=' rounded-lg object-cover w-[100%] h-[100%] mb-7 mt-4' src='https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png'></img>
     </div>
    <ExploreSection list={ResturantData2} CollectionNameTitle="Trending dining restaurants in Pune"/>
    
    </div>
  )
}

export default DiningOut


// FaArrowRightArrowLeft
