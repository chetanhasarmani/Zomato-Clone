import React from 'react'
import delivaryData from '../DeliveryData'

import FilterItems from './FilterItems'
const Filter = ({delivaryData}) => {
  return (
    <div className='   max-w-[1080px] mx-auto flex  py-3 flex-wrap      '>
      {delivaryData && delivaryData.map((dataFilter)=>{
        return(
            <FilterItems dataFilter={dataFilter} key={dataFilter.id} />
        )
      })}
    </div>
  )
}

export default Filter
