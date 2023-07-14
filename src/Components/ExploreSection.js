import React from 'react'
import Card from './Card'

const ExploreSection = ({list , CollectionNameTitle}) => {
  return (
    <div className='common-Props mt-4   '>
      <div>
        <p className='capitalize   text-3xl text-[#1C1C1C] mt-[10px] mb-8  font-semibold '>{CollectionNameTitle}</p>
      </div>
      <div className='flex flex-wrap  w-[100%] gap-5  justify-between    '> 
        {list.map((data)=>{
            return(< Card data = {data}  key={data.id}/>)
            
        })}
      </div>
    </div>
  )
}

export default ExploreSection
