import React from 'react'

const TabSection = ({activeTab ,setActiveTab,FilterData}) => {
    
function changeTabHandler(title){
    setActiveTab(title)
}


  return (
    <div  >
        <div className='flex max-w-[1080px]  mx-auto gap-4'>
            {FilterData.map((data)=>{
                return(
                    <div onClick={()=>changeTabHandler(data.title)} className={` mt-4 cursor-pointer {activeTab === data.title && "active_img" `} >
                        <div className='flex mr-6 px-3 py-3 font-semibold   opacity-90   items-center' > 
                           <div className={`rounded-full  bg-[{data.backdrop}]   items-center w-[60px] h-[60px] p-4       `} style={{backgroundColor : `${activeTab === data.title ? data.backdrop :""}`}}>
                                <img  
                                        src={
                                            activeTab === data.title  ? data.active_img  : data.inactive_img
                                            } width={"50px"} height={"50px"}>
                                </img>  
                            </div>
                        <p  className={` ml-3  ${activeTab === data.title   ? "text-[#F05766]" : "text-[#696969]"} text-xl  ` } key={data.id}>{data.title}</p> 

                        </div>
                        <div className={`${activeTab === data.title   ? "bg-[#F05766]" : ""}  w-[100%] h-[2px] ` }></div>

                    {/* <img src='${data.active_img}'></img> */}
                    {/* <p  className={`${activeTab === data.title && 'active_img' ? "bg-red-200 border-red-200" : "bg-transparent border-transparent   "}}` } key={data.id}>{data.title}</p> */}

                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default TabSection
