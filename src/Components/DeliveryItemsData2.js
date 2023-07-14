import React from 'react'

const DeliveryItemsData2 = ({item}) => {
  return (
    <div className='flex flex-col  '>
      <div className='h-[150px]   w-[150px] bg-white rounded-full overflow-hidden    '>
       <img src={item.cover}  className='object-cover   h-[100%] w-[100%] rounded-full ' alt='item_image'></img>
      </div>
      <p className='text-xl font-medium text-ellipsis overflow-hidden mt-4  text-center  flex justify-center '>{item.title}</p>
    </div>
  )
}

export default DeliveryItemsData2
