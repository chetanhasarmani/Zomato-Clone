import React from 'react'



const Header = (props) => {
  return (
    <div className='mt-3 max-w-[1080px]   flex mx-auto items-center '>

        <div className='mr-6 '>
            <img  width="129px" height="27px"  src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*' alt='Zomato Logo'></img>
        </div>

        {/* search and location div */}
        <div className='flex w-[65%] rounded-md shadow-lg border-[1.4px]   border-slate-100  h-[54px] items-center '>
             {/* left div    */}
            <div className='flex w-[37%] justify-between mr-2 '>
                
                <div  className='flex text-gray-500  justify-between   font-medium  '>
                    <i className="fi ml-2  mr-4 text-[20px] text-red-600  fi-rr-marker flex justify-center items-center"> </i>
                    <p>Pune</p>
                </div>

                <div className=' '>
                    <i className="fi text-[1.2rem]   fi-rr-caret-down flex justify-center items-center"> </i>
                </div>
            </div>

            <div className='flex justify-between border-l-[1.4px] w-[60%]  '>
                <i className='ml-3 mr-4 text-lg  items-center fi fi-rr-search'></i>
                <input className='object-cover outline-none w-[100%] border-[none]  inputtag select-none ' placeholder='Search For restaurant, Cuisine or a dish '/>

            </div>

        </div>
        <div className='flex  justify-between  mx-auto        '>
          <ul className='flex justify-evenly  gap-9 text-lg  opacity-80  '>
            <li><a href='#'>Log in</a></li>
            <li><a href='#'>Sign up</a></li>
          </ul>
        </div>
        


    </div>
  )}
 


export default Header
