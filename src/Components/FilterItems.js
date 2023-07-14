import React from 'react'

const FilterItems = ({dataFilter}) => {
  return (
    <div className='   flex  p-2 cursor-pointer rounded-lg border-[1px] border-gray-400 items-center my-[10px] mr-[10px]    hover:bg-[#F8F8F8] text-[#ADADAD]   '>
        {dataFilter.icon && dataFilter.icon } {/* this is truthy & falsy vlaue if 1 is flase then second will be true  */}
      <div className='ml-[5px] '>{dataFilter.title}</div>
        
      
    </div>
  )
}

export default FilterItems;
