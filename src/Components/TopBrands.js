import React from 'react'
import NextArrow from './NextArrow';
import PervArrow from './PervArrow';
import Slider from 'react-slick';



const Brands =[
   
    {
        id:1,
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png",
        title : "Domino's Pizza",
        distance : "25 min"
    },
    {
        id:2,
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png",
        title : "Burger King",
        distance : "42 min"
    },
    {
        id:3,
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/7c048d2ec413aaca136a33c3e9628c0e_1629952759.png",
        title : "Ovenstory Pizza",
        distance : "32 min"
    },
    {
        id:4,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png",
        title:"KFC",
        distance:"23 min",
    },
    {
        id:5,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
        title:"Pizza Hut",
        distance:"27 min",
    },
    {
        id:6,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5a27a3f43344ecdb49c575d0284ebc40_1629438578.png",
        title:"Rolls Mania",
        distance:"26 min",
    },
    {
        id:7,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png",
        title:"Subway",
        distance:"23 min",
    },
    {
        id:8,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png",
        title:"Natural Ice Cream",
        distance:"18 min",
    },
    {
        id:9,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655798578.png",
        title:"Faasos - Wraps & Rolls",
        distance:"19 min",
    },
    {
        id:10,
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png",
        title : "McDonald's",
        distance : "23 min"
    },

];

const settings = {
    
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PervArrow />
  };

const TopBrands = () => {
  return (
    <div className='w-[1080px] h-[319px]   mx-auto '>
        <div>
            <p className=' my-8 text-3xl text-[#1C1C1C]  font-semibold '>Top brands for you</p>
        </div>
        <Slider   {...settings}>
            {Brands.map((data)=>{
                return(
                    <div className=' p-[30px] flex flex-col items-center   h-[150px] w-[150px] border-none bg-white   rounded-full '>
                        
                        <img className=' object-cover    w-[100%] rounded-full' src={data.cover}></img>

                      
                        <div className='items-center text-center mt-3 text-base   text-[#1C1C1C] '>{data.title}</div>
                        <div className='items-center text-center mt-3 text-sm '>{data.distance}</div>
                    </div>
                )
            })}
           
             
        </Slider>
      
    </div>
  )
}

export default TopBrands
