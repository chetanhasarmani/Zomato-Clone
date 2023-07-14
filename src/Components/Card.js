import React from 'react'
import { FaStar } from 'react-icons/fa';
import Delivery from './Delivery';


const Card = ({data}) => {

  const name = data?.info?.name ?? ""; // this is optional chaining
  const coverimg = data?.info?.image?.url;
  const deliveryTime = data?.order?.deliveryTime;
  const rating = data?.info?.rating?.rating_text;
  const price = data?.info?.cfo?.text;
  const offer = data?.bulkOffers ?? [];
  const cuisine = data?.info?.cuisine?.map((item)=>(item.name )).slice(0,2) ;
  
 const distance = data?.info?.distance?.text;
  const bottomContainer = data?.bottomContainers;

  const goldOffers = data?.gold?.text;
  const goldofferdisc = data?.gold?.offerValue;
  const prooff = offer.length > 1 ? offer[0].text : null; //if the pro offer is available then show it 
  const discountOffer = offer.length>1 ? offer[1]. text : offer.length === 1 ? offer[0].text : null;


  return (
    <div className='cursor-pointer mt-3 mb-6   h-[355px] w-[330px]    rounded-xl border-[1px] hover:border hover:bg-white hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(0,0,0,0.1)]  border-transparent '>
      <div className='rounded-2xl relative h-[248px] w-[328px] mx-auto p-[10px] pb-5  '>
          <img className=' h-[100%]  w-[100%] object-cover rounded-2xl     ' src={coverimg}></img>
          {prooff && <div className='absolute left-[10px] bottom-10 bg-[#d92662]  text-white text-sm px-[6px] rounded-tr-sm   text-ellipsis whitespace-nowrap font-medium   rounded-br-sm '>{prooff} </div> } 
          {/* #256FEF       #267E3E */}
          {goldOffers && <div className='absolute left-[10px] overflow-hidden text-ellipsis   bottom-10 font-light  w-[45%]  px-3 bg-gradient-to-r via-black  from-black to-black/30    text-[#DDC59A] p-[1px] text-[14px] rounded-tr-md  rounded-br-md '>{goldOffers} {goldofferdisc} </div> }
          {discountOffer && <div className='absolute left-[10px]  bottom-[34px] font-light  w-[45%]  px-3     bg-[#256FEF] text-white p-[1px] text-[14px] rounded-tr-sm  rounded-br-sm  '>{discountOffer} </div>}
         
          <div className='flex justify-between w-[100%] mt-[8px] mb-[6px]'>
            <div className='text-left font-medium text-lg  w-[70%]   '>{name} </div>
            <div className='flex items-center w-[50px] h-[27px] bg-[#267E3E] justify-center align-middle text-white rounded-md px-[7px] py-[1px] text-sm font-semibold  '>{rating}
              <div className='text-white ml-1 text-[8px]'> < FaStar/> </div>
            </div>
          </div>

          <div className='flex justify-between opacity-70  '>
              {cuisine.length && <div className='text-left '>{cuisine.map((item,i)=>(<span>{item}{i!== cuisine.length-1 && ", " }</span>))} </div>}
              {price && <div className='text-right  '>{price}</div>}
          </div>

         {deliveryTime &&  <div className=' text-[#363636] font-semibold text-sm pt-[2px] px-1 pb-[3px]  text-right   opacity-80 backdrop-blur-sm    rounded-md p-1 '>{deliveryTime}</div>}
        {/* {bottomContainer.length>0 && <div className=''>
          <div className='w-[100%] h-[1px] bg-slate-600'></div>
          <div className=' text-center flex flex-row items-center '> 
            <img className='w-[48px] h-[18px]' src={bottomContainer[0]?.image?.url}></img> </div>
            <div className='text-black text-xs ml-[5px] '>{bottomContainer[0]?.text} </div>
          </div>} */}
          
      </div>
    </div> 
  )
}

export default Card
