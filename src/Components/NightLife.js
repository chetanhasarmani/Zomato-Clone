import React from 'react'
import {FaSlidersH} from 'react-icons/fa';
import Filter from './Filter';
import NightLifeCollection from './NightLifeCollection';
import { NightLifeCollectionData } from '../NightLifeCollectionData';
import ExploreSection from './ExploreSection';


const NightLifeData =[
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
      
      title : "Distance",
      
  },
  {
    id:5,
    title:"Pubs & Bars"
  },
 
  
]

const lifedata=[
  {
    id:1,
    cover:"	https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg",
    text:"16 Best Bars & Pubs",
    place:"15 Places"
  },
  {
    id:2,
    cover:"https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674839603.jpg",
    text:"16 Lit Party Places",
    place:"14 Places"
  },
]
const NightLife = () => {

  return (
    <div >

      <div className='overflow-hidden '>
      
        <NightLifeCollection lifedata={lifedata}  />
        <Filter  delivaryData={NightLifeData}/>

        <div className='common-Props rounded-md '>
        <img className=' rounded-lg object-cover w-[100%] h-[100%] mb-7 mt-4' src='https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png'></img>
        </div>

        <ExploreSection list={NightLifeCollectionData} CollectionNameTitle="Nightlife Restaurants in Pune"/>

      </div>
    </div>
  )
}

export default NightLife
